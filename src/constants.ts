import {ItemTag, StoreItemInfo} from './types';

//Raw item info. Images stored in s3 bucket
export const StoreItemsInfo : StoreItemInfo[] = [
	{
		name: 'Tea Cup',
		price: 30,
		img: 'https://dogecoin-store.s3-us-west-1.amazonaws.com/cup.jpg',
		desc: 'This cup is great for holding tea',
		tags: [
			"small",
			"import",
			"microwave safe",
			"classy"
		]
	},
	{
		name: 'Medium Cup',
		price: 10,
		img: 'https://dogecoin-store.s3-us-west-1.amazonaws.com/S-6859.webp',
		desc: 'This is a small cup with a small description',
		tags: [
			"medium",
			"domestic",
			"kid friendly"
		]
	},
	{
		name: 'Small Cup',
		price: 20,
		img: 'https://dogecoin-store.s3-us-west-1.amazonaws.com/maxresdefault+(1).jpg',
		desc: 'Medium cup with a medium description medium description medium description medium description medium description medium description medium description',
		tags: [
			"small",
			"import",
			"microwave safe"
		]
	},
	{
		name: 'Imaginary Cup',
		price: 20,
		img: 'https://dogecoin-store.s3-us-west-1.amazonaws.com/7GXXb_EFZlnQ8VEfHSVMZ3lDRHPIWl_ozxCB94XSnzw.jpg',
		desc: 'This cup does not exist',
		tags: [
			"microwave safe"
		]
	},
	{
		name: 'Happy Cup',
		price: 20,
		img: 'https://dogecoin-store.s3-us-west-1.amazonaws.com/chip.png',
		desc: 'Medium cup with a medium description medium description medium description medium description medium description medium description medium description',
		tags: [
			"small",
			"import",
			"classy"
		]
	},
	{
		name: 'Cup Assembly Kit',
		price: 20,
		img: 'https://dogecoin-store.s3-us-west-1.amazonaws.com/broken.jpg',
		desc: 'Medium cup with a medium description medium description medium description medium description medium description medium description medium description',
		tags: [
			"medium",
			"domestic",
			"microwave safe",
			"kid friendly"
		]
	},
	{
		name: 'Big Cup',
		price: 20,
		img: 'https://dogecoin-store.s3-us-west-1.amazonaws.com/bucket.jpg',
		desc: 'long description long description long description long description long description long description long description long description long description long description long description long description long description long description long description long description ',
		tags: [
			"large",
			"domestic",
			"microwave safe",
			"durable"
		]
	},
	{
		name: 'Half Empty Cup',
		price: 15,
		img: 'https://dogecoin-store.s3-us-west-1.amazonaws.com/whitecappthumb__51873.1432003736.webp',
		desc: 'This cup is half empty',
		tags: [
			"medium"
		]
	},
	{
		name: 'Half Full Cup',
		price: 16,
		img: 'https://dogecoin-store.s3-us-west-1.amazonaws.com/cup.jpg',
		desc: 'This cup is half full',
		tags: [
			"medium"
		]
	}
]

//reduce the StoreItems array into an array containing all unique tag values
export const ItemTags : ItemTag[] = (() => {
	const accumulator : ItemTag[] = [];
	StoreItemsInfo.forEach(
		item => {
			item.tags.forEach(
				tag => {if (!accumulator.includes(tag)){
					accumulator.push(tag)
				}}
			)
		}
	);
	return accumulator;
})()

//DogeCoin Logo
export const DogeLogo : string = "https://dogecoin-store.s3-us-west-1.amazonaws.com/dogecoin.svg";

export const DogeExchangeRate : number = 0.35;
