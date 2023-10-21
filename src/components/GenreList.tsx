import {
	Button,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
	Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageURL from "../services/image-url";

interface Properties {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Properties) => {
	const { data, isloading, error } = useGenre();

	if (error) return null;
	if (isloading) return <Spinner></Spinner>;

	return (
		<>
			<Heading fontSize="2xl">Genres</Heading>
			<List>
				{data.map((genre) => (
					<ListItem key={genre.id} paddingY="5px">
						<HStack>
							<Image
								objectFit="cover"
								boxSize="32px"
								borderRadius={8}
								src={getCroppedImageURL(genre.image_background)}></Image>
							<Button
								whiteSpace="normal"
								textAlign="left"
								variant="ghost"
								fontSize="lg"
								fontWeight={genre.id == selectedGenre?.id ? "bold" : "normal"}
								onClick={() => onSelectGenre(genre)}>
								{" "}
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
