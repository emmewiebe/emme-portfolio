import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx'; // Updated to reflect the new `.jsx` extension
import CursorProvider from './context/CursorContext.jsx'; // Ensure extension matches

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CursorProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CursorProvider>
);