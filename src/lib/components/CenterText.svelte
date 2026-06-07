<!-- Hero.svelte -->
<script>
	let {
		heading = 'this is heading',
		body = [],
		headingSizeMobile = '2xl',
		headingSizeDesktop = '2xl',
		textColor = 'text-primary'
	} = $props();

	const hadingClass = `text-${headingSizeMobile} lg:text-${headingSizeDesktop}`;
</script>

<div class="mt-4 flex w-full flex-col justify-center gap-4 px-2 text-center {textColor} lg:px-10">
	<div
		class="gap-1/3 mx-4 flex flex-col justify-center font-heading
    text-2xl font-black tracking-tight
    lg:flex-row lg:gap-2"
	>
		<h2 class={hadingClass}>{heading}</h2>
	</div>
	<div class="flex flex-col gap-4">
		<div class="w-full font-body">
			{#each body as paragraph}
				<p class="mb-4">
					{paragraph}
				</p>
			{/each}
		</div>
	</div>
</div>
