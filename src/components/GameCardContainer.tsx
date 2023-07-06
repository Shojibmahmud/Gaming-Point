import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Poperties {
	children: ReactNode;
}

const GameCardContainer = ({ children }: Poperties) => {
	return (
		<Box borderRadius={10} overflow="hidden">
			{children}
		</Box>
	);
};

export default GameCardContainer;
