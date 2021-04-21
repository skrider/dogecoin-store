export type ItemTag = string; //down the line, could get more specific, so I kept it as its own type

export type StoreItemInfo = { //raw info, nothing user-specific
	name: string;
	price: number;
	img: string;
	desc: string;
	tags: ItemTag[];
}

export type CartItem = { //user-specific
	quantity: number;
} & StoreItemInfo
