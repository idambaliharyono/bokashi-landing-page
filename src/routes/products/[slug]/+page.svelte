<script lang="ts">
	import { img } from '$lib/image';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let p = $derived(data.product);
</script>

<h1>{p.name}</h1>
<img src={img(p.r2Cover, 400)} alt="" />
