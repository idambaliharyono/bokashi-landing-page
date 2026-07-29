<script lang="ts">
	const { children, class: className = '', ...rest } = $props();
</script>

<span
	{...rest}
	class={`block tracking-wide text-primary/80 lg:tracking-wide xl:text-lg xl:tracking-normal 2xl:text-xl     ${className}`}
>
	{@render children?.()}
</span>
