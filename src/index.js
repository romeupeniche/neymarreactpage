import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from './routes/Home';
import TimeLine from './routes/TimeLine';
import ErrorPage from './routes/ErrorPage';
import First from './routes/imgRoutes/First';
import Second from './routes/imgRoutes/Second';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'timeline',
        element: <TimeLine />
      },
      {
        path: 'timeline/2010',
        element: <First />
      },
      {
        path: 'timeline/2011',
        element: <Second />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);
reportWebVitals();
