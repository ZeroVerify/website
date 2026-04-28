<script lang="ts">
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/600.css';
	import './layout.css';
	import favicon from '$lib/assets/icon.png';
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';

	let sidebarOpen = false;

	const navItems = [
		{ href: '/', label: 'Home', icon: '🏠' },
		{ href: '/requirements', label: 'Requirements', icon: ' ' },
		{ href: '/architecture', label: 'Architecture', icon: ' ' },
		{ href: '/design', label: 'Detailed Design', icon: ' ' },
		{ href: '/verification', label: 'Verification', icon: ' ' },
		{ href: '/management', label: 'Management', icon: ' ' },
		{ href: '/contact', label: 'Contact', icon: '📧' },
		{
			label: 'Documents',
			icon: '📄',
			items: [
				{ href: '/docs/idea', label: 'Project Idea' },
				{ href: '/docs/team-charter', label: 'Team Charter' },
				{ href: '/docs/executive-summary', label: 'Executive Summary' },
				{ href: '/docs/product-requirements-document', label: 'PRD' },
				{ href: '/docs/technical-specification', label: 'Technical Spec' }
			]
		}
	];

	function toggleSidebar() {
		sidebarOpen = !sidebarOpen;
	}

	onMount(() => {
		addCopyButtons();

		const unsubscribe = page.subscribe(() => {
			setTimeout(addCopyButtons, 100);
		});

		return unsubscribe;
	});

	function addCopyButtons() {
		const codeBlocks = document.querySelectorAll('.code-block');

		codeBlocks.forEach((block) => {
			if (block.querySelector('.copy-btn-wrapper')) return;

			const header = block.querySelector('.code-header');
			const pre = block.querySelector('pre');
			const code = block.querySelector('code');

			if (!header || !pre || !code) return;

			const copyWrapper = document.createElement('div');
			copyWrapper.className = 'copy-btn-wrapper';
			copyWrapper.innerHTML = `
				<button class="copy-btn" aria-label="Copy code">
					<svg class="copy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
						<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
					</svg>
					<svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: none;">
						<polyline points="20 6 9 17 4 12"></polyline>
					</svg>
					<span class="copy-text">Copy</span>
				</button>
			`;

			const button = copyWrapper.querySelector('button');
			if (button) {
				button.addEventListener('click', async () => {
					try {
						const codeText = code.textContent || '';
						await navigator.clipboard.writeText(codeText);

						const copyIcon = button.querySelector('.copy-icon') as HTMLElement;
						const checkIcon = button.querySelector('.check-icon') as HTMLElement;
						const copyText = button.querySelector('.copy-text') as HTMLElement;

						if (copyIcon && checkIcon && copyText) {
							copyIcon.style.display = 'none';
							checkIcon.style.display = 'block';
							copyText.textContent = 'Copied!';

							setTimeout(() => {
								copyIcon.style.display = 'block';
								checkIcon.style.display = 'none';
								copyText.textContent = 'Copy';
							}, 2000);
						}
					} catch (err) {
						console.error('Failed to copy:', err);
					}
				});
			}

			header.appendChild(copyWrapper);
		});
	}
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
	<title>ZeroVerify - Privacy-Preserving Verification System</title>
	<meta name="description" content="Zero-Knowledge Verification System for privacy-preserving identity verification" />
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

			<div class="footer-bottom">
				<p>&copy; 2025 ZeroVerify. A capstone project by Oakland University Computer Science students.</p>
			</div>
		</footer>
	</main>
</div>
