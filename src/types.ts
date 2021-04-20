export type StoreItemInfo = {
	name: string;
	price: number;
	img: string;
	desc: string;
}

export type CartItem = {
	quantity: number;
} & StoreItemInfo
