<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let imageSrc: string = '';
	export let imageAlt: string = '';
</script>

<section class="border-borders border-b py-16 text-center">
	<h1 class="mb-4 text-5xl leading-tight font-bold">{title}</h1>
	<p class="text-text-secondary mb-8 text-2xl">{subtitle}</p>
	{#if imageSrc}
		<img src={imageSrc} alt={imageAlt} class="mx-auto my-8 block w-auto max-w-[400px]" />
	{/if}
	<div class="mt-8 flex justify-center gap-4">
		<slot />
	</div>
</section>
