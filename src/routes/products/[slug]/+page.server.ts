import { getProducts } from '$lib/server/product';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch, setHeaders }) => {
	const products = await getProducts(fetch);
	const product = products.find((p) => p.slug === params.slug);

	if (!product) throw error(404, 'products not found');

	setHeaders({ 'cache-control': 'public, max-age=300, s-maxage=3600' });
	return { product };
};
