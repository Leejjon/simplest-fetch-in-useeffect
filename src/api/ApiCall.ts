import {Match, MatchesResponse} from "../model/Match";
import {footballDataKey} from "../secrets/Key";
import {plainToClass} from "class-transformer";

export async function getMatchesFromApi(competitionId: number): Promise<Array<Match>> {
    const fetchOptions: RequestInit = {
        method: 'GET',
        headers: {
            // Just a String in a file I filtered in the .gitignore because I don't want my key to leak.
            // You can just register on api.football-data.org to generate your own free key.
            'X-Auth-Token': footballDataKey
        }
    };

    // This actually queries https://api.football-data.org/, see the proxy I've set in package.json to prevent CORS errors
    const response = await fetch(`http://localhost:3000/v4/competitions/${competitionId}/matches`, fetchOptions);
    const json = await response.json();
    const matchesResponse: MatchesResponse = plainToClass(MatchesResponse, json as Object);
    return matchesResponse.matches;
}
