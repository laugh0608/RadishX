import {readFileSync,writeFileSync} from 'node:fs';
import {dirname,join} from 'node:path';
import {fileURLToPath} from 'node:url';
const out=dirname(fileURLToPath(import.meta.url));
// Preserve the radish body and two contact positions from the approved direction.
const original=readFileSync(join(out,'../v9/symbol.svg'),'utf8');
const body=original.match(/<path id="body" d="([^"]+)"/)[1];
const circuits=[{y:520,x:264,cx:338,cy:594},{y:608,x:216,cx:270,cy:662}];
const r=12,cut=r*Math.tan(Math.PI/8),d=cut/Math.SQRT2;
const route=c=>`M 137 ${c.y} H ${c.x-cut} A ${r} ${r} 0 0 1 ${c.x+d} ${c.y+d} L ${c.cx} ${c.cy}`;
// Side leaves are hollow, center leaf solid: light / dark / light becomes
// negative / positive / negative within the one-color identity.
const leaves=[
  'M 571 299 C 524 249 535 183 592 146 C 629 208 618 253 571 299 Z',
  'M 614 335 C 652 245 728 178 817 129 C 755 231 699 304 644 363 Z',
  'M 674 394 C 730 335 790 320 843 342 C 807 397 751 425 687 427 Z',
];
const mask=`<mask id="mark" maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="1000"><rect width="1000" height="1000" fill="black"/><g transform="translate(25 0)">
<path d="${body}" fill="none" stroke="white" stroke-width="56" stroke-linejoin="round"/>
<!-- Open only the body shoulder; leaf shapes remain intact above this cut. -->
<path d="M 430 540 L 601 70 L 900 369 Z" fill="black"/>
<path d="${leaves[0]}" fill="none" stroke="white" stroke-width="22" stroke-linejoin="round"/>
<path d="${leaves[1]}" fill="white"/>
<path d="${leaves[2]}" fill="none" stroke="white" stroke-width="22" stroke-linejoin="round"/>
${circuits.map(c=>`<path d="${route(c)}" fill="none" stroke="white" stroke-width="18"/><circle cx="${c.cx}" cy="${c.cy}" r="25" fill="black" stroke="white" stroke-width="18"/>`).join('\n')}
</g></mask>`;
const svg=(color,bg)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" role="img" aria-labelledby="title"><title id="title">Radish Intelligence V10：黑白斜锋，三叶双须</title><desc>基于萝卜轮廓的单色探索。两侧空心叶、中间实心叶，斜向切口、尖根和两条空心电路须。</desc><defs>${mask}</defs>${bg?`<rect width="1000" height="1000" fill="${bg}"/>`:''}<rect width="1000" height="1000" fill="${color}" mask="url(#mark)"/></svg>\n`;
writeFileSync(join(out,'symbol.svg'),svg('#111111'));
writeFileSync(join(out,'symbol-reversed.svg'),svg('#ffffff'));
writeFileSync(join(out,'black-board.svg'),svg('#ffffff','#080808'));
writeFileSync(join(out,'white-board.svg'),svg('#111111','#ffffff'));
writeFileSync(join(out,'geometry.json'),JSON.stringify({canvas:1000,bodySource:'../v9/symbol.svg',outline:56,leafOutline:22,trace:18,contact:{outerDiameter:68,innerDiameter:32},circuits,leafPaths:leaves,monochromeLeafSequence:'hollow / solid / hollow',shoulderCut:'sector from approximately -70 to -20 degrees'},null,2)+'\n');
console.log('V10 monochrome SVG variants built.');
