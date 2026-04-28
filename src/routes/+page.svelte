<script lang="ts">
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';

	let audioElement: HTMLAudioElement;
	let isPlaying = false;

	onMount(() => {

		if (audioElement) {
			audioElement.muted = true;
			audioElement.play().then(() => {

				audioElement.muted = false;
				audioElement.volume = 0.2;
				isPlaying = true;
			}).catch((error) => {

				console.log('Autoplay prevented:', error);
				isPlaying = false;
			});
		}
	});

	function toggleMusic() {
		if (audioElement) {
			if (isPlaying) {
				audioElement.pause();
			} else {
				audioElement.play();
			}
			isPlaying = !isPlaying;
		}
	}
</script>

<svelte:head>
	<title>ZeroVerify - Privacy-Preserving Verification System</title>
</svelte:head>

<div class="home-page">
	<audio bind:this={audioElement} loop>
		<source src="/resources/zerov_bg_music.mp3" type="audio/mpeg" />
	</audio>

	<button class="music-control" on:click={toggleMusic} aria-label="Toggle background music">
		{#if isPlaying}
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<rect x="6" y="4" width="4" height="16"></rect>
				<rect x="14" y="4" width="4" height="16"></rect>
			</svg>
		{:else}
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<polygon points="5 3 19 12 5 21 5 3"></polygon>
			</svg>
		{/if}
	</button>

	<section class="hero">
		<div class="hero-video-bg">
			<video autoplay muted loop playsinline class="bg-video">
				<source src="/bg_video.mp4" type="video/mp4" />
			</video>
			<div class="video-overlay"></div>
		</div>

		<div class="hero-content">
			<img src="/logo.png" alt="ZeroVerify Logo" class="hero-logo" />
			<p class="hero-description">
				Privacy-preserving identity verification using zero-knowledge proofs.
				Prove your credentials without exposing personal data.
			</p>
			<div class="hero-actions">
				<a href={resolve('/requirements')} class="btn btn-primary">Explore Documentation</a>
				<a href="https://github.com/ZeroVerify" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
					<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
						<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
					</svg>
					View on GitHub
				</a>
			</div>
		</div>
	</section>

	<section class="section scroll-animate">
		<h2>The Problem</h2>
		<p class="lead">
			Students surrender massive amounts of personal information just to get basic discounts.
			To prove "I'm a student" for a $5 Spotify discount, you must upload your driver's license
			showing your full name, exact birthdate, home address, photo, and more to companies like SheerID.
			These companies store this data in centralized databases that become targets for breaches.
		</p>
		<p>
			The main issue is that verifiers need one bit of information (e.g. "is this person a student?")
			but current systems require exposing dozens of data points.
		</p>
	</section>

	<section class="section scroll-animate">
		<h2>Why We Built This</h2>
		<div class="video-wrapper">
			<iframe
				src="https://www.youtube.com/embed/jRbPRv91Bpg"
				title="Why We Created ZeroVerify"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
	</section>

	<section class="section scroll-animate scroll-animate-delay-1">

		<p class="lead">
			ZeroVerify uses zero-knowledge proofs for attribute verification without data disclosure.
		</p>
		<div class="solution-grid">
			<div class="solution-card">
				<div class="solution-icon"> </div>
				<h3>Zero-Knowledge Privacy</h3>
				<p>Prove attributes without revealing any personal data. Only the proof gets sent to the verifier.</p>
			</div>
			<div class="solution-card">
				<div class="solution-icon"> </div>
				<h3>Cross-Platform</h3>
				<p>Browser-based wallet works on any device. No app installation required.</p>
			</div>
			<div class="solution-card">
				<div class="solution-icon"> </div>
				<h3>No Data Storage</h3>
				<p>Credentials stay on your device. We never store your personal information.</p>
			</div>
			<div class="solution-card">
				<div class="solution-icon"> </div>
				<h3>Instant Verification</h3>
				<p>Generate proofs in seconds. Faster than manual document verification.</p>
			</div>
		</div>
	</section>

	<section class="section scroll-animate scroll-animate-delay-2">
		<h2>How It Works</h2>
		<div class="steps-container">
			<div class="step">
				<div class="step-number">1</div>
				<h3>Authenticate</h3>
				<p>Log in with your university or employer via OAuth</p>
			</div>
			<div class="step-arrow">→</div>
			<div class="step">
				<div class="step-number">2</div>
				<h3>Store</h3>
				<p>Receive encrypted credential in your browser wallet</p>
			</div>
			<div class="step-arrow">→</div>
			<div class="step">
				<div class="step-number">3</div>
				<h3>Verify</h3>
				<p>Generate zero-knowledge proof when verification is needed</p>
			</div>
		</div>
	</section>

	<section class="section scroll-animate scroll-animate-delay-3">
		<h2>See It In Action</h2>
		<div class="video-wrapper">
			<iframe
				src="https://www.youtube.com/embed/ElbmWd_xhB4"
				title="ZeroVerify Full Demo"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
	</section>

	<section class="section scroll-animate scroll-animate-delay-3">
		<h2>Use Cases</h2>
		<div class="use-cases-grid">
			<div class="use-case">
				<h3>🎓 Student Discounts</h3>
				<p>Access Spotify, Amazon Prime, and other student benefits without uploading your ID</p>
			</div>
			<div class="use-case">
				<h3>🔞 Age Verification</h3>
				<p>Prove you're over 21 without revealing your birthdate or full identity</p>
			</div>
		</div>
	</section>

	<section class="section scroll-animate">
		<h2>Our Team</h2>
		<p class="team-intro">
			ZeroVerify is a capstone project developed by Computer Science students at Oakland University.
		</p>
		<div class="team-grid">
			<div class="team-member">
				<img src="/resources/members_pics/lisa.png" alt="Lisa Nguyen" class="team-avatar-img" />
				<h3>Lisa Nguyen</h3>
				<p class="team-role">Computer Science</p>
			</div>
			<div class="team-member">
				<img src="/resources/members_pics/anton.png" alt="Anton Sakhanovych" class="team-avatar-img" />
				<h3>Anton Sakhanovych</h3>
				<p class="team-role">Computer Science</p>
			</div>
			<div class="team-member">
				<img src="/resources/members_pics/sono.png" alt="Souleymane Sono" class="team-avatar-img" />
				<h3>Souleymane Sono</h3>
				<p class="team-role">Computer Science</p>
			</div>
			<div class="team-member">
				<div class="team-avatar">FI</div>
				<h3>Fateha Ima</h3>
				<p class="team-role">Computer Science</p>
			</div>
			<div class="team-member">
				<img src="/resources/members_pics/simon.png" alt="Simon Griemert" class="team-avatar-img" />
				<h3>Simon Griemert</h3>
				<p class="team-role">Computer Science</p>
			</div>
		</div>
	</section>

	<section class="section scroll-animate scroll-animate-delay-1">
		<h2>Quick Links</h2>
		<div class="quick-links">
			<a href="https://github.com/ZeroVerify" target="_blank" rel="noopener noreferrer" class="quick-link">
				<svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
					<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
				</svg>
				<div>
					<strong>GitHub Organization</strong>
					<span>View all ZeroVerify repositories</span>
				</div>
			</a>
			<a href={resolve('/architecture')} class="quick-link">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<rect x="3" y="3" width="7" height="7"></rect>
					<rect x="14" y="3" width="7" height="7"></rect>
					<rect x="14" y="14" width="7" height="7"></rect>
					<rect x="3" y="14" width="7" height="7"></rect>
				</svg>
				<div>
					<strong>System Architecture</strong>
					<span>See how ZeroVerify works under the hood</span>
				</div>
			</a>
			<a href={resolve('/design')} class="quick-link">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<polyline points="16 18 22 12 16 6"></polyline>
					<polyline points="8 6 2 12 8 18"></polyline>
				</svg>
				<div>
					<strong>API Specifications</strong>
					<span>Integration documentation for developers</span>
				</div>
			</a>
		</div>
	</section>
</div>

<style>
	.home-page {
		position: relative;
	}

	.music-control {
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		width: 60px;
		height: 60px;
		background: linear-gradient(135deg, #00d4ff 0%, #9d4edd 100%);
		border: none;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		z-index: 1000;
		box-shadow: 0 4px 12px rgba(0, 212, 255, 0.4);
		transition: all 0.3s ease;
	}

	.music-control:hover {
		transform: scale(1.1);
		box-shadow: 0 6px 20px rgba(0, 212, 255, 0.6);
	}

	.music-control:active {
		transform: scale(0.95);
	}

	.music-control svg {
		color: #fff;
	}

	.hero {
		position: relative;
		text-align: center;
		padding: 2rem 2rem 3rem;
		border-bottom: 1px solid #21262d;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.hero-video-bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		overflow: hidden;
	}

	.bg-video {
		position: absolute;
		top: 50%;
		left: 50%;
		min-width: 100%;
		min-height: 100%;
		width: auto;
		height: auto;
		transform: translate(-50%, -50%);
		object-fit: cover;
		opacity: 0.5;
	}

	.video-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(135deg, rgba(13, 17, 23, 0.75), rgba(13, 17, 23, 0.65));
		backdrop-filter: blur(2px);
	}

	.hero-content {
		position: relative;
		z-index: 1;
		width: 100%;
	}

	.hero-logo {
		width: 100%;
		max-height: 60vh;
		object-fit: contain;
		margin-bottom: 0;
		filter: drop-shadow(0 0 30px rgba(0, 212, 255, 0.5));
	}


	.hero-description {
		font-size: 2.2rem;
		color: #c9d1d9;
		width: 100%;
		max-width: 100%;
		margin: 0 0 1rem;
		line-height: 1.4;
		opacity: 0.95;
	}

	.hero-actions {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: 1rem;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.875rem 1.75rem;
		border-radius: 8px;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.2s;
		font-size: 1rem;
	}

	.btn-primary {
		background: linear-gradient(135deg, #00d4ff 0%, #9d4edd 100%);
		color: #fff;
		box-shadow: 0 4px 12px rgba(0, 212, 255, 0.3);
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(0, 212, 255, 0.4);
	}

	.btn-secondary {
		background-color: #161b22;
		color: #c9d1d9;
		border: 1px solid #30363d;
	}

	.btn-secondary:hover {
		background-color: #21262d;
		border-color: #8b949e;
	}

	.section {
		padding: 4rem 0;
		border-bottom: 1px solid #21262d;
	}

	.section:last-child {
		border-bottom: none;
	}

	.section h2 {
		font-size: 2.5rem;
		margin-bottom: 1.5rem;
	}

	.lead {
		font-size: 1.25rem;
		color: #8b949e;
		line-height: 1.8;
		margin-bottom: 1.5rem;
	}

	.solution-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.solution-card {
		background-color: #161b22;
		border: 1px solid #30363d;
		border-radius: 12px;
		padding: 2rem;
		transition: all 0.3s;
	}

	.solution-card:hover {
		border-color: #00d4ff;
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(0, 212, 255, 0.1);
	}

	.solution-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.solution-card h3 {
		font-size: 1.25rem;
		margin-bottom: 0.75rem;
	}

	.solution-card p {
		color: #8b949e;
		line-height: 1.6;
	}

	.steps-container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		margin-top: 3rem;
		flex-wrap: wrap;
	}

	.step {
		text-align: center;
		flex: 1;
		min-width: 200px;
		max-width: 250px;
	}

	.step-number {
		width: 60px;
		height: 60px;
		background: linear-gradient(135deg, #00d4ff 0%, #9d4edd 100%);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		font-weight: 700;
		margin: 0 auto 1rem;
		color: #fff;
	}

	.step h3 {
		font-size: 1.25rem;
		margin-bottom: 0.5rem;
	}

	.step p {
		color: #8b949e;
		font-size: 0.95rem;
	}

	.step-arrow {
		font-size: 2rem;
		color: #8b949e;
	}

	.use-cases-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.use-case {
		background-color: #161b22;
		border: 1px solid #30363d;
		border-radius: 8px;
		padding: 1.5rem;
	}

	.use-case h3 {
		font-size: 1.1rem;
		margin-bottom: 0.75rem;
	}

	.use-case p {
		color: #8b949e;
		font-size: 0.95rem;
		line-height: 1.6;
	}

	.team-intro {
		text-align: center;
		color: #8b949e;
		margin-bottom: 3rem;
		font-size: 1.1rem;
	}

	.team-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
		max-width: 1000px;
		margin: 0 auto;
	}

	.team-member {
		text-align: center;
	}

	.team-avatar {
		width: 100px;
		height: 100px;
		background: linear-gradient(135deg, #00d4ff 0%, #9d4edd 100%);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2rem;
		font-weight: 700;
		color: #fff;
		margin: 0 auto 1rem;
	}

	.team-avatar-img {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		object-fit: cover;
		margin: 0 auto 1rem;
		border: 3px solid transparent;
		background: linear-gradient(135deg, #00d4ff 0%, #9d4edd 100%);
		background-clip: padding-box;
		border: 3px solid;
		border-image: linear-gradient(135deg, #00d4ff 0%, #9d4edd 100%) 1;
	}

	.team-member h3 {
		font-size: 1.1rem;
		margin-bottom: 0.25rem;
	}

	.team-role {
		color: #8b949e;
		font-size: 0.9rem;
	}

	.quick-links {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 2rem;
	}

	.quick-link {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		padding: 1.5rem;
		background-color: #161b22;
		border: 1px solid #30363d;
		border-radius: 8px;
		text-decoration: none;
		transition: all 0.2s;
	}

	.quick-link:hover {
		border-color: #00d4ff;
		transform: translateX(4px);
	}

	.quick-link svg {
		flex-shrink: 0;
		color: #8b949e;
	}

	.quick-link div {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.quick-link strong {
		color: #c9d1d9;
		font-size: 1.1rem;
	}

	.quick-link span {
		color: #8b949e;
		font-size: 0.9rem;
	}

	.video-wrapper {
		position: relative;
		width: 100%;
		padding-bottom: 56.25%;
		height: 0;
		border-radius: 12px;
		overflow: hidden;
		margin-top: 1.5rem;
		border: 1px solid #30363d;
	}

	.video-wrapper iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	@media (max-width: 768px) {
		.hero-logo {
			width: 100%;
		}

		.hero-description {
			font-size: 1.2rem;
		}

		.section h2 {
			font-size: 2rem;
		}

		.step-arrow {
			display: none;
		}
	}
</style>
