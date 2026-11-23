<script lang="ts">
	import CarauselProduct from '$lib/components/CarauselProduct.svelte';
	import Heading4 from '$lib/components/Heading4.svelte';
	import Heading3 from '$lib/components/Heading3.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import { img, imgSet } from '$lib/image';
	import type { PageData } from './$types';
	import { ChevronRight, CircleChevronRight, CircleChevronLeft } from '@lucide/svelte';
	import lazadaLogo from '$lib/assets/lazadaLogo.png';
	import shopeeLogo from '$lib/assets/shopeeLogo.png';
	import tokopediaLogo from '$lib/assets/tokopediaLogo.png';

	let { data }: { data: PageData } = $props();
	const product = $derived(data.product);

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

	const certification = $derived(parseData(product.certification));
	const ukuran = $derived(parseData(product.ukuran));
	const kegunaan = $derived(parseData(product.kegunaan));
	const caraPakai = $derived(parseData(product.caraPakai));

	const cover = $derived(product.r2Cover);
	const otherImg = $derived(parseData(product.r2Other));
	const mobileProductImg = $derived([...(cover ? [cover] : []), ...otherImg]);

	let current = $state(0);

	function nextSlide() {
		current = (current + 1) % otherImg.length;
	}
	function prevSlied() {
		current = (current - 1) % otherImg.length;
	}

	const links = $derived([
		{ url: product.shopee, image: shopeeLogo },
		{ url: product.tokopedia, image: tokopediaLogo },
		{ url: product.lazada, image: lazadaLogo }
	]);
</script>

<section class="mx-2 mt-2 flex flex-col lg:mx-20 lg:mt-10 lg:grid lg:grid-cols-3 lg:gap-4">
	<!-- mobile carausel -->
	<div class="my-4 snap-x snap-mandatory overflow-auto lg:hidden">
		<div class="mx-2 flex gap-4">
			{#each mobileProductImg as m}
				<div class="w-9/10 shrink-0 snap-center rounded-2xl bg-gray-300">
					<img
						src={img(m, 800)}
						srcset={imgSet(m)}
						sizes="320px"
						loading="lazy"
						class="h-full w-full rounded-2xl object-cover object-center mix-blend-multiply"
						alt={m}
					/>
				</div>
			{/each}
		</div>
	</div>
	<!-- mobile carausel -->

	<!-- Paragraph product info -->
	<div class="rounded-2xl bg-primary p-6 text-white">
		<Heading3 class="text-left font-bold text-white">{product.name}</Heading3>
		<span class="text-sm">Tersedia dalam ukuran:</span>
		{#each ukuran as u, i}
			<span class="text-sm">{u}{i < ukuran.length - 1 ? ',' : ''} </span>
		{/each}
		<span class="text-sm">{product.ukuranMetric}</span>

		<div
			class="my-4 mt-6 rounded-full bg-secondary px-5 py-1 text-center text-primary xl:px-8 xl:py-1"
		></div>

		<Paragraph class="text-secondary">
			{product.desc}
		</Paragraph>

		<div class="my-4 flex w-fit items-center gap-4 bg-secondary px-3 py-1">
			{#each links as item}
				<a href={item.url} class="border border-red-50">
					<img src={item.image} alt="" class="h-auto w-6" />
				</a>
			{/each}
		</div>
		<div>
			<Paragraph class="font-bold text-white">Kegunaan:</Paragraph>
			{#each kegunaan as item}
				<ul>
					<li class="list-item">- {item}</li>
				</ul>
			{/each}
			<!-- <Paragraph class="font-light text-white">{product.kegunaan}</Paragraph> -->
		</div>
		<div class="my-4">
			<Paragraph class=" font-bold text-white">Cara pakai:</Paragraph>
			{#each caraPakai as item}
				<ul>
					<li class="list-item">- {item}</li>
				</ul>
			{/each}
			<!-- <Paragraph class="font-light text-white">{product.kegunaan}</Paragraph> -->
		</div>
		<div class="mt-8 text-center">
			<h3 class="-mb-2 text-xs text-secondary">KOMPOSISI:</h3>
			{#each product.komposisi as item}
				<span class="text-xs">{item}</span>
			{/each}
			<!-- <Paragraph class="font-light text-white">{product.kegunaan}</Paragraph> -->
		</div>
	</div>

	<!-- Paragraph product info -->

	<div class="aspect-2/3 rounded-2xl bg-gray-200 xl:sticky xl:top-4 xl:self-start">
		<img
			src={img(product.r2Cover, 800)}
			srcset={imgSet(product.r2Cover)}
			sizes="320px"
			loading="lazy"
			class="h-full w-full object-cover object-center mix-blend-multiply
              "
			alt={product.name}
		/>
	</div>
	<!-- desktop carausel -->
	<div
		class="relative aspect-2/3 overflow-auto overflow-y-hidden rounded-2xl bg-gray-50
    [scrollbar-width:none] xl:sticky xl:top-4
    xl:self-start"
	>
		<!-- button -->
		{#if otherImg.length > 1}
			<div class="absolute inset-x-0 bottom-4 z-50 flex justify-center gap-4 mix-blend-difference">
				<button onclick={prevSlied}>
					<CircleChevronLeft class=" h-12 w-12 font-black text-secondary " />
				</button>
				<button onclick={nextSlide}>
					<CircleChevronRight class=" h-12 w-12 font-black text-secondary " />
				</button>
			</div>
		{/if}
		<!-- button -->
		<div class="relative">
			<div
				class="relative flex h-full w-full transition-transform duration-1000"
				style={`transform: translateX(-${current * 100}%);`}
			>
				{#each otherImg as item}
					<div class="flex h-full min-w-full flex-col lg:gap-4">
						<div
							class="relative flex aspect-2/3 shrink-0 overflow-hidden
             "
						>
							<img
								src={img(item, 800)}
								srcset={imgSet(item)}
								alt="picture"
								class="w-full rounded-4xl object-cover object-center px-1 lg:scale-110
              lg:px-0"
							/>

							<!-- <div class="absolute inset-0 z-10 rounded-2xl bg-black/20"></div> -->
						</div>
					</div>
				{/each}
				<!-- slide content -->
			</div>
			<!-- slide button -->
		</div>
	</div>
	<!-- desktop carausel -->
</section>
{#if certification.length > 1}
	<section class="mx-2 lg:mx-20">
		<div
			class=" mb-20 grid grid-cols-2 gap-4 rounded-xl
      bg-primary px-5 py-2 text-center text-white lg:grid-cols-3
    xl:rounded-2xl xl:px-8 xl:py-4"
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
