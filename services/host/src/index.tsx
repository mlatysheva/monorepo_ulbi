import { createRoot } from 'react-dom/client';
import { App } from '@/components/App';
import React, { StrictMode } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: []
  }
]);

container.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
