<script lang="ts">
	const { children, class: className = '', ...rest } = $props();
</script>

<div {...rest} class={`px-2 lg:px-0 ${className}`}>
	{@render children?.()}
</div>
