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
			<img src={whatsapp} alt="" />
		</a>
	</section>

	<section id="footer" class=" z-51 mt-10 bg-primary pt-10 pb-2 text-lg text-white lg:text-lg">
		<div class="hidden px-12 lg:block">
			<div class="flex justify-between">
				<div>
					<img src={whatsapp} alt="" class="w-18" />
					<h3 class="mt-4 text-3xl font-bold">Bokashi Indonesia</h3>
				</div>
				<div>
					<a href="/" class="italic underline">About Us</a>
					<div class="mt-8 flex flex-col text-left">
						<a href="/">Our Story</a>
						<a href="/">Ingredients</a>
						<a href="/">Our Impact</a>
						<a href="/">Our Journey</a>
						<a href="/">Production</a>
					</div>
				</div>
				<div>
					<a href="/" class="italic underline">Shop</a>
					<div class="mt-8 flex flex-col text-left">
						<a href="/">Shopee Mall</a>
						<a href="/">Tokopedia</a>
						<a href="/">TikTok Shop </a>
						<a href="/">Lazada</a>
						<a href="/">Reseller</a>
						<a href="/">Offline Store</a>
					</div>
				</div>
				<div>
					<a href="/" class="italic underline">Bantuan</a>
					<div class="mt-8 flex flex-col text-left">
						<a href="/">Contact</a>
						<a href="/">Karir</a>
						<a href="/">FAQs</a>
					</div>
				</div>
			</div>
			<div class="mt-12 flex justify-between px-8">
				<a href="/">
					<img src={whatsapp} alt="" class="w-14" />
				</a>
				<a href="/">
					<img src={whatsapp} alt="" class="w-14" />
				</a>
				<a href="/">
					<img src={whatsapp} alt="" class="w-14" />
				</a>
				<a href="/">
					<img src={whatsapp} alt="" class="w-14" />
				</a>
				<a href="/">
					<img src={whatsapp} alt="" class="w-14" />
				</a>
			</div>

			<hr class="-mx-12 mt-8" />
			<p class="text-center">© 2026 PT. Karya Pak Oles Tokcer Group. All Rights Reserved.</p>
		</div>
		<div class="lg:hidden">
			<div class="mx-6">
				<img src={whatsapp} alt="" class="w-12" />
				<h3 class="mt-4 text-xl font-bold">Bokashi Indonesia</h3>
				<div class="mt-4 flex justify-between italic underline">
					<a href="/about-us">About Us</a>
					<a href="shopee.com">Shop</a>
				</div>
				<div class="my-4 flex flex-col">
					<div class="flex justify-between">
						<a href="/about-us">Our Story</a>
						<a href="shopee.com">Shopee Mall</a>
					</div>
					<div class="flex justify-between">
						<a href="/about-us">Ingredients</a>
						<a href="shopee.com">Tokopedia</a>
					</div>
					<div class="flex justify-between">
						<a href="/about-us">Our Impact</a>
						<a href="shopee.com">TikTok Shop</a>
					</div>
					<div class="flex justify-between">
						<a href="/about-us">Our Journey</a>
						<a href="shopee.com">Lazada</a>
					</div>
					<div class="flex justify-between">
						<a href="/about-us">Production</a>
						<a href="shopee.com">Reseller</a>
					</div>
					<a href="/" class="text-right">Offline Store</a>
				</div>
				<div>
					<a href="/help" class="italic underline">Bantuan</a>
				</div>
				<div class="mt-6 flex flex-col">
					<a href="/help" class="italic underline">Contact</a>
					<a href="/help" class="italic underline">Karir</a>
					<a href="/help" class="italic underline">FAQs</a>
				</div>

				<div class="mt-12 flex justify-between">
					<a href="/">
						<img src={whatsapp} alt="" class="w-10" />
					</a>
					<a href="/">
						<img src={whatsapp} alt="" class="w-10" />
					</a>
					<a href="/">
						<img src={whatsapp} alt="" class="w-10" />
					</a>
					<a href="/">
						<img src={whatsapp} alt="" class="w-10" />
					</a>
					<a href="/">
						<img src={whatsapp} alt="" class="w-10" />
					</a>
				</div>
			</div>
			<hr class="mt-6 w-full" />
			<div class="my-4 text-center text-sm">
				<p>© 2026 PT. Karya Pak Oles Tokcer Group.</p>
				<p>All Right Reserved.</p>
			</div>
		</div>
	</section>
</div>
