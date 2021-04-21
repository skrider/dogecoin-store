import React from 'react';
import { CartItem } from "src/types";
import PriceTag from "src/components/PriceTag";
import {Text, Flex, Image, Divider, Button, BoxProps, Grid} from "@chakra-ui/react"

export type ItemCardProps = {
	item: CartItem
	onClick: (target: any) => void;
	handleFilter: (target: any) => void;
} & BoxProps;

const ItemCard: React.FC<ItemCardProps> = (
	{item: {name, price, img, tags},
		onClick,
		handleFilter,
		...props}) => {
 return (
  <Grid
    p={'2rem'}
    borderRadius={'md'}
    boxShadow={'md'}
    bg={'white'}
    gridTemplateColumns={'1fr'}
    gridTemplateRows={'3fr 2fr'}
    {...props}
  >
	  <Flex
		  alignSelf={'center'}
		  alignItems={'center'}
	  >
		  <Image
			  src={img}
			  w={'auto'}
			  maxH={'100%'}
			  alt={name}
			  onClick={() => onClick(name)}
			  cursor={'pointer'}
		  />
	  </Flex>
	  <Flex //stack of information about item
		  flexDir={'column'}
	    alignItems={'left'}
	    overflow={'hidden'}
	  >
		  <Text
		    fontSize={'xl'}
		    color={'blue'}
		    onClick={() => onClick(name)}
		    cursor={'pointer'}
		  >
			  {name}
		  </Text>
		  <Divider
			  color={'blue'}
			  border={'3'}
		  />
			<PriceTag
				isLocked={false}
				price={price}
				fontSize={'xl'}
				color={'yellow'}
			/>
			<Flex //flex containing tags
				flexDir={'row'}
				flexWrap={'wrap'}
			>
				{tags.sort().map((tag, index) => {
					return <Button
						key={`${name}${tag}${index}`}
						bg={'yellow'}
						color={'blue'}
						fontSize={'sm'}
						p={'0.5rem'}
						m={'0.2rem'}
						h={'1.5rem'}
						lineHeight={'75%'}
						overflow={'hidden'}
						onClick={() => handleFilter(tag)}
					>
						{tag}
					</Button>})}
			</Flex>
	  </Flex>
  </Grid>
 );
};

export default ItemCard;