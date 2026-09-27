import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// V12 construction source. All lengths use the same 1000-unit coordinate system.
const out = dirname(fileURLToPath(import.meta.url));
const ink = '#203c35', light = '#91bd5e', jade = '#436e60';
const cx = 430, cy = 540, radius = 295, outline = 32, trace = 16;
const rad = a => a * Math.PI / 180;
const point = a => [cx + radius * Math.cos(rad(a)), cy + radius * Math.sin(rad(a))];
const tangent = a => [Math.sin(rad(a)), -Math.cos(rad(a))];
const add = (p, v, s) => p.map((n, i) => n + v[i] * s);
const fmt = n => Number(n.toFixed(4));
const xy = p => p.map(fmt).join(' ');
const start = point(115), end = point(170);
const q = [169, 747], t0 = [142, 818], t1 = [149, 824];
const segments = [
  [end, add(end, tangent(170), 55), [189, 688], q],
  [q, [161, 770.6], [146, 799], t0],
  [t0, [141, 822.75], [143.8, 825.75], t1],
  [t1, [204, 805.4903846], add(start, tangent(115), -60), start],
];
const body = `M ${xy(start)} A ${radius} ${radius} 0 1 0 ${xy(end)} ` + segments.map(s => `C ${s.slice(1).map(xy).join(' ')}`).join(' ') + ' Z';

// The three lobes share a circular head + tangent cubic shoulder construction.
const leaves = [
  { name: 'outer-upper', x: 578, y: 315, angle: 8, r: 61, stem: 110, color: light },
  { name: 'middle', x: 632, y: 370, angle: 43, r: 66, stem: 122, color: jade },
  { name: 'outer-right', x: 658, y: 430, angle: 78, r: 55, stem: 105, color: light },
];
const leafPath = ({ r, stem: d }) => `M 0 22 C ${-r * .35} -8 ${-r} ${-d + r * .55} ${-r} ${-d} A ${r} ${r} 0 0 1 ${r} ${-d} C ${r} ${-d + r * .55} ${r * .35} -8 0 22 Z`;
const transform = l => `translate(${l.x} ${l.y}) rotate(${l.angle})`;
// All dark envelopes are behind all colored insets: adjoining envelopes never
// cut a flat corner into the next leaf's color. The body hides the three tips.
const leafMarkup = leaves.map(l => `<path d="${leafPath(l)}" transform="${transform(l)}" fill="${ink}" stroke="${ink}" stroke-width="${outline}" stroke-linejoin="round"/>`).join('\n') + leaves.map(l => `<path id="leaf-${l.name}" d="${leafPath({...l,r:l.r-outline/2})}" transform="${transform(l)}" fill="${l.color}"/>`).join('\n');

// Upper contact is longer; centers follow the root-to-crown 45-degree axis.
// One horizontal-to-diagonal bend per route, no second horizontal landing.
const r = 12, cut = r * Math.tan(Math.PI / 8), diag = cut / Math.SQRT2;
const circuits = [
  { startY: 520, bendX: 264, center: [338, 594] },
  { startY: 608, bendX: 216, center: [270, 662] },
];
const route = ({startY:y,bendX:x,center}) => `M 137 ${y} H ${fmt(x - cut)} A ${r} ${r} 0 0 1 ${fmt(x + diag)} ${fmt(y + diag)} L ${xy(center)}`;
// A simplified six-membered ring replaces the upper contact; the lower
// circular contact acts as an atom/node. This is a brand motif, not a formula.
const hexRadius = 36, hexStroke = 14;
const hexPoints = center => Array.from({length:6},(_,i)=>xy([center[0]+hexRadius*Math.cos(rad(i*60-30)),center[1]+hexRadius*Math.sin(rad(i*60-30))])).join(' ');
const routes = circuits.map((c,i) => `<path d="${route(c)}" fill="none" stroke="${ink}" stroke-width="${trace}" stroke-linecap="butt"/>` + (i===0 ? `<polygon id="chemical-ring" points="${hexPoints(c.center)}" fill="white" stroke="${ink}" stroke-width="${hexStroke}" stroke-linejoin="round"/>` : `<circle id="atom-node" cx="${c.center[0]}" cy="${c.center[1]}" r="24" fill="white" stroke="${ink}" stroke-width="${trace}"/>`)).join('\n');
// Clip trace entry points to the body; redraw its closed outline last so no
// butt-cap can protrude or create a doubled edge at the body / circuit joint.
const artwork = `<defs><clipPath id="body-clip"><path d="${body}"/></clipPath></defs><g transform="translate(25 10)">${leafMarkup}\n<path id="body" d="${body}" fill="white"/>\n<g clip-path="url(#body-clip)">${routes}</g><path d="${body}" fill="none" stroke="${ink}" stroke-width="${outline}" stroke-linejoin="round"/></g>`;
const header = (box, label) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${box}" role="img" aria-labelledby="title"><title id="title">${label}</title>`;
writeFileSync(join(out, 'symbol.svg'), `${header('0 0 1000 1000', '萝卜智能 V12：几何三叶、化学六元环与原子节点')}
<desc>圆弧身体、三片圆弧叶冠、相切贝塞尔尾巴。两侧浅绿，中间深绿，上方六边形化学环与下方圆形原子节点。外部透明，根部白色。</desc>
${artwork}
</svg>\n`);
writeFileSync(join(out, 'junction-detail.svg'), `${header('500 210 240 240', 'V12 叶根局部：连续闭合身体边界，无描边圆头')}${artwork}</svg>\n`);

writeFileSync(join(out, 'circuit-detail.svg'), `${header('100 480 350 260', 'V12 化学局部：上方六元环与下方原子节点')}${artwork}</svg>\n`);

const handles = segments.map(s => `<path d="M ${xy(s[0])} L ${xy(s[1])} M ${xy(s[2])} L ${xy(s[3])}"/><circle cx="${s[1][0]}" cy="${s[1][1]}" r="4"/><circle cx="${s[2][0]}" cy="${s[2][1]}" r="4"/>`).join('');
const headGuides = leaves.map(l => `<g transform="${transform(l)}"><circle cx="0" cy="${-l.stem}" r="${l.r}"/><path d="M ${-l.r-20} ${-l.stem} H ${l.r+20} M 0 ${-l.stem-l.r-15} V 22"/><circle cx="0" cy="${-l.stem}" r="3" fill="#b6673f"/></g>`).join('');
writeFileSync(join(out, 'construction.svg'), `${header('0 0 1000 1000', 'V12 几何构造：实际圆弧、圆心、切线及尾部贝塞尔控制柄')}
<rect width="1000" height="1000" fill="#fbfcf8"/>
<defs><pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse"><path d="M 25 0 H 0 V 25" fill="none" stroke="#dae4dc" stroke-width="1"/></pattern></defs><rect width="1000" height="1000" fill="url(#grid)"/>
<g opacity=".22">${artwork}</g>
<g transform="translate(25 10)"><g fill="none" stroke="#587ca0" stroke-width="1.5"><circle cx="${cx}" cy="${cy}" r="${radius}"/><path d="M 90 ${cy} H 800 M ${cx} 180 V 910" stroke-dasharray="5 5"/><circle cx="${cx}" cy="${cy}" r="4"/><path d="M ${cx} ${cy} L ${cx+radius} ${cy}"/></g>
<g fill="none" stroke="#b6673f" stroke-width="1.6">${headGuides}${handles}</g>
<path d="${body}" fill="none" stroke="${ink}" stroke-width="2"/><path d="M 246 686 L 362 570" fill="none" stroke="#b6673f" stroke-dasharray="5 5" stroke-width="1.5"/></g>
<g font-family="system-ui,sans-serif" font-size="17" fill="${ink}"><text x="60" y="65">V12 / GEOMETRIC CONSTRUCTION</text><text x="535" y="525">R = 295</text><text x="60" y="925">OUTLINE 32 · TRACE 16 · HEX R 36 · ATOM Ø 64 / 32</text><text x="60" y="953">Circular arcs + tangent cubic Bézier curves · 1000 × 1000</text></g>
</svg>\n`);

// Validate directional continuity of body / tail joints (G1), including circle joins.
const sub = (a,b) => a.map((v,i)=>v-b[i]);
const angle = (a,b) => Math.acos(Math.max(-1,Math.min(1,a.reduce((n,v,i)=>n+v*b[i],0)/Math.hypot(...a)/Math.hypot(...b)))) * 180 / Math.PI;
const joints = [{name:'circle-to-tail', errorDegrees:angle(tangent(170),sub(segments[0][1],end))}];
for(let i=0;i<segments.length-1;i++) joints.push({name:`tail-${i+1}`,errorDegrees:angle(sub(segments[i][3],segments[i][2]),sub(segments[i+1][1],segments[i+1][0]))});
joints.push({name:'tail-to-circle',errorDegrees:angle(sub(start,segments.at(-1)[2]),tangent(115))});
if(joints.some(j=>j.errorDegrees>.01)) throw new Error('Non-tangent joint: '+JSON.stringify(joints));
writeFileSync(join(out,'geometry.json'),JSON.stringify({canvas:1000,translation:[25,10],body:{center:[cx,cy],radius,arcDegrees:305},outline,trace,leaves,bendRadius:r,circuits,terminal:{upper:{type:"hexagonal-ring",circumradius:hexRadius,stroke:hexStroke},lower:{type:"circular-node",outerDiameter:64,innerDiameter:32},axisDegrees:-45,centerDistance:Math.hypot(68,68)},bodyTailContinuity:'G1; not claimed G2',joints},null,2)+'\n');
console.log('Built V12 SVGs; tangent checks passed.');
