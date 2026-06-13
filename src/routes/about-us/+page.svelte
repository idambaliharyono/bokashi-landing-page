<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import verticalPlaceholder from '$lib/assets/placeholder-portrait-9-16.jpg';
	import hero from '$lib/assets/slides3.jpg';
	import CenterText from '$lib/components/CenterText.svelte';
	import placeholder1 from '$lib/assets/27002.jpg';
	import placeholder2 from '$lib/assets/5563.jpg';
	import placeholderPhone from '$lib/assets/placeholder-portrait-9-16.jpg';
	import Button from '$lib/components/Button.svelte';

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
			index: 4,
			subtitle: 'Coconut Oil',
			image: placeholder1
		},
		{
			index: 5,
			subtitle: 'Coconut Oil',
			image: placeholderPhone
		}
	];

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
	let showAll = $state(false);
</script>

<Hero src={hero} alt="images">OUR STORY OF PURPOSE</Hero>

<CenterText
	heading="FROM VILLAGE WISDOM TO GLOBAL WELLNESS"
	headingSizeMobile="2xl"
	headingSizeDesktop="2xl"
	body={[
		'Terinspirasi dari ramuan herbal Dadong Bandung di Desa Bengkel, Pak Oles memadukan kearifan lokal dengan ilmu pengetahuan dan teknologi modern dari Jepang, untuk melahirkan Minyak Bokashi.'
	]}
/>
<div class="mt-4 grid grid-cols-3 gap-2 p-1 lg:gap-12 lg:px-12">
	{#each heroNumbers as item}
		<div class="rounded-2xl bg-secondary px-4 py-4 text-center text-primary lg:px-12">
			<h4 class="text-xl font-bold">{item.number}+</h4>
			<p>{item.body}</p>
		</div>
	{/each}
</div>
<CenterText heading="OUR JOURNEY" headingSizeDesktop="xl" headingSizeMobile="xl" />
<img src={verticalPlaceholder} alt="Dadong Bandung" class="mx-auto aspect-2/3 w-sm" />
<CenterText
	heading="EMPOWERING LOCAL WISDOM"
	headingSizeMobile="base"
	body={[
		'Berawal dari Lengis Arak Nyuh karya Dadong Bandung pada era 1980-an di Desa Bengkel, kami berkomitmen untuk melestarikan kearifan lokal yang sempat terhenti. Melalui dedikasi Pak Oles, jejak tradisi ini dihidupkan kembali sebagai fondasi Bokashi. Kami mengintegrasikan nilai sejarah turun-temurun dengan inovasi modern untuk menghadirkan solusi kesehatan alami yang berkelanjutan bagi masyarakat luas.'
	]}
/>
<div class="bg-primary px-3 py-4">
	<img
		src={verticalPlaceholder}
		alt="Integrasi Teknologi Jepang"
		class="mx-auto aspect-3/4 w-sm rounded-3xl"
	/>
	<CenterText
		heading="#1 EM TECHNOLOGY IN INDONESIA"
		body={[
			'Sebagai pemegang lisensi tunggal teknologi Effective Microorganisms (EM) di Indonesia, Pak Oles mengintegrasikan inovasi fermentasi asal Jepang tersebut dengan kearifan lokal Bali. Melalui riset mendalam sejak tahun 1995, pemanfaatan teknologi EM ini menjadi fondasi utama dalam menjamin standar kualitas dan efektivitas produk herbal kami yang telah dipercaya lintas generasi. Komitmen kami terhadap keunggulan teknologi ini memastikan setiap produk yang dihasilkan selaras dengan prinsip kesehatan alami yang berkelanjutan bagi masyarakat luas.'
		]}
		textColor="text-white"
	/>
</div>
<div class="px-3 py-4">
	<img
		src={verticalPlaceholder}
		alt="Integrasi Teknologi Jepang"
		class="mx-auto aspect-3/4 w-sm rounded-3xl"
	/>
	<CenterText
		heading="High Quality, Science-Backed Products"
		body={[
			'Berlandaskan latar belakang pendidikan di Fakultas Pertanian Universitas Udayana dan University of the Ryukyus, Jepang, Dr. Gede Ngurah Wididana (Pak Oles) mengintegrasikan keahlian agrikulturnya dengan teknologi Effective Microorganisms (EM). Implementasi inovasi fermentasi asal Okinawa tersebut menjadi fondasi utama dalam riset dan pengembangan kami untuk menjamin standar kualitas tinggi pada setiap produk herbal yang dihasilkan secara konsisten hingga saat ini.'
		]}
	/>
</div>
<section class="mt-6">
	<h2 class="mx-auto text-center text-2xl font-bold tracking-tight text-primary">
		PRODUK EM 4 INDONESIA
	</h2>
	<div class="mt-4 flex flex-col gap-4 px-2">
		{#each imagesVertical as item}
			<div class="aspect-video w-full overflow-hidden rounded-2xl border border-black">
				<img
					src={item.image}
					alt={item.subtitle}
					class="h-full w-full object-cover object-center"
				/>
			</div>
		{/each}
	</div>
</section>
<section>
	<div class="mx-2 my-6 flex flex-col gap-4">
		<h4 class="text-center">GROWING WITH PURPOSE</h4>
		<div class="flex flex-col">
			<h4 class="text-center">VISI</h4>
			<ul>
				<li>
					Menjadi perusahaan jamu tradisional kelas dunia yang memproduksi produk kesehatan
					berkualitas tinggi, bersertifikat halal, dan bermanfaat bagi masyarakat global.
				</li>
			</ul>
		</div>
		<div class="flex flex-col">
			<h4 class="text-center">MISI</h4>
			<ul>
				<li>
					Menerapkan Good Manufacturing Practices (GMP/CPOTB) sesuai dengan regulasi kesehatan
					nasional.
				</li>
				<li>
					Melakukan riset dan inovasi berkelanjutan dalam bidang obat herbal dan solusi kesehatan
					berbasis EM (Effective Microorganisms).
				</li>
				<li>Memastikan setiap produk aman, efektif, dan dapat dijangkau oleh semua kalangan.</li>
				<li>
					Menjunjung tinggi integritas, transparansi, dan komitmen terhadap keunggulan di setiap
					aspek bisnis.
				</li>
			</ul>
		</div>
	</div>
</section>
<section>
	<div class="mx-2 rounded-2xl bg-primary p-4 text-justify text-white">
		<p class="">
			Kami berkomitmen penuh pada pemanfaatan tanaman herbal lokal melalui teknologi Effective
			Microorganisms (EM) yang berkelanjutan. Tim peneliti dan praktisi kami bekerja berdampingan
			untuk mengolah kekayaan alam tersebut guna menghadirkan solusi alami yang bermakna bagi
			masyarakat.
		</p>
	</div>
</section>
<section id="otherBusiness" class="mt-10 text-primary">
	<h1 class="mx-auto text-center text-3xl font-bold">Other Business Line</h1>
	<div class="mx-2 grid grid-cols-1 justify-items-center">
		<div class="mb-4 flex flex-col items-center justify-center gap-4 border border-black">
			{#each showAll ? otherBusiness : otherBusiness.filter((item) => item.index < 4) as item}
				<div class="px-2">
					<div class="mx-auto aspect-square w-xs border border-black">
						<img src={item.image} alt={item.subtitle} class="" />
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
