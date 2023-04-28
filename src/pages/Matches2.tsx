import {Match} from "../model/Match";
import React, {useEffect} from "react";
import {useLoaderData} from "react-router-dom";

function Matches2() {
    const matches: Array<Match> = useLoaderData() as Array<Match>;
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

export default Matches2;
