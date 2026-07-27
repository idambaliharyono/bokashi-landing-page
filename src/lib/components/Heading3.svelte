<script lang="ts">
	const { children, class: className = '', ...rest } = $props();
</script>

<span
	{...rest}
	class={`block text-center text-2xl text-primary/80 lg:text-2xl  xl:text-3xl  ${className}`}
>
	{@render children?.()}
</span>
