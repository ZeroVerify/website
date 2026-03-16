<script lang="ts">
	export let title: string = '';
	export let centered: boolean = false;

	let className: string = '';
	export { className as class };
</script>

<div class="rounded-lg border border-borders p-6 {centered ? 'text-center' : ''} {className}">
	{#if title}
		<h3 class="mb-2 text-xl font-semibold text-primary">{title}</h3>
	{/if}
	<slot />
</div>
