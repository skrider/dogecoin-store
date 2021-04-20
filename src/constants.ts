import { StoreItemInfo } from './types';

export const StoreItemsInfo : StoreItemInfo[] = [
	{
		name: 'Huel Cup',
		price: 30,
		img: 'https://dogecoin-store.s3-us-west-1.amazonaws.com/cup.jpg',
		desc: 'long description long description long description long description long description long description long description long description long description long description long description long description long description long description long description long description ',
		tags: [
			"organic",
			"nutritionally complete",
			"non GMO",
			"kid friendly",
		]
	},
	{
		name: 'Small Cup',
		price: 10,
		img: 'https://dogecoin-store.s3-us-west-1.amazonaws.com/cup.jpg',
		desc: 'This is a small cup with a small description',
		tags: [
			"organic",
			"non GMO",
			"kid friendly",
		]
	},
	{
		name: 'Medium Cup',
		price: 20,
		img: 'https://dogecoin-store.s3-us-west-1.amazonaws.com/cup.jpg',
		desc: 'Medium cup with a medium description medium description medium description medium description medium description medium description medium description',
		tags: [
			"volatile",
			"grass fed",
			"non GMO",
			"kid friendly",
		]
	},
	{
		name: 'Half Empty Cup',
		price: 15,
		img: 'https://dogecoin-store.s3-us-west-1.amazonaws.com/cup.jpg',
		desc: 'This cup is half empty',
		tags: [
			"organic",
			"nutritionally complete",
			"orange",
		]
	},
	{
		name: 'Half Full Cup',
		price: 16,
		img: 'https://dogecoin-store.s3-us-west-1.amazonaws.com/cup.jpg',
		desc: 'This cup is half full',
		tags: [
			"organic",
			"half full",
			"stable",
			"kid friendly",
		]
	}
]

export const DogeLogo : string = "https://dogecoin-store.s3-us-west-1.amazonaws.com/dogecoin.svg";

export const DogeExchangeRate : number = 0.35;
