<script>
	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<article>
	<svelte:component this={data.component} />
</article>
