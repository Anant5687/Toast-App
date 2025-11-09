import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContextProvider } from './context/toast.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ToastContextProvider >
    <App />
  </ToastContextProvider>
);