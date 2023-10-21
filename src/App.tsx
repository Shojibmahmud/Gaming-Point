import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform_props } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
	Genre: Genre | null;
	Platform: Platform_props | null;
	sortOrder: string;
	SearchText: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<Grid
			templateAreas={{
				base: `"nav" " main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr",
			}}>
			<GridItem area="nav">
				<NavBar
					onSearch={(SearchText) =>
						setGameQuery({ ...gameQuery, SearchText })
					}></NavBar>
			</GridItem>
			<Show above="lg">
				<GridItem area="aside" paddingX={5}>
					<GenreList
						selectedGenre={gameQuery.Genre}
						onSelectGenre={(genreObject) =>
							setGameQuery({ ...gameQuery, Genre: genreObject })
						}></GenreList>
				</GridItem>
			</Show>

			<GridItem area="main">
				<Box paddingLeft="10px">
					<GameHeading gameQuery={gameQuery}></GameHeading>

					<Flex marginBottom="5px">
						<Box marginRight={5}>
							<PlatformSelector
								selectedPlatform={gameQuery.Platform}
								onSelectPlatform={(platform) =>
									setGameQuery({ ...gameQuery, Platform: platform })
								}></PlatformSelector>
						</Box>

						<SortSelector
							sortOrder={gameQuery.sortOrder}
							onSelectSortOrder={(sortOrder) =>
								setGameQuery({ ...gameQuery, sortOrder })
							}></SortSelector>
					</Flex>
				</Box>

				<GameGrid gameQuery={gameQuery}></GameGrid>
			</GridItem>
		</Grid>
	);
}

export default App;
