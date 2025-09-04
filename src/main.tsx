import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { mountReveal, mountTilt } from './lib/motion'

createRoot(document.getElementById("root")!).render(<App />);

// Initialize motion effects after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  mountReveal();
  mountTilt();
});

// Also initialize after route changes for SPA
setTimeout(() => {
  mountReveal();
  mountTilt();
}, 100);
