// Copyright 2026 Adobe. All rights reserved.
// Screenshot the archify HTML diagrams into public/diagrams/*.png
import { chromium } from 'playwright-chromium';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.dirname(new URL(import.meta.url).pathname);
const diagrams = {
  'before-after': 'dataflow-before-after/before-after.html',
  pipeline: 'dataflow-pipeline/pipeline.html',
  'safe-write': 'sequence-safe-write/safe-write.html',
  aliases: 'architecture-aliases/aliases.html',
};

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
for (const [name, file] of Object.entries(diagrams)) {
  await page.goto(pathToFileURL(path.join(root, '.archify', file)).href);
  await page.waitForTimeout(1500);
  // Hide viewer chrome (toolbars float above the canvas) before capturing the svg alone
  await page.evaluate(() => {
    for (const el of document.querySelectorAll('body *')) {
      if (el.closest('svg')) continue;
      const pos = getComputedStyle(el).position;
      if (pos === 'fixed' || (pos === 'absolute' && !el.querySelector('svg'))) el.style.display = 'none';
    }
  });
  const svgs = await page.locator('svg').all();
  let best = svgs[0];
  let area = 0;
  for (const s of svgs) {
    const b = await s.boundingBox();
    if (b && b.width * b.height > area) {
      area = b.width * b.height;
      best = s;
    }
  }
  await best.screenshot({ path: path.join(root, 'public/diagrams', `${name}.png`) });
  console.log('wrote', name);
}
await browser.close();
