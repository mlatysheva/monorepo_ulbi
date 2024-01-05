import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';


export const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div data-testid={'App.DataTestId'}>
      <Link to="/about">About</Link>
      <br />
      <Link to="/shop">Shop</Link>
      <br />

      <h1>{count}</h1>
      <button 
        onClick={increment}
      >
        Increment
      </button>
      <Outlet />
    </div>
  )
};