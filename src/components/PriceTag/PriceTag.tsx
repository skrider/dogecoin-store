import React, {useState} from 'react';
import {Text, TextProps, Image, Flex, Box} from '@chakra-ui/react'
import {DogeLogo, DogeExchangeRate} from "../../constants";
export type PriceTagProps = {
	isDoge: boolean,
	price: number
} & TextProps;

const PriceTag: React.FC<PriceTagProps> = ({isDoge, price, ...props}: PriceTagProps) => {
  const [mode, setMode] = useState(isDoge);

  const formatPrice = (price : number) : string => {
  	return `${price.toFixed(2)}`
  }

	return (
    <Box onClick={() => setMode(!mode)} cursor={'pointer'} userSelect={'none'}>
	    {mode ?
		    <Flex alignItems={'center'}>
			    <Image
				    src={DogeLogo}
				    alt={"D$ "}
            boxSize={'20px'}
			    />
			    <Text {...props}>
				    {formatPrice(price/(DogeExchangeRate + Math.random() * 0.5 - 0.25))}
			    </Text>
		    </Flex>
		    :
		    <Text {...props}>
			    ${formatPrice(price)}
		    </Text>
	    }
    </Box>
 );
};

export default PriceTag;