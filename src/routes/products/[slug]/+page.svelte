<script lang="ts">
	import CarauselProduct from '$lib/components/CarauselProduct.svelte';
	import Heading4 from '$lib/components/Heading4.svelte';
	import Heading3 from '$lib/components/Heading3.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import { img, imgSet } from '$lib/image';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	function parseData(value: string | null | undefined, splitComma = false) {
		if (!value || value === null || value === undefined) return [];
		if (Array.isArray(value)) {
			return value.map((v) => String(v).trim()).filter(Boolean);
		}

		const separator = splitComma ? /\r?\n,/ : /\r?\n/;
		return String(value)
			.split(separator)
			.map((line: string) => line.trim())
			.filter(Boolean);
	}

	const certification = $derived(parseData(data.product.certification));
	const ukuran = $derived(parseData(data.product.ukuran));
</script>

<section class="mx-2 mt-10 flex flex-col gap-2 xl:mx-20 xl:grid xl:grid-cols-3 xl:gap-4">
	<div class="aspect-2/3 xl:hidden"></div>
	<div class="texwhi rounded-xl bg-primary p-6 text-white">
		<Heading3 class="text-left font-bold text-white">{data.product.name}</Heading3>
		<span class="text-sm">Tersedia dalam ukuran:</span>
		{#each ukuran as u, i}
			<span class="text-sm">{u}{i < ukuran.length - 1 ? ',' : ''} </span>
		{/each}
		<span class="text-sm">{data.product.ukuranMetric}</span>
		<div
			class="my-10 rounded-full bg-secondary px-5 py-1 text-center text-primary xl:px-8 xl:py-1"
		></div>
		<Paragraph class="text-white">
			{data.product.desc}
		</Paragraph>
	</div>
	<div class="aspect-2/3 bg-gray-50 xl:sticky xl:top-4 xl:self-start">
		<img
			src={img(data.product.r2Cover, 800)}
			srcset={imgSet(data.product.r2Cover)}
			sizes="320px"
			loading="lazy"
			class="h-full w-full object-cover object-center mix-blend-multiply
              brightness-95
              "
			alt={data.product.name}
		/>
	</div>
	<div class="aspect-2/3 bg-gray-50 xl:sticky xl:top-4 xl:self-start"></div>
</section>
{#if certification.length > 1}
	<section>
		<div
			class="mx-2 mb-20 grid grid-cols-2 gap-4 rounded-full bg-primary px-5 py-2 text-center text-white lg:grid-cols-3
    xl:mx-4 xl:px-8 xl:py-4"
		>
			{#each certification as c}
				<Paragraph class="text-sm  text-white xl:text-base">{c}</Paragraph>
			{/each}
		</div>
	</section>
{/if}

<section>
	<div
		class="mx-2 mb-20 rounded-full bg-secondary px-5 py-2 text-center text-primary xl:mx-4 xl:px-8 xl:py-4"
	>
		<Paragraph class="text-sm font-bold xl:text-base"
			>Simpan di tempat kering, sejuk, dan terlindungi dari cahaya matahari</Paragraph
		>
	</div>
</section>

<section>
	<Heading4 class="mb-10 px-2 text-left font-bold lg:px-4">Other Products</Heading4>
	<CarauselProduct item={data.products}></CarauselProduct>
</section>
