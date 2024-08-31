import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Adjust if your main component is named differently
import './index.css'; // Import your global CSS or Tailwind styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
