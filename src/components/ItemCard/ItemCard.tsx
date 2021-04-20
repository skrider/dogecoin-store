import React from 'react';
import { CartItem, ItemTag } from "../../types";
import PriceTag from "../PriceTag";
import {Text, Box, Flex, Image, Divider, Button, BoxProps} from "@chakra-ui/react"

export type ItemCardProps = {
	item: CartItem
	onClick: (target: any) => void;
	handleFilter: (target: any) => void;
} & BoxProps;

const ItemCard: React.FC<ItemCardProps> = (
	{item: {name, price, img, desc, tags},
		onClick,
		handleFilter,
		...props}) => {
 return (
  <Flex
    w={'15rem'}
    h={'22rem'}
    p={'2rem'}
    borderRadius={'md'}
    boxShadow={'md'}
    color={'white'}
    flexDir={'column'}
    justifyContent={'space-between'}
    onClick={() => onClick(name)} {...props}
  >
	  <Image
		  src={img}
		  alt={name}
		  alignSelf={'center'}
	  />
	  <Flex
	    flexDir={'column'}
	    align={'left'}
	    overflow={'hidden'}
	  >
		  <Text
		    fontSize={'xl'}
		    color={'blue'}
		  >
			  {name}
		  </Text>
		  <Divider
			  color={'blue'}
			  border={'3'}
		  />
			<PriceTag
				isDoge={false}
				price={price}
				fontSize={'xl'}
				color={'yellow'}
			/>
		  <Flex
			  flexDir={'row'}
			  w={'500px'}
			  overflow={'hidden'}
		  >
			  {tags.map(tag => {
				  return <Button
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
  </Flex>
 );
};

export default ItemCard;