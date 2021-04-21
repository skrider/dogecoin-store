import React from 'react';
import {Flex, Box, Text, Image, Divider, BoxProps, Link} from '@chakra-ui/react';
import {CartItem} from 'src/types'
import PriceTag from "src/components/PriceTag";
import QuantitySelect from "src/components/QuantitySelect";

export type CartCardProps = {
	item: CartItem,
	onClick: () => void,
	changeQuantity: (value: number) => void,
} & BoxProps;

const CartCard: React.FC<CartCardProps> = (
	{item: {name, price, img, quantity},
		onClick,
		changeQuantity,
		...props}: CartCardProps) => {
 return (
	 <Flex
		 p={'2rem'}
		 h={'10rem'}
		 borderRadius={'md'}
		 boxShadow={'md'}
		 flexDir={'row'}
		 justifyContent={'left'}
		 bg={'white'}
		 {...props}
	 >
		 <Image
			 src={img}
			 alt={name}
			 w={'auto'}
			 h={'100%'}
			 onClick={onClick}
			 cursor={'pointer'}
		 />
		 <Flex
		   flexDir={'column'}
		   justifyContent={'left'}
		   mx={'1rem'}
		   onClick={onClick}
		 >
			 <Text
				 fontSize={'2xl'}
				 color={'blue'}
			 >
				 <b>{name}</b>
			 </Text>
			 <Divider
			 	 color={'blue'}
			 	 border={'3'}
			 />
			 <PriceTag
				 isLocked={true}
				 price={price}
				 fontSize={'xl'}
				 color={'yellow'}
			 />
		 </Flex>
		 <Box flex={'1'}/>
		 <Flex
		   flexDir={'column'}
		   alignItems={'center'}
		   justifyContent={'center'}
	   >
		 	 <QuantitySelect
				 quantity={quantity}
				 changeQuantity={changeQuantity}
			 />
			 <Link
				 onClick={() => changeQuantity(0)}
				 fontSize={'sm'}
				 mt={'0.5rem'}
			 >
				 Remove
			 </Link>
		 </Flex>
  </Flex>
 );
};

export default CartCard;