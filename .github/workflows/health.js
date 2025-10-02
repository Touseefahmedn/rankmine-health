const axios = require('axios');
const fs = require('fs');

const URLS = [
  'https://rankmine.blogspot.com/p/ai-title-generator.html',
  'https://rankmine.blogspot.com/p/backlink-checker.html',
  'https://rankmine.blogspot.com/p/plagiarism-checker.html',
  'https://rankmine.blogspot.com/p/qr-generator.html',
  'https://rankmine.blogspot.com/p/password-generator.html'
  // add all 106 URLs here (one per line)
];

async function checkAll(){
  const broken = [];
  for (const url of URLS){
    try{
      const res = await axios.get(url, { timeout: 8000 });
      if (res.status !== 200) broken.push({ url, status: res.status });
      // optional: check for “No captions found” or “Invalid JSON” strings
      if (res.data.includes('No captions found') || res.data.includes('Invalid JSON')) {
        broken.push({ url, note: 'soft error' });
      }
    } catch (err) {
      broken.push({ url, error: err.message });
    }
  }
  if (broken.length === 0) {
    console.log('All tools healthy ✅');
    return;
  }
  fs.writeFileSync('broken.json', JSON.stringify(broken, null, 2));
  core.setFailed(`${broken.length} tools broken`);
}
checkAll();
