<script lang="ts">
	import type { PageData } from './$types';
	import Button from '$lib/components/Button.svelte';
	let { data }: { data: PageData } = $props();
	console.log(data.posts);
</script>

<div class="flex flex-col">
	{#each data.posts as item (item.id)}
		<div>
			<img src={item.image} alt={item.date} />
			<h1>{item.title}</h1>
		</div>
		<!-- content here -->
	{/each}
</div>
<Button href="https://www.pakolesonline.com/" class="mx-auto">Read More</Button>
