import {Match, MatchesResponse} from "../model/Match";
import {plainToClass} from "class-transformer";

const {REACT_APP_FOOTBALL_API_KEY} = process.env;
export async function getMatchesFromApi(competitionId: number): Promise<Array<Match>> {
    if (!REACT_APP_FOOTBALL_API_KEY) {
        // You can just register on api.football-data.org to generate your own free key.
        throw new Error("Please put your own key in the .env.local file as REACT_APP_FOOTBALL_API_KEY value");
    }
    const fetchOptions: RequestInit = {
        method: 'GET',
        headers: {
            'X-Auth-Token': REACT_APP_FOOTBALL_API_KEY
        }
    };

    // This actually queries https://api.football-data.org/, see the proxy I've set in package.json to prevent CORS errors
    const response = await fetch(`http://localhost:3000/v4/competitions/${competitionId}/matches`, fetchOptions);
    const json = await response.json();
    const matchesResponse: MatchesResponse = plainToClass(MatchesResponse, json as Object);
    return matchesResponse.matches;
}
