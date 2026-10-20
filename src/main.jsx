import React from 'react';
import ReactDOM from 'react-dom/client';
// Fonts ship with the site instead of coming from Google, so nothing on
// another server holds up the first paint. Variable files: one per family
// covers every weight.
import '@fontsource-variable/inter/wght.css';
import '@fontsource-variable/sora/wght.css';
import './index.css';
import App from './App';
import { readSavedRole } from './context/RoleContext';

const container = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// The production build prerenders the page (Software track) into #root, so
// React takes over that HTML instead of drawing it again. A visitor who last
// picked the IT track, or the dev server's empty page, gets a normal render.
if (container.firstElementChild && readSavedRole() === 'swe') {
  ReactDOM.hydrateRoot(container, app);
} else {
  container.textContent = '';
  ReactDOM.createRoot(container).render(app);
}
