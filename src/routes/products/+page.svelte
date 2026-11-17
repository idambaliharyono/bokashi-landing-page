<script lang="ts">
	import { imgSet, img } from '$lib/image';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<h1>Produk</h1>

<section>
	{#each data.products as p (p.id)}
		<a href="/products/{p.slug}">
			<img
				src={img(p.cover)}
				srcset={imgSet(p.cover)}
				class="max-w-40"
				loading="lazy"
				alt={p.name}
			/>
			<h2>{p.name}</h2>
		</a>
	{/each}
	<h2>Health Product</h2>
	<!-- product photo roll -->
	<div></div>
	<!-- product photo roll -->
</section>

<section>
	<h2>Beauty Product</h2>
</section>
