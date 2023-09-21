import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platform_props {
	id: number;
	name: string;
	slug: string;
}

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform_props }[];
	metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
	useData<Game>(
		"/games",
		{
			params: {
				genres: gameQuery.Genre?.id,
				platforms: gameQuery.Platform?.id,
				ordering: gameQuery.sortOrder,
			},
		},
		[gameQuery],
	);

export default useGames;
