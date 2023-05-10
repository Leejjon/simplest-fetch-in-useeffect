import {getMatchesFromApi} from "../api/ApiCall";

export const matchesQuery = () => (
    {
        queryKey: ["matches"],
        queryFn: async () => { return await getMatchesFromApi(2021)},
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        cacheTime: 5000,
        staleTime: 4000,
        retry: false
    }
);
