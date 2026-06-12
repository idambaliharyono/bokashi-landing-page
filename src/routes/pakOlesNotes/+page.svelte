<script lang="ts">
	import hero from '$lib/assets/slides22.jpg';
</script>

<section class=" px-1">
	<div class="relative aspect-video w-full overflow-hidden rounded-2xl border border-black">
		<enhanced:img
			src={hero}
			alt="hero section"
			class="[&>img]:absolute [&>img]:inset-0 [&>img]:h-full [&>img]:w-full [&>img]:object-cover [&>img]:object-center [&>picture]:absolute [&>picture]:inset-0 [&>picture]:h-full [&>picture]:w-full"
		/>
		<div class="absolute inset-0 bg-linear-to-b from-transparent to-black/50"></div>
		<h1
			class="absolute top-1/2 left-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 text-center font-heading text-xl font-bold text-white"
		>
			PAK OLES NOTES
		</h1>
	</div>
</section>
