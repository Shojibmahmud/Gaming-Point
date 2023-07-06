import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageURL from "../services/image-url";

const GenreList = () => {
	const { data } = useGenre();
	return (
		<List>
			{data.map((genre) => (
				<ListItem key={genre.id} paddingY="5px">
					<HStack>
						<Image
							boxSize="32px"
							borderRadius={8}
							src={getCroppedImageURL(genre.image_background)}></Image>
						<Text fontSize="lg"> {genre.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
