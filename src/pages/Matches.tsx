import {Match} from "../model/Match";
import React, {useEffect} from "react";
import {getMatchesFromApi} from "../api/ApiCall";

export interface MatchesProps {
    matches: Array<Match>;
    setMatches: (matches: Array<Match>) => void;
}

function Matches({matches, setMatches}: MatchesProps) {
    useEffect(() => {
        if (matches.length === 0) {
            getMatchesFromApi(2021)
                .then(matches => setMatches(matches))
        }
    }, [matches, setMatches]);

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
