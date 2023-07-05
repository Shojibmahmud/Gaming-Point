import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";

interface Genre {
	id: number;
	name: string;
}
interface FetchGenreResponse {
	count: number;
	results: Genre[];
}

const useGenre = () => {
	const [genres, setGenres] = useState<Genre[]>([]);
	const [error, setError] = useState("");
	const [isloading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		setLoading(true);
		apiClients
			.get<FetchGenreResponse>("/genres", { signal: controller.signal })
			.then((res) => {
				setGenres(res.data.results);
				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
			});

		return () => controller.abort();
	}, []);

	return { genres, error, isloading };
};

export default useGenre;
