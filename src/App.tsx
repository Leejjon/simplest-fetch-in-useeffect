import React, {useEffect, useState} from 'react';
import './App.css';
import {Match} from "./model/Match";
import {getMatchesFromApi} from "./api/ApiCall";

function App() {
  const [error, setError] = useState<string | undefined>(undefined);
  const [matches, setMatches] = useState<Array<Match>>([]);
  useEffect(() => {
    if (matches.length === 0) {
      getMatchesFromApi(2021)
          .then(matches => {
            setMatches(matches);
            setError(undefined);
          })
          .catch((e) => setError("Could not fetch the matches."));
    }
  }, [matches, setMatches]);
  if (error) {
    return (
        <div className="App">{error}</div>
    );
  }
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
