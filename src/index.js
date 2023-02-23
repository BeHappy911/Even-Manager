import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoApp from './ToDoApp';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);

root.render(<TodoApp />);


reportWebVitals();