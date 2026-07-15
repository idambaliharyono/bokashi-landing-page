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
	import LogoPakOles from '$lib/assets/circle-logo.webp';

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
		{ href: '/about-us', label: 'About Us' },
		{ href: '/production', label: 'Production' },
		{ href: '/Contact-us', label: 'Contact Us' },
		{ href: '/blogs', label: 'Blogs' }
	];
</script>

<svelte:head><link rel="icon" href={LogoPakOles} /></svelte:head>
<div
	class="2xl:
  mx-auto
   text-base sm:max-w-xl lg:max-w-[1921px] xl:text-lg
 "
>
	<section id="topNav" class=" sticky top-0 z-200 bg-white">
		<!-- mobileTopNav -->
		<div
			class="relative grid grid-cols-3 justify-between px-2 pt-3 pb-6 text-lg text-primary lg:hidden"
		>
			<button
				onclick={triggerSideBarMobile}
				class="mr-auto
        cursor-pointer transition-transform duration-150 ease-out active:scale-90"
			>
				<!-- <Menu class=" h-8 w-8" /> -->
				Menu
			</button>
			<div class="my-auto transition-transform ease-out active:scale-95">
				<a href="/">
					<img
						src={LogoPakOles}
						alt=""
						class="mx-auto mt-auto h-10 w-10
           "
					/>
				</a>
			</div>
			<a
				href="/products"
				class="my-auto ml-auto
        cursor-pointer transition-transform duration-150 ease-out active:scale-90">Products</a
			>
		</div>
		<!-- desktopTopNav -->
		<div class="hidden bg-white/20 py-4 text-center font-bold text-primary lg:block">
			<div class="mx-20 flex justify-between">
				<div class="flex items-end">
					<a href="/">
						<img
							src={LogoPakOles}
							alt=""
							class="h-18 w-18 transition-transform duration-150 active:scale-95"
						/>
					</a>
				</div>
				<div class="flex items-end gap-4 text-sm font-medium xl:gap-6">
					{#each navigationLinks as item}
						{@const isActive = page.url.pathname === item.href}
						<a
							href={item.href}
							class="my-auto rounded-3xl px-4 decoration-2 underline-offset-4 transition-transform duration-150
              hover:underline active:scale-95 xl:text-lg"
							class:underline={isActive}
							aria-current={isActive ? 'page' : undefined}>{item.label}</a
						>
					{/each}
				</div>
				<div class="flex items-center font-medium underline xl:text-lg">
					<a href="/products" class="transition-transform duration-150 active:scale-95">Products</a>
				</div>
			</div>
		</div>
	</section>

	<!-- mobileTopNavChildren -->
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
					transition:fly={{ x: 200, duration: 600 }}
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
				<img src={LogoPakOles} alt="" class="w-12" />
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
					<img src={LogoPakOles} alt="" class="w-18" />
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
