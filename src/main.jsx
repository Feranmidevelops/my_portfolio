import React from 'react';
import ReactDOM from 'react-dom/client';
// Fonts ship with the site instead of coming from Google, so nothing on
// another server holds up the first paint. Variable files: one per family
// covers every weight.
import '@fontsource-variable/inter/wght.css';
import '@fontsource-variable/sora/wght.css';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);