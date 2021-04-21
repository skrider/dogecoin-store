import React from 'react';
import {CartItem} from "../../types";
import QuantitySelect from "../QuantitySelect";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Image,
	Button,
	Text, Flex
} from "@chakra-ui/react"
import PriceTag from "../PriceTag";

export type ItemModalProps = {
	item: CartItem,
	quantity: number,
	isOpen: boolean,
	onClose: () => void,
	changeQuantity: (value: number) => void
};

const ItemModal: React.FC<ItemModalProps> = (
	{item,
		quantity,
		isOpen,
		onClose,
		changeQuantity}: ItemModalProps) => {
	return (
	 <Modal isOpen={isOpen} onClose={onClose}>
		 <ModalOverlay />
		 <ModalContent>
			 <ModalHeader userSelect={'none'}>{item.name}</ModalHeader>
			 <ModalCloseButton />
			 <ModalBody>
				 <Image
					 src={item.img}
	         alt={item.name}
	         userSelect={'none'}/>
				 <PriceTag isDoge={false} price={item.price} />
				 <Flex
					 flexDir={'row'}
					 flexWrap={'wrap'}
				 >
					 {item.tags.sort().map(tag => {
						 return <Button
							 bg={'yellow'}
							 color={'blue'}
							 fontSize={'sm'}
							 p={'0.5rem'}
							 m={'0.2rem'}
							 h={'1.5rem'}
							 lineHeight={'75%'}
							 overflow={'hidden'}
						 >
							 {tag}
						 </Button>})}
				 </Flex>
         <Text
					 color={'blue'}
					 size={'md'}
					 userSelect={'none'}
				 >
					 {item.desc}
				 </Text>
			 </ModalBody>
			 <ModalFooter flex={'flex'} flexDir={'row'} justifyContent={'center'}>
				 <QuantitySelect quantity={quantity} changeQuantity={changeQuantity} />
			 </ModalFooter>
		 </ModalContent>
	 </Modal>
	);
};

export default ItemModal;