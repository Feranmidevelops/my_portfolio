import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

// Used at build time only (scripts/prerender.mjs): renders the page as a
// first-time visitor sees it, in the light theme, so the HTML
// arrives with content instead of an empty #root.
export const render = () => renderToString(<App />);
