import React from 'react';
import {CartItem} from "../../types";
import {Flex, Box, Text, Divider} from "@chakra-ui/react"
import CartCard from "../../components/CartCard"
import PriceTag from "../../components/PriceTag";

export type CartProps = {
	CartItems: CartItem[],
	setShowItem: (target: any) => void,
};

const Cart: React.FC<CartProps> = ({CartItems, setShowItem}: CartProps) => {
	return (
 	 <Flex>
		 <Flex
		   flexDir={'column'}
		   flex={'3'}
		   mx={'1rem'}
		 >
			 <Text
			 	 fontSize={'4xl'}
			 	 color={'yellow'}
			 >
				 <b>Cart</b>
			 </Text>
			 <Divider
				 color={'blue'}
				 border={'3'}
			 />
			 {CartItems.map(item => {
				 return <CartCard
					 item={item}
					 onClick={() => setShowItem(item.name)}
				 />
			 })}
		 </Flex>
	   <Flex
	     flexDir={'column'}
	     flex={'1'}
	     mx={'1rem'}
	   >
		   <Text
			   fontSize={'4xl'}
			   color={'yellow'}
		   >
			   <b>Total</b>
		   </Text>
		   <Divider
			   color={'blue'}
			   border={'3'}
		   />
		   {CartItems.map(item => <PriceTag isDoge={false} price={item.price} />)}
		   <Divider
			   color={'blue'}
			   border={'3'}
		   />
		   <PriceTag
			   isDoge={false}
			   price={
			   	[...CartItems
				    .map(item => item.price)
				    ,0
			    ]
				    .reduce((sum, num) => sum + num)
			   }
		   />
	   </Flex>
   </Flex>
 );
};

export default Cart;