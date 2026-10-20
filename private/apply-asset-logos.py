from pathlib import Path
import shutil,json,hashlib
root=Path('/workspace/trade-mobile-site');upload=Path('/home/ubuntu/upload');out=root/'public/assets/logos';out.mkdir(exist_ok=True)
mapping={'GBPUSD':'IMG_5142.PNG','EURGBP':'IMG_5143.PNG','USDBRL':'IMG_5144.PNG','USDCAD':'IMG_5145.PNG','AUDUSD':'IMG_5146.PNG','USDCHF':'IMG_5148.PNG','AUDCAD':'IMG_5149.PNG','NZDUSD':'IMG_5150.PNG','AUDJPY':'IMG_5151.PNG','GBPCAD':'IMG_5152.PNG','EURJPY':'IMG_5153.PNG','GBPCHF':'IMG_5154.PNG','EURCHF':'IMG_5155.PNG','AUDCHF':'IMG_5156.PNG','BTCUSD':'IMG_5157.PNG','XAUUSD':'IMG_5161.WEBP','AAPL':'IMG_5162.WEBP','NVDA':'IMG_5163.WEBP','GOOGL':'IMG_5164.WEBP','MSFT':'IMG_5165.WEBP','TSLA':'IMG_5166.WEBP','XAGUSD':'IMG_5167.WEBP'}
manifest=[]
for symbol,filename in mapping.items():
 source=upload/filename;name=symbol.lower()+source.suffix.lower();target=out/name;shutil.copy2(source,target);assert source.read_bytes()==target.read_bytes();manifest.append({'symbol':symbol,'original':filename,'icon':'/assets/logos/'+name,'sha256':hashlib.sha256(target.read_bytes()).hexdigest()})
(root/'private/icons-manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
p=root/'src/market.js';s=p.read_text();needle="].map(a=>({...a,icon:"
assert needle in s
new_assets=[{'symbol':sym,'label':sym[:3]+' / '+sym[3:],'flag':flag,'digits':digits,'payout':80} for sym,flag,digits in [('AUDCAD','🇦🇺🇨🇦',5),('NZDUSD','🇳🇿🇺🇸',5),('AUDJPY','🇦🇺🇯🇵',3),('GBPCAD','🇬🇧🇨🇦',5),('EURJPY','🇪🇺🇯🇵',3),('GBPCHF','🇬🇧🇨🇭',5),('EURCHF','🇪🇺🇨🇭',5),('AUDCHF','🇦🇺🇨🇭',5)]]+[{'symbol':'MSFT','label':'Microsoft','flag':'M','digits':2,'payout':80},{'symbol':'TSLA','label':'Tesla','flag':'T','digits':2,'payout':80},{'symbol':'XAGUSD','label':'Silver','flag':'Ag','digits':3,'payout':80}]
s=s.replace(needle,','+','.join(json.dumps(a,ensure_ascii=False) for a in new_assets)+'\n'+needle,1)
s=s.replace("{symbol:'BRENT',label:'Brent Oil'", "{symbol:'BRENT',quoteSymbol:'UKOIL',label:'Brent Oil'")
# Supplied originals override only their corresponding assets; all previous assets remain.
end=s.index("const API='https://biquote.io/api';")
s=s[:end]+"const SUPPLIED_LOGOS="+json.dumps({v['symbol']:v['icon'] for v in manifest})+";\nASSETS.forEach(a=>{if(SUPPLIED_LOGOS[a.symbol])a.icon=SUPPLIED_LOGOS[a.symbol]});\n"+s[end:]
s=s.replace("const step=intervalMs(interval);", "const sourceSymbol=ASSETS.find(a=>a.symbol===symbol)?.quoteSymbol||symbol;const step=intervalMs(interval);")
s=s.replace('t.symbol!==symbol','t.symbol!==sourceSymbol').replace('${API}/${symbol}','${API}/${sourceSymbol}').replace("invoke('Subscribe',[symbol])", "invoke('Subscribe',[sourceSymbol])")
p.write_text(s)
p=root/'src/App.jsx';s=p.read_text();s=s.replace("import {ASSETS,useMarket} from './market';", "import {ASSETS,useMarket} from './market';\nimport {useAssetQuotes,formatAssetPrice,quoteStatusText} from './assetQuotes';")
s=s.replace(' const simulationBalance=', " const assetQuotes=useAssetQuotes(page==='assets');\n const simulationBalance=",1)
s=s.replace("{market.tick?.spread!==undefined?Number(market.tick.spread).toFixed(asset.digits+1):'—'}", '{formatAssetPrice(market.tick?.mid,asset.digits)}')
s=s.replace('<small className={market.tick?.direction', '<small data-selected-quote={asset.symbol} title="سعر BiQuote" className={market.tick?.direction',1)
s=s.replace('<div className="asset-entry" key={a.symbol}><button className="asset-choose"', '<div className="asset-entry" data-asset-symbol={a.symbol} key={a.symbol}><button className="asset-choose" aria-label={\'اختيار \'+a.label}')
s=s.replace('<strong dir="ltr">{a.label}{a.symbol===asset.symbol&&market.status===\'otc\'?\' (OTC)\':\'\'}</strong><span className="asset-profit">', '<span className="asset-identification"><strong dir="ltr">{a.label}</strong><small dir="ltr">{a.symbol}</small></span><AssetQuote asset={a} quote={assetQuotes[a.symbol]}/><span className="asset-profit">')
s=s.replace('function SheetHandle({dragControls})', "function AssetQuote({asset,quote}){const status=quote?.status||(asset.unavailable?'unavailable':'loading');return <span className={'asset-quote quote--'+status} data-price-symbol={asset.symbol} data-price-state={status} data-price-value={quote?.price||''} title=\"سعر BiQuote\"><b dir=\"ltr\">{formatAssetPrice(quote?.price,asset.digits)}</b><small>{quoteStatusText(status)}</small></span>;}\nfunction SheetHandle({dragControls})")
assert 'data-asset-symbol={a.symbol}' in s and '<AssetQuote asset={a}' in s
p.write_text(s)
print('تم نسخ22شعارًا أصليًا وإضافة11أصلًا معالحفاظعلىكلالأصولالسابقة وربطسعرBiQuoteبدلspreadفيالرأس.')
