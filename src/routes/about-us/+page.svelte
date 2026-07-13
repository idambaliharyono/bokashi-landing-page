<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import verticalPlaceholder from '$lib/assets/placeholder-portrait-9-16.jpg';
	import CenterText from '$lib/components/CenterText.svelte';
	import placeholder1 from '$lib/assets/27002.jpg';
	import placeholder2 from '$lib/assets/5563.jpg';
	import placeholderPhone from '$lib/assets/placeholder-portrait-9-16.jpg';
	import Button from '$lib/components/Button.svelte';
	import LgContainer from '$lib/components/LgContainer.svelte';

	// images etc
	import hero from '$lib/assets/2. ABOUT US- Story of purpose/Webp-minus csr/OUR STORY  OF PURPOSE.webp';
	import IntegrasiTeknologiJepangPic from '$lib/assets/2. ABOUT US- Story of purpose/Webp-minus csr/Mobile.webp';
	import DadongBandungPic from '$lib/assets/2. ABOUT US- Story of purpose/Webp-minus csr/222.webp';
	import MobPic from '$lib/assets/2. ABOUT US- Story of purpose/Webp-minus csr/High Quality, Science-Backed Products.webp';

	import ImageVertical1 from '$lib/assets/2. ABOUT US- Story of purpose/Webp-minus csr/1.webp';
	import ImageVertical2 from '$lib/assets/2. ABOUT US- Story of purpose/Webp-minus csr/2.webp';
	import ImageVertical3 from '$lib/assets/2. ABOUT US- Story of purpose/Webp-minus csr/3.webp';

	import ImpactPic1 from '$lib/assets/2. ABOUT US- Story of purpose/Webp-minus csr/Pemberdayaan Masyarakat.webp';
	import ImpactPic2 from '$lib/assets/2. ABOUT US- Story of purpose/Webp-minus csr/Penyerapan Tenaga Kerja Lokal & Lansia.webp';
	import ImpactPic3 from '$lib/assets/2. ABOUT US- Story of purpose/Webp-minus csr/Pusat Edukasi Industri Herbal No.1 Di Bali.webp';
	import ImpactPic4 from '$lib/assets/2. ABOUT US- Story of purpose/Webp-minus csr/3.webp';

	const heroNumbers = [
		{
			number: '28',
			body: 'Years of Experience'
		},
		{
			number: '5000',
			body: 'EM Training Alumnee'
		},
		{
			number: '10 Mio',
			body: 'Sold Products'
		}
	];
	const imagesVertical = [
		{
			index: 1,
			subtitle: 'Coconut Oil',
			image: ImageVertical1
		},
		{
			index: 2,
			subtitle: 'Coconut Oil',
			image: ImageVertical2
		},
		{
			index: 3,
			subtitle: 'Coconut Oil',
			image: ImageVertical3
		}
	];

	const otherBusiness = [
		{
			index: 1,
			subtitle: 'Pemberdayaan Masyarakat',
			paragraph:
				'Kami memberikan pelatihan hidup sehat pada masyarakat desa, pengembangan pertanian organik hingga yoga gratis.',
			image: ImpactPic1,
			link: '/home'
		},
		{
			index: 2,
			subtitle: 'Penyerapan Tenaga Kerja Lokal & Lansia',
			paragraph:
				'Kami membuka kesempatan untuk masyarakat dari segala kalangan untuk terus berkarya, tak peduli berapa usianya.',
			image: ImpactPic2,
			link: '/home'
		},
		{
			index: 3,
			subtitle: 'Pusat Edukasi Industri Herbal No.1 Di Bali',

			paragraph:
				'Kami membuka kesempatan pada akademisi dan praktisi untuk magang dan belajar dari para ahli di Bokashi.',
			image: ImpactPic3,
			link: '/home'
		},
		{
			index: 4,
			subtitle: 'Bakti Sosial',
			paragraph:
				'Berdampak langsung pada masyarakat melalui kegiatan rutin di panti jompo, panti asuhan, serta aktivitas donor darah.',
			image: ImpactPic4,
			link: '/home'
		}
	];
	let showAll = $state(false);
</script>

<Hero src={hero} alt="images">
	<div>
		<h1 class="">Our Story Of Purpose</h1>
		<p class="mt-4 hidden text-xl lg:block">From Village Wisdom to Global Wellness</p>
	</div>
</Hero>
<LgContainer class="text-sm">
	<div class=" mt-4 lg:-mx-16 xl:mt-6">
		<CenterText
			heading="From Village Wisdom to Global Wellness"
			body={[
				'Terinspirasi dari ramuan herbal Dadong Bandung di Desa Bengkel, Pak Oles memadukan kearifan lokal dengan ilmu pengetahuan dan teknologi modern dari Jepang, untuk melahirkan Minyak Bokashi.'
			]}
		/>
	</div>
	<div
		class="mx-4 mt-0 grid
    grid-cols-3 gap-2 p-1 lg:mt-4 lg:gap-12 lg:px-10"
	>
		{#each heroNumbers as item}
			<div class="mi rounded-2xl bg-secondary px-4 py-4 text-center text-primary lg:px-14 lg:py-12">
				<h4 class="text-xl font-bold lg:text-3xl">{item.number}+</h4>
				<p class="lg:mt-2 lg:text-xl">{item.body}</p>
			</div>
		{/each}
	</div>
	<div class="my-8 text-center text-xl font-bold text-primary lg:text-3xl">OUR JOURNEY</div>
	<div class="overflow-clip">
		<img
			src={DadongBandungPic}
			alt="Dadong Bandung"
			class="relative left-1/2 z-0 aspect-6/5 w-full max-w-5xl -translate-x-1/2
   lg:w-3xl"
		/>
	</div>
	<div class="z-10 lg:px-16">
		<CenterText
			heading="EMPOWERING LOCAL WISDOM"
			headingSizeMobile="base"
			headingSizeDesktop="3xl"
			body={[
				'Berawal dari Lengis Arak Nyuh karya Dadong Bandung pada era 1980-an di Desa Bengkel, kami berkomitmen untuk melestarikan kearifan lokal yang sempat terhenti. Melalui dedikasi Pak Oles, jejak tradisi ini dihidupkan kembali sebagai fondasi Bokashi. Kami mengintegrasikan nilai sejarah turun-temurun dengan inovasi modern untuk menghadirkan solusi kesehatan alami yang berkelanjutan bagi masyarakat luas.'
			]}
			headingParagraphSpace="1"
		/>
	</div>
	<div class="-mx-1 bg-primary px-3 py-8 lg:px-0 lg:py-12">
		<img
			src={IntegrasiTeknologiJepangPic}
			alt="Integrasi Teknologi Jepang"
			class="mx-auto aspect-square w-sm rounded-3xl lg:aspect-square lg:w-2xl"
		/>
		<div class="lg:-my-8 lg:mb-0 lg:px-16">
			<CenterText
				heading="#1 EM TECHNOLOGY IN INDONESIA"
				paragraphColor="white"
				headingColor="white"
				headingSizeDesktop="3xl"
				headingSizeMobile="lg"
				body={[
					'Sebagai pemegang lisensi tunggal teknologi Effective Microorganisms (EM) di Indonesia, Pak Oles mengintegrasikan inovasi fermentasi asal Jepang tersebut dengan kearifan lokal Bali. Melalui riset mendalam sejak tahun 1995, pemanfaatan teknologi EM ini menjadi fondasi utama dalam menjamin standar kualitas dan efektivitas produk herbal kami yang telah dipercaya lintas generasi. Komitmen kami terhadap keunggulan teknologi ini memastikan setiap produk yang dihasilkan selaras dengan prinsip kesehatan alami yang berkelanjutan bagi masyarakat luas.'
				]}
				headingParagraphSpace="1"
			/>
			<CenterText />
		</div>
	</div>
	<div class="  px-3 pt-4 lg:py-4">
		<div class="mx-auto aspect-square w-xs overflow-hidden lg:w-2xl">
			<img
				src={MobPic}
				alt="Integrasi Teknologi Jepang"
				class="aspect-square h-full w-full scale-125 self-center rounded-3xl"
			/>
		</div>
		<div class="-mx-2.5 mt-4 lg:px-16">
			<CenterText
				headingSizeMobile="lg"
				headingSizeDesktop="3xl"
				heading="High Quality, Science-Backed Products"
				body={[
					'Berlandaskan latar belakang pendidikan di Fakultas Pertanian Universitas Udayana dan University of the Ryukyus, Jepang, Dr. Gede Ngurah Wididana (Pak Oles) mengintegrasikan keahlian agrikulturnya dengan teknologi Effective Microorganisms (EM). Implementasi inovasi fermentasi asal Okinawa tersebut menjadi fondasi utama dalam riset dan pengembangan kami untuk menjamin standar kualitas tinggi pada setiap produk herbal yang dihasilkan secara konsisten hingga saat ini.'
				]}
				headingParagraphSpace="0.5"
			/>
		</div>
	</div>
	<section class="mt-0">
		<div class="mt-0 flex flex-col gap-4 lg:mt-4 lg:gap-10">
			{#each imagesVertical as item}
				<div class="aspect-video w-full overflow-hidden rounded-xl lg:rounded-5xl">
					<img
						src={item.image}
						alt={item.subtitle}
						class="h-full w-full object-cover object-center"
					/>
				</div>
			{/each}
		</div>
	</section>
	<div class="lg:mx-36">
		<section>
			<div
				class="mx-2 mt-1 flex flex-col gap-4 p-4 text-left tracking-wide text-primary lg:my-6 lg:text-xl"
			>
				<h4 class="text-center text-xl font-bold lg:text-3xl">GROWING WITH PURPOSE</h4>
				<div class="flex flex-col lg:mt-4">
					<h4 class="text-center text-xl font-bold lg:text-3xl">VISI</h4>
					<ul class="list-disc px-2 text-primary/80">
						<li>
							Menjadi perusahaan jamu tradisional kelas dunia yang memproduksi produk kesehatan
							berkualitas tinggi, bersertifikat halal, dan bermanfaat bagi masyarakat global.
						</li>
					</ul>
				</div>
				<div class="flex flex-col lg:mt-4">
					<h4 class="text-center text-xl font-bold lg:text-3xl">MISI</h4>
					<ul class="list-disc px-2 text-primary/80">
						<li>
							Menerapkan Good Manufacturing Practices (GMP/CPOTB) sesuai dengan regulasi kesehatan
							nasional.
						</li>
						<li>
							Melakukan riset dan inovasi berkelanjutan dalam bidang obat herbal dan solusi
							kesehatan berbasis EM (Effective Microorganisms).
						</li>
						<li>
							Memastikan setiap produk aman, efektif, dan dapat dijangkau oleh semua kalangan.
						</li>
						<li>
							Menjunjung tinggi integritas, transparansi, dan komitmen terhadap keunggulan di setiap
							aspek bisnis.
						</li>
					</ul>
				</div>
			</div>
		</section>
		<section>
			<div
				class="mx-2 rounded-xl bg-primary p-4 text-justify font-bold text-white
      lg:px-8 lg:py-6 lg:text-xl"
			>
				<p class="">
					Kami berkomitmen penuh pada pemanfaatan tanaman herbal lokal melalui teknologi Effective
					Microorganisms (EM) yang berkelanjutan. Tim peneliti dan praktisi kami bekerja
					berdampingan untuk mengolah kekayaan alam tersebut guna menghadirkan solusi alami yang
					bermakna bagi masyarakat.
				</p>
			</div>
		</section>
		<section id="otherBusiness" class="mt-10 text-primary">
			<h1 class="mx-auto mb-4 text-center text-2xl font-bold lg:text-3xl">OUR IMPACT</h1>
			<div class="grid grid-cols-1 justify-items-center lg:mt-6">
				<div class="mb-4 flex flex-col items-center justify-center gap-4">
					{#each showAll ? otherBusiness : otherBusiness.filter((item) => item.index < 4) as item}
						<div class="">
							<div class="mx-auto mb-2 aspect-square w-full lg:w-2xl">
								<img src={item.image} alt={item.subtitle} class="rounded-xl lg:rounded-5xl" />
							</div>
							<div class=" text-center lg:w-full lg:px-16 lg:text-xl">
								<h4 class=" font-semibold italic underline">{item.subtitle}</h4>
								<div class="mx-auto w-[18rem] lg:w-full">
									<p>
										{item.paragraph}
									</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
				<Button variant="square" onclick={() => (showAll = !showAll)}
					>{showAll ? 'VIEW LESS' : 'VIEW MORE'}</Button
				>
			</div>
		</section>
	</div>
</LgContainer>
