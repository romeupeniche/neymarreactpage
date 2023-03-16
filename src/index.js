import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import "./i18n/index";
import Home from './routes/Home';
import TimeLineContent from './routes/TimeLineContent';
import ErrorPage from './routes/ErrorPage';

import ImgRoutes from './routes/ImgRoutes';

const Year2010 = () => <>{ImgRoutes()[0]}</>;
const Year2011 = () => <>{ImgRoutes()[1]}</>;
const Year2012 = () => <>{ImgRoutes()[2]}</>;
const Year2013 = () => <>{ImgRoutes()[3]}</>;
const Year2014 = () => <>{ImgRoutes()[4]}</>;
const Year2015 = () => <>{ImgRoutes()[5]}</>;
const Year2016 = () => <>{ImgRoutes()[6]}</>;
const Year2017 = () => <>{ImgRoutes()[7]}</>;
const Year2018 = () => <>{ImgRoutes()[8]}</>;
const Year2019 = () => <>{ImgRoutes()[9]}</>;
const Year2020 = () => <>{ImgRoutes()[10]}</>;
const Year2021 = () => <>{ImgRoutes()[11]}</>;

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
        element: <TimeLineContent />
      },
      {
        path: 'timeline/2010',
        element: <Year2010 />
      },
      {
        path: 'timeline/2011',
        element: <Year2011 />
      },
      {
        path: 'timeline/2012',
        element: <Year2012 />
      },
      {
        path: 'timeline/2013',
        element: <Year2013 />
      },
      {
        path: 'timeline/2014',
        element: <Year2014 />
      },
      {
        path: 'timeline/2015',
        element: <Year2015 />
      },
      {
        path: 'timeline/2016',
        element: <Year2016 />
      },
      {
        path: 'timeline/2017',
        element: <Year2017 />
      },
      {
        path: 'timeline/2018',
        element: <Year2018 />
      },
      {
        path: 'timeline/2019',
        element: <Year2019 />
      },
      {
        path: 'timeline/2020',
        element: <Year2020 />
      },
      {
        path: 'timeline/2021',
        element: <Year2021 />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
reportWebVitals();
