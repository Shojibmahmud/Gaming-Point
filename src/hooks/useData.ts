import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<GenericObject> {
	count: number;
	results: GenericObject[];
}

const useData = <GenericObject>(
	endPoint: string,
	requestconfig?: AxiosRequestConfig,
	dependancies?: any[],
) => {
	const [data, setData] = useState<GenericObject[]>([]);
	const [error, setError] = useState("");
	const [isloading, setLoading] = useState(false);

	useEffect(
		() => {
			const controller = new AbortController();

			setLoading(true);
			apiClients
				.get<FetchResponse<GenericObject>>(endPoint, {
					signal: controller.signal,
					...requestconfig,
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
		},
		dependancies ? [...dependancies] : [],
	);

	return { data, error, isloading };
};

export default useData;
