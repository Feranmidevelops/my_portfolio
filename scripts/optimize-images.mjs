/**
 * Shrink and convert the site images.
 *
 * Widths are ~2x the size each image is actually displayed at, which is
 * enough for retina screens and no more. The originals were multi-megabyte
 * PNG screenshots being scaled down in the browser.
 *
 * Run with: npm run images
 */
import sharp from "sharp";
import { readFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";

const kb = (n) => `${Math.round(n / 1024)} KB`;

// [source, output, targetWidth]
const toWebp = [
  ["image-source/feranmi-banner.png", "public/feranmi-banner.webp", 1600],
  ["image-source/drevad.png", "public/projects/drevad.webp", 1400],
  ["image-source/spinmedical.png", "public/projects/spinmedical.webp", 1400],
  ["image-source/tickety.png", "public/projects/tickety.webp", 1400],
  ["image-source/expense-tracker.png", "public/projects/expense-tracker.webp", 1400],
  ["image-source/snaparound.png", "public/projects/snaparound.webp", 1000],
  ["image-source/mr-feranmi.png", "public/projects/mr-feranmi.webp", 1400],
  ["image-source/sofalia.png", "public/projects/sofalia.webp", 1400],
  ["image-source/audiophile.png", "public/projects/audiophile.webp", 1400],
  // Phone insets render about 80px wide, so they need almost nothing.
  ["image-source/drevad-mobile.png", "public/projects/drevad-mobile.webp", 320],
  ["image-source/expense-tracker-mobile.png", "public/projects/expense-tracker-mobile.webp", 320],
  ["image-source/spinmedical-mobile.jpg", "public/projects/spinmedical-mobile.webp", 320],
  ["image-source/tickety-mobile.jpeg", "public/projects/tickety-mobile.webp", 320],
  ["image-source/mr-feranmi-mobile.png", "public/projects/mr-feranmi-mobile.webp", 320],
  ["image-source/sofalia-mobile.png", "public/projects/sofalia-mobile.webp", 320],
  ["image-source/audiophile-mobile.png", "public/projects/audiophile-mobile.webp", 320],
];

let before = 0;
let after = 0;

for (const [src, out, width] of toWebp) {
  try {
    const input = await readFile(src);
    before += input.length;
    const buf = await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toBuffer();
    await writeFile(out, buf);
    after += buf.length;
    console.log(`${path.basename(out).padEnd(34)} ${kb(input.length).padStart(9)} -> ${kb(buf.length)}`);
  } catch (err) {
    console.warn(`skipped ${src}: ${err.message}`);
  }
}

// Headshot: also used as the favicon and touch icon, so keep it JPEG
// for the widest support. 512px covers both the icon and the page.
{
  const src = "image-source/feranmi-headshot.jpeg";
  const input = await readFile(src);
  before += input.length;
  const buf = await sharp(input).resize({ width: 512, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true }).toBuffer();
  await writeFile("public/feranmi.jpeg", buf);
  after += buf.length;
  console.log(`${"feranmi.jpeg".padEnd(34)} ${kb(input.length).padStart(9)} -> ${kb(buf.length)}`);
}

// A proper 1200x630 social preview, letterboxed on black so the wide
// banner is not cropped by LinkedIn or WhatsApp. JPEG, because social
// scrapers are unreliable with WebP.
{
  const buf = await sharp(await readFile("image-source/feranmi-banner.png"))
    .resize({ width: 1200, height: 630, fit: "contain", background: { r: 0, g: 0, b: 0 } })
    .jpeg({ quality: 86, mozjpeg: true })
    .toBuffer();
  await writeFile("public/og-image.jpg", buf);
  console.log(`${"og-image.jpg (new, 1200x630)".padEnd(34)} ${"".padStart(9)}    ${kb(buf.length)}`);
}

console.log(`\ntotal: ${kb(before)} -> ${kb(after)}  (${Math.round((1 - after / before) * 100)}% smaller)`);
