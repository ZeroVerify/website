<script lang="ts">
	import { links } from '$lib/data/links';
</script>

<svelte:head>
	<title>Links - ZeroVerify</title>
</svelte:head>

<h1 class="mb-4 text-3xl font-semibold">Links</h1>

<p class="mb-8 text-gray-400">Find ZeroVerify on GitHub and explore our repositories.</p>

<div class="flex flex-col gap-2">
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
