import React from 'react';
import {CartItem} from "../../types";
import {DogeExchangeRate} from "../../constants";
import {Text, Box, Flex, Image, Divider, BoxProps} from "@chakra-ui/react"


export type ItemCardProps = {
	item: CartItem
	isDoge: boolean
	onClick: () => void;
} & BoxProps;

const ItemCard: React.FC<ItemCardProps> = ({item: {name, price, img, desc}, isDoge, onClick, ...props}) => {
 return (
  <Box >
	  <Flex>
		  <Image />
		  <Text>{name}</Text>
		  <Divider />
			<Text>{`$${price}.00`}</Text>
	  </Flex>
  </Box>
 );
};

export default ItemCard;