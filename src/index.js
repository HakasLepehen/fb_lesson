import React from 'react';
import ReactDOM from 'react-dom/client';
import Clock from './components/Clock.jsx';
import Toggle from './components/Toggle.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Clock />
    <Toggle />
  </React.StrictMode>
);
