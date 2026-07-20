<script lang="ts">
	const { children, class: className = '', ...rest } = $props();
</script>

<span
	{...rest}
	class={`block tracking-widest text-primary/80 lg:tracking-wider 2xl:tracking-wide     ${className}`}
>
	{@render children?.()}
</span>
