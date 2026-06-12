<!-- Hero.svelte -->
<script>
	let {
		src = '',
		alt = 'hero section',
		overlayOpacity = 'black/50',
		gradientDirection = 'to-b',
		aspectRatio = 'video',
		rounded = 'xl',
		border = true,
		children
	} = $props();
</script>

<section class="px-1">
	<div
		class="relative aspect-{aspectRatio} w-full overflow-hidden rounded-{rounded} {border
			? 'border border-black'
			: ''}"
	>
		<enhanced:img
			{src}
			{alt}
			class="[&>img]:absolute [&>img]:inset-0 [&>img]:h-full [&>img]:w-full [&>img]:object-cover [&>img]:object-center [&>picture]:absolute [&>picture]:inset-0 [&>picture]:h-full [&>picture]:w-full"
		/>

		<div
			class="absolute inset-0 bg-gradient-to-{gradientDirection} from-transparent to-{overlayOpacity}"
		></div>

		<!-- Slot for custom content -->
		<div
			class="absolute inset-0 z-10 flex items-center justify-center text-center font-heading text-5xl leading-tight font-bold text-white"
		>
			{@render children?.()}
		</div>
	</div>
</section>
