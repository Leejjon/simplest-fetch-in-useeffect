import {Match} from "../model/Match";
import React, {useEffect} from "react";
import {getMatchesFromApi} from "../api/ApiCall";
import {ErrorProps} from "../App";

export interface MatchesProps {
    matches: Array<Match>;
    setMatches: (matches: Array<Match>) => void;
}

function Matches({matches, setMatches, error, setError}: MatchesProps & ErrorProps) {
    useEffect(() => {
        if (matches.length === 0) {
            getMatchesFromApi(2021)
                .then(matches => {
                    setMatches(matches);
                    setError(undefined);
                })
                .catch((e) => setError("Could not fetch the matches."));
        }
    }, [matches, setMatches, setError]);

    if (error) {
        return (
            <div className="App">{error}</div>
        );
    }

    return (
        <ul>
            {matches.map((match, index) => {
                return (
                    <li key={index}>
                        <p>{match.homeTeam.name}&nbsp;-&nbsp;{match.awayTeam.name}</p>
                    </li>
                );
            })}
        </ul>
    );
}

export default Matches;
