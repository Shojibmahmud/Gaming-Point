import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface Props {
	onSelectSortOrder: (sortOrder: string) => void;
	sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
	const sortOrders = [
		{ value: "", lebel: "Relevence" },
		{ value: "-added", lebel: "Date Added" },
		{ value: "name", lebel: "Name" },
		{ value: "-release", lebel: "Release Date" },
		{ value: "-metacritic", lebel: "Popularity" },
		{ value: "-rating", lebel: "Average Rating" },
	];

	const currentSortOrder = sortOrders.find(
		(order) => order.value === sortOrder,
	);

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<ChevronDownIcon></ChevronDownIcon>}>
				Ordered By: {currentSortOrder?.lebel || "Relevance"}
			</MenuButton>
			<MenuList>
				{sortOrders.map((order) => (
					<MenuItem
						onClick={() => onSelectSortOrder(order.value)}
						key={order.value}
						value={order.value}>
						{order.lebel}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
