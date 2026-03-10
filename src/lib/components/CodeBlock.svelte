<script lang="ts">
	import { onMount } from 'svelte';

	export let code: string;
	export let lang: string = '';

	let copied = false;
	let codeElement: HTMLElement;

	async function copyCode() {
		try {
			await navigator.clipboard.writeText(code);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	}

	onMount(() => {
		// Add syntax highlighting or other enhancements here if needed
	});
</script>

<div class="code-block">
	<div class="code-header">
		<span class="code-lang">{lang}</span>
		<button class="copy-btn" on:click={copyCode} aria-label="Copy code">
			{#if copied}
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<polyline points="20 6 9 17 4 12"></polyline>
				</svg>
				<span>Copied!</span>
			{:else}
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
					<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
				</svg>
				<span>Copy</span>
			{/if}
		</button>
	</div>
	<pre bind:this={codeElement}><code>{code}</code></pre>
</div>

<style>
	.code-block {
		background-color: #161b22;
		border: 1px solid #30363d;
		border-radius: 8px;
		margin: 1.5rem 0;
		overflow: hidden;
	}

	.code-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.75rem 1rem;
		background-color: #0d1117;
		border-bottom: 1px solid #30363d;
	}

	.code-lang {
		font-size: 0.875rem;
		color: #8b949e;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.copy-btn {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.4rem 0.75rem;
		background-color: #21262d;
		border: 1px solid #30363d;
		border-radius: 6px;
		color: #c9d1d9;
		font-size: 0.875rem;
		cursor: pointer;
		transition: all 0.2s;
	}

	.copy-btn:hover {
		background-color: #30363d;
		border-color: #8b949e;
	}

	.copy-btn svg {
		flex-shrink: 0;
	}

	pre {
		margin: 0;
		padding: 1rem;
		overflow-x: auto;
		font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
		font-size: 0.9rem;
		line-height: 1.6;
	}

	code {
		color: #c9d1d9;
	}

	/* Custom scrollbar for code blocks */
	pre::-webkit-scrollbar {
		height: 8px;
	}

	pre::-webkit-scrollbar-track {
		background: #0d1117;
	}

	pre::-webkit-scrollbar-thumb {
		background: #30363d;
		border-radius: 4px;
	}

	pre::-webkit-scrollbar-thumb:hover {
		background: #484f58;
	}
</style>
