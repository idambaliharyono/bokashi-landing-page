<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import hero from '$lib/assets/slides3.jpg';
	import CenterText from '$lib/components/CenterText.svelte';
	import placeholder1 from '$lib/assets/27002.jpg';
	import placeholder2 from '$lib/assets/5563.jpg';
	import placeholderPhone from '$lib/assets/placeholder-portrait-9-16.jpg';
	import Button from '$lib/components/Button.svelte';

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

<Hero src={hero} alt="images">OUR PRODUCTION HOUSE</Hero>
<CenterText
	heading="STORY OF INGREDIENTS"
	headingSizeMobile="2xl"
	headingSizeDesktop="2xl"
	body={[
		'Berawal dari alam Indonesia yang kaya dan subur, Bokashi memilih bahan-bahan terbaik yang tumbuh selaras dengan tanah dan iklim tropis. Setiap bahan membawa manfaat alami yang telah lama dikenal dalam perawatan tradisional.',
		'Melalui proses fermentasi dan teknologi Effective Microorganisms (EM), kekuatan alam tersebut diolah dengan cara yang lembut dan terjaga, agar bekerja lebih efektif dan seimbang.',
		'Setiap produk Bokashi lahir dari kesederhanaan alam, diproses dengan ketelitian, dan dihadirkan sebagai perawatan alami yang jujur dan menenangkan.'
	]}
/>
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
					Kami adalah satu-satunya pemegang lisensi EM Technology Jepang di Indonesia. Semua produk
					kami diproses dan difermentasi dengan teknologi ini.
				</p>
			</div>
		</div>
		<div class="mx-auto mb-8 flex flex-col justify-center gap-4 text-center">
			<img src={hero} alt="sss" class="mx-auto aspect-square w-25 rounded-full" />
			<div>
				<h6 class="italic underline">Halal and BPOM Certified</h6>

				<p>
					Bokashi sudah mengantongi sertifikat halal dan semua produknya sudah BPOM dan aman dipakai
					setiap hari, mulai dari anak-anak hingga orang dewasa.
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
<div class="mb-4 rounded-3xl bg-secondary px-4 py-4 text-center text-primary lg:px-12">
	<h4 class="text-xl font-bold">500+</h4>
	<p>
		Ahli dan Akademisi telah berkunjung dan belajar langsung soal pengelolaan industri herbal di
		Bokashi
	</p>
</div>

<div class="mt-4 flex flex-col gap-4 px-2">
	{#each imagesVertical as item}
		<div class="aspect-square w-full overflow-hidden rounded-2xl border border-black">
			<img src={item.image} alt={item.subtitle} class="h-full w-full object-cover object-center" />
		</div>
	{/each}
</div>
