<script lang="ts">
	import placeholder1 from '$lib/assets/27002.jpg';
	import placeholder2 from '$lib/assets/5563.jpg';
	import placeholderPhone from '$lib/assets/placeholder-portrait-9-16.jpg';
	import Button from '$lib/components/Button.svelte';
	import slides1 from '$lib/assets/slides1.jpg';
	import slides2 from '$lib/assets/slides21.jpg';
	import slides3 from '$lib/assets/slides3.jpg';
	import slides4 from '$lib/assets/slides4.jpg';
	import { CircleArrowRight, ChevronRight } from '@lucide/svelte';
	import whtasappIcon from '$lib/assets/whatsappIcon.png';

	//image and logo

	import kenapaMemilihBokashi from '$lib/assets/1. HOME/WebP - minus logo bokashi farm /MOB.webp';
	import MOBpic from '$lib/assets/1. HOME/WebP - minus logo bokashi farm /MOB.webp';
	import BokashiCarePic from '$lib/assets/1. HOME/WebP - minus logo bokashi farm /Bocare.webp';
	import MaduWididanaPic from '$lib/assets/1. HOME/WebP - minus logo bokashi farm /Geruh.webp';
	import BalineseHerbalIndustry from '$lib/assets/1. HOME/WebP - minus logo bokashi farm /Balinese  Herbal Industry.webp';
	import CoconutOilPic from '$lib/assets/1. HOME/WebP - minus logo bokashi farm /Mobile ver (5).webp';
	import GingerPic from '$lib/assets/1. HOME/WebP - minus logo bokashi farm /Mobile ver (6).webp';
	import TurmericPic from '$lib/assets/1. HOME/WebP - minus logo bokashi farm /Mobile ver (7).webp';
	import SirihPic from '$lib/assets/1. HOME/WebP - minus logo bokashi farm /Mobile ver (9).webp';
	import SambilotoPic from '$lib/assets/1. HOME/WebP - minus logo bokashi farm /Mobile ver (8).webp';
	import logoBokashiFarm from '$lib/assets/1. HOME/WebP - minus logo bokashi farm /logo_ Bokashi Farm Waribang.webp';
	import logoBalokEmas from '$lib/assets/1. HOME/WebP - minus logo bokashi farm /logo- Balok Emas Wididana.webp';
	import logoBpom from '$lib/assets/1. HOME/WebP - minus logo bokashi farm /Logo BPOM.webp';
	import logoEm from '$lib/assets/1. HOME/WebP - minus logo bokashi farm /Logo- EM.webp';
	import logoJamu from '$lib/assets/1. HOME/WebP - minus logo bokashi farm /Logo Jamu.webp';
	import logoMui from '$lib/assets/1. HOME/WebP - minus logo bokashi farm /Logo- MUI- Halal.webp';
	import logoParabenFree from '$lib/assets/1. HOME/WebP - minus logo bokashi farm /Logo- Paraben Free.webp';
	import logoPreservative from '$lib/assets/1. HOME/WebP - minus logo bokashi farm /Logo- Preservatives.webp';
	import logoRadioBokashi from '$lib/assets/1. HOME/WebP - minus logo bokashi farm /logo- Radio Bokashi Raya.webp';
	import logoRadioHexon from '$lib/assets/1. HOME/WebP - minus logo bokashi farm /logo- Radio Hexon.webp';
	import logoRadioPakoles from '$lib/assets/1. HOME/WebP - minus logo bokashi farm /logo- Radio Pak Oles Fm.webp';
	import logoWarungBukitHexon from '$lib/assets/1. HOME/WebP - minus logo bokashi farm /logo Warung Bukit Hexon.webp';
	import SacredHerbsForBody from '$lib/assets/1. HOME/WebP - minus logo bokashi farm /Sacred Herbs for Body, Mind, and Soul(1).png';
	//image and logo

	// const isMobile = new MediaQuery('(max-width: 383px)');
	// const isTablet = new MediaQuery('(min-width: 384px) and (max-width: 1279px)');
	const slidesNew = [
		{
			index: 1,
			subtitle: {
				id: 'Nature Powered | Wellness Rooted in | Culture'
			},
			intro: {
				id: 'Pionir minyak herbal di Bali.'
			},
			introDesktop: {
				id: 'Pionir produk herbal berkualitas di Bali sejak 1997.'
			},
			content: {
				id: 'Bokashi menghadirkan rangkaian produk kesehatan berbasis rempah nusantara dipadukan dengan teknologi fermentasi EM dari Jepang sejak 1997. Setiap formulanya dirancang untuk membantu menyehatkan tubuh keluarga Indonesia.'
			},
			image: slides1,
			page: '/about-us'
		},
		{
			index: 2,
			subtitle: {
				id: 'Cultivating Life | Through Effective | Microorganisms'
			},
			intro: {
				id: '#1 Teknologi EM di Indonesia.'
			},
			introDesktop: {
				id: 'Pelopor kultur pertanian ramah lingkungan.'
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
				id: 'Terapi enzim ala Jepang pertama di Indonesia.'
			},
			introDesktop: {
				id: 'Terapi kubur rempah ala Jepang pertama di Indonesia.'
			},
			content: {
				id: 'Usada Pak Oles memadukan pijat tradisional Bali dengan Minyak Oles Bokashi. Perawatan alami untuk membantu meredakan nyeri, mengurangi stres, dan mendetoks racun dalam tubuh.'
			},
			image: slides3,
			page: '/usada-pak-oles'
		},
		{
			index: 4,
			subtitle: {
				id: 'Living Gently | in the Heart | of North Bali'
			},
			intro: {
				id: 'Villa Ipsa menawarkan pengalaman menginap menenangkan di jantung Bali Utara.'
			},
			introDesktop: {
				id: 'Pusat wisata alam, budaya dan holistic wellness di Bali Utara.'
			},
			content: {
				id: 'Memadukan aktivitas berwisata dengan holistic wellness yang memberikan nuansa damai, jauh dari hiruk-pikuk kota. Villa Ipsa memberi ruang untuk bernapas dan menikmati ketenangan dalam kesederhanaan.'
			},
			image: slides4,
			page: '/villa-ipsa'
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
			paragraph_desktop:
				'Menghadirkan terapi enzim| ala Jepang pertama di Indonesia.| Usada Pak Oles memadukan pijat| tradisional Bali dengan Minyak Oles| Bokashi. Perawatan alami untuk| membantu meredakan nyeri,| mengurangi stres, dan mendetoks| racun dalam tubuh.',
			image: slides3
		},
		{
			index: 4,
			subtitle: 'Living Gently | in the Heart | of North Bali',
			page: '/villaIpsa',
			paragraph_mobile:
				'Villa Ipsa menawarkan pengalaman| menginap  menenangkan di jantung| Bali Utara. Memadukan aktivitas| berwisata dengan holistic wellness yang| memberikan nuansa damai, jauh dari| hiruk-pikuk kota. Villa Ipsa memberi| ruang untuk bernapas dan menikmati| ketenangan dalam kesederhanaan.',
			paragraph_desktop:
				'Villa Ipsa menawarkan pengalaman| menginap  menenangkan di jantung| Bali Utara. Memadukan aktivitas| berwisata dengan holistic wellness yang| memberikan nuansa damai, jauh dari| hiruk-pikuk kota. Villa Ipsa memberi| ruang untuk bernapas dan menikmati| ketenangan dalam kesederhanaan.',
			image: slides4
		}
	];

	const rempahOrganik = [
		{
			index: 1,
			subtitle: 'Coconut Oil',
			image: CoconutOilPic
		},
		{
			index: 2,
			subtitle: 'Ginger',
			image: GingerPic
		},
		{
			index: 3,
			subtitle: 'Turmeric',
			image: TurmericPic
		},
		{
			index: 4,
			subtitle: 'Sirih',
			image: SirihPic
		},
		{
			index: 5,
			subtitle: 'Sambiloto',
			image: SambilotoPic
		}
	];
	const badge = [
		{
			index: 1,
			subtitle: 'Coconut Oil',
			image: logoPreservative
		},
		{
			index: 2,
			subtitle: 'Coconut Oil',
			image: logoParabenFree
		},
		{
			index: 3,
			subtitle: 'Coconut Oil',
			image: logoJamu
		},
		{
			index: 1,
			subtitle: 'Coconut Oil',
			image: logoMui
		},
		{
			index: 2,
			subtitle: 'Coconut Oil',
			image: logoBpom
		},
		{
			index: 3,
			subtitle: 'Coconut Oil',
			image: logoEm
		}
	];
	const products = [
		{
			index: 1,
			subtitle: 'Bokashi Care 15ml',
			image: BokashiCarePic,
			desc: 'Minyak Angin Aromaterapi',
			harga: '23.000'
		},
		{
			index: 2,
			subtitle: 'Minyak Oles Bokashi',
			image: MOBpic,
			desc: 'Minyak Balur Multifungsi',
			harga: '23.000'
		},
		{
			index: 1,
			subtitle: 'Madu Wididana',
			image: MaduWididanaPic,
			desc: 'Madu Alami Tanpa Campuran Rempah',
			harga: '23.000'
		}
	];
	const loopBadge = [...badge, ...badge];
	const loopRempah = [...rempahOrganik, ...rempahOrganik];
	const loopProduct = [...products, ...products];

	const otherBusiness = [
		{
			index: 1,
			subtitle: 'Warung Bukit Hexon',
			paragraph:
				'Restoran masakan Bali dan Western dengan pemandangan alam dan Danau Buyan dan Tamblingan.',
			image: logoWarungBukitHexon,
			link: 'https://www.instagram.com/warung_bukithexon/'
		},
		{
			index: 2,
			subtitle: 'Bokashi Farm Waribang',
			paragraph:
				'Green School, pusat edukasi & budidaya tanaman, dilengkapi dengan restoran Sunda yang memanjakan.',
			image: logoBokashiFarm,
			link: '/home'
		},
		{
			index: 3,
			subtitle: 'Radio Bokashi Raya',
			paragraph:
				'Stasiun radio dari Pak Oles Network yang mengudara khusus untuk menjangkau wilayah Bali Timur',
			image: logoRadioBokashi,
			link: ''
		},
		{
			index: 4,
			subtitle: 'Radio Pak Oles FM',
			paragraph:
				'Stasiun radio yang berbasis di Tabanan. Mengudara khusus untuk wilayah Bali Tengah',
			image: logoRadioPakoles,
			link: '/home'
		},
		{
			index: 5,
			subtitle: 'Radio Hexon',
			paragraph:
				'Stasiun radio Pak Oles Network yang mengudara khusus untuk menjangkau wilayah Bali Utara dan Barat.',
			image: logoRadioHexon,
			link: '/home'
		},
		{
			index: 6,
			subtitle: 'Balok Emas Wididana',
			paragraph:
				'Lini bisnis dari Pak Oles Network yang berfokus pada penyediaan alat kesehatan (alkes) berkualitas di Bali',
			image: logoBalokEmas,
			link: '/home'
		}
	];

	let current = $state(0);

	function nextSlide() {
		current = (current + 1) % slides.length;
	}

	let showAll = $state(false);
</script>

<!-- sticky whatsapp button container -->

<div class="relative pb-10">
	<!-- <div -->
	<!-- 	style=" -->
	<!--    position: fixed;  -->
	<!--    top: 0;  -->
	<!--    left: 50%;  -->
	<!--    transform: translateX(-50%);  -->
	<!--    width: 2px;  -->
	<!--    height: 100vh;  -->
	<!--    background-color: red;  -->
	<!--    z-index: 9999;  -->
	<!--    pointer-events: none;  -->
	<!--  " -->
	<!-- ></div> -->
	<div class="sticky top-[calc(88vh)] z-100 mb-0 h-0">
		<div class="mr-6 ml-auto w-12 lg:w-16">
			<a href="/">
				<img src={whtasappIcon} alt="" class="w-12 lg:w-20" />
			</a>
		</div>
	</div>
	<!-- hero section -->
	<section class="relative w-full overflow-hidden text-primary lg:px-0">
		<!-- slide content -->
		<div class="relative">
			<div
				class="flex h-full w-full transition-transform duration-1000"
				style={`transform: translateX(-${current * 100}%);`}
			>
				{#each slidesNew as item}
					<div class="flex h-full min-w-full flex-col lg:gap-4">
						<div
							class="relative flex aspect-square shrink-0
            lg:aspect-[2.5/1] lg:overflow-hidden"
						>
							<img
								src={item.image}
								alt={item.subtitle.id}
								class="w-full rounded-4xl object-cover object-center px-1 lg:scale-110
              lg:px-0"
							/>

							<!-- <div class="absolute inset-0 z-10 rounded-2xl bg-black/20"></div> -->
							<button
								onclick={nextSlide}
								class="
			absolute
			right-3
			bottom-12
      z-50
			translate-y-1/2
              rounded-4xl
		"
							>
								<div class="flex w-25 gap-0">
									<ChevronRight class="-mr-10 h-18 w-18 font-black text-secondary" />
									<ChevronRight class="h-18 w-18 font-black text-secondary" />
								</div>
							</button>
							<div class="absolute inset-0 hidden bg-black/50 lg:block"></div>

							<!-- text inside hero banner -->
							<div
								class="absolute top-1/2 hidden -translate-y-1/2 grid-cols-2 text-secondary lg:grid"
							>
								<div
									class="ml-12 flex w-full flex-col justify-center gap-8 text-left xl:ml-20
            "
								>
									<div
										class="gap-1/3 hidden text-4xl font-bold tracking-tight lg:block 2xl:text-5xl"
									>
										{item.subtitle.id
											.split('|')
											.map((l) => l.trim())
											.join(' ')}
									</div>

									<div class="-mr-40">
										<div class=" w-full font-semibold tracking-wider text-secondary">
											<p>{item.introDesktop.id}</p>
										</div>
									</div>
									<Button class="mr-auto" href={item.page}>Read More</Button>
								</div>
								<div></div>
							</div>
						</div>
						<div
							class="mt-4 flex w-full flex-col justify-center gap-4 px-1 text-center lg:mt-2
            "
						>
							<div
								class="gap-1/3 mx-4 flex flex-col justify-center font-heading text-2xl font-black md:text-3xl lg:hidden"
							>
								{#each item.subtitle.id.split('|') as line}
									<span>{line.trim()}</span>
								{/each}
							</div>

							<div class="flex flex-col gap-6">
								<div
									class="w-full px-1 font-body tracking-wider text-primary/80 xl:px-10
                  xl:tracking-wider"
								>
									<p class="lg:hidden">{item.intro.id}</p>
									<p>{item.content.id}</p>
								</div>
								<Button class="mx-auto lg:hidden" href={item.page}>Read More</Button>
							</div>
						</div>
					</div>
				{/each}
				<!-- slide content -->
			</div>
			<!-- slide button -->
		</div>
	</section>

	<section
		class="relative my-20 flex min-h-lvh w-full flex-col justify-center gap-6 overflow-hidden px-2 text-primary lg:mt-10
    lg:grid
  lg:h-lvh lg:grid-cols-2 lg:gap-10 2xl:h-full"
	>
		<img
			src={SacredHerbsForBody}
			class="w-xs max-w-3xl self-center
      object-cover object-center
       lg:w-sm lg:justify-self-center xl:w-md"
			alt=""
		/>
		<div
			class="mx-auto flex w-sm flex-col gap-4
        lg:w-xs lg:justify-center
      lg:gap-8 lg:self-center lg:justify-self-center xl:w-sm xl:gap-10"
		>
			<div
				class="mx-auto flex flex-col text-center text-2xl leading-8 font-bold tracking-wide
            lg:text-2xl lg:font-normal xl:text-3xl xl:leading-12.5"
			>
				<span>Sacred Herbs for Body,</span>
				<span>Mind, and Soul</span>
			</div>
			<div
				class=" mx-auto mb-2 w-xs tracking-wider text-primary/80
       "
			>
				<p class="text-center text-primary/80 lg:tracking-wider">
					Terinspirasi oleh <span class="font-bold">tradisi</span>, disempurnakan dengan teknologi.
					Memadukan keunggulan alami rempah Indonesia dengan teknologi
					<span class="font-bold">Effective Microorganism </span> dari Jepang, Bokashi menghadirkan perawatan
					tubuh dan kesehatan yang efektif, aman, dan selaras dengan alam.
				</p>
			</div>
			<Button variant="primary" class="mx-auto xl:mt-6" href="/production">Read More</Button>
		</div>
	</section>

	<section class="flex w-full overflow-x-auto text-white lg:hidden">
		<div class="flex h-full w-full flex-col gap-10 bg-primary py-10 pb-15 text-center lg:py-16">
			<div class="flex flex-col gap-4">
				<h2
					class="font-heading text-2xl font-bold tracking-wide
        lg:text-5xl"
				>
					100% REMPAH ORGANIK
				</h2>
				<p class="text-base tracking-wide lg:text-2xl">
					Ditanam oleh <span class="underline">petani lokal </span> di Indonesia
				</p>
			</div>

			<!-- carausel  -->
			<div class="carousel-track-wrapper overflow-x-auto">
				<!-- sliding carausel content -->
				<div class="carousel-track flex h-full gap-12">
					{#each loopRempah as item}
						<div class="aspect-3/4 w-xs">
							<img
								src={item.image}
								alt={item.subtitle}
								class="h-full w-full rounded-xl object-center"
							/>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="mb-4 w-full overflow-hidden text-primary lg:my-10" id="rollingBadge">
		<div
			class="carousel-track-badge mx-2 flex h-full w-full gap-4 overflow-hidden
    lg:gap-8"
		>
			{#each loopBadge as item}
				<div
					class="flex aspect-square h-full w-25 justify-center rounded-full align-middle
        lg:w-28"
				>
					<img src={item.image} alt={item.subtitle} class="max-h-full rounded-full" />
				</div>
			{/each}
		</div>
	</section>

	<section
		id="partnership"
		class="mt-20 text-primary lg:mt-0 lg:flex lg:h-lvh lg:flex-col lg:justify-center"
	>
		<div>
			<div class="text-center font-heading text-3xl font-bold italic lg:hidden">
				<h1 class="mb-2 underline">#1 Balinese</h1>
				<h1>Herbal Industry</h1>
			</div>

			<div class="mx-5 hidden lg:flex lg:justify-center xl:mx-10">
				<div class="relative aspect-4/5 w-1/2 rounded-2xl">
					<img
						src={BokashiCarePic}
						alt="placeholder1"
						class="absolute inset-0 h-full w-full rounded-2xl"
					/>

					<button
						onclick={nextSlide}
						class="
			absolute
			top-1/2
			right-3
          z-50
          translate-y-0.5
      rounded-4xl
              bg-white/50
		"
					>
						<div class="flex w-12 gap-0">
							<ChevronRight class="mx-auto h-10 w-10 font-black text-primary" />
						</div>
					</button>
				</div>
				<img
					src={BalineseHerbalIndustry}
					alt="placeholder1"
					class="w-1/2 rounded-2xl object-cover"
				/>
			</div>
			<div class="my-6 flex justify-center overflow-x-hidden lg:hidden">
				<img
					src={BalineseHerbalIndustry}
					alt="placeholder1"
					class="aspect-square max-w-full self-center rounded-2xl border border-black"
				/>
			</div>

			<div class="text-center text-2xl font-bold tracking-wide lg:hidden">
				<p>We're Open For</p>
				<p class="">Partnerships</p>
			</div>
			<div class="mt-6 px-6 text-center text-lg text-primary/80 lg:hidden">
				<p>
					Tertarik riset, magang, atau kerjasama maklon produk untuk brandmu? Wujudkan kolaborasi di
					bidang lingkungan, agribisnis, wellness, dan industri herbal bersama kami.
				</p>
			</div>
			<div class="mt-8 flex justify-center lg:hidden">
				<Button variant="square" class="mx-auto" size="lg">LEARN MORE</Button>
			</div>
		</div>
	</section>
	<!-- Desktop only! -->
	<section class="relative my-20 hidden aspect-video overflow-hidden lg:block">
		<img src={slides2} class="absolute inset-0 scale-120" alt="" />
		<div class="absolute inset-0 bg-black/50"></div>
		<div
			class="absolute inset-0 mx-8 flex flex-col items-center
      justify-center gap-12 text-center text-white xl:mx-20 xl:gap-20"
		>
			<h2 class="text-3xl xl:text-4xl">Kenapa Memilih Bokashi?</h2>
			<p class="text-xl xl:text-2xl">
				Bokashi berkomitmen untuk mengembangkan produk herbal berbasis rempah nusantara yang ditanam
				sendiri oleh petani lokal Indonesia. Setiap produk yang dihasilkan merupakan kombinasi hasil
				bumi Tanah Air dengan teknologi yang mutakhir.
			</p>
		</div>
	</section>

	<section id="produk" class="mt-12 w-full overflow-x-hidden text-center">
		<div class="flex flex-col gap-6">
			<div class="carousel-track w-ful flex gap-12 overflow-x-hidden">
				{#each loopProduct as item}
					<div class="relative flex shrink-0 flex-col">
						<img
							src={item.image}
							alt={item.subtitle}
							class=" aspect-2/3 w-3xs rounded-4xl object-cover object-center"
						/>
						<div class="p-4 text-left text-lg text-primary/80">
							<h4 class="font-bold text-primary">{item.subtitle}</h4>
							<p class="max-w-[12rem] text-base">
								{item.desc}
							</p>
							<p class="mt-6 text-base font-bold text-primary">Rp {item.harga}</p>
						</div>
					</div>
				{/each}
			</div>
			<Button class="mx-auto" variant="square" size="lg">VIEW ALL</Button>
		</div>
	</section>

	<section id="otherBusiness" class="mt-10 text-primary/80 lg:hidden">
		<h1 class="mx-auto mb-4 text-center text-2xl">Other Business Line</h1>
		<div class="grid grid-cols-1 justify-items-center">
			<div class="mb-4 flex flex-col items-center justify-center gap-8">
				{#each showAll ? otherBusiness : otherBusiness.filter((item) => item.index < 4) as item}
					<div class="px-2">
						<div class="mx-auto aspect-square w-full border border-black lg:w-3xs">
							<img src={item.image} alt={item.subtitle} class="" />
						</div>
						<div class="mt-2 text-center">
							<a href={item.link}>
								<h4 class="text-lg italic underline">{item.subtitle}</h4>
							</a>
							<p class="tracking-wide">
								{item.paragraph}
							</p>
						</div>
					</div>
				{/each}
			</div>
			<Button variant="square" size="lg" onclick={() => (showAll = !showAll)}
				>{showAll ? 'VIEW LESS' : 'VIEW MORE'}</Button
			>
		</div>
	</section>
	<section id="otherBusiness" class="mt-40 hidden lg:block">
		<h1 class="text-center text-5xl">Other Business Line</h1>
		<div class="mt-20 grid grid-cols-3 gap-20">
			{#each otherBusiness as item}
				<div>
					<img
						src={item.image}
						alt={item.subtitle}
						class="mx-auto aspect-square w-sm rounded-5xl border border-black"
					/>
					<div class=" mt-10 px-2 text-center text-lg">
						<a href={item.link}>
							<h4 class="italic underline">{item.subtitle}</h4>
						</a>
						<p>
							{item.paragraph}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</section>
	<!-- In your homepage route, e.g., src/routes/+page.svelte -->

	<section class="my-8 px-4">
		<div class="mx-auto">
			<!-- Responsive video container -->
			<div class="relative w-full overflow-hidden rounded-2xl" style="padding-bottom: 56.25%;">
				<iframe
					src="https://www.youtube.com/embed/wj4HXqtZyOw"
					title="Test Video"
					class="absolute top-0 left-0 h-full w-full"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
					loading="lazy"
				>
				</iframe>
			</div>
		</div>
	</section>
</div>

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
