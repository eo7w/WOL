from pathlib import Path
p=Path('/workspace/trade-mobile-site/src/App.jsx');s=p.read_text()
s=s.replace("{reconcileDeposits,decideLocalRequest} from './simulationWallet'", "{reconcileDeposits,decideLocalRequest,spendableBalance,debitSimulation,creditSimulation} from './simulationWallet'")
s=s.replace(' const simulationBalance=(simulationWallet.cashCents+simulationWallet.bonusCents)/100;', ' const simulationBalance=(simulationWallet.cashCents+simulationWallet.bonusCents)/100;\n const currentBalance=spendableBalance(mode,balance,simulationWallet);')
s=s.replace('marketRef.current=market;', 'marketRef.current=market;\n const tradesRef=useRef(trades),demoBalanceRef=useRef(balance);tradesRef.current=trades;demoBalanceRef.current=balance;')
a=s.index(' const trade=direction=>');b=s.index(' const onRequest=req=>',a)
s=s[:a]+''' const commitTrades=next=>{tradesRef.current=next;localStorage.setItem('cue-local-trades',JSON.stringify(next));setTrades(next)};
 const changeDemoBalance=delta=>{const next=Math.round((demoBalanceRef.current+delta)*100)/100;demoBalanceRef.current=next;localStorage.setItem('cue-demo-balance',JSON.stringify(next));setBalance(next)};
 const checkBalance=(required=amount)=>{const wallet=reconcileDeposits().wallet;const available=spendableBalance(mode,demoBalanceRef.current,wallet);if(mode!=='demo')setSimulationWallet(wallet);if(!Number.isFinite(required)||required<=0){notify('اختر مبلغًا صالحًا للمحاكاة');return false}if(Math.round(required*100)>Math.round(available*100)){setPage('insufficient');return false}return true};
 const trade=direction=>{
  sound();if(!checkBalance(amount))return;
  if(!market.price||!['live','otc'].includes(market.status)){notify('انتظر سعرًا متاحًا قبل المحاكاة');return}
  const id=globalThis.crypto?.randomUUID?.()||String(Date.now())+'-'+Math.random().toString(36).slice(2);let debit={cashCents:0,bonusCents:0};
  if(mode==='demo')changeDemoBalance(-amount);else{debit=debitSimulation(amount,'trade-open:'+id);setSimulationWallet(debit.wallet);if(!debit.ok){if(debit.error?.includes('كاف'))setPage('insufficient');else notify(debit.error||'تعذر تحديث رصيد المحاكاة');return}if(debit.alreadyApplied)return}
  const t={id,symbol:asset.symbol,label:asset.label,direction,amount,entry:market.price,end:Date.now()+duration*1000,start:Date.now(),payout:asset.payout,status:'open',source:market.status,accountMode:mode,local:true,debitCashCents:debit.cashCents,debitBonusCents:debit.bonusCents};
  commitTrades([t,...tradesRef.current]);notify('فُتحت صفقة محاكاة محلية');
 };
 useEffect(()=>{const timer=setInterval(()=>{
  let changed=false;const next=tradesRef.current.map(t=>{
   if(t.status!=='open'||Date.now()<t.end)return t;
   const m=marketRef.current,valid=t.symbol===asset.symbol&&m.price&&['live','otc'].includes(m.status);
   const diff=valid?m.price-t.entry:0,tie=valid&&Math.abs(diff)<1e-12,win=valid&&!tie&&(t.direction==='up'?diff>0:diff<0);
   const result=!valid||tie?0:win?Math.round(t.amount*t.payout)/100:-t.amount;
   const returned=Math.round((!valid||tie?t.amount:win?t.amount+result:0)*100)/100;
   if((t.accountMode||'demo')==='demo'){
    const settled=load('cue-demo-settlement-ids',[]);if(!settled.includes(String(t.id))){changeDemoBalance(returned);localStorage.setItem('cue-demo-settlement-ids',JSON.stringify([...settled,String(t.id)]))}
   }else{
    const principal=Math.min(returned,t.amount),cashPrincipal=Math.min(principal,(t.debitCashCents??Math.round(t.amount*100))/100),bonusPrincipal=Math.max(0,principal-cashPrincipal),profit=Math.max(0,returned-t.amount);
    const credited=creditSimulation({cash:Math.round((cashPrincipal+profit)*100)/100,bonus:Math.round(bonusPrincipal*100)/100},'trade-settle:'+t.id);if(!credited.ok)return t;setSimulationWallet(credited.wallet);
   }
   changed=true;return {...t,status:valid?'closed':'cancelled',result,exit:valid?m.price:null};
  });if(changed)commitTrades(next);
 },1000);return()=>clearInterval(timer)},[asset.symbol]);
''' +s[b:]
s=s.replace("{money(mode==='demo'?balance:simulationBalance)}", '{money(currentBalance)}')
s=s.replace('<Rewards accountMode={mode} page={page}', '<Rewards accountMode={mode} balance={currentBalance} requiredAmount={amount} onCheckBalance={checkBalance} page={page}')
s=s.replace('<p>لا توجد أموال كافية للانضمام إلى المعارك أو التداول.<br/>يرجى تعبئة رصيد حسابك.</p>', '<p>رصيد المحاكاة المتاح: <b dir="ltr">{money(currentBalance)}</b><br/>المبلغ المطلوب: <b dir="ltr">{money(amount)}</b><br/>اختر مبلغًا أقل أو أضف رصيد محاكاة.</p>')
assert "if(mode==='real'){setPage('insufficient')" not in s
p.write_text(s)
p=Path('/workspace/trade-mobile-site/src/Rewards.jsx');s=p.read_text()
s=s.replace("accountMode='real',onClose", "accountMode='real',balance=0,requiredAmount=1000,onCheckBalance,onClose")
s=s.replace(' const fmt=(n)=>', " const canJoin=()=>{if(onCheckBalance)return onCheckBalance(requiredAmount);if(Number.isFinite(requiredAmount)&&requiredAmount>0&&Math.round(balance*100)>=Math.round(requiredAmount*100))return true;go('insufficient');return false};\n const openBattlePanel=kind=>{if(canJoin())setOverlay(kind)};\n const fmt=(n)=>")
s=s.replace(" const joinBattle=(kind='private',code=privateCode)=>{", " const joinBattle=(kind='private',code=privateCode)=>{if(!canJoin())return;")
s=s.replace(' const createBattle=()=>{', ' const createBattle=()=>{if(!canJoin())return;')
s=s.replace("()=>accountMode==='real'?go('insufficient'):setOverlay(c.tone==='infinite'?'infinite':'social')", "()=>openBattlePanel(c.tone==='infinite'?'infinite':'social')")
s=s.replace("()=>accountMode==='real'?go('insufficient'):joinBattle(s.kind,", "()=>joinBattle(s.kind,")
s=s.replace("onClick={()=>setOverlay('create')}>إنشاء معركة", "onClick={()=>openBattlePanel('create')}>إنشاء معركة")
s=s.replace("onClick={()=>setOverlay('join')}>انضم برمز", "onClick={()=>openBattlePanel('join')}>انضم برمز")
assert "accountMode==='real'" not in s
p.write_text(s)
print('تم توحيد بوابات التداول والمعارك وربط الخصم والتسوية بحساب المحاكاة النشط.')
