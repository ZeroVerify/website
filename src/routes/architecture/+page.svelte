<svelte:head>
	<title>Architecture - ZeroVerify</title>
</svelte:head>

<div class="architecture-page">
	<h1>System Architecture</h1>
	<p class="subtitle">High-level design and technical infrastructure</p>

	<section class="section">
		<h2>Overview</h2>
		<p class="lead">
			ZeroVerify is a library and issuance service, not a verification intermediary. The system provides:
			(1) an issuance API that issues BBS+ signed credentials, (2) a client-SDK that handles credential
			storage and proof generation, and (3) a verification library that verifiers embed.
		</p>
		<p>
			Verifiers interact directly with users. They only call ZeroVerify to get a W3C revocation bitstring.
		</p>
	</section>

	<section class="section" id="system-diagram">
		<h2>System Diagram</h2>
		<p class="diagram-description">
			Click the diagram to view full size. The architecture is split into two completely independent paths:
			issuance and verification.
		</p>
		<div class="diagram-container">
			<a href="/images/system-architecture-diagram.png" target="_blank" rel="noopener noreferrer" class="diagram-link">
				<img src="/images/system-architecture-diagram.png" alt="ZeroVerify System Architecture" class="diagram" />
				<div class="diagram-overlay">
					<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path>
					</svg>
					<span>Click to enlarge</span>
				</div>
			</a>
		</div>

		<div class="architecture-flows">
			<div class="flow-card">
				<h3>1. Issuance Path</h3>
				<ol>
					<li>User navigates to ZeroVerify's React web app and initiates credential issuance</li>
					<li>App redirects to Keycloak, which federates with the institutional Shibboleth IdP via SAML</li>
					<li>Keycloak returns an authorization code to the React app</li>
					<li>App passes code to Issuance Lambda via API Gateway</li>
					<li>Lambda exchanges code with Keycloak for OIDC claims, checks for existing credential in DynamoDB</li>
					<li>Lambda signs a BBS+ verifiable credential and returns it to the React app</li>
					<li>Credential is stored in browser's IndexedDB (never transmitted to any server again)</li>
				</ol>
			</div>

			<div class="flow-card">
				<h3>2. Verification Path</h3>
				<ol>
					<li>Verifier generates URL with proof type, callback endpoint, and nonce</li>
					<li>User opens URL in browser, landing on ZeroVerify's React web app</li>
					<li>App loads credential from IndexedDB and presents consent screen</li>
					<li>If user consents, app generates Groth16 zk-SNARK proof client-side using snarkjs</li>
					<li>Proof is posted directly to verifier's callback endpoint</li>
					<li>Verifier independently downloads W3C Revocation Bit String from S3 to check revocation status</li>
					<li>ZeroVerify's backend is not involved at any point in verification</li>
				</ol>
			</div>

			<div class="flow-card">
				<h3>3. Revocation Path</h3>
				<ol>
					<li>Revocation requests submitted to SQS Queue via API Gateway</li>
					<li>Requests processed in batches by Revocation Lambda</li>
					<li>Lambda updates credential record's status to REVOKED in DynamoDB</li>
					<li>Lambda downloads bitstring from S3, updates values, and uploads it back</li>
				</ol>
			</div>
		</div>
	</section>

	<section class="section" id="tech-stack">
		<h2>Tech Stack</h2>
		<p class="lead">Technology choices and justifications</p>

		<div class="tech-table">
			<div class="tech-row tech-header">
				<div>Component</div>
				<div>Technology</div>
				<div>Justification</div>
			</div>

			<div class="tech-row">
				<div class="tech-component">Backend</div>
				<div class="tech-name">AWS Lambda (Rust)</div>
				<div class="tech-justification">
					Serverless for event-driven issuance workload. Rust chosen for fast cold starts (100-300ms vs Java's 1-3s),
					memory safety for cryptographic operations, and mature BBS+ signature libraries
				</div>
			</div>

			<div class="tech-row">
				<div class="tech-component">Database</div>
				<div class="tech-name">AWS DynamoDB</div>
				<div class="tech-justification">
					Key-value access pattern for credential metadata. Auto-scaling, low latency, global tables for multi-region support
				</div>
			</div>

			<div class="tech-row">
				<div class="tech-component">Revocation Storage</div>
				<div class="tech-name">AWS S3</div>
				<div class="tech-justification">
					W3C Bitstring Status List stored as static object. Small size (1 bit per credential),
					S3 Cross-Region Replication for global availability
				</div>
			</div>

			<div class="tech-row">
				<div class="tech-component">Client SDK</div>
				<div class="tech-name">TypeScript + snarkjs</div>
				<div class="tech-justification">
					Browser-based proof generation using WebAssembly. Credential stays on device,
					works across all platforms without installation
				</div>
			</div>

			<div class="tech-row">
				<div class="tech-component">Identity Federation</div>
				<div class="tech-name">Keycloak</div>
				<div class="tech-justification">
					SAML/OAuth-to-OIDC broker. Normalizes heterogeneous institutional identity systems
					into consistent claims surface without requiring IdP changes
				</div>
			</div>

			<div class="tech-row">
				<div class="tech-component">Cryptography</div>
				<div class="tech-name">BBS+ Signatures</div>
				<div class="tech-justification">
					Enables selective disclosure. Proves only required attributes without processing
					unnecessary fields, reducing circuit complexity
				</div>
			</div>

			<div class="tech-row">
				<div class="tech-component">ZK Proofs</div>
				<div class="tech-name">Groth16 (Circom)</div>
				<div class="tech-justification">
					Constant-size proofs (~200 bytes) regardless of complexity. O(1) verification time.
					Circom circuits compile to WASM for browser execution
				</div>
			</div>

			<div class="tech-row">
				<div class="tech-component">Infrastructure</div>
				<div class="tech-name">Terraform/OpenTofu</div>
				<div class="tech-justification">
					Infrastructure as code for reproducible deployments and CI/CD automation
				</div>
			</div>

			<div class="tech-row">
				<div class="tech-component">Key Management</div>
				<div class="tech-name">AWS Secrets Manager</div>
				<div class="tech-justification">
					BBS+ issuer private key storage (AWS KMS doesn't support BBS+ as it's not NIST-standardized)
				</div>
			</div>
		</div>
	</section>

	<section class="section" id="security">
		<h2>Security Architecture</h2>

		<div class="security-grid">
			<div class="security-card">
				<h3> Data Protection</h3>
				<ul>
					<li>All communication uses HTTPS (TLS 1.2+)</li>
					<li>Server-side data encrypted using AWS KMS</li>
					<li>No raw PII stored after credential issuance</li>
					<li>Credentials stored locally in browser IndexedDB</li>
				</ul>
			</div>

			<div class="security-card">
				<h3> Replay Protection</h3>
				<ul>
					<li>Each proof bound to verifier-provided session nonce</li>
					<li>Session identifiers expire after fixed time window (5 minutes)</li>
					<li>Verification API validates proof structure, cryptographic validity, issuer signature, and revocation status</li>
				</ul>
			</div>

			<div class="security-card">
				<h3> Key Management</h3>
				<ul>
					<li>IAM roles follow least privilege principles</li>
					<li>API keys and signing keys stored in AWS Secrets Manager</li>
					<li>Never hardcoded in source code</li>
					<li>Support for key rotation</li>
				</ul>
			</div>

			<div class="security-card">
				<h3>✓ Fail-Safe Policy</h3>
				<ul>
					<li>System never returns "valid" if verification fails or is incomplete</li>
					<li>If revocation list cannot be retrieved, deny verification</li>
					<li>Circuit breaker for external API failures</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="section">
		<h2>Integration Strategy</h2>

		<div class="integration-grid">
			<div class="integration-card">
				<h3>Identity Providers (via Keycloak)</h3>
				<p>
					ZeroVerify integrates with institutional identity providers through Keycloak as the federation layer.
					Keycloak handles all SAML complexity internally. From ZeroVerify's perspective, every IdP looks identical:
					a standard OIDC claims set returned after an authorization code exchange.
				</p>
				<p>
					<strong>Adding a new institution:</strong> Only requires configuring a new IdP in Keycloak's realm.
				</p>
			</div>

			<div class="integration-card">
				<h3>Verifier Callback Endpoint</h3>
				<p>
					The React app receives the verifier's callback URL as a query parameter in the verification link
					and posts the generated proof directly to it over HTTPS.
				</p>
				<p>
					<strong>Verifier requirements:</strong> Accept HTTP POST with proof payload. No ZeroVerify backend integration needed
					beyond downloading two public artifacts: verification key and revocation bitstring.
				</p>
			</div>
		</div>
	</section>
</div>

<style>
	.architecture-page {
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
		margin-bottom: 1.5rem;
	}

	.diagram-description {
		color: #8b949e;
		margin-bottom: 1.5rem;
		font-size: 1.05rem;
	}

	.diagram-container {
		margin: 2rem 0;
	}

	.diagram-link {
		display: block;
		position: relative;
		border: 2px solid #30363d;
		border-radius: 12px;
		overflow: hidden;
		transition: all 0.3s;
	}

	.diagram-link:hover {
		border-color: #00d4ff;
		transform: scale(1.01);
	}

	.diagram {
		width: 100%;
		height: auto;
		display: block;
	}

	.diagram-overlay {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: rgba(0, 0, 0, 0.8);
		backdrop-filter: blur(10px);
		padding: 0.75rem 1.25rem;
		border-radius: 8px;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: #00d4ff;
		font-size: 0.9rem;
		font-weight: 600;
		opacity: 0;
		transition: opacity 0.3s;
	}

	.diagram-link:hover .diagram-overlay {
		opacity: 1;
	}

	.architecture-flows {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.flow-card {
		background-color: #161b22;
		border: 1px solid #30363d;
		border-radius: 8px;
		padding: 1.5rem;
	}

	.flow-card h3 {
		font-size: 1.25rem;
		margin-bottom: 1rem;
		color: #00d4ff;
	}

	.flow-card ol {
		margin: 0;
		padding-left: 1.5rem;
		color: #8b949e;
	}

	.flow-card li {
		margin-bottom: 0.75rem;
		line-height: 1.6;
	}

	.tech-table {
		background-color: #161b22;
		border: 1px solid #30363d;
		border-radius: 8px;
		overflow: hidden;
		margin-top: 2rem;
	}

	.tech-row {
		display: grid;
		grid-template-columns: 180px 220px 1fr;
		gap: 1.5rem;
		padding: 1.25rem 1.5rem;
		border-bottom: 1px solid #30363d;
	}

	.tech-row:last-child {
		border-bottom: none;
	}

	.tech-header {
		background-color: #0d1117;
		font-weight: 600;
		color: #00d4ff;
		font-size: 0.95rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.tech-component {
		font-weight: 600;
		color: #c9d1d9;
	}

	.tech-name {
		color: #9d4edd;
		font-weight: 600;
	}

	.tech-justification {
		color: #8b949e;
		line-height: 1.6;
		font-size: 0.95rem;
	}

	.security-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.security-card {
		background-color: #161b22;
		border: 1px solid #30363d;
		border-radius: 8px;
		padding: 1.5rem;
	}

	.security-card h3 {
		font-size: 1.1rem;
		margin-bottom: 1rem;
	}

	.security-card ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.security-card li {
		padding-left: 1.5rem;
		margin-bottom: 0.75rem;
		color: #8b949e;
		line-height: 1.6;
		position: relative;
	}

	.security-card li::before {
		content: '▸';
		position: absolute;
		left: 0;
		color: #00d4ff;
	}

	.integration-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.integration-card {
		background-color: #161b22;
		border: 1px solid #30363d;
		border-radius: 8px;
		padding: 2rem;
	}

	.integration-card h3 {
		font-size: 1.25rem;
		margin-bottom: 1rem;
		color: #00d4ff;
	}

	.integration-card p {
		color: #8b949e;
		line-height: 1.7;
		margin-bottom: 1rem;
	}

	.integration-card strong {
		color: #c9d1d9;
		display: block;
		margin-top: 1rem;
		margin-bottom: 0.5rem;
	}

	@media (max-width: 768px) {
		.tech-row {
			grid-template-columns: 1fr;
			gap: 0.5rem;
		}

		.tech-header {
			display: none;
		}

		.tech-component::before {
			content: 'Component: ';
			color: #8b949e;
			font-weight: normal;
		}

		.tech-name::before {
			content: 'Technology: ';
			color: #8b949e;
			font-weight: normal;
		}
	}
</style>
