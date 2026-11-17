import type { Product } from '$lib/types';

const url =
	'https://script.google.com/macros/s/AKfycbzPaQHa6E6_-WWYECTcRFHMDpDWlQlkgyrc49r_aVJX8Loq6xIq3YjksID-msoVU-WJ/exec';

export async function getProducts(fetchFn: typeof fetch): Promise<Product[]> {
	const res = await fetchFn(url);

	if (!res.ok) throw new Error(`appscript returned ${res.status}`);

	return (await res.json()) as Product[];
}
