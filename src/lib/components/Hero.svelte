<!-- Hero.svelte -->
<script>
	let {
		src = '',
		alt = 'hero section',
		aspectRatio = 'video',
		rounded = 'xl',
		border = false,
		children
	} = $props();
	const imageClass = `aspect-video w-full rounded-xl rounded-4xl `;
</script>

<section class="w-full">
	<div
		class="relative aspect-{aspectRatio} overflow-hidden xl:aspect-2.5/1 rounded-{rounded} {border
			? 'border border-black'
			: ''}"
	>
		<img {src} {alt} class="absolute aspect-{aspectRatio} rounded-{rounded} scale-110" />

		<div class="absolute inset-0 bg-black/30"></div>

		<div
			class="absolute inset-0 z-10 flex items-center justify-center text-center font-heading text-3xl leading-tight font-bold text-white text-shadow-lg lg:text-4xl"
		>
			{@render children?.()}
		</div>
	</div>
</section>
