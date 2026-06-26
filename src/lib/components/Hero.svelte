<!-- Hero.svelte -->
<script>
	let {
		src = '',
		alt = 'hero section',
		overlayOpacity = 'black/50',
		aspectRatio = 'video',
		rounded = 'xl',
		border = false,
		children
	} = $props();
	const imageClass = `aspect-video w-full rounded-xl rounded-4xl `;
</script>

<section class="w-full">
	<div
		class="relative aspect-{aspectRatio} overflow-hidden rounded-{rounded} {border
			? 'border border-black'
			: ''}"
	>
		<img {src} {alt} class="absolute aspect-{aspectRatio} rounded-{rounded} scale-110" />

		<div class="absolute inset-0 from-transparent to-{overlayOpacity}"></div>

		<div
			class="absolute inset-0 z-10 flex items-center justify-center text-center font-heading text-5xl leading-tight font-bold text-white"
		>
			<h3 class="text-shadow-lg">
				{@render children?.()}
			</h3>
		</div>
	</div>
</section>
