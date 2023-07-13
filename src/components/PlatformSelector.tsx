import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
	const { data, error } = usePlatforms();
	if (error) return null;
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<ChevronDownIcon></ChevronDownIcon>}>
				Platform
			</MenuButton>
			<MenuList>
				{data.map((each_platform) => (
					<MenuItem key={each_platform.id}> {each_platform.name}</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
