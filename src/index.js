import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./i18n/index";
import Home from "./routes/Home";
import TimeLineContent from "./routes/TimeLineContent";
import ErrorPage from "./routes/ErrorPage";
import TLPage from "./components/TLPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/timeline",
        element: <TimeLineContent />,
      },
      {
        path: "/timeline/:year",
        element: <TLPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
