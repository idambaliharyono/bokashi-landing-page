<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import whatsapp from '$lib/assets/whatsappIcon.png';
	import FacebookIcon from '$lib/assets/icons8-facebook-50.png';
	import TiktokIcon from '$lib/assets/icons8-tiktok-50.png';
	import InstagramIcon from '$lib/assets/instagram.png';
	import { Mail, Menu, X } from '@lucide/svelte';
	import { fly } from 'svelte/transition';

	let { children } = $props();
	let sideBarMobile = $state(false);
	function triggerSideBarMobile() {
		sideBarMobile = !sideBarMobile;
	}
	$effect(() => {
		function handleKeydown(e: any) {
			if (e.key === 'Escape') sideBarMobile = false;
		}
		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});
	$effect(() => {
		if (sideBarMobile) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div
	class="mx-auto
  sm:max-w-xl
  lg:max-w-5xl"
>
	<section id="topNav" class="sticky top-0 z-200 bg-white">
		<div class="mx-4 flex justify-between text-2xl font-semibold text-primary">
			<a href="/">
				<div class="my-3 flex gap-2">
					<img src={FacebookIcon} alt="" class="w-12" />
					<h1 class="mt-3">Bokashi Indonesia</h1>
				</div>
			</a>

			<div class="mt-6">
				<button onclick={triggerSideBarMobile}>
					<Menu class="h-8 w-8" />
				</button>
			</div>
		</div>
	</section>

	<section class="font-heading">
		{#if sideBarMobile}
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<!-- svelte-ignore a11y_interactive_supports_focus -->
			<div
				class="fixed inset-0 z-201 flex items-center bg-black/50 text-primary/80"
				role="button"
				onclick={triggerSideBarMobile}
			>
				<div
					class=" mx-auto my-auto w-11/12 rounded-xl bg-white px-2 pt-8 pb-4"
					onclick={(e) => e.stopPropagation()}
					transition:fly={{ x: -320, duration: 300 }}
				>
					<!-- header -->
					<div class="relative">
						<h3 class=" text-center text-xl text-primary">Bokashi Indonesia</h3>
						<button class="absolute top-0 right-2" onclick={triggerSideBarMobile}>
							<X />
						</button>
					</div>
					<div class="flex flex-col">
						<div class="w-full hover:bg-secondary">
							<a href="/" class=" active:bg-secondary">Shop</a>
						</div>
					</div>
					<!-- footer -->
					<div class="mt-20">
						<hr />
					</div>
				</div>
			</div>
		{/if}

		{@render children()}
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
					<img src={InstagramIcon} alt="" class="mt-1 w-13 invert" />
				</a>
				<a href="/">
					<img src={TiktokIcon} alt="" class="w-14 invert" />
				</a>
				<a href="/">
					<img src={FacebookIcon} alt="" class="w-14 invert" />
				</a>
				<a href="/">
					<Mail class="h-14 w-14 text-white" />
				</a>
				<a href="/">
					<img src={whatsapp} alt="" class="w-14 brightness-[10] grayscale" />
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
						<img src={InstagramIcon} alt="" class="mt-0.5 w-9 invert" />
					</a>
					<a href="/">
						<img src={TiktokIcon} alt="" class="w-10 invert" />
					</a>
					<a href="/">
						<img src={FacebookIcon} alt="" class="w-10 invert" />
					</a>
					<a href="/">
						<Mail class="h-10 w-10 text-white" />
					</a>
					<a href="/">
						<img src={whatsapp} alt="" class="text w-10 brightness-[10] grayscale" />
					</a>
				</div>
			</div>
			<hr class="mt-3 w-full" />
			<div class="my-3 text-center text-sm">
				<p>© 2026 PT. Karya Pak Oles Tokcer Group.</p>
				<p>All Right Reserved.</p>
			</div>
		</div>
	</section>
</div>
