<!-- Hero.svelte -->
<script lang="ts">
	let {
		heading = 'this is heading',
		body = [],
		headingSizeMobile = '2xl',
		headingSizeDesktop = '4xl',
		paragraphColor = 'primary/80',
		headingColor = 'primary',
		paragraphAlignment = 'center',
		...rest
	} = $props();

	const headingClass = $derived(
		`text-${headingSizeMobile} lg:text-${headingSizeDesktop} lg:my-10 font-semibold text-${headingColor}`
	);
	const paragraphClass = $derived(
		`mb-4 text-${paragraphAlignment} text-${paragraphColor} lg:mb-6 lg:text-xl/7 lg:tracking-wide `
	);
</script>

<div
	class="mt-6 mb-6 flex w-full flex-col justify-center gap-4 px-2 text-center
  lg:mt-4 lg:mb-0 lg:px-10"
	{...rest}
>
	<h2 class={headingClass}>{heading}</h2>
</div>
<div class="flex flex-col gap-4 tracking-wide">
	<div class="w-full font-body">
		{#each body as paragraph}
			<p class={paragraphClass}>
				{paragraph}
			</p>
		{/each}
	</div>
</div>
