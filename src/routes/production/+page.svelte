<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import hero from '$lib/assets/slides3.jpg';
	import CenterText from '$lib/components/CenterText.svelte';
	import placeholder1 from '$lib/assets/27002.jpg';
	import placeholder2 from '$lib/assets/5563.jpg';
	import placeholderPhone from '$lib/assets/placeholder-portrait-9-16.jpg';
	import Button from '$lib/components/Button.svelte';
	import LgContainer from '$lib/components/LgContainer.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Heading3 from '$lib/components/Heading3.svelte';
	import Heading4 from '$lib/components/Heading4.svelte';

	const imagesVertical = [
		{
			index: 1,
			subtitle: 'Coconut Oil',
			image: 'https://res.cloudinary.com/rv4m5nbg/image/upload/v1784034558/FACILITIES_1_bqy8bs.webp'
		},
		{
			index: 2,
			subtitle: 'Coconut Oil',
			image: 'https://res.cloudinary.com/rv4m5nbg/image/upload/v1784034558/FACILITIES_2_eii1ti.webp'
		},
		{
			index: 3,
			subtitle: 'Coconut Oil',
			image: 'https://res.cloudinary.com/rv4m5nbg/image/upload/v1784034558/FACILITIES_3_jbwmbn.webp'
		},
		{
			index: 4,
			subtitle: 'Coconut Oil',
			image: 'https://res.cloudinary.com/rv4m5nbg/image/upload/v1784034559/FACILITIES_4_a0wmmw.webp'
		},
		{
			index: 5,
			subtitle: 'Coconut Oil',
			image: 'https://res.cloudinary.com/rv4m5nbg/image/upload/v1784034559/FACILITIES_5_ctcpce.webp'
		},

		{
			index: 6,
			subtitle: 'Coconut Oil',
			image: 'https://res.cloudinary.com/rv4m5nbg/image/upload/v1784034555/FACILITIES_6_srpzpe.webp'
		}
	];

	const rempah = [
		{
			name: 'Minyak Kelapa',
			use: 'Dikenal dengan sifat menghangatkan dan antiinflamasinya yang membantu melancarkan sirkulasi serta meredakan ketegangan pada kulit. Memberikan sensasi segar sekaligus mendukung regenerasi alami kulit.'
		},
		{
			name: 'Jahe',
			use: 'Dikenal dengan sifat menghangatkan dan antiinflamasinya yang membantu melancarkan sirkulasi serta meredakan ketegangan pada kulit. Memberikan sensasi segar sekaligus mendukung regenerasi alami kulit.'
		},
		{
			name: 'Kunyit',
			use: 'Dikenal dengan sifat menghangatkan dan antiinflamasinya yang membantu melancarkan sirkulasi serta meredakan ketegangan pada kulit. Memberikan sensasi segar sekaligus mendukung regenerasi alami kulit.'
		},
		{
			name: 'Daun Wungu',
			use: 'Dikenal dengan sifat menghangatkan dan antiinflamasinya yang membantu melancarkan sirkulasi serta meredakan ketegangan pada kulit. Memberikan sensasi segar sekaligus mendukung regenerasi alami kulit.'
		},
		{
			name: 'Sambiloto',
			use: 'Dikenal dengan sifat menghangatkan dan antiinflamasinya yang membantu melancarkan sirkulasi serta meredakan ketegangan pada kulit. Memberikan sensasi segar sekaligus mendukung regenerasi alami kulit.'
		},
		{
			name: 'Minyak Kelapa',
			use: 'Dikenal dengan sifat menghangatkan dan antiinflamasinya yang membantu melancarkan sirkulasi serta meredakan ketegangan pada kulit. Memberikan sensasi segar sekaligus mendukung regenerasi alami kulit.'
		},
		{
			name: 'Minyak Kelapa',
			use: 'Dikenal dengan sifat menghangatkan dan antiinflamasinya yang membantu melancarkan sirkulasi serta meredakan ketegangan pada kulit. Memberikan sensasi segar sekaligus mendukung regenerasi alami kulit.'
		},
		{
			name: 'Minyak Kelapa',
			use: 'Dikenal dengan sifat menghangatkan dan antiinflamasinya yang membantu melancarkan sirkulasi serta meredakan ketegangan pada kulit. Memberikan sensasi segar sekaligus mendukung regenerasi alami kulit.'
		},
		{
			name: 'Minyak Kelapa',
			use: 'Dikenal dengan sifat menghangatkan dan antiinflamasinya yang membantu melancarkan sirkulasi serta meredakan ketegangan pada kulit. Memberikan sensasi segar sekaligus mendukung regenerasi alami kulit.'
		}
	];
	let open = $state<number | null>(null);
	function toggle(index: number) {
		open = open === index ? null : index;
	}

	const MobileHorizontalImages = [
		{
			index: 1,
			subtitle: 'Coconut Oil',
			image: placeholder1
		},
		{
			index: 2,
			subtitle: 'Ginger',
			image: placeholder1
		},
		{
			index: 3,
			subtitle: 'Turmeric',
			image: placeholder1
		},
		{
			index: 4,
			subtitle: 'Sirih',
			image: placeholder1
		},
		{
			index: 5,
			subtitle: 'Sambiloto',
			image: placeholder1
		}
	];
	const loopMobileImages = [...MobileHorizontalImages, ...MobileHorizontalImages];
</script>

<div class="lg:hidden">
	<Hero src={hero} alt="images">
		<div>
			<h1
				class="
text-secondary text-shadow-lg text-shadow-primary/50
      "
			>
				OUR PRODUCTION HOUSE
			</h1>
			<Paragraph
				class="
      mt-4 hidden text-xl text-secondary text-shadow-lg text-shadow-primary/50 lg:block"
				>From Village Wisdom to Global Wellness</Paragraph
			>
		</div>
	</Hero>
</div>
<div class="overflow-hidden">
	<img
		src="https://res.cloudinary.com/rv4m5nbg/image/upload/f_auto,q_auto/v1784034565/Production-_tulisan_zcayt4.webp"
		alt=""
		class="mx-auto hidden aspect-2.5/1 w-full scale-110 object-cover lg:block"
	/>
</div>
<LgContainer>
	<div
		class="mx-auto mt-6 flex w-full flex-col gap-4 text-center lg:w-9/10 2xl:mt-6 2xl:w-full 2xl:gap-6"
	>
		<Heading3 class="font-bold lg:hidden">STORY OF INGREDIENTS</Heading3>
		<Paragraph
			>Berawal dari alam Indonesia yang kaya dan subur, Bokashi memilih bahan-bahan terbaik yang
			tumbuh selaras dengan tanah dan iklim tropis. Setiap bahan membawa manfaat alami yang telah
			lama dikenal dalam perawatan tradisional.</Paragraph
		>
		<Paragraph
			>Melalui proses fermentasi dan teknologi Effective Microorganisms (EM), kekuatan alam tersebut
			diolah dengan cara yang lembut dan terjaga, agar bekerja lebih efektif dan seimbang.</Paragraph
		>
		<Paragraph
			>Setiap produk Bokashi lahir dari kesederhanaan alam, diproses dengan ketelitian, dan
			dihadirkan sebagai perawatan alami yang jujur dan menenangkan.</Paragraph
		>
	</div>

	<!-- mobile horizontal images  -->
	<section class="flex w-full overflow-x-auto text-white lg:hidden">
		<div class="flex h-full w-full flex-col gap-10 py-10 pb-15 text-center lg:py-16">
			<!-- carausel  -->
			<div class="carousel-track-wrapper overflow-x-auto">
				<!-- sliding carausel content -->
				<div class="carousel-track flex h-full gap-12">
					{#each loopMobileImages as item}
						<div class="aspect-3/4 w-xs">
							<img
								src={item.image}
								alt={item.subtitle}
								class="h-full w-full rounded-xl border border-primary object-center"
							/>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section>
		<div class="block grid-cols-2 lg:mt-20 lg:mb-40 lg:grid">
			<div
				class="mx-auto hidden w-md items-center justify-center gap-6 text-center lg:block xl:w-xl xl:gap-8 2xl:w-xl"
			>
				<img
					src="https://res.cloudinary.com/rv4m5nbg/image/upload/f_auto,q_auto/v1784034564/OUR_IMPACT_2_xuezsj.webp"
					class="aspect-3/4 w-full border border-primary object-cover"
					alt=""
				/>
			</div>
			<div
				class="relative mx-auto w-full items-center justify-center text-center lg:w-md xl:w-xl 2xl:w-xl"
			>
				<div class="block lg:absolute">
					<div class="mb-4 w-full rounded-full bg-secondary px-6 py-3">
						<Heading3 class="font-bold">Natural Herb</Heading3>
					</div>
					{#each rempah as item, index}
						<button onclick={() => toggle(index)} class="w-full">
							<div
								class="mb-3 flex justify-between bg-secondary px-6 py-2 lg:mb-4 lg:px-4
              {open === index ? 'rounded-t-2xl' : 'rounded-full'}"
							>
								<Paragraph>{item.name}</Paragraph>
								{#if open === index}
									<span class="text-3xl">-</span>
								{:else}
									<span>+</span>
								{/if}
							</div>
							{#if open === index}
								<div class="-mt-6 mb-4 rounded-b-2xl bg-secondary px-6 py-2 text-left lg:px-4">
									<Paragraph class="text-justify">
										{item.use}
									</Paragraph>
								</div>
							{/if}
						</button>
					{/each}
				</div>
			</div>
		</div>
		<!-- dropdown expandable -->
	</section>
	<section class="block">
		<Heading4 class="font-bold">OUR PRODUCTION FACILITIES</Heading4>
		<img
			src="https://res.cloudinary.com/rv4m5nbg/image/upload/f_auto,q_auto/v1784034555/FACILITIES_kiowm1.webp"
			class="mx-auto aspect-video w-full rounded-2xl border border-primary object-cover lg:w-19/20"
			alt=""
		/>
	</section>
	<section>
		<div class="rounded-xl bg-primary px-4 py-8 text-white">
			<div class="mx-auto mb-8 flex flex-col justify-center gap-4 text-center">
				<img src={hero} alt="sss" class="mx-auto aspect-square w-25 rounded-full" />
				<div>
					<h6 class="italic underline">Good Manufacturing Practice</h6>
					<p>
						Produk kami telah tersertifikasi Good Manufacturing Practice dan Cara Pembuatan Obat
						Tradisional yang Baik dan Benar.
					</p>
				</div>
			</div>
			<div class="mx-auto mb-8 flex flex-col justify-center gap-4 text-center">
				<img src={hero} alt="sss" class="mx-auto aspect-square w-25 rounded-full" />
				<div>
					<h6 class="italic underline">EM Technology</h6>

					<p>
						Kami adalah satu-satunya pemegang lisensi EM Technology Jepang di Indonesia. Semua
						produk kami diproses dan difermentasi dengan teknologi ini.
					</p>
				</div>
			</div>
			<div class="mx-auto mb-8 flex flex-col justify-center gap-4 text-center">
				<img src={hero} alt="sss" class="mx-auto aspect-square w-25 rounded-full" />
				<div>
					<h6 class="italic underline">Halal and BPOM Certified</h6>

					<p>
						Bokashi sudah mengantongi sertifikat halal dan semua produknya sudah BPOM dan aman
						dipakai setiap hari, mulai dari anak-anak hingga orang dewasa.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="mt-6">
		<div class="mx-2 rounded-xl border border-primary p-4">
			<h2 class="mx-auto text-center text-lg tracking-tight text-primary">
				GET CLOSER TO OUR STANDARIZED PRODUCTION FACILITIES
			</h2>
		</div>
		<div class="mt-4 flex flex-col gap-4 px-2">
			{#each imagesVertical as item}
				<div
					class="aspect-video w-full overflow-hidden rounded-3xl border border-black lg:rounded-2xl"
				>
					<img
						src={item.image}
						alt={item.subtitle}
						class="h-full w-full object-cover object-center"
					/>
				</div>
			{/each}
		</div>
	</section>
	<section class="my-8">
		<div class="flex flex-col justify-center">
			<CenterText
				heading="PARTNERSHIP"
				body={[
					'Tertarik riset, magang, atau kerjasama maklon produk untuk brandmu? Wujudkan kolaborasi di bidang lingkungan, agribisnis, wellness, dan industri herbal.'
				]}
			/>
			<Button variant="secondary" class="mx-auto">COLABORATE WITH US</Button>
		</div>
	</section>
	<div class="mb-4 rounded-3xl bg-secondary px-4 py-4 text-center text-primary lg:hidden lg:px-12">
		<h4 class="text-xl font-bold">500+</h4>
		<p>
			Ahli dan Akademisi telah berkunjung dan belajar langsung soal pengelolaan industri herbal di
			Bokashi
		</p>
	</div>
</LgContainer>

<style>
	.carousel-track {
		animation: scroll-left 20s linear infinite;
		width: max-content;
	}
	.carousel-track-wrapper::-webkit-scrollbar {
		display: none;
	}
	.carousel-track-badge {
		animation: scroll-left 10s linear infinite;
		width: max-content;
	}

	@keyframes scroll-left {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.carousel-track:hover {
		animation-play-state: paused;
	}
</style>
