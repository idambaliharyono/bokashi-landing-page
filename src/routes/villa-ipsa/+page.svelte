<script lang="ts">
	import hero from '$lib/assets/slides22.jpg';
	import placeholder1 from '$lib/assets/27002.jpg';
	import placeholder2 from '$lib/assets/5563.jpg';
	import placeholderPhone from '$lib/assets/placeholder-portrait-9-16.jpg';
	import Button from '$lib/components/Button.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import CenterText from '$lib/components/CenterText.svelte';
	import LgContainer from '$lib/components/LgContainer.svelte';

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
		}
	];
</script>

<Hero src={hero} alt="images">VILLA IPSA</Hero>
<LgContainer class="-mt-10">
	<CenterText
		heading=""
		body={[
			'Villa IPSA adalah tempat untuk beristirahat dan kembali terhubung dengan alam. Terletak di	dataran tinggi Bali Utara, villa ini dikelilingi lembah hijau, sawah terasering, dan udara pegunungan yang sejuk. Lingkungannya tenang, cocok bagi siapa pun yang ingin menikmati sisi Bali yang lebih alami dan jauh dari keramaian.',
			'Villa IPSA pada awal tahun 1990-an awalnya merupakan pusat pelatihan pertanian herbal dan Teknologi EM (Effective Microorganism), yang didirikan oleh Dr. Gede Ngurah Wididana atau Pak Oles. Sejak awal, tempat ini dikembangkan sebagai ruang pembelajaran tentang pertanian berkelanjutan dan gaya hidup sehat yang selaras dengan alam. Nilai-nilai tersebut hingga kini masih menjadi dasar pengelolaan Villa IPSA.',
			'Seiring waktu, Villa IPSA berkembang menjadi boutique resort dan ruang retret yang terbuka bagi tamu dari dalam maupun luar negeri, khususnya mereka yang tertarik pada wellness dan ketenangan alam Bali Utara. Fasilitas seperti yoga shala digunakan untuk kelas yoga harian serta kegiatan berkala seperti Tai Chi dan Qigong.'
		]}
		paragraphAlignment="justify"
	/>

	<div class="text-primary/80 lg:text-xl">
		<section class="flex w-full overflow-x-auto text-white">
			<div class="flex h-full w-full flex-col gap-4 py-8 text-center">
				<!-- carausel  -->
				<div class="relative h-full w-full overflow-x-auto">
					<!-- sliding carausel content -->
					<div class="carousel-track flex h-full gap-8 lg:gap-14">
						{#each loopHorizontal as item}
							<div class="relative aspect-2/3 w-xs border border-black lg:w-md">
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

		<section class="mt-6">
			<h2 class="mx-auto text-center text-2xl font-bold tracking-tight text-primary lg:text-4xl">
				Akomodasi
			</h2>
			<div class="mt-4 flex flex-col gap-4 px-2 lg:gap-10">
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
		<CenterText
			heading=""
			body={[
				'Tamu dapat mengikuti berbagai aktivitas yang berhubungan dengan alam dan budaya lokal, seperti kelas memasak masakan Bali, lokakarya herbal, serta trekking ke jalur alam dan air terjun di sekitar kawasan. Setiap kamar memiliki beranda pribadi dengan pemandangan lembah, memberikan ruang untuk bersantai dan menikmati suasana sekitar.',
				'Villa IPSA juga menyediakan layanan shuttle gratis ke pusat Munduk untuk memudahkan tamu menjelajahi area sekitar. Dengan tetap mengedepankan prinsip keberlanjutan, Villa IPSA menawarkan pengalaman menginap yang sederhana, nyaman, dan selaras dengan alam—sesuai dengan visi awal pendiriannya.'
			]}
			paragraphAlignment="justify"
		/>

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
			<div class="flex flex-col gap-4 lg:gap-8">
				<h2 class="font-heading text-2xl font-bold lg:text-4xl">KONTAK KAMI</h2>
				<div class="flex flex-col gap-0">
					<p>Irkham Rosidi</p>
					<p>0812 3818 234</p>
					<p>irkhamrosidi@emindonesia.com</p>
					<p>www.em4indonesia.com</p>
				</div>
				<Button variant="secondary" class="mx-auto w-64">Hubungi Kami</Button>
			</div>
		</section>
	</div>
</LgContainer>

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
