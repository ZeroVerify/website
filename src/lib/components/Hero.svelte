<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let imageSrc: string = '';
	export let imageAlt: string = '';
</script>

<section class="border-borders py-16 border-b text-center">
	<h1 class="mb-4 text-5xl font-bold leading-tight">{title}</h1>
	<p class="mb-8 text-2xl text-text-secondary">{subtitle}</p>
	{#if imageSrc}
		<img src={imageSrc} alt={imageAlt} class="my-8 mx-auto block w-auto max-w-[400px]" />
	{/if}
	<div class="mt-8 gap-4 flex justify-center">
		<slot />
	</div>
</section>
