<script>
	import { resolve } from '$app/paths';

	const docs = [
		{ slug: 'idea', title: 'idea' },
		{ slug: 'executive-summary', title: 'executive-summary' },
		{ slug: 'developer-design-document', title: 'developer-design-document' },
		{ slug: 'team-charter', title: 'team-charter' },
		{ slug: 'product-requirements-document', title: 'product-requirements-document' },
		{ slug: 'technical-specification', title: 'technical-specification' },
	];
</script>

<nav>
	{#each docs as doc, i (doc.slug)}<a href={resolve(`/docs/${doc.slug}`)}>{doc.title}</a
		>{#if i < docs.length - 1}&nbsp;/&nbsp;{/if}{/each}
</nav>

<slot />
