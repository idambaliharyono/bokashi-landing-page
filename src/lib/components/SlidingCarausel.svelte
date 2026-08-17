<script lang="ts">
	interface CaraouselItem {
		image: string;
		subtitle: string;
	}
	interface Props {
		items: CaraouselItem[];
	}

	let { items }: Props = $props();
	let loopItems = $derived([...items, ...items]);
</script>

<div class="carousel-track-wrapper relative h-full w-full overflow-x-auto">
	<!-- sliding carausel content -->
	<div class="carousel-track flex h-full gap-10">
		{#each loopItems as item}
			<div class="relative aspect-2/3 w-xs overflow-hidden rounded-2xl border border-primary">
				<img src={item.image} alt={item.subtitle} class="h-full w-full scale-110 object-cover" />
			</div>
		{/each}
	</div>
</div>

<style>
	.carousel-track {
		animation: scroll-left 20s linear infinite;
		width: max-content;
	}
	.carousel-track-wrapper::-webkit-scrollbar {
		display: none;
	}

	@keyframes scroll-left {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.carousel-track:hover {
		animation-play-state: paused;
	}
</style>
