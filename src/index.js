import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './components/App';
import TodoList from './components/TodoList';

const root = ReactDOM.createRoot(document.getElementById('root'));

const name = 'Damian';

const htmlNode = <p>React jest fajny</p>

const calculateSum = (a, b) => {
  return a + b;
}

root.render(
  <React.StrictMode>
    {/* <h1 className="heading">Hello {name} {2 + 2}!</h1>
    {htmlNode}
    <p>Suma liczby 2 i 2 to {calculateSum(2, 2)}</p> */}

    <TodoList />
  </React.StrictMode>
);

