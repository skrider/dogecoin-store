import React from 'react';
import {Box, Flex, Link, Text, BoxProps} from "@chakra-ui/react";
import {CartItem} from "src/types";

export type RecoverCardProps = {
	item: CartItem,
	changeQuantity: (value : number) => void,
	onBanish: () => void,
} & BoxProps;

//This card renders a small box asking whether the user wants to restore an item after deleting it
const RecoverCard: React.FC<RecoverCardProps> = ({item, changeQuantity, onBanish, ...props}: RecoverCardProps) => {
 return (
	 <Flex
		 p={'1rem'}
		 borderRadius={'md'}
		 boxShadow={'md'}
		 flexDir={'row'}
		 justifyContent={'left'}
		 alignItems={'center'}
		 bg={'white'}
		 {...props}
	 >
		 <Text
			 fontSize={'lg'}
			 color={'blue'}
		 >
			 <b>{item.name}</b> was removed.
		 </Text>
	   <Box flex={'1'} />
		 <Link //Restore the item by incrementing its quantity
			 onClick={() => {
				 changeQuantity(1)
				 onBanish()
			 }}
			 fontSize={'sm'}
			 mr={'1rem'}
			 lineHeight={'75%'}
		 >
			 Restore
		 </Link>
		 <Link //Delete the item without incrementing
			 onClick={onBanish}
			 fontSize={'sm'}
			 mr={'1rem'}
			 lineHeight={'75%'}
		 >
			 Delete
		 </Link>
	 </Flex>
 );
};

export default RecoverCard;