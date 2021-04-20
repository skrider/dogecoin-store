import React, {useState} from 'react';
import { Text, Box, Flex } from '@chakra-ui/react'

import { StoreItemsInfo } from './constants'
import { CartItem } from "./types";
import ItemCard from "./components/ItemCard";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [CartItems, setCartItems] = useState(StoreItemsInfo.map(item => {
    return {...item, quantity: 0} as CartItem
  }))

  return (
    <>
      <Navbar setSearch={(target: string) => console.log(target)} toCart={() => console.log("cart")} />
      <Home cartItems={CartItems} />
    </>
  );
}

export default App;
