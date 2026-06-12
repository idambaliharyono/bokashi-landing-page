<script lang="ts">
	import hero from '$lib/assets/slides3.jpg';
	import placeholder1 from '$lib/assets/27002.jpg';
	import placeholder2 from '$lib/assets/5563.jpg';
	import placeholderPhone from '$lib/assets/placeholder-portrait-9-16.jpg';
	import Button from '$lib/components/Button.svelte';

	const menuList = [
		{
			title: 'Bokashi Therapy',
			subTitle: '',
			price: '120'
		},
		{
			title: 'Full Body Massage',
			subTitle: 'Relaxation or Osteopathy',
			price: '230'
		},
		{
			title: 'Full Body Massage Couple Room',
			subTitle: 'Relaxation or Osteopathy',
			price: '470'
		},
		{
			title: 'Foot Massage',
			subTitle: 'Reflexiology',
			price: '145'
		},
		{
			title: 'Alternative Massage',
			subTitle: 'Sprains, Strains Treatment',
			price: '120'
		},
		{
			title: 'Body Scrub',
			subTitle: 'Spa Beauty Treatment',
			price: '120'
		}
	];
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

<section class=" px-1">
	<div class="relative aspect-video w-full overflow-hidden rounded-2xl border border-black">
		<enhanced:img
			src={hero}
			alt="hero section"
			class="[&>img]:absolute [&>img]:inset-0 [&>img]:h-full [&>img]:w-full [&>img]:object-cover [&>img]:object-center [&>picture]:absolute [&>picture]:inset-0 [&>picture]:h-full [&>picture]:w-full"
		/>
		<div class="absolute inset-0 bg-linear-to-b from-transparent to-black/50"></div>
		<h1
			class="absolute top-1/2 left-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 text-center font-heading text-xl font-bold text-white"
		>
			Klinik Pijat Usada Pak Oles
		</h1>
	</div>
</section>

<section class="mt-4 flex flex-col gap-4 px-3 text-justify text-primary">
	<p class="">
		Klinik Usada Pak Oles merupakan pusat kesehatan tradisional yang menghadirkan perpaduan harmonis
		antara teknik pijat alternatif dan inovasi Bokashi Therapy. Beroperasi sejak tahun 2011, klinik
		ini menjadi destinasi kesehatan yang unik karena merupakan satu-satunya di Indonesia yang
		mengintegrasikan Teknologi EM (Effective Microorganisms) ke dalam layanan terapinya. Dengan
		dedikasi tinggi terhadap pengobatan alami, Usada Pak Oles hadir sebagai solusi untuk meringankan
		berbagai keluhan fisik seperti rematik, salah urat, hingga sakit pinggang, sekaligus menjadi
		sarana relaksasi yang menyegarkan jiwa dan raga.
	</p>
	<p>
		Salah satu layanan unggulan yang menjadi ikon klinik ini adalah Bokashi Therapy, sebuah metode
		detoksifikasi eksklusif yang diadopsi dari teknik Kozoburo (Mandi Enzim) yang sangat populer di
		Jepang. Melalui proses unik berupa penguburan tubuh dalam media rempah yang telah difermentasi,
		terapi ini memanfaatkan panas alami bersuhu 50–70°C untuk mengeluarkan racun dari dalam tubuh
		melalui keringat secara efektif. Keunikan metode ini tidak hanya menarik minat wisatawan
		domestik, tetapi juga mancanegara yang mencari pengalaman detoksifikasi mendalam dan relaksasi
		total di tengah ketenangan suasana Bali.
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
<section class="font-heading text-primary">
	<div>
		<h2 class="mb-4 text-center text-3xl font-bold">Layanan Dan Terapi</h2>
		<div class="flex flex-col gap-4">
			{#each menuList as item}
				<div class="flex justify-between px-6">
					<div class="flex max-w-2/3 flex-col">
						<h4 class=" text-xl font-bold">{item.title.toUpperCase()}</h4>
						<p class="font-body">{item.subTitle}</p>
					</div>
					<h2 class="text-xl font-bold">{item.price}K*</h2>
				</div>
			{/each}
		</div>
	</div>
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
		<h2 class="font-heading text-2xl font-bold">RESERVASI</h2>
		<div class="flex flex-col gap-0">
			<p>Usada Pak Oles Massage</p>
			<p>+62 821-4691-5354</p>
			<p>IG: @usadapakoles_massage</p>
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
