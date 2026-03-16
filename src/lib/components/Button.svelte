<script lang="ts">
	import { resolve } from '$app/paths';

	export let href: string;
	export let variant: 'primary' | 'secondary' = 'primary';
	export let target: string = '';

	$: isExternal = href.startsWith('http://') || href.startsWith('https://');
	$: finalHref = isExternal ? href : resolve(href);
</script>

<a
	href={finalHref}
	{target}
	rel={target === '_blank' ? 'noopener noreferrer' : ''}
	class="inline-block rounded-md px-6 py-3 font-semibold no-underline transition-opacity hover:no-underline hover:opacity-90 {variant ===
	'primary'
		? 'bg-primary text-white'
		: 'bg-borders text-text-primary'}"
>
	<slot />
</a>
