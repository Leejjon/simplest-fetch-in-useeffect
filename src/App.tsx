import React from 'react';
import './App.css';
import {Match} from "./model/Match";
import {matchesQuery} from "./index";
import {useQuery} from "@tanstack/react-query";

function App() {
  const {data} = useQuery({
    ...matchesQuery(),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    cacheTime: 5000,
    staleTime: 4000,
    retry: false,
  });
  const matches: Array<Match> = data ?? [];
  return (
    <div className="App">

        <ul>
          {matches.map((match, index) => {
            return (
                <li key={index}>
                  <p>{match.homeTeam.name}&nbsp;-&nbsp;{match.awayTeam.name}</p>
                </li>
            );
          })}
        </ul>
    </div>
  );
}

export default App;
