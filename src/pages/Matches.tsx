import {Match} from "../model/Match";
import React from "react";
import {useQuery} from "@tanstack/react-query";
import {matchesQuery} from "../queries/MatchesQuery";

function Matches() {
    const {data, isError, isPaused} = useQuery({
        ...matchesQuery()
    });
    const matches: Array<Match> = data ?? [];

    // We use isPaused because if there is no internet react query will be paused automatically.
    if (isError || isPaused) {
        return (
            <div className="App">Could not load matches.</div>
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
