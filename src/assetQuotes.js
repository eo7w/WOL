import {useEffect,useState} from 'react';
import {HubConnectionBuilder,LogLevel} from '@microsoft/signalr';
import {ASSETS} from './market';

const API='https://biquote.io/api';
const HUB='https://biquote.io/hubs/tick';
const cache=new Map();
const now=()=>Date.now();
const sourceOf=a=>a.quoteSymbol||a.symbol;
const initial=()=>Object.fromEntries(ASSETS.map(a=>[a.symbol,{price:null,bid:null,ask:null,timestamp:null,status:a.unavailable?'unavailable':'loading'}]));
const finitePositive=v=>{const n=Number(v);return Number.isFinite(n)&&n>0?n:null;};
const stampOf=t=>{const d=Date.parse(t?.timestamp||t?.time||t?.updatedAt||'');return Number.isFinite(d)?d:now();};
const priceOf=t=>{const bid=finitePositive(t?.bid),ask=finitePositive(t?.ask),mid=finitePositive(t?.mid??t?.price);return bid&&ask?(bid+ask)/2:mid;};
const statusOf=(t,ts)=>t?.marketState==='closed'?'closed':t?.stale===true||now()-ts>300000?'stale':'live';
const toQuote=(t,previous)=>{const ts=stampOf(t),bid=finitePositive(t?.bid),ask=finitePositive(t?.ask),price=priceOf(t),timestamp=new Date(ts).toISOString();if(!price)return previous||{price:null,bid,ask,timestamp,status:'error'};return{price,bid,ask,timestamp,status:statusOf(t,ts)};};
const publicQuotes=()=>Object.fromEntries(ASSETS.map(a=>[a.symbol,cache.get(a.symbol)||{price:null,bid:null,ask:null,timestamp:null,status:a.unavailable?'unavailable':'loading'}]));

export function formatAssetPrice(value,digits=5){const n=Number(value);return value!==null&&value!==undefined&&value!==''&&Number.isFinite(n)&&n>0?n.toLocaleString('en-US',{minimumFractionDigits:digits,maximumFractionDigits:digits}):'—';}
export function quoteStatusText(status){return({live:'حي',closed:'السوق مغلق · آخر سعر',stale:'آخر سعر',error:'غير متاح من BiQuote',unavailable:'غير متاح من BiQuote',loading:'جارٍ التحميل'})[status]||'غير متاح من BiQuote';}

export function useAssetQuotes(enabled=true){
 const [quotes,setQuotes]=useState(publicQuotes);
 useEffect(()=>{
  let alive=true,connection=null,watch=null,pollTimer=null,pollBusy=false;
  const controller=new AbortController();
  const available=ASSETS.filter(a=>!a.unavailable);
  const bySource=new Map(ASSETS.map(a=>[sourceOf(a),a]));
  const publish=()=>alive&&setQuotes(publicQuotes());
  const apply=(tick,sourceHint)=>{
   if(!alive||!tick)return;
   const source=tick.sourceSymbol||tick.quoteSymbol||tick.symbol||sourceHint;
   const asset=bySource.get(source);if(!asset||asset.unavailable)return;
   const q=toQuote(tick,cache.get(asset.symbol));cache.set(asset.symbol,q);publish();
  };
  const fetchOne=async asset=>{
   try{
    const response=await fetch(`${API}/${encodeURIComponent(sourceOf(asset))}`,{signal:controller.signal});
    if(response.status===404){cache.set(asset.symbol,{price:null,bid:null,ask:null,timestamp:null,status:'unavailable'});return;}
    if(!response.ok)throw new Error(`HTTP ${response.status}`);
    apply(await response.json(),sourceOf(asset));
   }catch(error){
    if(error.name==='AbortError')return;
    const old=cache.get(asset.symbol);
    cache.set(asset.symbol,old?.price?{...old,status:'stale'}:{price:null,bid:null,ask:null,timestamp:null,status:'error'});
   }finally{publish();}
  };
  let fetching=false;
  const initialFetch=async()=>{
   if(fetching)return;
   fetching=true;
   let cursor=0;
   const worker=async()=>{while(alive){const asset=available[cursor++];if(!asset)return;await fetchOne(asset);}};
   try{await Promise.all(Array.from({length:Math.min(6,available.length)},worker));}finally{fetching=false;}
  };
  const poll=async()=>{
   if(!alive||pollBusy)return;
   const connected=connection?.state==='Connected';
   const old=ASSETS.some(a=>{const q=cache.get(a.symbol),ts=Date.parse(q?.timestamp||'');return !a.unavailable&&(!q?.price||!Number.isFinite(ts)||now()-ts>60000);});
   if(connected&&!old)return;
   pollBusy=true;try{await initialFetch();}finally{pollBusy=false;}
  };
  if(!enabled){setQuotes(publicQuotes());return()=>{alive=false;controller.abort();};}
  setQuotes(publicQuotes());
  initialFetch();
  connection=new HubConnectionBuilder().withUrl(HUB,{withCredentials:false}).withAutomaticReconnect([0,2000,10000,30000]).configureLogging(LogLevel.None).build();
  connection.on('ReceiveTick',apply);
  const subscribe=async()=>{if(!alive||!connection)return;try{await connection.invoke('Subscribe',available.map(sourceOf));}catch{}};
  connection.onreconnected(()=>subscribe());
  connection.start().then(subscribe).catch(()=>{});
  pollTimer=setInterval(poll,15000);
  watch=setInterval(()=>{
   if(!alive)return;
   let changed=false;
   ASSETS.forEach(a=>{const q=cache.get(a.symbol),ts=Date.parse(q?.timestamp||'');if(q?.status==='live'&&Number.isFinite(ts)&&now()-ts>300000){cache.set(a.symbol,{...q,status:'stale'});changed=true;}});
   if(changed)publish();
  },15000);
  return()=>{alive=false;controller.abort();clearInterval(pollTimer);clearInterval(watch);connection?.stop().catch(()=>{});};
 },[enabled]);
 return quotes;
}
