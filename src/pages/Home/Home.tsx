import React, {useState} from 'react';
import {CartItem, ItemTag} from "../../types";
import {ItemTags} from "../../constants";
import {Text, Box, Flex, Grid, Divider, Checkbox} from '@chakra-ui/react'
import ItemCard from "../../components/ItemCard";

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
	const [filterTags, setFilterTags] = useState<ItemTag[]>([])

	const onFilter = (target : ItemTag) => {
		if (filterTags.includes(target)) {
			setFilterTags(filterTags.filter(tag => !(target === tag)))
		} else {
			setFilterTags([...filterTags, target])
		}
	}

	const handleFilter = (item : CartItem) : boolean => {
		let watcher = true;
		filterTags.forEach(tag => {
			if (!item.tags.includes(tag)) {
				watcher = false;
			}
		})
		if (!watcher && filterTags.length > 0) {
			return false;
		}
		if (searchExp === '') {
			return true;
		} else {
			return item.name.toLowerCase().includes(searchExp);
		}
		return true;
	}

	return (
  <Flex
    flexDir={'row'}
    w={'100%'}
  >
	  <Flex
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
				  mt={'0.2rem'}
				  color={filterTags.includes(tag) ? 'yellow' : 'blue'}
				  onClick={() => onFilter(tag)}
				  cursor={'pointer'}
				  userSelect={'none'}
			  >
				  {filterTags.includes(tag) ? <b>{tag}</b> : tag}
			  </Text>
		  )}
	  </Flex>
	  <Flex flexDir={'column'}>
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
		  <Grid
			  gridTemplateColumns={'33% 33% 33%'}
			  gridAutoRows={'1fr'}
		  >
			  {cartItems.filter(item => handleFilter(item)).map((item, index) => {
				  return <ItemCard
					  mb={'1rem'}
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