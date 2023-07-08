import {
	Button,
	HStack,
	Image,
	LinkBox,
	List,
	ListItem,
	Spinner,
	Text,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageURL from "../services/image-url";

interface Properties {
	onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Properties) => {
	const { data, isloading, error } = useGenre();

	if (error) return null;
	if (isloading) return <Spinner></Spinner>;

	return (
		<List>
			{data.map((genre) => (
				<ListItem key={genre.id} paddingY="5px">
					<HStack>
						<Image
							boxSize="32px"
							borderRadius={8}
							src={getCroppedImageURL(genre.image_background)}></Image>
						<Button
							variant="ghost"
							fontSize="lg"
							onClick={() => onSelectGenre(genre)}>
							{" "}
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
