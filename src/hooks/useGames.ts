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

const useGames = (
	selectedGenre: Genre | null,
	selectedPlatform: Platform_props | null,
) =>
	useData<Game>(
		"/games",
		{ params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
		[selectedGenre?.id, selectedPlatform?.id],
	);

export default useGames;
