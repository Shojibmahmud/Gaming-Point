import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const SortSelector = () => {
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<ChevronDownIcon></ChevronDownIcon>}>
				Ordered By: Relevance
			</MenuButton>
			<MenuList>
				<MenuItem>Relevance</MenuItem>
				<MenuItem>Date Added</MenuItem>
				<MenuItem>Name </MenuItem>
				<MenuItem>Release Date</MenuItem>
				<MenuItem>Popularity</MenuItem>
				<MenuItem>Average Ratting</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
