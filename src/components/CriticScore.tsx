import { Badge } from "@chakra-ui/react";
import { color } from "framer-motion";

interface Properties {
	ratting: number;
}

const CriticScore = ({ ratting }: Properties) => {
	let color = ratting > 75 ? "green" : ratting > 60 ? "yellow" : "";

	return (
		<Badge fontSize="14px" borderRadius="5px" colorScheme={color}>
			{" "}
			{ratting}
		</Badge>
	);
};

export default CriticScore;
