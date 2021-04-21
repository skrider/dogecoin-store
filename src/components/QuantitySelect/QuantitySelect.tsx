import React from 'react';
import {Text, Flex, Tag, BoxProps} from '@chakra-ui/react';
import {BsChevronUp, BsChevronDown} from 'react-icons/bs';

export type QuantitySelectProps = {
 quantity: number,
 changeQuantity: (value: number) => void
} & BoxProps;

//This function displays current quantity, and allows user to increment it up and down
const QuantitySelect: React.FC<QuantitySelectProps> = ({quantity, changeQuantity, ...props}: QuantitySelectProps) => {
 return (
  <Flex
    flexDir={'row'}
    spacing={'1rem'}
    alignItems={'center'}
    {...props}
  >
    <Tag //incremenet quantity up
      onClick={() => changeQuantity(quantity + 1)}
      mr={'1rem'}
      bg={'yellow'}
    >
      <BsChevronUp />
    </Tag>
    <Text
      fontSize={'2xl'}
      lineHeight={'75%'}
      userSelect={'none'}
      mb={'4px'}
      color={'blue'}
    >
      {`${quantity}`}
    </Text>
    <Tag //increment quantity down
      onClick={() => changeQuantity(quantity - 1)}
      ml={'1rem'}
      bg={'yellow'}
    >
      <BsChevronDown />
    </Tag>
  </Flex>
 );
};

export default QuantitySelect;