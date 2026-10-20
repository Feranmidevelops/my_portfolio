/**
 * Prerender the page into build/index.html, so it opens with content before
 * any JavaScript has run. src/main.jsx then hydrates this HTML.
 *
 * Runs after `vite build` and the server build of src/entry-server.jsx into
 * build-ssr/ (see the build script in package.json), and removes build-ssr/
 * when done.
 */
import { readFile, writeFile, rm } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";
import { gzipSync } from "node:zlib";

const page = "build/index.html";
const serverEntry = path.resolve("build-ssr/entry-server.js");
const slot = '<div id="root"></div>';

const { render } = await import(pathToFileURL(serverEntry).href);
const appHtml = render();

const html = await readFile(page, "utf8");
if (!html.includes(slot)) {
  throw new Error(`${page} has no empty ${slot} to fill`);
}
const out = html.replace(slot, `<div id="root">${appHtml}</div>`);
await writeFile(page, out);
await rm("build-ssr", { recursive: true, force: true });

const kb = (n) => `${(n / 1024).toFixed(1)} kB`;
console.log(`prerendered ${page}: ${kb(out.length)} (${kb(gzipSync(out).length)} gzipped)`);
