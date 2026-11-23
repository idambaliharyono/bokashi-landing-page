<script lang="ts">
	import { img, imgSet } from '$lib/image';

	let { item, speed = 60, aspect = '3/4' } = $props();

	const ITEM_WIDTH = 320;
	const GAP = 48;

	const distance = $derived(item.length * (ITEM_WIDTH + GAP));
	const duration = $derived(distance / speed);

	const loop = $derived([...item, ...item]);
</script>

<section>
	<div class="carausel-track-wrapper overflow-auto">
		<div class="carausel-track flex h-full gap-12" style="--duration: {duration}s">
			{#each loop as item, i (i)}
				<a
					href="/products/{item.slug}"
					class="w-xs shrink-0 transition-transform
           focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black active:scale-95"
				>
					<div
						class=" w-full overflow-hidden
             rounded-2xl bg-gray-100"
						style:aspect-ratio={aspect}
					>
						<img
							src={img(item.cover, 800)}
							srcset={imgSet(item.cover)}
							sizes="320px"
							loading="lazy"
							class="h-full w-full object-cover object-center mix-blend-multiply
              brightness-95 transition-all duration-500
              hover:scale-125 hover:brightness-100"
							alt={item.name}
						/>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.carausel-track {
		animation: scroll-left var(--duration, 20s) linear infinite;
		width: max-content;
	}
	.carausel-track-wrapper::-webkit-scrollbar {
		display: none;
	}

	.carausel-track:hover {
		animation-play-state: paused;
	}

	@keyframes scroll-left {
		to {
			transform: translateX(-50%);
		}
	}
</style>
