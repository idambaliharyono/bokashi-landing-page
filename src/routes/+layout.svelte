<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	// import { MediaQuery } from 'svelte/reactivity';
	//
	// const isMobile = new MediaQuery('(max-width: 383px)');
	// const isTablet = new MediaQuery('(min-width: 384px) and (max-width: 1279px)');
	// const isDesktop = new MediaQuery('(min-width: 1280px)');

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div
	class="mx-auto
  sm:max-w-xl
  xl:max-w-7xl"
>
	<section id="topNav" class="">
		<h1 class="sticky h-10">top nav</h1>
	</section>
	{@render children()}

	<section id="footer" class=""></section>
</div>
