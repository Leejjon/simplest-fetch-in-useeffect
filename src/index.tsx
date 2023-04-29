import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import Matches from "./pages/Matches";
import Matches2 from "./pages/Matches2";
import {getMatchesFromApi} from "./api/ApiCall";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Match} from "./model/Match";

const queryClient = new QueryClient();

export const matchesQuery = () => (
    {
        queryKey: ["matches"],
        queryFn: async () => { return await getMatchesFromApi(2021)},
    }
);

const matchesQueryLoader = async (queryClient: QueryClient): Promise<Array<Match>> => {
    return await queryClient.ensureQueryData(matchesQuery());
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/matches",
                element: <Matches/>,
                loader: async () => { return matchesQueryLoader(queryClient) }
            },
            {
                path: "/matches2",
                element: <Matches2 />,
                loader: async () => { return matchesQueryLoader(queryClient)}
            }
        ]
    }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
