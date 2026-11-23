<script lang="ts">
	import CarauselProduct from '$lib/components/CarauselProduct.svelte';
	import type { PageData } from './$types';
	import Heading4 from '$lib/components/Heading4.svelte';

	let { data }: { data: PageData } = $props();
	const beauty = $derived(data.products.filter((p) => p.tag === 'beauty'));
	const health = $derived(data.products.filter((p) => p.tag === 'health'));
	$effect(() => {
		console.log(beauty);
	});
</script>

<div class="mt-2 text-left font-bold lg:mt-8">
	<Heading4 class="mb-4 px-2 text-left lg:mb-8 lg:px-4">PRODUK</Heading4>

	<section class="mb-20">
		<Heading4 class="mb-2 px-2 text-left lg:mb-10 lg:px-4">Health Products</Heading4>
		<CarauselProduct item={health}></CarauselProduct>
	</section>

	<section>
		<Heading4 class="mb-2 px-2 text-left lg:mb-10 lg:px-4">Beauty Products</Heading4>
		<CarauselProduct item={beauty}></CarauselProduct>
	</section>
</div>
