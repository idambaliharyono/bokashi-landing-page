<script lang="ts">
	import CarauselProduct from '$lib/components/CarauselProduct.svelte';
	import type { PageData } from './$types';
	import Heading4 from '$lib/components/Heading4.svelte';
	import SkeletonProducts from '$lib/components/SkeletonProducts.svelte';

	let { data }: { data: PageData } = $props();
</script>

<div class="mt-2 text-left font-bold lg:mt-8">
	<Heading4 class="mb-4 px-2 text-left lg:mb-8 lg:px-4">PRODUK</Heading4>
	{#await data.products}
		<section class="mb-20">
			<Heading4 class="mb-2 px-2 text-left lg:mb-10 lg:px-4">Health Products</Heading4>
			<SkeletonProducts></SkeletonProducts>
		</section>
		<section>
			<Heading4 class="mb-2 px-2 text-left lg:mb-10 lg:px-4">Beauty Products</Heading4>
			<SkeletonProducts></SkeletonProducts>
			<div></div>
		</section>
	{:then products}
		<section class="mb-20">
			<Heading4 class="mb-2 px-2 text-left lg:mb-10 lg:px-4">Health Products</Heading4>
			<CarauselProduct item={products.filter((p) => p.tag === 'health')}></CarauselProduct>
		</section>

		<section>
			<Heading4 class="mb-2 px-2 text-left lg:mb-10 lg:px-4">Beauty Products</Heading4>
			<CarauselProduct item={products.filter((p) => p.tag === 'beauty')}></CarauselProduct>
		</section>
	{/await}
</div>
