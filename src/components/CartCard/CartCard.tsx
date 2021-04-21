import React from 'react';
import {Flex, Box, Text, Image, Divider, BoxProps} from '@chakra-ui/react';
import {CartItem} from '../../types'
import PriceTag from "../PriceTag";

export type CartCardProps = {
	item: CartItem,
	onClick: () => void,
} & BoxProps;

const CartCard: React.FC<CartCardProps> = (
	{item: {name, price, img, desc, tags},
		onClick,
		...props}: CartCardProps) => {
 return (
	 <Flex
		 p={'2rem'}
		 h={'10rem'}
		 borderRadius={'md'}
		 boxShadow={'md'}
		 color={'white'}
		 flexDir={'row'}
		 justifyContent={'left'}
		 onClick={onClick}
		 {...props}
	 >
		 <Image
			 src={img}
			 alt={name}
			 w={'auto'}
			 h={'100%'}
		 />
		 <Flex
		   flexDir={'column'}
		   justifyContent={'left'}
		 >
			 <Text
				 fontSize={'3xl'}
				 color={'blue'}
			 >
				 <b>{name}</b>
			 </Text>
			 <Divider
			 	 color={'blue'}
			 	 border={'3'}
			 />
			 <PriceTag isDoge={false} price={price} />
		 </Flex>
  </Flex>
 );
};

export default CartCard;