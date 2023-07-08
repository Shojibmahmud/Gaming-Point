import { HStack, Icon } from "@chakra-ui/react";
import { Platform_props } from "../hooks/useGames";
import {
	FaWindows,
	FaLinux,
	FaApple,
	FaAndroid,
	FaPlaystation,
	FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Properties {
	platforms: Platform_props[];
}

const PlatformIconList = ({ platforms }: Properties) => {
	const IconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		linux: FaLinux,
		mac: FaApple,
		android: FaAndroid,
		playstation: FaPlaystation,
		xbox: FaXbox,
		ios: MdPhoneIphone,
		nintendo: SiNintendo,
		web: BsGlobe,
	};
	return (
		<HStack marginY="10px">
			{platforms.map((platform) => (
				<Icon
					key={platform.id}
					color="gray.400"
					as={IconMap[platform.slug]}></Icon>
			))}
		</HStack>
	);
};

export default PlatformIconList;
