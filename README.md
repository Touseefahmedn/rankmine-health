# RankMine Health Monitor  
Daily crawler for [RankMine](https://rankmine.blogspot.com) – 106 SEO tools.  
Opens GitHub issue **only** if a tool breaks (zero spam).  

## How it works  
- GitHub Action runs **every night 2 AM IST**  
- Crawls every tool page → checks status + soft errors  
- Opens issue **only** if ≥ 1 URL broken  
- You fix → close issue → re-run → compound health  

## Run locally  
```bash
npm install
node health.js
