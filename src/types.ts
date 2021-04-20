export type ItemTag = string;

export type StoreItemInfo = {
	name: string;
	price: number;
	img: string;
	desc: string;
	tags: ItemTag[];
}

export type CartItem = {
	quantity: number;
} & StoreItemInfo
