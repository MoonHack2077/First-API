import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';

//Using the v18 of React
createRoot(
  document.getElementById('root')
).render(
    <App />
);
