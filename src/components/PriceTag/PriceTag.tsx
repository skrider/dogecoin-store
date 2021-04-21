import React, {useState} from 'react';
import {Text, TextProps, Image, Flex, Box} from '@chakra-ui/react'
import {DogeLogo, DogeExchangeRate} from "../../constants";

export type PriceTagProps = {
	isLocked: boolean,
	price: number
} & TextProps;

//This function renders a pricetag in either Doge or Dollars
const PriceTag: React.FC<PriceTagProps> = ({isLocked, price, ...props}: PriceTagProps) => {
	//Keep track of which currency to show
	const [mode, setMode] = useState(false);

  const formatPrice = (price : number) : string => {
  	return `${price.toFixed(2)}`
  }

	return (
    <Box onClick={() => setMode(!mode)} cursor={'pointer'} userSelect={'none'}>
	    {mode && !isLocked ? //only toggle if isLocked is false
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