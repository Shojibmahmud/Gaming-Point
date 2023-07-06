import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImageURL from "../services/image-url";

const GenreList = () => {
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
						<Text fontSize="lg"> {genre.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
