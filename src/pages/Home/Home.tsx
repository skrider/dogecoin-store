import React from 'react';
import {CartItem} from "../../types";
import {Text, Box, Flex, Divider} from '@chakra-ui/react'
import ItemCard from "../../components/ItemCard";

export type HomeProps = {
	cartItems : CartItem[],
};

const Home: React.FC<HomeProps> = ({cartItems}: HomeProps) => {

	return (
  <Flex
    flexDir={'row'}
  >
	  <Flex flexDir={'row'} >
		  {cartItems.map((item, index) => {
			  return <ItemCard item={item} onClick={(target: any) => console.log(target)} handleFilter={(action: any) => console.log(action)} />
		  })}
	  </Flex>
  </Flex>
 );
};

export default Home;