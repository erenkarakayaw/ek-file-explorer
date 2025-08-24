import { createRoot } from 'react-dom/client';
import App from './App';
import './output.css';
import { Route, Router, Routes } from 'react-router-dom';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <App />
);
