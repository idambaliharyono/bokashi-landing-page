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

	let current = $state(0);
	function nextSlide() {
		current = (current + 1) % slides.length;
	}
</script>

<!-- hero section -->
<section class="relative h-screen w-screen overflow-hidden">
	<div
		class="flex h-full w-full transition-transform duration-500"
		style={`transform: translateX(-${current * 100}%);`}
	>
		{#each slides as item}
			<div class="flex h-full min-w-full flex-col">
				<!-- slide content -->
				<div class="relative flex h-[40%] w-full shrink-0">
					<img
						src={placeholder1}
						alt="placeholder1"
						class="absolute inset-0 h-full w-full object-cover object-center"
					/>
					<div class="absolute inset-0 z-10 bg-black/20"></div>
					<!-- 				<div class="relative z-10 flex h-full flex-col justify-center px-12 text-white"> -->
					<div
						class="relative inset-4 z-10 flex h-full w-[50%] flex-col justify-center text-xl text-white"
					>
						{item.subtitle.toUpperCase()}
					</div>
				</div>
				<div class="bg-gray-100 p-4 text-center">{item.paragraph}</div>
			</div>
		{/each}
		<!-- slide button -->
	</div>
	<button onclick={nextSlide} class="absolute top-[35%] right-0 z-50 size-10 bg-gray-500">
		&gt;
	</button>
</section>

<p>
	Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, debitis? Eum ullam reiciendis fugit
	necessitatibus, soluta similique blanditiis, in maiores voluptate maxime excepturi harum dolorum.
	Veritatis in mollitia eligendi deserunt.
</p>
<!-- <section class="relative h-screen overflow-hidden"> -->
<!-- 	<div class="flex h-full"> -->
<!-- 		{#each body as item} -->
<!-- 			<!-- slide --> -->
<!-- 			<div class="relative min-w-full shrink-0"> -->
<!-- 				<!-- background image --> -->
<!-- 				<img -->
<!-- 					src={item.image} -->
<!-- 					alt={item.subtitle} -->
<!-- 					class="absolute inset-0 h-full w-full object-cover" -->
<!-- 				/> -->
<!---->
<!-- 				<!-- dark overlay --> -->
<!-- 				<div class="absolute inset-0 bg-black/40"></div> -->
<!---->
<!-- 				<!-- content --> -->
<!-- 				<div class="relative z-10 flex h-full flex-col justify-center px-12 text-white"> -->
<!-- 					<!-- subtitle row --> -->
<!-- 					<h2 class="text-5xl font-bold"> -->
<!-- 						{item.subtitle} -->
<!-- 					</h2> -->
<!---->
<!-- 					<!-- paragraph row --> -->
<!-- 				</div> -->
<!-- 				<p class="mt-6 max-w-xl text-lg"> -->
<!-- 					{item.paragraph} -->
<!-- 				</p> -->
<!-- 			</div> -->
<!-- 		{/each} -->
<!-- 	</div> -->
<!---->
<!-- 	<!-- navigation --> -->
<!-- 	<button -->
<!-- class="absolute top-1/2 right-4 z-20 -translate-y-1/2 rounded-full bg-white/20 p-4 text-white backdrop-blur" -->
<!--  	>  -->
<!-- &gt; -->
<!--  	</button>  -->
<!-- </section> -->
