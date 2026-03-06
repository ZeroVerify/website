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

<nav>
	<a href={resolve('/')}>ZeroVerify</a> / <a href={resolve('/docs')}>docs</a>
</nav>

<slot />
