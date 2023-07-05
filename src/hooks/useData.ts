import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";

interface FetchResponse<GenericObject> {
	count: number;
	results: GenericObject[];
}

const useData = <GenericObject>(endPoint: string) => {
	const [data, setData] = useState<GenericObject[]>([]);
	const [error, setError] = useState("");
	const [isloading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		setLoading(true);
		apiClients
			.get<FetchResponse<GenericObject>>(endPoint, {
				signal: controller.signal,
			})
			.then((res) => {
				setData(res.data.results);
				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
			});

		return () => controller.abort();
	}, []);

	return { data, error, isloading };
};

export default useData;
