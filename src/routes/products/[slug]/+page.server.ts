import { getProducts } from '$lib/server/product';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { ProductSummary } from '$lib/types';

export const load: PageServerLoad = async ({ params, fetch, setHeaders }) => {
	const products = await getProducts(fetch);
	const product = products.find((p) => p.slug === params.slug);

	if (!product) throw error(404, 'products not found');
	setHeaders({ 'cache-control': 'public, max-age=300, s-maxage=3600' });

	const list: ProductSummary[] = products.map((p) => ({
		id: p.id,
		slug: p.slug,
		name: p.name,
		tag: p.tag,
		cover: p.r2Cover
	}));
	return { product, products: list };
};
