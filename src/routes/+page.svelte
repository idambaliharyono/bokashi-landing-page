<script lang="ts">
	import { MediaQuery } from 'svelte/reactivity';
	import placeholder1 from '$lib/assets/27002.jpg';
	import placeholder2 from '$lib/assets/5563.jpg';
	import placeholderPhone from '$lib/assets/placeholder-portrait-9-16.jpg';
	import Button from '$lib/components/Button.svelte';
	import slides1 from '$lib/assets/slides1.jpg';
	import slides2 from '$lib/assets/slides21.jpg';
	import slides3 from '$lib/assets/slides3.jpg';
	import slides4 from '$lib/assets/slides4.jpg';

	import {
		Badge,
		BadgeCent,
		BadgeCheck,
		BadgeDollarSign,
		BadgeInfo,
		BadgeIndianRupee
	} from '@lucide/svelte';

	// const isMobile = new MediaQuery('(max-width: 383px)');
	// const isTablet = new MediaQuery('(min-width: 384px) and (max-width: 1279px)');
	// const isDesktop = new MediaQuery('(min-width: 1280px)');
	const slidesNew = [
		{
			index: 1,
			subtitle: {
				id: 'Nature Powered | Wellness Rooted in | Culture'
			},
			intro: {
				id: 'Pionir minyak herbal di Bali.'
			},
			content: {
				id: 'Bokashi menghadirkan rangkaian produk kesehatan berbasis rempah nusantara dipadukan dengan teknologi fermentasi EM dari Jepang sejak 1997. Setiap formulanya dirancang untuk membantu menyehatkan tubuh keluarga Indonesia.'
			},
			image: slides1,
			page: '/about'
		},
		{
			index: 2,
			subtitle: {
				id: 'Cultivating Life | Through Effective | Microorganisms'
			},
			intro: {
				id: '#1 Teknologi EM di Indonesia.'
			},
			content: {
				id: 'Pelopor sistem agrikultur ramah lingkungan dan berkelanjutan melalui kerja mikroorganisme yang selaras dengan alam. Memadukan kearifan alam dengan konsep Effective Microorganisms yang dikembangkan di Jepang.'
			},
			image: slides2,
			page: '/production'
		},
		{
			index: 3,
			subtitle: {
				id: 'Holistic Wellness | From Balinese | Heritage'
			},
			intro: {
				id: 'Menghadirkan terapi enzim ala Jepang pertama di Indonesia.'
			},
			content: {
				id: 'Usada Pak Oles memadukan pijat tradisional Bali dengan Minyak Oles Bokashi. Perawatan alami untuk membantu meredakan nyeri, mengurangi stres, dan mendetoks racun dalam tubuh.'
			},
			image: slides3,
			page: '/usadaPakOles'
		},
		{
			index: 4,
			subtitle: {
				id: 'Living Gently | in the Heart | of North Bali'
			},
			intro: {
				id: 'Villa Ipsa menawarkan pengalaman menginap menenangkan di jantung Bali Utara.'
			},
			content: {
				id: 'Memadukan aktivitas berwisata dengan holistic wellness yang memberikan nuansa damai, jauh dari hiruk-pikuk kota. Villa Ipsa memberi ruang untuk bernapas dan menikmati ketenangan dalam kesederhanaan.'
			},
			image: slides4,
			page: '/villaIpsa'
		}
	];
	const slides = [
		{
			index: 1,
			subtitle: 'Nature Powered | Wellness Rooted in | Culture',
			paragraph_mobile:
				'Pioneer minyak herbal di Bali.| Bokashi menghadirkan rangkaian| produk kesehatan berbasis rempah| nusantara dipadukan dengan teknologi| fermentasi EM dari Jepang sejak 1997.| Setiap formulanya dirancang untuk| membantu menyehatkan tubuh| keluarga Indonesia.',
			paragraph_desktop:
				'Pioneer minyak herbal di Bali.| Bokashi menghadirkan rangkaian produk kesehatan berbasis rempah nusantara dipadukan| dengan teknologi fermentasi EM dari Jepang sejak 1997. Setiap formulanya dirancang untuk| membantu menyehatkan tubuh keluarga Indonesia.',
			image: slides1,
			page: '/about'
		},
		{
			index: 2,
			subtitle: 'Cultivating Life | Through Effective | Microorganisms',
			paragraph_mobile:
				'#1 EM Technology di Indonesia.| Pelopor sistem agrikultur ramah| lingkungan dan berkelanjutan melalui| kerja mikroorganisme yang selaras| dengan alam. Memadukan kearifan| alam dengan konsep Effective| Microorganisms yang dikembangkan| di Jepang.',
			paragraph_desktop:
				'#1 EM Technology di Indonesia.| Pelopor sistem agrikultur ramah| lingkungan dan berkelanjutan melalui| kerja mikroorganisme yang selaras| dengan alam. Memadukan kearifan| alam dengan konsep Effective| Microorganisms yang dikembangkan| di Jepang.',
			image: slides2,
			page: '/production'
		},
		{
			index: 3,
			subtitle: 'Holistic Wellness | From Balinese | Heritage',
			page: '/usadaPakOles',
			paragraph_mobile:
				'Menghadirkan terapi enzim| ala Jepang pertama di Indonesia.| Usada Pak Oles memadukan pijat| tradisional Bali dengan Minyak Oles| Bokashi. Perawatan alami untuk| membantu meredakan nyeri,| mengurangi stres, dan mendetoks| racun dalam tubuh.',
			image: slides3
		},
		{
			index: 4,
			subtitle: 'Living Gently | in the Heart | of North Bali',
			page: '/villaIpsa',
			paragraph_mobile:
				'Villa Ipsa menawarkan pengalaman| menginap  menenangkan di jantung| Bali Utara. Memadukan aktivitas| berwisata dengan holistic wellness yang| memberikan nuansa damai, jauh dari| hiruk-pikuk kota. Villa Ipsa memberi| ruang untuk bernapas dan menikmati| ketenangan dalam kesederhanaan.',
			image: slides4
		}
	];

	const rempahOrganik = [
		{
			index: 1,
			subtitle: 'Coconut Oil',
			image: placeholder1
		},
		{
			index: 2,
			subtitle: 'Coconut Oil',
			image: placeholderPhone
		},
		{
			index: 3,
			subtitle: 'Coconut Oil',
			image: placeholder2
		}
	];
	const badge = [
		{
			index: 1,
			subtitle: 'Coconut Oil',
			image: placeholder1
		},
		{
			index: 2,
			subtitle: 'Coconut Oil',
			image: placeholderPhone
		},
		{
			index: 3,
			subtitle: 'Coconut Oil',
			image: placeholder2
		},
		{
			index: 1,
			subtitle: 'Coconut Oil',
			image: placeholder1
		},
		{
			index: 2,
			subtitle: 'Coconut Oil',
			image: placeholderPhone
		},
		{
			index: 3,
			subtitle: 'Coconut Oil',
			image: placeholder2
		},
		{
			index: 1,
			subtitle: 'Coconut Oil',
			image: placeholder1
		},
		{
			index: 2,
			subtitle: 'Coconut Oil',
			image: placeholderPhone
		},
		{
			index: 3,
			subtitle: 'Coconut Oil',
			image: placeholder2
		},
		{
			index: 1,
			subtitle: 'Coconut Oil',
			image: placeholder1
		},
		{
			index: 2,
			subtitle: 'Coconut Oil',
			image: placeholderPhone
		},
		{
			index: 3,
			subtitle: 'Coconut Oil',
			image: placeholder2
		}
	];
	const loopBadge = [...badge, ...badge];
	const loopRempah = [...rempahOrganik, ...rempahOrganik];

	const otherBusiness = [
		{
			index: 1,
			subtitle: 'Warung Bukit Hexon',
			paragraph:
				'Restoran masakan Bali dan Western dengan pemandangan alam dan Danau Buyan dan Tamblingan.',
			image: placeholder2,
			link: '/home'
		},
		{
			index: 2,
			subtitle: 'Bokashi Farm Waribang',
			paragraph:
				'Green School, pusat edukasi & budidaya tanaman, dilengkapi dengan restoran Sunda yang memanjakan.',
			image: placeholder2,
			link: '/home'
		},
		{
			index: 3,
			subtitle: 'Radio Bokashi Raya',
			paragraph:
				'Stasiun radio dari Pak Oles Network yang mengudara khusus untuk menjangkau wilayah Bali Timur',
			image: placeholder2,
			link: '/home'
		},
		{
			index: 4,
			subtitle: 'Radio Pak Oles FM',
			paragraph:
				'Stasiun radio yang berbasis di Tabanan. Mengudara khusus untuk wilayah Bali Tengah',
			image: placeholder2,
			link: '/home'
		},
		{
			index: 5,
			subtitle: 'Radio Hexon',
			paragraph:
				'Stasiun radio Pak Oles Network yang mengudara khusus untuk menjangkau wilayah Bali Utara dan Barat.',
			image: placeholder2,
			link: '/home'
		},
		{
			index: 6,
			subtitle: 'Balok Emas Wididana',
			paragraph:
				'Lini bisnis dari Pak Oles Network yang berfokus pada penyediaan alat kesehatan (alkes) berkualitas di Bali',
			image: placeholder2,
			link: '/home'
		}
	];

	let current = $state(0);

	function nextSlide() {
		current = (current + 1) % slides.length;
	}

	let showAll = $state(false);
</script>

<!-- hero section -->
<div></div>
<section class="relative w-full overflow-hidden text-primary">
	<!-- slide content -->
	<div class="relative">
		<div
			class="flex h-full w-full transition-transform duration-1000"
			style={`transform: translateX(-${current * 100}%);`}
		>
			{#each slidesNew as item}
				<div class="flex h-full min-w-full flex-col p-2">
					<div class="relative flex aspect-square shrink-0 lg:aspect-video">
						<enhanced:img
							src={item.image}
							alt={item.subtitle.id}
							class="h-full w-full rounded-2xl object-cover object-center"
						/>

						<!-- <div class="absolute inset-0 z-10 rounded-2xl bg-black/20"></div> -->
						<button
							onclick={nextSlide}
							class="
			absolute
			right-3
			bottom-6
      z-50
			translate-y-1/2
              rounded-4xl
			bg-black/40
			p-8
			text-white
			backdrop-blur-sm
			transition-all
			duration-300
			hover:scale-110
			hover:bg-black/60
			active:scale-95
		"
						>
							>>
						</button>
					</div>
					<div class="mt-4 flex w-full flex-col justify-center gap-4 px-1 text-center lg:px-10">
						<div
							class="gap-1/3 mx-4 flex flex-col justify-center font-heading text-2xl font-black tracking-tight lg:flex-row lg:gap-2"
						>
							{#each item.subtitle.id.toUpperCase().split('|') as line}
								<span>{line.trim()}</span>
							{/each}
						</div>
						<div class="flex flex-col gap-4">
							<div class="w-full font-body tracking-wide">
								<p>{item.intro.id}</p>
								<p>{item.content.id}</p>
							</div>
							<Button class="mx-auto" href={item.page}>Read More</Button>
						</div>
					</div>
				</div>
			{/each}
			<!-- slide content -->
		</div>
		<!-- slide button -->
	</div>
</section>
<section class="relative my-8 flex h-screen w-full flex-col justify-center gap-6 px-2 text-primary">
	<enhanced:img
		src={placeholder2}
		class="aspect-3/4 h-[50%] rounded-xl border border-black object-cover object-center p-2"
		alt=""
	/>

	<div class="flex flex-col text-center text-3xl">
		<span>Sacred Herbs for Body,</span>
		<span>Mind, and Soul</span>
	</div>
	<div class="mx-10">
		<p class="text-center">
			Terinspirasi oleh <span class="font-bold">tradisi</span>, disempurnakan dengan teknologi.
			Memadukan keunggulan alami rempah Indonesia dengan teknologi
			<span class="font-bold">Effective Microorganism </span> dari Jepang, Bokashi menghadirkan perawatan
			tubuh dan kesehatan yang efektif, aman, dan selaras dengan alam.
		</p>
	</div>
	<Button variant="primary" class="mx-auto">Read More</Button>
</section>
<section class="flex h-[70vh] w-full overflow-x-auto text-white">
	<div class="flex h-full w-full flex-col gap-4 bg-primary py-8 text-center">
		<div class="flex h-[20%] flex-col gap-4">
			<h2 class="font-heading text-2xl font-bold">100% REMPAH ORGANIK</h2>
			<p>Ditanam oleh petani lokal Indonesia</p>
		</div>

		<!-- carausel  -->
		<div class="relative h-full w-full overflow-x-auto">
			<!-- sliding carausel content -->
			<div class="carousel-track flex h-full gap-8">
				{#each loopRempah as item}
					<div class="relative aspect-2/3 w-[30%]">
						<enhanced:img
							src={item.image}
							alt={item.subtitle}
							class="h-full w-full rounded-xl object-cover"
						/>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<section class="my-4 h-[5vh] w-full overflow-hidden text-primary" id="rollingBadge">
	<div class="carousel-track-badge mx-2 flex h-full w-full gap-4 overflow-hidden">
		{#each loopBadge as item}
			<div
				class="flex aspect-square h-full w-full justify-center rounded-full border border-black align-middle"
			>
				<enhanced:img src={item.image} alt={item.subtitle} class="max-h-full rounded-full" />
			</div>
		{/each}
	</div>
</section>

<section id="partnership" class="mx-2 mt-10 text-primary">
	<div class="text-center font-heading text-3xl font-bold italic">
		<h1 class="underline">#1 Balinese</h1>
		<h1>Herbal Industry</h1>
	</div>
	<div class="flex justify-center p-6">
		<enhanced:img
			src={placeholder1}
			alt="placeholder1"
			class="aspect-square w-md border border-black"
		/>
	</div>
	<div class="text-center text-xl">
		<p>We're Open For</p>
		<p class="underline">Partnership</p>
	</div>
	<div class="mt-5 px-4 text-center">
		<p>
			Tertarik riset, magang, atau kerjasama maklon produk untuk brandmu? Wujudkan kolaborasi di
			bidang lingkungan, agribisnis, wellness, dan industri herbal bersama kami.
		</p>
	</div>
	<Button variant="square">Learn More</Button>
</section>

<!-- todo -->
<section id="produk" class="mt-10 w-full overflow-x-hidden text-center">
	<div class="flex flex-col gap-4">
		<div class="carousel-track w-ful flex gap-4 overflow-x-hidden">
			{#each loopRempah as item}
				<div class="relative flex aspect-3/4 w-xs shrink-0 flex-col border border-black">
					<enhanced:img
						src={item.image}
						alt={item.subtitle}
						class="rounded-xl border border-black object-cover"
					/>
					<div class="p-4 text-left">
						<h4 class="font-bold">Product</h4>
						<p>
							Product Brief Info Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
						</p>
					</div>
				</div>
			{/each}
		</div>
		<Button class="mx-auto">View All</Button>
	</div>
</section>

<section id="otherBusiness" class="mt-10 text-primary">
	<h1 class="mx-auto text-center text-3xl font-bold">Other Business Line</h1>
	<div class="mx-2 grid grid-cols-1 justify-items-center">
		<div class="mb-4 flex flex-col items-center justify-center gap-4 border border-black">
			{#each showAll ? otherBusiness : otherBusiness.filter((item) => item.index < 4) as item}
				<div class="px-2">
					<div class="mx-auto aspect-square w-xs border border-black">
						<enhanced:img src={item.image} alt={item.subtitle} class="" />
					</div>
					<div class="text-center">
						<h4 class="font-bold">{item.subtitle}</h4>
						<p>
							{item.paragraph}
						</p>
					</div>
				</div>
			{/each}
		</div>
		<Button variant="secondary" onclick={() => (showAll = !showAll)}
			>{showAll ? 'Show less' : 'Show All'}</Button
		>
	</div>
</section>

<style>
	.carousel-track {
		animation: scroll-left 20s linear infinite;
		width: max-content;
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
	carousel-track-badge:hover {
		animation-play-state: paused;
	}
</style>
