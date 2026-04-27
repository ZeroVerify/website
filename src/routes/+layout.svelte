<script lang="ts">
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/600.css';
	import './layout.css';
	import { page } from '$app/stores';
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
		// Add copy buttons to all code blocks
		addCopyButtons();

		// Re-add copy buttons on navigation (for client-side routing)
		const unsubscribe = page.subscribe(() => {
			setTimeout(addCopyButtons, 100);
		});

		return unsubscribe;
	});

	function addCopyButtons() {
		const codeBlocks = document.querySelectorAll('.code-block');

		codeBlocks.forEach((block) => {
			// Skip if copy button already exists
			if (block.querySelector('.copy-btn-wrapper')) return;

			const header = block.querySelector('.code-header');
			const pre = block.querySelector('pre');
			const code = block.querySelector('code');

			if (!header || !pre || !code) return;

			// Create copy button
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

<div class="app-container">
	<!-- Header -->
	<header class="site-header">
		<div class="header-content">
			<div class="header-left">
				<span class="header-tagline">Privacy-Preserving Verification</span>
			</div>
			<div class="header-right">
				<a href="https://github.com/ZeroVerify" target="_blank" rel="noopener noreferrer" class="header-github-btn">
					<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
						<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
					</svg>
					<span>GitHub</span>
				</a>
			</div>
		</div>
	</header>

	<!-- Mobile Menu Button -->
	<button class="mobile-menu-btn" onclick={toggleSidebar} aria-label="Toggle menu">
		<span class="hamburger"></span>
	</button>

	<!-- Sidebar -->
	<aside class="sidebar" class:open={sidebarOpen}>
		<div class="sidebar-header">
			<a href={resolve('/')} class="logo-link">
				<img src="/icon.png" alt="ZeroVerify Logo" class="logo-icon" />
				<span class="logo-text">ZeroVerify</span>
			</a>
		</div>

		<nav class="sidebar-nav">
			{#each navItems as item}
				{#if item.href}
					<a
						href={resolve(item.href)}
						class="nav-item"
						class:active={$page.url.pathname === item.href}
					>
						<span class="nav-icon">{item.icon}</span>
						{item.label}
					</a>
				{:else}
					<div class="nav-group">
						<div class="nav-group-label">
							<span class="nav-icon">{item.icon}</span>
							{item.label}
						</div>
						{#if item.items}
							<div class="nav-subitems">
								{#each item.items as subitem}
									<a
										href={resolve(subitem.href)}
										class="nav-subitem"
										class:active={$page.url.pathname === subitem.href.split('#')[0]}
									>
										{subitem.label}
									</a>
								{/each}
							</div>
						{/if}
					</div>
				{/if}
			{/each}
		</nav>

		<div class="sidebar-footer">
			<a href="https://github.com/ZeroVerify" target="_blank" rel="noopener noreferrer" class="github-link">
				<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
					<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
				</svg>
				GitHub
			</a>
		</div>
	</aside>

	<!-- Main Content -->
	<main class="main-content">
		<slot />

		<!-- Footer -->
		<footer class="site-footer">
			<div class="footer-content">
				<div class="footer-section">
					<div class="footer-logo">
						<img src="/logo.png" alt="ZeroVerify Logo" class="footer-logo-img" />
					</div>
					<p>Privacy-preserving identity verification using zero-knowledge proofs.</p>
				</div>

				<div class="footer-section">
					<h4>Project</h4>
					<div class="footer-links">
						<a href={resolve('/requirements')}>Requirements</a>
						<a href={resolve('/architecture')}>Architecture</a>
						<a href={resolve('/design')}>Design</a>
						<a href={resolve('/verification')}>Verification</a>
					</div>
				</div>

				<div class="footer-section">
					<h4>Documents</h4>
					<div class="footer-links">
						<a href={resolve('/docs/idea')}>Project Idea</a>
						<a href={resolve('/docs/team-charter')}>Team Charter</a>
						<a href={resolve('/docs/executive-summary')}>Executive Summary</a>
						<a href={resolve('/docs/product-requirements-document')}>PRD</a>
					</div>
				</div>

				<div class="footer-section">
					<h4>Connect</h4>
					<div class="footer-links">
						<a href="https://github.com/ZeroVerify" target="_blank" rel="noopener noreferrer">
							GitHub Organization
						</a>
						<a href={resolve('/management')}>Project Management</a>
						<a href={resolve('/contact')}>Contact Us</a>
					</div>
				</div>

				<div class="footer-section">
					<h4>Contact</h4>
					<div class="footer-contact-info">
						<p>📍 Oakland University</p>
						<p>Rochester, MI 48309</p>
						<p>📧 zeroverify@oakland.edu</p>
					</div>
				</div>
			</div>

			<div class="footer-bottom">
				<p>&copy; 2025 ZeroVerify. A capstone project by Oakland University Computer Science students.</p>
			</div>
		</footer>
	</main>
</div>
