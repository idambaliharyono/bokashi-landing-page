<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import whatsapp from '$lib/assets/whatsappIcon.png';
	import FacebookIcon from '$lib/assets/icons8-facebook-50.png';
	import TiktokIcon from '$lib/assets/icons8-tiktok-50.png';
	import InstagramIcon from '$lib/assets/instagram.png';
	import { Mail, Menu, X } from '@lucide/svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/state';

	interface Props {
		href: string;
		children: import('svelte').Snippet;
	}
	let { children }: Props = $props();

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
	const navigationLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/about-us', label: 'About Us' },
		{ href: '/production', label: 'Production' },
		{ href: '/songgoLangitPersada', label: 'PT Songgo Langit Persada' },
		{ href: '/usada-pak-oles', label: 'Klinik Pijat Usada Pak Oles' },
		{ href: '/villa-ipsa', label: 'Villa Ipsa' }
	];
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div
	class="2xl:
  mx-auto
   sm:max-w-xl lg:max-w-[1921px]
 "
>
	<section id="topNav" class="sticky top-0 z-200 bg-white">
		<div class="mx-1 flex justify-between text-2xl font-semibold text-primary lg:hidden">
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
		<div class=" hidden bg-white/20 py-4 text-center font-bold text-primary lg:block">
			<div class="flex justify-around">
				<div class="flex items-end">
					<img src={InstagramIcon} alt="" class=" h-8 w-8" />
				</div>
				<div class="flex items-end gap-6 text-sm font-medium">
					{#each navigationLinks as item}
						{@const isActive = page.url.pathname === item.href}
						<a
							href={item.href}
							class="rounded-3xl px-4 py-2 decoration-2 underline-offset-4 hover:underline"
							class:underline={isActive}
							aria-current={isActive ? 'page' : undefined}>{item.label}</a
						>
					{/each}
				</div>
				<div class="flex items-center text-sm font-medium underline">
					<a href="">Shop</a>
				</div>
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
					class=" mx-auto mt-15 mb-auto w-11/12 rounded-xl bg-white px-2 pt-8 pb-4"
					onclick={(e) => e.stopPropagation()}
					transition:fly={{ x: 200, duration: 300 }}
				>
					<!-- header -->
					<div class="relative">
						<h3 class=" text-center text-xl text-primary">Bokashi Indonesia</h3>
						<button class="absolute top-0 right-2" onclick={triggerSideBarMobile}>
							<X />
						</button>
					</div>
					<div class="mt-4 flex h-full flex-col overflow-y-auto">
						{#each navigationLinks as item}
							{@const isActive = page.url.pathname === item.href}
							<div
								class="w-full rounded-md px-3 py-2 text-2xl transition-[background-color] duration-150 ease-out
                hover:bg-secondary
                 active:bg-secondary/80"
								class:bg-secondary={isActive}
								aria-current={isActive ? 'page' : undefined}
							>
								<a
									href={item.href}
									class="block origin-left transition-transform duration-150 ease-out active:scale-95"
									>{item.label}</a
								>
							</div>
						{/each}
					</div>
					<div class="mt-20">
						<hr />
					</div>
				</div>
			</div>
		{/if}

		{@render children()}
	</section>

	<section id="footer" class=" z-51 mt-10 bg-primary pt-10 pb-2 text-white xl:text-lg">
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
		<!-- footer desktop -->
		<div class="hidden px-12 lg:block">
			<div class="flex justify-between">
				<div>
					<img src={whatsapp} alt="" class="w-18" />
					<h3 class="mt-4 text-2xl font-semibold xl:text-3xl">Bokashi Indonesia</h3>
					<p>Jl. Nusa Kambangan No.7X, Dauh Puri,</p>
					<p>Kec. Denpasar Bar., Kota Denpasar,</p>
					<p>Bali 80144</p>
				</div>
				<div>
					<a href="/" class="italic underline">About Us</a>
					<div class="mt-4 flex flex-col text-left xl:mt-8">
						<a href="/">Our Story</a>
						<a href="/">Ingredients</a>
						<a href="/">Our Impact</a>
						<a href="/">Our Journey</a>
						<a href="/">Production</a>
					</div>
				</div>
				<div>
					<a href="/" class="italic underline">Shop</a>
					<div class="mt-4 flex flex-col text-left xl:mt-8">
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
					<div class="mt-4 flex flex-col text-left xl:mt-8">
						<a href="/">Contact</a>
						<a href="/">Karir</a>
						<a href="/">FAQs</a>
					</div>
				</div>
			</div>
			<div class="flex items-end justify-between pt-12">
				<div class="">
					<p>Working Hours</p>
					<p>Monday - Friday : 08:00 - 16:00</p>
					<p>Saturday : 08:00 - 13:00</p>
				</div>
				<div class=" flex justify-between gap-4 xl:gap-8">
					<a href="/">
						<img src={InstagramIcon} alt="" class="mt-1 w-11 invert" />
					</a>
					<a href="/">
						<img src={TiktokIcon} alt="" class="w-12 invert" />
					</a>
					<a href="/">
						<img src={FacebookIcon} alt="" class="w-12 invert" />
					</a>
					<a href="/">
						<Mail class="h-13 w-13 text-white" />
					</a>
					<a href="/">
						<img src={whatsapp} alt="" class="w-13 brightness-[10] grayscale" />
					</a>
				</div>
			</div>

			<hr class="-mx-12 mt-8" />
			<p class="text-center">© 2026 PT. Karya Pak Oles Tokcer Group. All Rights Reserved.</p>
		</div>
	</section>
</div>
