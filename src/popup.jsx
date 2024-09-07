import React from 'react';
import { createRoot } from 'react-dom/client';

function App () {
  return (
    <div>
      <p>Hello!</p>
    </div>
  );
}

const container = document.getElementById('react-root');
const root = createRoot(container);
root.render(<App />);
