<script lang="ts">
	export let title: string = '';
	export let bordered: boolean = true;
</script>

<section class="py-12 {bordered ? 'border-borders border-t' : ''}">
	{#if title}
		<h2 class="mb-6 text-3xl font-semibold">{title}</h2>
	{/if}
	<slot />
</section>
