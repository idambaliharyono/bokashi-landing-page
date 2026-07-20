<script lang="ts">
	import type { PageData } from './$types';
	import Button from '$lib/components/Button.svelte';
	let { data }: { data: PageData } = $props();
	console.log(data.posts);
</script>

<div class="grid grid-cols-1 justify-items-center gap-y-6 lg:grid-cols-3">
	{#each data.posts as item (item.id)}
		<a href={item.link} class="group">
			<div class=" w-full items-center px-2 lg:w-xs lg:px-0 xl:w-sm 2xl:w-md">
				<div class="relative overflow-hidden rounded-2xl">
					<img
						src={item.image}
						alt={item.date}
						class="w-full transition-transform duration-300 group-hover:scale-125"
					/>
					<div class="absolute inset-0 bg-black/50"></div>
					<h1
						class="absolute top-1/2 z-10 -translate-y-1/2 px-2 text-center font-bold text-white duration-100 group-active:scale-105 max-lg:text-2xl"
					>
						{item.title}
					</h1>
					<p class="absolute top-2 right-4 text-white">{item.date}</p>
				</div>
			</div>
			<div class="flex w-full items-center justify-center lg:w-xs lg:px-0 xl:w-sm 2xl:w-md">
				<p class="mt-2 px-2 text-justify leading-relaxed text-primary/80">{item.intro}</p>
			</div>
		</a>

		<!-- content here -->
	{/each}
</div>
<div class="mt-8 -mb-2.5 flex justify-center align-middle">
	<Button href="https://www.pakolesonline.com/" class="mx-auto text-center">Read More</Button>
</div>
