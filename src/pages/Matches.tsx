import {Match} from "../model/Match";
import React, {useEffect} from "react";
import {useQuery} from "@tanstack/react-query";
import {matchesQuery} from "../index";
import {useNavigation} from "react-router-dom";

function Matches() {
    const {data} = useQuery({
        ...matchesQuery(),
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        cacheTime: 5000,
        staleTime: 4000,
        retry: false,
    });
    const matches: Array<Match> = data ?? [];

    const navigation = useNavigation();
    useEffect(() => {
        console.log(navigation.location);
    }, [navigation]);

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
