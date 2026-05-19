<script lang="ts">
	const {
		children,
		href = null,
		type = 'button',
		class: className = ''
	} = $props<{
		children?: import('svelte').Snippet;
		href?: string | null;
		type?: 'button' | 'submit' | 'reset';
		class?: string;
	}>();
</script>

{#if href}
	<a
		{href}
		class={`mx-auto items-center justify-center rounded-xl bg-amber-100 py-2 font-black ${className}`}
	>
		{@render children?.()}
	</a>
{:else}
	<button
		{type}
		class={`items-center justify-center rounded-xl bg-amber-100 px-4 py-2 font-black ${className}`}
	>
		{@render children?.()}
	</button>
{/if}
