import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';  // You imported createRoot here
import './index.css';
import App from './App.jsx';

const root = createRoot(document.getElementById('root'));  // use createRoot directly
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

