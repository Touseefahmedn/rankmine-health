# RankMine Health 🩺✅
Live monitor for 100+ AI tools – instant uptime + broken-link alerts.  
![Demo](https://github.com/Touseefahmedn/rankmine-health/blob/main/health-demo.gif.gif)

## 🔊 Announcement
[Tweet thread](https://x.com/TouseefAhmed_n/status/1978427950824308810) – join the conversation!

# RankMine Health Monitor
Daily crawler for [RankMine](https://rankmine.blogspot.com) – 100+ SEO tools.
Opens GitHub issue only if a tool breaks (zero spam).

## 🚀 Usage in CI (GitHub Actions)

```yaml
name: Site-Health-Check
on:
  schedule: [cron: '0 */6 * * *']   # every 6 hours
  workflow_dispatch:

jobs:
  health:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: node-version: 18
      - run: npm install axios
      - run: node health.js
      - uses: actions/upload-artifact@v4
        with:
          name: broken-report
          path: broken.json

## How it works
- GitHub Action runs every night 2 AM IST
- Crawls every tool page → checks status + soft errors
- Opens issue only if ≥ 1 URL broken
- You fix → close issue → re-run → compound health forever!

## Run locally
```bash
npm install
node health.js

Issue opens → fix listed URLs → close → compound health forever!

---

### 🚀  After paste
- **Commit → push** → **repo README shows full guide**  
- **GitHub profile** → **green contributions**  
- **Google** → **reads README** → **SEO boost**  
- **You** → **never forget what this repo does**

---

**Paste → commit → push → reply “README live”**  
I’ll drop the **final trigger command** and we **close the health loop forever!** 🚀
