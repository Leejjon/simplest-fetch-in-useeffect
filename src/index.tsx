import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import Matches from "./pages/Matches";
import Matches2 from "./pages/Matches2";
import {getMatchesFromApi} from "./api/ApiCall";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/matches",
                element: <Matches/>,
                loader: async () => { return await getMatchesFromApi(2021)}
            },
            {
                path: "/matches2",
                element: <Matches2 />,
                loader: async () => { return await getMatchesFromApi(2021)}
            }
        ]
    }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
