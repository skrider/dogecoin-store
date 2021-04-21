import React, {useState} from 'react';
import {CartItem, ItemTag} from "../../types";
import {ItemTags} from "../../constants";
import {Text, Flex, Grid, Divider, Link} from '@chakra-ui/react'
import ItemCard from "./components/ItemCard";

export type HomeProps = {
	cartItems : CartItem[],
	searchExp: string,
	setShowItem: (target: any) => void,
};

const Home: React.FC<HomeProps> = (
	{cartItems,
		searchExp,
		setShowItem
	}: HomeProps) => {
	//Contains currently selected tags
	const [filterTags, setFilterTags] = useState<ItemTag[]>([])

	//Either adds or removes a tag from the list, depending on whether it was initially present
	const onFilter = (target : ItemTag) => {
		if (filterTags.includes(target)) {
			setFilterTags(filterTags.filter(tag => !(target === tag)))
		} else {
			setFilterTags([...filterTags, target])
		}
	}

	//Callback function used to filter through the CartItem list
	const handleFilter = (item : CartItem) : boolean => {
		//first check tags
		let watcher = true;
		filterTags.forEach(tag => {
			if (!item.tags.includes(tag)) {
				watcher = false;
			}
		})
		if (!watcher && filterTags.length > 0) {
			return false;
		}
		//next check search value
		if (searchExp === '') {
			return true;
		} else {
			return item.name.toLowerCase().includes(searchExp);
		}
	}

	return (
	  <Flex
	    flexDir={'row'}
	    w={'100%'}
	  >
		  <Flex // List of Filters
			  flexDir={'column'}
			  mx={'1rem'}
		  >
			  <Text
				  fontSize={'4xl'}
				  color={'yellow'}
			  >
				  <b>Filter</b>
			  </Text>
			  <Divider
				  color={'blue'}
				  border={'3'}
				  w={'12rem'}
			  />
			  {ItemTags.map(tag =>
				  <Text
					  key={`${tag}_master`}
					  mt={'0.2rem'}
					  color={filterTags.includes(tag) ? 'yellow' : 'blue'} //render differently based on whether tag is selected
					  onClick={() => onFilter(tag)}
					  cursor={'pointer'}
					  userSelect={'none'}
				  >
					  {filterTags.includes(tag) ? <b>{tag}</b> : tag}
				  </Text>
			  )}
			  <Divider
				  color={'blue'}
				  border={'3'}
				  w={'12rem'}
				  my={'0.5rem'}
			  />
			  {filterTags.length > 0 ?
				  <Link
						color={'yellow'}
						fontSize={'sm'}
						onClick={() => setFilterTags([])}
				  >
						clear
				  </Link>
			  :
				  ''
		    }
		  </Flex>
		  <Flex //flex containing item view
			  flexDir={'column'}
		  >
			  <Text
				  fontSize={'4xl'}
				  color={'yellow'}
			  >
				  <b>Items</b>
			  </Text>
			  <Divider
				  color={'blue'}
				  border={'3'}
			  />
			  <Grid //grid containing item cards
				  gridTemplateColumns={{ base: '1fr 1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr', xl: '1fr 1fr 1fr 1fr' }}
				  gridAutoRows={'1fr'}
			  >
				  {cartItems.filter(item => handleFilter(item)).map((item, index) => {
					  return <ItemCard
						  key={`${item.name}card${index}`}
						  mb={'1rem'}
						  mt={'0.5rem'}
							mr={'1rem'}
						  item={item}
						  onClick={(target: any) => setShowItem(target)}
						  handleFilter={(action: any) => onFilter(action)}
					  />
				  })}
			  </Grid>
		  </Flex>
	  </Flex>
  );
};

export default Home;