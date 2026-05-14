<script lang="Ts">
	import { MediaQuery } from 'svelte/reactivity';
	import placeholder1 from '$lib/assets/27002.jpg';
	import placeholder2 from '$lib/assets/5563.jpg';
	import { slide } from 'svelte/transition';

	const isMobile = new MediaQuery('(max-width: 383px)');
	const isTablet = new MediaQuery('(min-width: 384px) and (max-width: 1279px)');
	const isDesktop = new MediaQuery('(min-width: 1280px)');

	const slides = [
		{
			index: 1,
			subtitle: 'nature powered wellness rooted in culture',
			paragraph:
				'Pioneer minyak herbal di Bali.  Bokashi menghadirkan rangkaian produk kesehatan berbasis rempah nusantara dipadukan dengan teknologi fermentasi EM dari Jepang sejak 1997. Setiap formulanya dirancang untuk membantu menyehatkan tubuh keluarga Indonesia.',
			image: 'image'
		},
		{
			index: 2,
			subtitle: 'cultivating life through effective microorganism',
			paragraph:
				'#1 EM Technology di Indonesia. Pelopor sistem agrikultur ramah lingkungan dan berkelanjutan melalui kerja mikroorganisme yang selaras dengan alam. Memadukan kearifan alam dengan konsep Effective Microorganisms yang dikembangkan di Jepang.',
			image: 'image'
		},
		{
			index: 3,
			subtitle: 'holistic wellness from balinese heritage',
			paragraph:
				'Menghadirkan terapi enzim ala Jepang pertama di Indonesia. Usada Pak Oles memadukan pijat tradisional Bali dengan Minyak Oles Bokashi. Perawatan alami untuk membantu meredakan nyeri, mengurangi stres, dan mendetoks racun dalam tubuh.',
			image: 'image'
		},
		{
			index: 4,
			subtitle: 'living gently in the hearth of north bali',
			paragraph:
				'Villa Ipsa menawarkan pengalaman menginap yang menenangkan di jantung Bali Utara. Memadukan aktivitas berwisata dengan holistic wellness yang memberikan nuansa damai,  jauh dari hiruk-pikuk kota. Villa Ipsa memberi ruang untuk bernapas, bertumbuh, dan menikmati ketenangan dalam kesederhanaan.',
			image: 'image'
		}
	];

	const rempahOrganik = [
		{
			index: 1,
			subtitle: 'Coconut Oil',
			image: { placeholder2 }
		},
		{
			index: 2,
			subtitle: 'Coconut Oil',
			image: { placeholder2 }
		}
	];
	let current = $state(0);
	function nextSlide() {
		current = (current + 1) % slides.length;
	}
</script>

<!-- hero section -->
<section class="relative h-[70vh] w-screen overflow-hidden bg-amber-200">
	<div
		class="flex h-full w-full transition-transform duration-1000"
		style={`transform: translateX(-${current * 100}%);`}
	>
		{#each slides as item}
			<div class="flex h-full min-w-full flex-col">
				<!-- slide content -->
				<div class="relative flex h-[67%] w-full shrink-0">
					<img
						src={placeholder1}
						alt="placeholder1"
						class="absolute inset-0 h-full w-full object-cover object-center"
					/>
					<div class="absolute inset-0 z-10 bg-black/20"></div>
					<div
						class="relative inset-4 z-10 flex h-full w-[50%] flex-col justify-center text-4xl text-white"
					>
						{item.subtitle.toUpperCase()}
					</div>
				</div>
				<div class="flex min-h-[33%] flex-col justify-center bg-gray-500 px-6 text-justify">
					<p class="">
						{item.paragraph}
					</p>
				</div>
			</div>
		{/each}
		<!-- slide button -->
	</div>
	<button
		onclick={nextSlide}
		class="
			absolute
			top-[65%]
			right-4
			z-50
			-translate-y-1/2
			rounded-full
			bg-black/40
			p-4
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
</section>
<section class="flex h-screen w-screen flex-col justify-center px-2">
	<h1 class="text-center text-3xl">Sacred Herbs for Body, Mind, and Soul</h1>
	<img src={placeholder2} class="my-6 bg-amber-200 object-cover object-center" alt="" />
	<p class="text-center">
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, debitis? Eum ullam reiciendis
		fugit necessitatibus, soluta similique blanditiis, in maiores voluptate maxime excepturi harum
		dolorum. Veritatis in mollitia eligendi deserunt.
	</p>
</section>
<section class="">
	<div class="flex flex-col justify-center gap-2 bg-gray-200 px-2 text-center">
		<h2>100% Rempah Organik</h2>
		<p>Ditanam oleh petani lokal Indonesia</p>
		<div class="flex gap-1">
			<div class="rounded-xl bg-gray-400 p-2">
				<img src={placeholder2} alt="placeholder" />
				<p>Coconut oil</p>
			</div>
			<div class="rounded-xl bg-gray-400 p-2">
				<img src={placeholder2} alt="placeholder" />
				<p>Coconut oil</p>
			</div>
			<div class="rounded-xl bg-gray-400 p-2">
				<img src={placeholder2} alt="placeholder" />
				<p>Coconut oil</p>
			</div>
			<div class="rounded-xl bg-gray-400 p-2">
				<img src={placeholder2} alt="placeholder" />
				<p>Coconut oil</p>
			</div>
		</div>
	</div>
</section>
