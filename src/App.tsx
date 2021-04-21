import React, { useState } from 'react';
import {Box, Flex} from '@chakra-ui/react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import { StoreItemsInfo } from './constants'
import { CartItem } from "./types";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ItemModal from "./components/ItemModal";
import Footer from './components/Footer';

function App() {
	//Append a new field, quantity, to StoreItems
  const [CartItems, setCartItems] = useState(StoreItemsInfo.map(item => {
    return {...item, quantity: 0} as CartItem
  }))

	//keep track of search bar at root level
  const [searchExp, setSearchExp] = useState<string>('')
	//keep track of modals to be shown
  const [showItem, setShowItem] = useState<string>('none')

	//update quantity of an item in cart
  const changeQuantity = (name : string, newQuantity : number) => {
  	//index of item to update
    const index = CartItems.findIndex(item => item.name === name);
    setCartItems(CartItems.map((item, i) => {
    	//Map all old elements, except one, which is updated. Not the best way to do this but works.
      if (index === i) {
        item.quantity = Math.max(newQuantity, 0)
      }
      return item
    }))
  }

  const onItemModalClose = () => setShowItem('none'); //close modal

  return (
    <Router>
	    <Flex
	      bg={'#f2f5fa'}
	      minH={'1600px'}
	      flexDir={'column'}
	    >
	      <Navbar setSearch={setSearchExp} />
	      {CartItems.map((item, index) =>
	        <ItemModal // keep all the modals at root level ready to be rendered
		        key={`${item.name}modal${index}`}
		        item={item}
	          quantity={item.quantity}
	          isOpen={item.name === showItem}
	          onClose={onItemModalClose}
	          changeQuantity={(value : number) => changeQuantity(item.name, value)}
	        />
	      )}
		    <Switch>
			    <Route path="/cart">
				    <Cart //Component for Cart page
					    CartItems={CartItems}
					    searchExp={searchExp}
					    setShowItem={(target: string) => setShowItem(target)}
					    changeQuantity={changeQuantity}
				    />
			    </Route>
			    <Route path="/">
				    <Home //Component for Home page
					    cartItems={CartItems}
					    searchExp={searchExp}
					    setShowItem={(target: string) => setShowItem(target)}
				    />
			    </Route>
		    </Switch>
	      <Box flex={'1'}/>
	      <Footer />
	    </Flex>
    </Router>
  );
}

export default App;
