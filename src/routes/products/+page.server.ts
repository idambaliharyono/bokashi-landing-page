import type { Product, ProductSummary } from '$lib/types';
import type { PageServerLoad } from './$types';
import { getProducts } from '$lib/server/product';

export const load: PageServerLoad = async ({ fetch, setHeaders }) => {
	const products: Product[] = await getProducts(fetch);

	setHeaders({ 'cache-control': 'public, max-age=300, s-maxage=3600' });

	const list: ProductSummary[] = products.map((p) => ({
		id: p.id,
		slug: p.slug,
		name: p.name,
		tag: p.tag,
		cover: p.r2Cover
	}));

	return { products: list };
};
