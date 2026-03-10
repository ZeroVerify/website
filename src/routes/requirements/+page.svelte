<svelte:head>
	<title>Requirements - ZeroVerify</title>
</svelte:head>

<div class="requirements-page">
	<h1>Product Requirements Document</h1>
	<p class="subtitle">Team: Lisa Nguyen, Anton Sakhanovych, Souleymane Sono, Fateha Ima, Simon Griemert</p>

	<!-- Executive Summary -->
	<section class="section">
		<h2>Executive Summary</h2>
		<div class="summary-grid">
			<div class="summary-card">
				<h3>The Hook</h3>
				<p>
					Over 17 billion personal records were compromised in 2023 alone. The dominant identity verification
					protocols (SAML, OAuth, OpenID Connect) transmit full identity attribute sets rather than selective
					proofs of individual claims. ZeroVerify attacks the collection requirement itself.
				</p>
			</div>
			<div class="summary-card">
				<h3>The Problem</h3>
				<p>
					Current digital identity verification operates on a structural mismatch between what verifiers need
					and what protocols deliver. To confirm a single boolean claim ("Is this person a student?"),
					SAML/OAuth/OIDC return a full attribute assertion containing every identity field.
				</p>
			</div>
			<div class="summary-card">
				<h3>The Solution</h3>
				<p>
					ZeroVerify is a privacy-preserving identity verification layer that integrates with existing identity
					infrastructure. It eliminates attribute disclosure entirely from the verification event using
					zero-knowledge proofs.
				</p>
			</div>
		</div>
	</section>

	<!-- Target Audience -->
	<section class="section" id="personas">
		<h2>Target Audience & Personas</h2>

		<div class="persona-card primary">
			<div class="persona-header">
				<div class="persona-icon">🏢</div>
				<div>
					<h3>Primary: Verifiers</h3>
					<p class="persona-role">Merchants, websites, service providers</p>
				</div>
			</div>
			<div class="persona-content">
				<h4>Pain Points</h4>
				<ul>
					<li>Existing verification methods require collecting full identity attribute sets even when only one yes/no claim is needed</li>
					<li>Storing identity data increases breach risk, compliance burden, and long-term liability</li>
					<li>Manual verification or document uploads are slow, high-friction, and easy to abuse</li>
				</ul>
				<h4>Goals</h4>
				<ul>
					<li>Confirm an eligibility claim with a simple result (valid/invalid) during a real-time flow</li>
					<li>Reduce the amount of personal data they collect, store, and are responsible for</li>
					<li>Prevent reuse/replay of verification attempts and reduce fraud</li>
				</ul>
			</div>
		</div>

		<div class="persona-card secondary">
			<div class="persona-header">
				<div class="persona-icon">👤</div>
				<div>
					<h3>Secondary: End Users</h3>
					<p class="persona-role">Students, individuals proving eligibility</p>
				</div>
			</div>
			<div class="persona-content">
				<h4>Pain Points</h4>
				<ul>
					<li>Forced to share more personal info than necessary for simple checks</li>
					<li>Limited control over how long a verifier retains their data</li>
				</ul>
				<h4>Goals</h4>
				<ul>
					<li>Prove a claim (student/over-21) without revealing unnecessary personal attributes</li>
					<li>Understand what is being requested and approve or deny before proof generation</li>
					<li>Complete verification quickly with minimal steps</li>
				</ul>
			</div>
		</div>

		<div class="persona-card supporting">
			<div class="persona-header">
				<div class="persona-icon">🏛️</div>
				<div>
					<h3>Supporting: Institutions/IdPs</h3>
					<p class="persona-role">Universities, enterprises</p>
				</div>
			</div>
			<div class="persona-content">
				<h4>Pain Points</h4>
				<ul>
					<li>Don't want to replace or rework existing SAML/OAuth/OIDC setups to support selective disclosure</li>
				</ul>
				<h4>Goals</h4>
				<ul>
					<li>Support verification using existing identity infrastructure without new protocol changes</li>
					<li>Avoid adding additional identity-data distribution pathways</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- Use Cases -->
	<section class="section" id="use-cases">
		<h2>Use Cases</h2>

		<div class="use-case-grid">
			<div class="use-case-card">
				<div class="use-case-header">
					<span class="use-case-id">UC-1</span>
					<h3>Issue Digital Credential</h3>
				</div>
				<div class="use-case-content">
					<p><strong>Primary Actor:</strong> ZeroVerify (Issuer Service)</p>
					<p><strong>Description:</strong> As a user, I want to authenticate with my trusted Identity Provider (IdP) so that I can receive a verified digital credential.</p>
				</div>
			</div>

			<div class="use-case-card">
				<div class="use-case-header">
					<span class="use-case-id">UC-2</span>
					<h3>Request Attribute Proof</h3>
				</div>
				<div class="use-case-content">
					<p><strong>Primary Actor:</strong> Verifier (Store / Website / Service)</p>
					<p><strong>Description:</strong> As a Verifier (e.g., a store), I want to request a specific attribute proof (e.g., "Over 21") so that I can verify eligibility without seeing the user's full identity data.</p>
				</div>
			</div>

			<div class="use-case-card">
				<div class="use-case-header">
					<span class="use-case-id">UC-3</span>
					<h3>Review Request, Consent, and Generate ZK Proof</h3>
				</div>
				<div class="use-case-content">
					<p><strong>Primary Actor:</strong> User</p>
					<p><strong>Description:</strong> As a user, I want to review exactly which attributes are being requested before generating a zero-knowledge proof so that I maintain control over my privacy.</p>
				</div>
			</div>

			<div class="use-case-card">
				<div class="use-case-header">
					<span class="use-case-id">UC-4</span>
					<h3>Verify Proof (including revocation check)</h3>
				</div>
				<div class="use-case-content">
					<p><strong>Primary Actor:</strong> Verifier</p>
					<p><strong>Description:</strong> As a Verifier, I want to validate the cryptographic proof and its revocation status so that I can securely accept or reject the user's claim.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Functional Requirements -->
	<section class="section" id="functional-requirements">
		<h2>Functional Requirements</h2>

		<div class="fr-grid">
			<div class="fr-card">
				<h3>Credential Issuance (User + IdP)</h3>
				<ul class="fr-list">
					<li>User logs in using a trusted Identity Provider (IdP)</li>
					<li>User receives a digital credential in their wallet</li>
					<li>User can view their credentials inside their wallet</li>
				</ul>
			</div>

			<div class="fr-card">
				<h3>Verifier Request Proof (Website/Store)</h3>
				<ul class="fr-list">
					<li>Verifier requests a specific attribute (e.g., "Over 21")</li>
					<li>Verifier sends a nonce/challenge to user's credentials wallet</li>
					<li>Verifier receives a proof result ("Valid" or "Invalid")</li>
				</ul>
			</div>

			<div class="fr-card">
				<h3>User Generates ZK Proof</h3>
				<ul class="fr-list">
					<li>User receives a notification about a proof request</li>
					<li>User views which type of proof the verifier requests</li>
					<li>User can accept or decline the request</li>
					<li>User generates a ZK proof that only reveals the requested attributes</li>
					<li>User sends the proof back to the verifier</li>
				</ul>
			</div>

			<div class="fr-card">
				<h3>Proof Verification (Verifier)</h3>
				<ul class="fr-list">
					<li>Verifier submits the received proof for validation</li>
					<li>Verifier receives a confirmation if the proof is valid</li>
					<li>Verifier sees if the credential is revoked or still active</li>
					<li>Verifier decides to approve or deny based on the result</li>
				</ul>
			</div>

			<div class="fr-card">
				<h3>Security and Access Control</h3>
				<ul class="fr-list">
					<li>The system shall protect credentials, proofs, and cryptographic keys in storage and during transmission</li>
					<li>The system shall ensure that only authorized verifiers can request credentials, generate proof, or verify proofs</li>
					<li>The system shall detect and reject tampered, invalid, or malformed proofs during verification</li>
					<li>The system shall support key management practices, including key rotation and least-privilege access</li>
					<li>The system shall not persist raw identity attributes received from an identity provider. The system shall persist only a non-reversible cryptographic derivative of the subject identifier for the purpose of preventing duplicate credential issuance</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- Functional Logic -->
	<section class="section" id="functional-logic">
		<h2>Functional Logic</h2>
		<p class="lead">A logical blueprint for how the system responds to user inputs</p>

		<div class="logic-flow">
			<div class="logic-card">
				<h3>Digital Credential Issuance</h3>
				<ol class="logic-steps">
					<li>When user logs in with an IdP, the system validates authentication</li>
					<li>If authentication succeeds, the IdP returns verified attributes</li>
					<li>System creates a BBS+ signed credential using those attributes</li>
					<li>The signed credential is sent to user's wallet via secure channel</li>
				</ol>
			</div>

			<div class="logic-card">
				<h3>Attribute Proof Request</h3>
				<ol class="logic-steps">
					<li>When a verifier requests an attribute, the system builds a "proof request" object</li>
					<li>The system includes:
						<ul class="logic-sublist">
							<li>Circuit Type</li>
							<li>Verifier ID</li>
							<li>Unique Challenge</li>
						</ul>
					</li>
					<li>The request is delivered to the user's wallet</li>
				</ol>
			</div>

			<div class="logic-card">
				<h3>User Consent & ZK Proof</h3>
				<ol class="logic-steps">
					<li>Wallet displays requested attributes</li>
					<li>If user declines, the system returns <code>consent_denied</code></li>
					<li>If user approves:
						<ul class="logic-sublist">
							<li>A ZK proof is generated tied to verifier challenge</li>
						</ul>
					</li>
				</ol>
			</div>

			<div class="logic-card">
				<h3>Proof Verification</h3>
				<ol class="logic-steps">
					<li>Verifier submits the ZK proof + challenge + public input</li>
					<li>System checks:
						<ul class="logic-sublist">
							<li>Proof structure is valid</li>
							<li>Cryptographic correctness</li>
							<li>Challenge matches (anti-replay)</li>
							<li>Credential status revocation list</li>
						</ul>
					</li>
					<li>If all checks pass, return "valid"</li>
					<li>If any step fails, return "invalid" with error code</li>
				</ol>
			</div>
		</div>
	</section>

	<!-- MVP Definition -->
	<section class="section">
		<h2>Minimum Viable Product (MVP)</h2>
		<p class="lead">
			For the initial launch/demo, ZeroVerify will support one end-to-end verification flow with
			at least one proof type (e.g., student status).
		</p>

		<div class="mvp-grid">
			<div class="mvp-feature">
				<div class="mvp-icon">✓</div>
				<h4>Issuance via existing IdP (Keycloak broker)</h4>
				<p>User authenticates through an institution IdP via Keycloak, and ZeroVerify issues a signed credential</p>
			</div>
			<div class="mvp-feature">
				<div class="mvp-icon">✓</div>
				<h4>Credential storage in user wallet</h4>
				<p>Credential is delivered to the user and stored in their wallet/client (not stored centrally as raw identity data)</p>
			</div>
			<div class="mvp-feature">
				<div class="mvp-icon">✓</div>
				<h4>Verifier challenge + proof request</h4>
				<p>Verifier requests a supported proof type and sends a fresh challenge</p>
			</div>
			<div class="mvp-feature">
				<div class="mvp-icon">✓</div>
				<h4>User consent</h4>
				<p>User reviews the request and approves/denies proof generation</p>
			</div>
			<div class="mvp-feature">
				<div class="mvp-icon">✓</div>
				<h4>Proof generation</h4>
				<p>User generates a proof for the requested proof type</p>
			</div>
			<div class="mvp-feature">
				<div class="mvp-icon">✓</div>
				<h4>Verification result</h4>
				<p>Verifier receives a clear valid/invalid result</p>
			</div>
		</div>
	</section>
</div>

<style>
	.requirements-page {
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

	/* Summary Grid */
	.summary-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
	}

	.summary-card {
		background-color: #161b22;
		border: 1px solid #30363d;
		border-radius: 8px;
		padding: 1.5rem;
	}

	.summary-card h3 {
		font-size: 1.25rem;
		margin-bottom: 1rem;
		color: #00d4ff;
	}

	.summary-card p {
		color: #8b949e;
		line-height: 1.6;
	}

	/* Persona Cards */
	.persona-card {
		background-color: #161b22;
		border: 2px solid #30363d;
		border-radius: 12px;
		padding: 2rem;
		margin-bottom: 2rem;
	}

	.persona-card.primary {
		border-color: #00d4ff;
	}

	.persona-card.secondary {
		border-color: #9d4edd;
	}

	.persona-card.supporting {
		border-color: #30363d;
	}

	.persona-header {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		margin-bottom: 1.5rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid #30363d;
	}

	.persona-icon {
		font-size: 3rem;
		width: 70px;
		height: 70px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(157, 78, 221, 0.1));
		border-radius: 12px;
	}

	.persona-header h3 {
		font-size: 1.5rem;
		margin-bottom: 0.25rem;
	}

	.persona-role {
		color: #8b949e;
		font-size: 0.95rem;
	}

	.persona-content h4 {
		font-size: 1.1rem;
		margin-bottom: 0.75rem;
		margin-top: 1.5rem;
	}

	.persona-content h4:first-child {
		margin-top: 0;
	}

	.persona-content ul {
		list-style: none;
		padding: 0;
	}

	.persona-content li {
		padding-left: 1.5rem;
		margin-bottom: 0.75rem;
		color: #8b949e;
		line-height: 1.6;
		position: relative;
	}

	.persona-content li::before {
		content: '▸';
		position: absolute;
		left: 0;
		color: #00d4ff;
	}

	/* Use Cases */
	.use-case-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.use-case-card {
		background-color: #161b22;
		border: 1px solid #30363d;
		border-radius: 8px;
		padding: 1.5rem;
		transition: all 0.2s;
	}

	.use-case-card:hover {
		border-color: #00d4ff;
		transform: translateY(-2px);
	}

	.use-case-header {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1.5rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid #30363d;
	}

	.use-case-id {
		display: inline-block;
		background: linear-gradient(135deg, #00d4ff 0%, #9d4edd 100%);
		color: #fff;
		padding: 0.5rem 1rem;
		border-radius: 6px;
		font-weight: 700;
		font-size: 0.9rem;
		flex-shrink: 0;
	}

	.use-case-header h3 {
		font-size: 1.25rem;
		margin: 0;
		background: none !important;
		-webkit-background-clip: unset !important;
		-webkit-text-fill-color: #c9d1d9 !important;
		background-clip: unset !important;
	}

	.use-case-content p {
		color: #8b949e;
		line-height: 1.8;
		font-size: 0.95rem;
		margin-bottom: 1rem;
	}

	.use-case-content p:last-child {
		margin-bottom: 0;
	}

	.use-case-content strong {
		color: #00d4ff;
		font-weight: 600;
	}

	/* Functional Requirements */
	.fr-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.fr-card {
		background-color: #161b22;
		border: 1px solid #30363d;
		border-radius: 8px;
		padding: 1.5rem;
		transition: all 0.2s;
	}

	.fr-card:hover {
		border-color: #9d4edd;
		transform: translateY(-2px);
	}

	.fr-card h3 {
		font-size: 1.25rem;
		margin-bottom: 1rem;
		padding-bottom: 0.75rem;
		border-bottom: 1px solid #30363d;
		background: none !important;
		-webkit-background-clip: unset !important;
		-webkit-text-fill-color: #c9d1d9 !important;
		background-clip: unset !important;
	}

	.fr-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.fr-list li {
		padding-left: 1.5rem;
		margin-bottom: 0.75rem;
		color: #8b949e;
		line-height: 1.6;
		position: relative;
	}

	.fr-list li::before {
		content: '▸';
		position: absolute;
		left: 0;
		color: #00d4ff;
	}

	/* Functional Logic */
	.logic-flow {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.logic-card {
		background-color: #161b22;
		border: 1px solid #30363d;
		border-radius: 8px;
		padding: 1.5rem;
		transition: all 0.2s;
	}

	.logic-card:hover {
		border-color: #9d4edd;
		transform: translateY(-2px);
	}

	.logic-card h3 {
		font-size: 1.25rem;
		margin-bottom: 1rem;
		padding-bottom: 0.75rem;
		border-bottom: 1px solid #30363d;
		background: none !important;
		-webkit-background-clip: unset !important;
		-webkit-text-fill-color: #c9d1d9 !important;
		background-clip: unset !important;
	}

	.logic-steps {
		counter-reset: step-counter;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.logic-steps > li {
		counter-increment: step-counter;
		margin-bottom: 1rem;
		padding-left: 2.5rem;
		position: relative;
		color: #8b949e;
		line-height: 1.6;
	}

	.logic-steps > li::before {
		content: counter(step-counter);
		position: absolute;
		left: 0;
		top: 0;
		width: 1.75rem;
		height: 1.75rem;
		background: linear-gradient(135deg, #00d4ff 0%, #9d4edd 100%);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-weight: 700;
		font-size: 0.85rem;
	}

	.logic-sublist {
		list-style: none;
		padding: 0;
		margin-top: 0.5rem;
		margin-left: 0;
	}

	.logic-sublist li {
		padding-left: 1.25rem;
		margin-bottom: 0.5rem;
		color: #8b949e;
		line-height: 1.6;
		position: relative;
	}

	.logic-sublist li::before {
		content: '•';
		position: absolute;
		left: 0;
		color: #00d4ff;
	}

	.logic-card code {
		background-color: #0d1117;
		color: #9d4edd;
		padding: 0.2rem 0.5rem;
		border-radius: 4px;
		font-family: 'Courier New', monospace;
		font-size: 0.9rem;
	}

	/* MVP Features */
	.mvp-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.mvp-feature {
		background-color: #161b22;
		border: 1px solid #30363d;
		border-radius: 8px;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.mvp-icon {
		width: 40px;
		height: 40px;
		background: linear-gradient(135deg, #00d4ff 0%, #9d4edd 100%);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-weight: 700;
		font-size: 1.25rem;
	}

	.mvp-feature h4 {
		font-size: 1.1rem;
		margin: 0;
	}

	.mvp-feature p {
		color: #8b949e;
		line-height: 1.6;
		font-size: 0.95rem;
		margin: 0;
	}
</style>
