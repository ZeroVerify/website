import { error } from '@sveltejs/kit';
import type { PageLoad, EntryGenerator } from './$types';

const modules = import.meta.glob('$lib/docs/*.md');

export const entries: EntryGenerator = () => {
	return Object.keys(modules).map((path) => ({
		slug: path.split('/').pop()?.replace('.md', '') ?? ''
	}));
};

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`$lib/docs/${params.slug}.md`);
		return {
			component: post.default,
			title: params.slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
		};
	} catch {
		throw error(404, 'Document not found');
	}
};
