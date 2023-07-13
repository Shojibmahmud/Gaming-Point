import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import usePlatforms from "../hooks/usePlatforms";
import { Platform_props } from "../hooks/useGames";

interface Properties {
	onSelectPlatform: (platform_object: Platform_props) => void;
	selectedPlatform: Platform_props | null;
}

const PlatformSelector = ({
	onSelectPlatform,
	selectedPlatform,
}: Properties) => {
	const { data, error } = usePlatforms();
	if (error) return null;
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<ChevronDownIcon></ChevronDownIcon>}>
				{selectedPlatform?.name || "Platforms"}
			</MenuButton>
			<MenuList>
				{data.map((each_platform) => (
					<MenuItem
						onClick={() => onSelectPlatform(each_platform)}
						key={each_platform.id}>
						{" "}
						{each_platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
