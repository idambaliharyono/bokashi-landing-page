<!-- Hero.svelte -->
<script lang="ts">
	let {
		heading = '',
		body = [],
		headingSizeMobile = '2xl',
		headingSizeDesktop = '4xl',
		paragraphColor = 'primary/80',
		headingColor = 'primary',
		paragraphAlignment = 'center',
		headingParagraphSpace = '0',
		...rest
	} = $props();

	const headingClass = $derived(
		`text-${headingSizeMobile} lg:text-${headingSizeDesktop} lg:my-10 font-semibold text-${headingColor}`
	);
	const paragraphClass = $derived(
		`mb-4 text-${paragraphAlignment} text-${paragraphColor} lg:mb-6 lg:mt-4 lg:text-xl/7 lg:tracking-wide `
	);
</script>

{#if body.length > 0}
	<div class="mt-6 flex w-full flex-col justify-center px-2 text-center lg:mt-0 lg:px-10" {...rest}>
		{#if heading.length > 0}
			<h2 class={headingClass} style="margin-bottom:{headingParagraphSpace}rem">{heading}</h2>
		{/if}

		<div class="flex flex-col gap-4 tracking-wide">
			<div class="w-full font-body">
				{#each body as paragraph}
					<p class={paragraphClass}>{paragraph}</p>
				{/each}
			</div>
		</div>
	</div>
{/if}
