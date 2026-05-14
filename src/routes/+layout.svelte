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

	<section id="footer" class=" py-4 text-xs">
		<div class="px-4">
			<div class="flex w-full flex-col gap-4">
				<h3>Bokashi Indonesia</h3>
				<div class="mb-4 ml-[50%] flex flex-col">
					<button class="text-left"> +6287722479025</button>
					<button class="text-left">hello@bokashiindonesia.com</button>
					<button class="text-left">
						<p class="">Bali, Indonesia</p>
					</button>
				</div>
				<div class=" mb-2 flex justify-between">
					<a href="">Home</a>
					<a href="">About Us</a>
					<a href="">Products</a>
					<a href="">Media</a>
					<a href="">Contacts</a>
				</div>
			</div>
			<div class="-mx-3.5 my-2 h-px bg-black"></div>
			<div class="">© 2026 PT. Karya Pak Oles Tokcer Group. All Rights Reserved.</div>
		</div>
	</section>
</div>
