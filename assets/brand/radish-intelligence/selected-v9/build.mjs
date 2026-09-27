import {readFileSync,writeFileSync} from 'node:fs';
import {dirname,join} from 'node:path';
import {fileURLToPath} from 'node:url';
const dir=dirname(fileURLToPath(import.meta.url));
const names=JSON.parse(readFileSync(join(dir,'../v9/names.json'),'utf8'));
const original=readFileSync(join(dir,'../v9/symbol.svg'),'utf8');
const symbol=original.slice(original.indexOf('>')+1,original.lastIndexOf('</svg>'))
  .replace(/<title[^>]*>[\s\S]*?<\/title>/,'').replace(/<desc>[\s\S]*?<\/desc>/,'');
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="2400" height="1200" viewBox="0 0 2400 1200" role="img" aria-labelledby="lockup-title">
<title id="lockup-title">${escape(names.chineseFullName)} · ${escape(names.englishFullName)}</title>
<desc>第九稿 Logo 与公司中英文全名组合。白色背景，深绿文字。</desc>
<rect width="2400" height="1200" fill="#ffffff"/>
<g transform="translate(165 240) scale(.72)">${symbol}</g>
<g fill="#203c35" font-family="'PingFang SC','Hiragino Sans GB','Microsoft YaHei',sans-serif">
<text id="chinese-name" x="940" y="580" font-size="86" font-weight="600">${escape(names.chineseFullName)}</text>
<text id="english-name" x="942" y="665" font-family="Arial,Helvetica,sans-serif" font-size="43" font-weight="400">${escape(names.englishFullName)}</text>
</g>
</svg>\n`;
writeFileSync(join(dir,'company-lockup.svg'),svg);
writeFileSync(join(dir,'selection.json'),JSON.stringify({status:'provisional',version:9,selectedDate:'2026-09-27',symbol:'../v9/symbol.svg',lockup:'company-lockup.svg',png:'company-lockup.png',names},null,2)+'\n');
console.log('V9 company lockup built (2400 × 1200).');
