export interface LabeledItem {
	label: string;
	text: string;
}

export interface Product {
	id: number | string;
	slug: string;
	name: string;
	desc: string;
	ukuran: string;
	ukuranMetric: string;
	tag: string;
	kegunaan: string;
	caraPakai: string;
	storageRecommendation: string;
	komposisi: string;
	shopee: string;
	tokopedia: string;
	lazada: string;
	certification: string;
	r2Cover: string;
	r2Other: string;
}

export type ProductSummary = Pick<Product, 'slug' | 'name' | 'tag' | 'id'> & {
	cover: string;
};
