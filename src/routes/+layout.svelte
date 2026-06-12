<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import whatsapp from '$lib/assets/whatsappIcon.png';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div
	class="mx-auto
  sm:max-w-xl
  lg:max-w-5xl"
>
	<section id="topNav" class="">
		<h1 class="sticky h-10">top nav</h1>
	</section>
	<section class="font-heading">
		{@render children()}
		<a href="/" class="fixed right-2 bottom-4 z-50 mr-4 w-8">
			<enhanced:img src={whatsapp} alt="" />
		</a>
	</section>

	<section id="footer" class=" z-51 pt-4 pb-2 text-xs">
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
					<a href="/">Home</a>
					<a href="/">About Us</a>
					<a href="/">Products</a>
					<a href="/">Media</a>
					<a href="/">Contacts</a>
				</div>
			</div>
			<div class="-mx-3.5 my-2 h-px bg-black"></div>
			<div class=" text-center">
				<p>© 2026 PT. Karya Pak Oles Tokcer Group.</p>
				All Rights Reserved.
				<p></p>
			</div>
		</div>
	</section>
</div>
