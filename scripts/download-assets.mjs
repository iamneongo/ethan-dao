// Downloads all site images + hero video to public/. Reads scripts/assets.manifest.txt
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const IMG_DIR = path.join(ROOT, 'public', 'images');
const VID_DIR = path.join(ROOT, 'public', 'videos');
fs.mkdirSync(IMG_DIR, { recursive: true });
fs.mkdirSync(VID_DIR, { recursive: true });

const LP_PREFIX = 'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=90,fit=scale-down,width=';
const LP_BASE = 'https://media-production.lp-cdn.com/media/';
const UN_BASE = 'https://images.unsplash.com/';

const manifest = fs.readFileSync(path.join(import.meta.dirname, 'assets.manifest.txt'), 'utf8')
  .split('\n').map(l => l.trim()).filter(Boolean);

const jobs = [];
for (const line of manifest) {
  const [type, a, b] = line.split('|');
  if (type === 'LP') {
    const url = `${LP_PREFIX}${b || 960}/${LP_BASE}${a}`;
    jobs.push({ url, out: path.join(IMG_DIR, `lp-${a}.jpg`) });
  } else if (type === 'UN') {
    const url = `${UN_BASE}${a}?auto=format&fit=crop&w=1200&q=80`;
    jobs.push({ url, out: path.join(IMG_DIR, `un-${a}.jpg`) });
  } else if (type === 'FU') {
    let name = a.replace(/^https?:\/\//, '').replace(/[^a-z0-9]/gi, '-').slice(-60);
    if (a.includes('symbol-color-nwmls')) name = 'nwmls-logo';
    jobs.push({ url: a, out: path.join(IMG_DIR, `${name}.jpg`) });
  }
}

// Hero video
jobs.push({
  url: 'https://res.cloudinary.com/luxuryp/videos/f_webm,vc_vp9,q_auto,w_1280,c_limit/c40snysfj4jwofvslrtv/0402-cover.webm',
  out: path.join(VID_DIR, 'hero-cover.webm'),
});
jobs.push({
  url: 'https://res.cloudinary.com/luxuryp/videos/f_auto,q_auto/so_0,eo_0/c40snysfj4jwofvslrtv/0402-cover.jpg',
  out: path.join(VID_DIR, 'hero-cover-poster.jpg'),
});
jobs.push({
  url: 'https://res.cloudinary.com/luxuryp/videos/f_auto,q_auto/so_0,eo_0/urglhkihqtlbcptuyfuk/hov-bellevue-aerial.jpg',
  out: path.join(VID_DIR, 'bellevue-aerial-poster.jpg'),
});

async function dl({ url, out }) {
  try {
    if (fs.existsSync(out) && fs.statSync(out).size > 0) return `skip ${path.basename(out)}`;
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': 'https://helenaluxuryhomes.com/' } });
    if (!res.ok) return `FAIL ${res.status} ${path.basename(out)}`;
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(out, buf);
    return `ok ${path.basename(out)} (${(buf.length/1024).toFixed(0)}kb)`;
  } catch (e) {
    return `ERR ${path.basename(out)}: ${e.message}`;
  }
}

const results = [];
for (let i = 0; i < jobs.length; i += 4) {
  const batch = jobs.slice(i, i + 4);
  const r = await Promise.all(batch.map(dl));
  results.push(...r);
  r.forEach(x => console.log(x));
}
const fails = results.filter(r => r.startsWith('FAIL') || r.startsWith('ERR'));
console.log(`\nDone. ${results.length} jobs, ${fails.length} failures.`);
