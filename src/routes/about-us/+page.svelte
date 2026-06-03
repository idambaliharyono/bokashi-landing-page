<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';

	import hero from '$lib/assets/slides3.jpg';
	import CenterText from '$lib/components/CenterText.svelte';

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
</script>

<Hero src={hero} alt="images">OUR STORY OF PURPOSE</Hero>

<CenterText
	heading="FROM VILLAGE WISDOM TO GLOBAL WELLNESS"
	headingSize="rounded-2xl"
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
