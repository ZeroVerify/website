<svelte:head>
	<title>Contact - ZeroVerify</title>
</svelte:head>

<div class="contact-page">
	<h1>Contact Us</h1>
	<p class="subtitle">Get in touch with the ZeroVerify team</p>

	<section class="section">
		<h2>Contact Information</h2>
		<div class="contact-grid">
			<div class="contact-card">
				<div class="contact-icon">📍</div>
				<h3>Location</h3>
				<p>Oakland University</p>
				<p>Rochester, MI 48309</p>
				<p>United States</p>
			</div>

			<div class="contact-card">
				<div class="contact-icon">📧</div>
				<h3>Email</h3>
				<p><a href="mailto:zeroverify@oakland.edu">zeroverify@oakland.edu</a></p>
			</div>

			<div class="contact-card">
				<div class="contact-icon">
					<svg width="40" height="40" viewBox="0 0 16 16" fill="currentColor">
						<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
					</svg>
				</div>
				<h3>GitHub</h3>
				<p><a href="https://github.com/ZeroVerify" target="_blank" rel="noopener noreferrer">github.com/ZeroVerify</a></p>
			</div>
		</div>
	</section>

	<section class="section">
		<h2>Find Us</h2>
		<p class="lead">ZeroVerify is developed at Oakland University in Rochester, Michigan</p>

		<div class="map-container">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2939.7841766448177!2d-83.21789!3d42.67359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824e7f9977ab5ad%3A0x8aeb9c2f4a8a3b0!2sOakland%20University!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
				width="100%"
				height="450"
				style="border:0;"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				title="Oakland University Location"
			></iframe>
		</div>
	</section>

	<section class="section">
		<h2>Project Team</h2>
		<p class="lead">
			ZeroVerify is a capstone project developed by Computer Science students at Oakland University.
			Feel free to reach out to us with any questions about the project.
		</p>

		<div class="team-info">
			<div class="info-card">
				<h3>Academic Project</h3>
				<p>This is a senior capstone project in Computer Science, focusing on privacy-preserving identity verification using zero-knowledge proofs.</p>
			</div>

			<div class="info-card">
				<h3>Collaboration</h3>
				<p>We welcome feedback, suggestions, and collaboration opportunities. Check out our GitHub organization to see our repositories and contribute.</p>
			</div>
		</div>
	</section>
</div>

<style>
	.contact-page {
		max-width: 1200px;
	}

	h1 {
		font-size: 3rem;
		margin-bottom: 0.5rem;
	}

	.subtitle {
		color: #8b949e;
		font-size: 1.1rem;
		margin-bottom: 3rem;
	}

	.section {
		margin-bottom: 4rem;
		padding-bottom: 3rem;
		border-bottom: 1px solid #21262d;
	}

	.section:last-child {
		border-bottom: none;
	}

	h2 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
	}

	.lead {
		font-size: 1.2rem;
		color: #8b949e;
		line-height: 1.8;
		margin-bottom: 2rem;
	}

	.contact-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.contact-card {
		background-color: #161b22;
		border: 1px solid #30363d;
		border-radius: 12px;
		padding: 2rem;
		text-align: center;
		transition: all 0.3s;
	}

	.contact-card:hover {
		border-color: #00d4ff;
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(0, 212, 255, 0.1);
	}

	.contact-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
		color: #00d4ff;
	}

	.contact-card h3 {
		font-size: 1.25rem;
		margin-bottom: 1rem;
		color: #c9d1d9;
	}

	.contact-card p {
		color: #8b949e;
		line-height: 1.6;
		margin-bottom: 0.5rem;
	}

	.contact-card a {
		color: #58a6ff;
		text-decoration: none;
		transition: color 0.2s;
	}

	.contact-card a:hover {
		color: #79c0ff;
	}

	.map-container {
		margin-top: 2rem;
		border-radius: 12px;
		overflow: hidden;
		border: 1px solid #30363d;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
	}

	.map-container iframe {
		display: block;
	}

	.team-info {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.info-card {
		background-color: #161b22;
		border: 1px solid #30363d;
		border-radius: 8px;
		padding: 1.5rem;
	}

	.info-card h3 {
		font-size: 1.25rem;
		margin-bottom: 1rem;
		color: #00d4ff;
	}

	.info-card p {
		color: #8b949e;
		line-height: 1.6;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2.5rem;
		}

		h2 {
			font-size: 2rem;
		}

		.map-container iframe {
			height: 300px;
		}
	}
</style>
