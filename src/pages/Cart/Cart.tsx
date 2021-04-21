import React, {useEffect, useState} from 'react';
import {CartItem} from "../../types";
import {Flex, Box, Text, Divider, Button, Link as ChakraLink} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import CartCard from "./components/CartCard"
import PriceTag from "../../components/PriceTag";
import RecoverCard from "./components/RecoverCard";

export type CartProps = {
	CartItems: CartItem[],
	searchExp: string,
	setShowItem: (target: any) => void,
	changeQuantity: (name: string, value: number) => void
};

const Cart: React.FC<CartProps> = (
	{CartItems,
		searchExp,
		setShowItem,
		changeQuantity}: CartProps) => {

	// Keep track of the last item removed
	const [removed, setRemoved] = useState<string>();

	// Automatically maintain a filtered list of items to be shown in the cart
	const [filteredItems, setFilteredItems] = useState<CartItem[]>([]);
	useEffect(() => setFilteredItems(CartItems.filter(item => { // reject all items with quantity = 0, but keep the last one removed
		return item.quantity > 0 || item.name === removed;
	})), [removed])

	return (
 	 <Flex>
		 <Flex //Flex containing cart items
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
				 mb={'0.5rem'}
			 />
			 {filteredItems.filter(item => { // if search is active, reject non-matches
				 	 if (searchExp === '') {
				 		 return true;
				 	 } else {
				 		 return item.name.toLowerCase().includes(searchExp);
				 	 }
			 	 })
				 .map((item, index) => { // choose whether to render a RecoverCard or a CartCard depending on whether item was removed
				 return (item.name === removed ?
				 		 <RecoverCard
							 key={`${item.name}${index}`}
							 item={item}
							 mb={'1rem'}
							 changeQuantity={(value: number) => {
								 changeQuantity(item.name, value)
							 }}
							 onBanish={() => setRemoved('')}
						 />
						 :
						 <CartCard
							 key={`${item.name}${index}`}
							 item={item}
							 onClick={() => setShowItem(item.name)}
							 mb={'1rem'}
							 changeQuantity={
								 (value: number) => {
									 if (value === 0) {
										 setRemoved(item.name)
									 }
									 changeQuantity(item.name, value)
				 				 }
							 }
						 />
					 )
			 })}
			 {filteredItems.length === 0 ?
				 <Text
				   color={'blue'}
				   alignSelf={'center'}
				   fontSize={'xl'}
				   m={'3rem'}
				 >
					 Your cart is empty. Time to shop!
				 </Text>
			 :
			    <></>
			 }
		 </Flex>
	   <Flex //flex box containing names and prices
	     flexDir={'column'}
	     flex={'1'}
	     mx={'1rem'}
	     alignItems={'flex-end'}
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
		   {filteredItems
			   .map((item, index) =>
				   <Flex
					   key={`${item}${index}`}
				     w={'100%'}
				   >
					   <Text>
						   {item.name}
					   </Text>
					   <Box flex={'1'}/>
					   <PriceTag
						   isLocked={false}
						   price={item.price * item.quantity}
					   />
				   </Flex>
			   )
		   }
		   <Divider
			   color={'blue'}
			   border={'3'}
		   />
		   <PriceTag
			   isLocked={false}
			   fontSize={'lg'}
			   color={'yellow'}
			   price={
			   	[...CartItems.map(item => item.price * item.quantity), 0] //making sure array is never empty
				    .reduce((sum, num) => sum + num) //sum all items currently added to cart
			   }
		   />
		   <Button //Dummy checkout button
		     bg={'yellow'}
		     mt={'1rem'}
		     alignSelf={'center'}
		   >
			   Checkout
		   </Button>
		   <ChakraLink //React-Router link to homepage wrapped by chakra link for styling
			   mt={'0.5rem'}
			   alignSelf={'center'}
		   >
			   <Link to={'/'}>
					   Continue Shopping...
			   </Link>
		   </ChakraLink>
	   </Flex>
   </Flex>
 );
};

export default Cart;