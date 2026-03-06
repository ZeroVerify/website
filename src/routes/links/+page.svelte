<script lang="ts">
	import { links } from '$lib/data/links';
</script>

<svelte:head>
	<title>Links - ZeroVerify</title>
</svelte:head>

<h1 class="text-3xl font-semibold mb-4">Links</h1>

<p class="text-gray-400 mb-8">Find ZeroVerify on GitHub and explore our repositories.</p>

<div class="gap-2 flex flex-col">
	{#each links as link (link.url)}
		<div>
			<a
				href={link.url}
				target="_blank"
				rel="external noopener noreferrer"
				class="font-semibold text-[#58a6ff] hover:underline"
			>
				{link.name}
			</a>
			<span class="text-[#8b949e]"> - {link.description}</span>
		</div>
	{/each}
</div>
