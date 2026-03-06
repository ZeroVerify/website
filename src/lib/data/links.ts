export interface Link {
	name: string;
	description: string;
	url: string;
}

export const links: Link[] = [
	{
		name: 'ZeroVerify Website',
		description: 'Main project website and documentation',
		url: 'https://github.com/ZeroVerify/website'
	},
	{
		name: 'Documentation',
		description: 'Technical specifications and project docs',
		url: 'https://github.com/ZeroVerify/docs'
	},
	{
		name: 'GitHub Organization',
		description: 'View all ZeroVerify repositories',
		url: 'https://github.com/ZeroVerify'
	}
];
