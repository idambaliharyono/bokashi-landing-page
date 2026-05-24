<script lang="ts">
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	type Variant = 'primary' | 'secondary';
	type Size = 'sm' | 'md' | 'lg';
	type ButtonProps = HTMLButtonAttributes & {
		href?: undefined;
		children?: Snippet;
		variant?: Variant;
		size?: Size;
		class?: string;
	};

	type AnchorProps = HTMLAnchorAttributes & {
		href: string;
		children?: Snippet;
		variant?: Variant;
		size?: Size;
		class?: string;
	};
	type Props = ButtonProps | AnchorProps;

	const {
		children,
		href,
		variant = 'primary',
		size = 'md',
		class: className = '',
		...rest
	}: Props = $props();

	const base =
		'inline-flex items-center justify-center rounded-xl font-black transition-colors disabled:opacity-50 disabled:pointer-events-none';

	const variants: Record<Variant, string> = {
		primary: 'bg-secondary text-primary hover:bg-secondary/80',
		secondary: 'bg-primary text-secondary hover:bg-primary/80'
	};

	const sizes: Record<Size, string> = {
		sm: 'px-3 py-1 text-sm',
		md: 'px-4 py-2',
		lg: 'px-6 py-3 text-lg'
	};

	const classes = $derived(`${base} ${variants[variant]} ${sizes[size]} ${className}`);
</script>

{#if href}
	<a {href} class={classes} {...rest as HTMLAnchorAttributes}>
		{@render children?.()}
	</a>
{:else}
	<button class={classes} {...rest as HTMLButtonAttributes}>
		{@render children?.()}
	</button>
{/if}
