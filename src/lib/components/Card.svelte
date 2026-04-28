<script lang="ts">
	export let title: string = '';
	export let centered: boolean = false;

	let className: string = '';
	export { className as class };
</script>

<div class="border-borders rounded-lg border p-6 {centered ? 'text-center' : ''} {className}">
	{#if title}
		<h3 class="text-primary mb-2 text-xl font-semibold">{title}</h3>
	{/if}
	<slot />
</div>
