import { createBrowserRouter } from "react-router-dom";
import { App } from "@/components/App";
import { Suspense } from 'react';
import { Shop } from '../pages';
import { UserCard } from '@packages/shared/src/components/UserCard';

const routes = [
    {
        path: '/shop',
        element: <App />,
        children: [
          {
            path: '/shop/main',
            element: <Suspense fallback={'Loading...'}><Shop /></Suspense>
          },
          {
            path: '/shop/second',
            element: 
              <Suspense fallback={'Loading...'}>
                <h1>Second Page</h1>
                <UserCard username='From Shop'/>
              </Suspense>
          }
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;