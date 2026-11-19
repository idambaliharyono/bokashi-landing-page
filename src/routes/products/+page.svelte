<script lang="ts">
	import CarauselProduct from '$lib/components/CarauselProduct.svelte';
	import type { PageData } from './$types';
	import Heading4 from '$lib/components/Heading4.svelte';

	let { data }: { data: PageData } = $props();
	const beauty = $derived(data.products.filter((p) => p.tag === 'beauty'));
	const health = $derived(data.products.filter((p) => p.tag === 'health'));
</script>

<div class="mt-8 text-left font-bold">
	<Heading4 class="mb-8 px-2 text-left lg:px-4">PRODUK</Heading4>

	<section class="mb-20">
		<Heading4 class="mb-10 px-2 text-left lg:px-4">Health Products</Heading4>
		<CarauselProduct item={health}></CarauselProduct>
	</section>

	<section>
		<Heading4 class="mb-10 px-2 text-left lg:px-4">Beauty Products</Heading4>
		<CarauselProduct item={beauty}></CarauselProduct>
	</section>
</div>
