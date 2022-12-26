import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App() {
  let message = "Hi there, how are you? Welcome to starting page"
  return (<h1>{message}</h1>);
}

root.render(<App />);