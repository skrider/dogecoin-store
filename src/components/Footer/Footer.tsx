import React from 'react';
import {Box, Text} from '@chakra-ui/react';

const Footer: React.FC = () => {
 return (
  <Box
    w={'100%'}
    p={'1rem'}
    bg={'blue'}
  >
	  <Text
	    fontSize={'lg'}
	    color={'yellow'}
	  >
		  This website was created by Stephen Krider
	  </Text>
  </Box>
 );
};

export default Footer;