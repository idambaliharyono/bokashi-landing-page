<script lang="ts">
	const { children, class: className = '', ...rest } = $props();
</script>

<span
	{...rest}
	class={`text-md block text-center text-primary/80 lg:text-xl  xl:text-2xl  ${className}`}
>
	{@render children?.()}
</span>
