<script>
	import { resolve } from '$app/paths';

	const docs = [
		{ slug: 'idea', title: 'Idea' },
		{ slug: 'executive-summary', title: 'Executive Summary' },
		{ slug: 'team-charter', title: 'Team Charter' },
		{ slug: 'product-requirements-document', title: 'Product Requirements Document' },
		{ slug: 'technical-specification', title: 'Technical Specification' }
	];
</script>

<nav>
	{#each docs as doc, i (doc.slug)}<a href={resolve(`/docs/${doc.slug}`)}>{doc.title}</a
		>{#if i < docs.length - 1}&nbsp;/&nbsp;{/if}{/each}
</nav>

<slot />
