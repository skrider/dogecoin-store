import React from 'react';
import {Flex, Text, Input, Icon} from '@chakra-ui/react'
import {BiCart} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import {BsFillPersonFill} from 'react-icons/bs'

export type NavbarProps = {
	setSearch: (value : string) => void,
};

const Navbar: React.FC<NavbarProps> = ({setSearch}: NavbarProps) => {
 return (
   <Flex
	   w={'100%'}
	   h={'4rem'}
	   p={'0.75rem'}
	   flexDir={'row'}
	   justifyContent={'space-between'}
	   bg={'blue'}
   >
	   <Link to={'/'}>
		   <Text color={'yellow'} fontSize={'1.5rem'}>
			   <b>DogeCoin</b> Store
		   </Text>
	   </Link>
	   <Flex h={'100%'}>
		   <Input //search bar for both Store and Cart views
			   as="input"
			   height="auto"
			   borderRadius="2xl"
			   name="Search"
			   color={'yellow'}
			   placeholder="Search..."
			   onChange={(event) => setSearch(event.target.value.toLowerCase())}
			   _focus={{
				   boxShadow: 'md',
			   }}
			   mr={'0.5rem'}
		   />
		   <Link to={'/cart'}>
			   <Icon //react router link to cart
				   as={BiCart}
				   color={'yellow'}
				   boxSize={'40px'}
				   mr={'0.5rem'}
			   />
		   </Link>
		   <Icon
			   as={BsFillPersonFill}
			   boxSize={'40px'}
			   color={'yellow'}
			   mr={'0.5rem'}
		   />
	   </Flex>
   </Flex>
 );
};

export default Navbar;