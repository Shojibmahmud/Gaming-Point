import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
	const heading = `${gameQuery.Platform?.name || ""} ${
		gameQuery.Genre?.name || ""
	} Games`;

	return (
		<Heading as="h1" marginY={2}>
			{" "}
			{heading}
		</Heading>
	);
};

export default GameHeading;
