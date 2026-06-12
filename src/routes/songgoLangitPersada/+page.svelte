<script lang="ts">
	import hero from '$lib/assets/slides22.jpg';
	import placeholder1 from '$lib/assets/27002.jpg';
	import placeholder2 from '$lib/assets/5563.jpg';
	import placeholderPhone from '$lib/assets/placeholder-portrait-9-16.jpg';
	import Button from '$lib/components/Button.svelte';

	const locationImage = [
		{
			index: 1,
			subtitle: 'Coconut Oil',
			image: placeholder1
		}
	];
	const imagesHorizontal = [
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
	const loopHorizontal = [...imagesHorizontal, ...imagesHorizontal];
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
</script>

<section class="">
	<div class="relative aspect-video w-full overflow-hidden border border-black">
		<enhanced:img
			src={hero}
			alt="hero section"
			class="[&>img]:absolute [&>img]:inset-0 [&>img]:h-full [&>img]:w-full [&>img]:object-cover [&>img]:object-center [&>picture]:absolute [&>picture]:inset-0 [&>picture]:h-full [&>picture]:w-full"
		/>
		<div class="absolute inset-0 bg-linear-to-b from-transparent to-black/50"></div>
		<h1
			class="absolute top-1/2 left-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 text-center font-heading text-xl font-bold text-white"
		>
			PT Songgo Langit Persada
		</h1>
	</div>
</section>

<section class="mt-4 flex flex-col gap-4 px-3 text-justify text-primary">
	<p class="">
		PT Songgo Langit Persada merupakan pionir dalam pengembangan solusi organik di Indonesia yang
		berfokus pada keseimbangan alam dan lingkungan. Didirikan pada tahun 1993 oleh Dr. Gede Ngurah
		Wididana, PT SLP memegang lisensi eksklusif pertama dari pakar mikrobiologi Jepang Prof. Dr.
		Teruo Higa untuk mengembangkan Teknologi EM (Effective Microorganisms) di Indonesia.
	</p>
	<p>
		Melalui filosofi merawat kehidupan dari akarnya, PT Songgo Langit Persada menghadirkan rangkaian
		produk organik yang menjadi sahabat bagi ekosistem. Salah satu inovasi utamanya, EM4, merupakan
		pupuk organik cair yang membawa mikroorganisme baik untuk membantu pertumbuhan segala jenis
		tanaman, sekaligus mendukung keberlanjutan di bidang peternakan, perikanan, hingga pengolahan
		limbah yang ramah lingkungan. Inovasi produk terus dikembangkan melalui varian pupuk organik
		cair berbasis fermentasi rempah dan tanaman obat, seperti Sarula, Saferto, dan Ecocity.
	</p>
</section>

<section class="flex w-full overflow-x-auto text-white">
	<div class="flex h-full w-full flex-col gap-4 py-8 text-center">
		<!-- carausel  -->
		<div class="relative h-full w-full overflow-x-auto">
			<!-- sliding carausel content -->
			<div class="carousel-track flex h-full gap-8">
				{#each loopHorizontal as item}
					<div class="relative aspect-2/3 w-xs">
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
<section class="mt-4 flex flex-col gap-4 px-3 text-justify text-primary">
	<p>
		Seiring pertumbuhan kinerja perusahaan, lini produk diperluas melalui pemanfaatan limbah organik
		yang difermentasi menjadi Pupuk Organik Bokashi (Merek dagang: Kotaku, Sekar, dan Granul).
		Setiap produk dirancang dengan standar dedikasi tinggi untuk memberikan kontribusi nyata bagi
		pembangunan sektor pertanian dan kesehatan keluarga Indonesia secara menyeluruh.
	</p>
</section>

<section class="mt-6">
	<h2 class="mx-auto text-center text-2xl font-bold tracking-tight text-primary">
		PRODUK EM 4 INDONESIA
	</h2>
	<div class="mt-4 flex flex-col gap-4 px-2">
		{#each imagesVertical as item}
			<div class="aspect-video w-full overflow-hidden rounded-2xl border border-black">
				<enhanced:img
					src={item.image}
					alt={item.subtitle}
					class="h-full w-full object-cover object-center"
				/>
			</div>
		{/each}
	</div>
</section>
<section class="mt-4 flex flex-col gap-4 px-3 text-justify text-primary">
	<p class="">
		Berakar di tanah Bali, aktivitas industri PT Songgo Langit Persada dipusatkan di Desa Bengkel
		(Buleleng) dan Desa Bantas (Tabanan). Di sinilah setiap formula diracik dengan penuh ketelitian,
		menggabungkan kearifan lokal dengan standar teknologi inokulasi modern di bawah pengawasan EMRO
		(EM Research Organization) Jepang. Sinergi ini menjamin setiap tetes kebaikan EM sampai ke
		tangan konsumen di seluruh penjuru Indonesia melalui jaringan distribusi yang hangat dan
		tepercaya.
	</p>
	<p>
		Keunggulan setiap produk tidak lepas dari peran penting divisi Research and Development (R&D).
		Penelitian dilakukan dengan hati dan ketajaman ilmu pengetahuan, baik dalam skala laboratorium
		maupun pengujian langsung di lapangan. Riset berkelanjutan ini dilakukan untuk memastikan bahwa
		setiap inovasi yang dihadirkan, khususnya Pupuk Organik EM4 dan Bokashi, tetap menjadi solusi
		alami yang andal bagi masa depan pertanian Indonesia yang lebih sehat dan harmonis.
	</p>
</section>

<section class="mt-6">
	<div class="mt-4 flex flex-col gap-4 px-2">
		{#each locationImage as item}
			<div class="aspect-video w-full overflow-hidden rounded-2xl border border-black">
				<enhanced:img
					src={item.image}
					alt={item.subtitle}
					class="h-full w-full object-cover object-center"
				/>
			</div>
		{/each}
	</div>
</section>

<section class="mt-6 text-center font-body text-primary">
	<div class="flex flex-col gap-4">
		<h2 class="font-heading text-2xl font-bold">KONTAK KAMI</h2>
		<div class="flex flex-col gap-0">
			<p>Irkham Rosidi</p>
			<p>0812 3818 234</p>
			<p>irkhamrosidi@emindonesia.com</p>
			<p>www.em4indonesia.com</p>
		</div>
		<Button variant="secondary" class="mx-auto w-64">Hubungi Kami</Button>
	</div>
</section>

<style>
	.carousel-track {
		animation: scroll-left 20s linear infinite;
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
