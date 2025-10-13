const axios = require('axios');
const fs = require('fs');

const URLS = [
  'https://rankmine.blogspot.com/p/ai-title-generator_7.html',
'https://rankmine.blogspot.com/p/image-to-prompt-generator.html',
'https://rankmine.blogspot.com/p/backlink-checker.html',
'https://rankmine.blogspot.com/p/plagiarism-checker.html',
'https://rankmine.blogspot.com/p/json-formatter.html',
'https://rankmine.blogspot.com/p/css-minifier.html',
'https://rankmine.blogspot.com/p/pdf-to-word.html',
'https://rankmine.blogspot.com/p/youtube-transcript.html',
'https://rankmine.blogspot.com/p/qr-generator.html',
'https://rankmine.blogspot.com/p/password-generator.html',
'https://rankmine.blogspot.com/p/rank-tracker.html',
'https://rankmine.blogspot.com/p/ai-blog-writer.html',
'https://rankmine.blogspot.com/p/ai-email-reply.html',
'https://rankmine.blogspot.com/p/ai-story-generator.html',
'https://rankmine.blogspot.com/p/ai-slogan-maker.html',
'https://rankmine.blogspot.com/p/ai-meta-description.html',
'https://rankmine.blogspot.com/p/ai-hashtag-generator.html',
'https://rankmine.blogspot.com/p/ai-product-description.html',
'https://rankmine.blogspot.com/p/ai-summarizer.html',
'https://rankmine.blogspot.com/p/ai-grammar-fixer.html',
'https://rankmine.blogspot.com/p/ai-domain-generator.html',
'https://rankmine.blogspot.com/p/ai-voiceover-script.html',
'https://rankmine.blogspot.com/p/ai-code-explainer.html',
'https://rankmine.blogspot.com/p/ai-sql-query-builder.html',
'https://rankmine.blogspot.com/p/ai-excel-formula.html',
'https://rankmine.blogspot.com/p/ai-lesson-plan.html',
'https://rankmine.blogspot.com/p/ai-chatbot.html',
'https://rankmine.blogspot.com/p/ai-logo-ideas.html',
'https://rankmine.blogspot.com/p/ai-ad-copy.html',
'https://rankmine.blogspot.com/p/ai-research-summary.html',
'https://rankmine.blogspot.com/p/ai-voice-clone-script.html',
'https://rankmine.blogspot.com/p/ai-thumbnail-maker.html',
'https://rankmine.blogspot.com/p/ai-podcast-intro.html',
'https://rankmine.blogspot.com/p/ai-resume-bullet.html',
'https://rankmine.blogspot.com/p/ai-cover-letter.html',
'https://rankmine.blogspot.com/p/ai-slogan-logo.html',
'https://rankmine.blogspot.com/p/ai-ig-caption.html',
'https://rankmine.blogspot.com/p/ai-tweet-thread.html',
'https://rankmine.blogspot.com/p/ai-linkedin-post.html',
'https://rankmine.blogspot.com/p/ai-press-release.html',
'https://rankmine.blogspot.com/p/ai-faq-generator.html',
'https://rankmine.blogspot.com/p/ai-fantasy-name.html',
'https://rankmine.blogspot.com/p/ai-poem-generator.html',
'https://rankmine.blogspot.com/p/ai-dungeon-room.html',
'https://rankmine.blogspot.com/p/ai-superpower.html',
'https://rankmine.blogspot.com/p/ai-color-palette.html',
'https://rankmine.blogspot.com/p/ai-mocktail-recipe.html',
'https://rankmine.blogspot.com/p/ai-emoji-story.html',
'https://rankmine.blogspot.com/p/ascii-art-generator.html',
'https://rankmine.blogspot.com/p/ai-random-fact.html',
'https://rankmine.blogspot.com/p/ai-insult-generator.html',
'https://rankmine.blogspot.com/p/ai-emoji-password.html',
'https://rankmine.blogspot.com/p/ai-band-name.html',
'https://rankmine.blogspot.com/p/ai-npc-personality.html',
'https://rankmine.blogspot.com/p/ai-haiku-generator.html',
'https://rankmine.blogspot.com/p/ai-tarot-draw.html',
'https://rankmine.blogspot.com/p/ai-mc-seed.html',
'https://rankmine.blogspot.com/p/ai-speed-reader.html',
'https://rankmine.blogspot.com/p/ai-horoscope.html',
'https://rankmine.blogspot.com/p/ai-meme-caption.html',
'https://rankmine.blogspot.com/p/ai-wyr-generator.html',
'https://rankmine.blogspot.com/p/ai-lorem-ipsum.html',
'https://rankmine.blogspot.com/p/ai-morse-code.html',
'https://rankmine.blogspot.com/p/ai-binary-text.html',
'https://rankmine.blogspot.com/p/ai-caesar-cipher.html',
'https://rankmine.blogspot.com/p/ai-pig-latin.html',
'https://rankmine.blogspot.com/p/ai-reverse-text.html',
'https://rankmine.blogspot.com/p/ai-upside-down-text.html',
'https://rankmine.blogspot.com/p/ai-random-word.html',
'https://rankmine.blogspot.com/p/ai-palindrome-checker.html',
'https://rankmine.blogspot.com/p/ai-text-case-toggle.html',
'https://rankmine.blogspot.com/p/ai-image-generator.html',
'https://rankmine.blogspot.com/p/ai-story-with-images.html',
'https://rankmine.blogspot.com/p/ai-text-to-speech.html',
'https://rankmine.blogspot.com/p/ai-voice-cloner.html',
'https://rankmine.blogspot.com/p/ai-gif-caption.html',
'https://rankmine.blogspot.com/p/ai-qr-with-logo.html',
'https://rankmine.blogspot.com/p/ai-cyoa.html',
'https://rankmine.blogspot.com/p/ai-spot-difference.html',
'https://rankmine.blogspot.com/p/ai-truth-or-dare.html',
'https://rankmine.blogspot.com/p/ai-spin-wheel.html',
'https://rankmine.blogspot.com/p/ai-word-count.html',
'https://rankmine.blogspot.com/p/ai-character-count.html',
'https://rankmine.blogspot.com/p/ai-line-count.html',
'https://rankmine.blogspot.com/p/ai-syllable-count.html',
'https://rankmine.blogspot.com/p/ai-reading-time.html',
'https://rankmine.blogspot.com/p/ai-speaking-time.html',
'https://rankmine.blogspot.com/p/ai-difficulty-score.html',
'https://rankmine.blogspot.com/p/ai-sentence-count.html',
'https://rankmine.blogspot.com/p/ai-paragraph-count.html',
'https://rankmine.blogspot.com/p/ai-pixel-art.html',
'https://rankmine.blogspot.com/p/ai-glitch-image.html',
'https://rankmine.blogspot.com/p/ai-mosaic-image.html',
'https://rankmine.blogspot.com/p/ai-stereogram-generator.html',
'https://rankmine.blogspot.com/p/ai-lorem-ipsum.html',
'https://rankmine.blogspot.com/p/ai-morse-code.html',
'https://rankmine.blogspot.com/p/ai-binary-text.html',
'https://rankmine.blogspot.com/p/ai-caesar-cipher.html',
'https://rankmine.blogspot.com/p/ai-pig-latin.html',
'https://rankmine.blogspot.com/p/ai-reverse-text.html',
'https://rankmine.blogspot.com/p/ai-upside-down-text.html',
'https://rankmine.blogspot.com/p/ai-random-word.html',
'https://rankmine.blogspot.com/p/ai-palindrome-checker.html',
'https://rankmine.blogspot.com/p/ai-text-case-toggle.html',
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
  }
checkAll();