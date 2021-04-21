import React, { useState } from 'react';
import {Text, Box, Flex, Divider} from '@chakra-ui/react'

import { StoreItemsInfo } from './constants'
import { CartItem } from "./types";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ItemModal from "./components/ItemModal";

function App() {
  const [CartItems, setCartItems] = useState(StoreItemsInfo.map(item => {
    return {...item, quantity: 1} as CartItem
  }))

  const [searchExp, setSearchExp] = useState<string>('')
  const [showItem, setShowItem] = useState<string>('none')

  const changeQuantity = (name : string, newQuantity : number) => {
    const index = CartItems.findIndex(item => item.name == name);
    setCartItems(CartItems.map((item, i) => {
      if (index === i) {
        item.quantity = Math.max(newQuantity, 0)
      }
      return item
    }))
  }

  const onItemModalClose = () => setShowItem('any');

  return (
    <Box w={'100%'}>
      <Navbar setSearch={setSearchExp} toCart={() => console.log("cart")} />
      {CartItems.map((item) =>
        <ItemModal
          item={item}
          quantity={item.quantity}
          isOpen={item.name === showItem}
          onClose={onItemModalClose}
          changeQuantity={(value : number) => changeQuantity(item.name, value)}
        />
      )}
      {/*<Home*/}
      {/*  cartItems={CartItems}*/}
      {/*  searchExp={searchExp}*/}
      {/*  setShowItem={(target: string) => setShowItem(target)}*/}
      {/*/>*/}
      <Divider
        color={'blue'}
        border={'3'}
      />
      <Cart
        CartItems={
          CartItems
            .filter(item => {
              return item.quantity > 0;
            })
            .filter(item => {
              if (searchExp === '') {
                return true;
              } else {
                return item.name.toLowerCase().includes(searchExp);
              }
            })
        }
        setShowItem={(target: string) => setShowItem(target)}
      />
    </Box>
  );
}

export default App;
