<script lang="ts">
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/600.css';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav
	style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid #21262d;"
>
	<a href={resolve('/')} style="font-size: 1.5rem; font-weight: 600;">ZeroVerify</a>

	<div style="display: flex; align-items: center; gap: 0.5rem;">
		<a href={resolve('/requirements')}>PRD</a>
		<span style="color: #8b949e;">|</span>
		<a href={resolve('/architecture')}>Tech Spec</a>
		<span style="color: #8b949e;">|</span>
		<a href={resolve('/design')}>Design</a>
		<span style="color: #8b949e;">|</span>
		<a href={resolve('/verification')}>Testing</a>
		<span style="color: #8b949e;">|</span>
		<a href={resolve('/management')}>Management</a>
		<span style="color: #8b949e;">|</span>
		<a
			href="https://github.com/ZeroVerify"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="GitHub"
		>
			[GitHub]
		</a>
	</div>
</nav>

<slot />
