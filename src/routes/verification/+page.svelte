<svelte:head>
	<title>Verification & Testing - ZeroVerify</title>
</svelte:head>

<div class="verification-page">
	<h1>Verification & Testing</h1>
	<p class="subtitle">Testing plan, performance benchmarks, and validation methods</p>

	<section class="section">
		<h2>Testing Strategy</h2>
		<p class="lead">
			Comprehensive testing ensures ZeroVerify's cryptographic correctness, security properties,
			and performance targets.
		</p>

		<div class="testing-grid">
			<div class="test-category">
				<h3> Unit Tests</h3>
				<h4>Critical Functions Being Tested</h4>
				<ul>
					<li>BBS+ signature generation and verification</li>
					<li>Groth16 proof generation and validation</li>
					<li>W3C Bitstring Status List encoding/decoding</li>
					<li>HMAC-based subject identifier derivation</li>
					<li>OAuth/OIDC token exchange</li>
					<li>Challenge nonce generation and validation</li>
				</ul>
			</div>

			<div class="test-category">
				<h3> Integration Tests</h3>
				<h4>Full-Flow Test Scenarios</h4>
				<ul>
					<li><strong>Happy Path:</strong> Registration → Issuance → Proof Generation → Verification → Accepted</li>
					<li><strong>Revocation Flow:</strong> Issue credential → Revoke → Attempt verification → Rejected</li>
					<li><strong>Replay Attack:</strong> Generate proof → Submit → Reuse same proof → Rejected</li>
					<li><strong>Expired Credential:</strong> Issue → Wait for expiry → Attempt verification → Rejected</li>
					<li><strong>Invalid Proof:</strong> Tamper with proof data → Submit → Rejected</li>
				</ul>
			</div>

			<div class="test-category">
				<h3>⚡ Performance Tests</h3>
				<h4>Load Testing Scenarios</h4>
				<ul>
					<li>Concurrent credential issuance requests (100 simultaneous)</li>
					<li>Proof generation under normal load</li>
					<li>Verification throughput (requests per second)</li>
					<li>Revocation bitstring download latency</li>
					<li>Database query performance at scale</li>
				</ul>
			</div>

			<div class="test-category">
				<h3> Security Tests</h3>
				<h4>Attack Scenarios</h4>
				<ul>
					<li>Replay attack prevention (reused proofs)</li>
					<li>Proof tampering detection</li>
					<li>Unauthorized credential issuance attempts</li>
					<li>Race conditions in revocation processing</li>
					<li>Man-in-the-middle attack resistance</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="section" id="benchmarks">
		<h2>Performance Benchmarks</h2>
		<p class="lead">Target performance metrics across all system components</p>

		<div class="benchmark-category">
			<h3>Credential Issuance Pipeline</h3>
			<div class="benchmark-table">
				<div class="bench-row bench-header">
					<div>Operation</div>
					<div>Target</div>
					<div>Status</div>
				</div>
				<div class="bench-row">
					<div class="bench-op">OAuth/OIDC Authentication</div>
					<div class="bench-target">&lt; 500ms</div>
					<div class="bench-status success">✓ Achieved</div>
				</div>
				<div class="bench-row">
					<div class="bench-op">Lambda Execution (Credential Generation)</div>
					<div class="bench-target">&lt; 800ms</div>
					<div class="bench-status success">✓ Achieved</div>
				</div>
				<div class="bench-row">
					<div class="bench-op">BBS+ Signature Operation</div>
					<div class="bench-target">6-7.5ms</div>
					<div class="bench-status success">✓ Achieved</div>
				</div>
				<div class="bench-row">
					<div class="bench-op">DynamoDB Write</div>
					<div class="bench-target">&lt; 20ms</div>
					<div class="bench-status success">✓ Achieved</div>
				</div>
				<div class="bench-row">
					<div class="bench-op">Credential Delivery to User</div>
					<div class="bench-target">&lt; 200ms</div>
					<div class="bench-status success">✓ Achieved</div>
				</div>
			</div>
		</div>

		<div class="benchmark-category">
			<h3>Client-Side Proof Generation</h3>
			<div class="benchmark-table">
				<div class="bench-row bench-header">
					<div>Operation</div>
					<div>Target</div>
					<div>Status</div>
				</div>
				<div class="bench-row">
					<div class="bench-op">zk-SNARK Circuit Execution (Browser)</div>
					<div class="bench-target">&lt; 4 seconds</div>
					<div class="bench-status inprogress"> Testing</div>
				</div>
				<div class="bench-row">
					<div class="bench-op">BBS+ Proof Generation</div>
					<div class="bench-target">1-2ms</div>
					<div class="bench-status success">✓ Achieved</div>
				</div>
			</div>
		</div>

		<div class="benchmark-category">
			<h3>Proof Verification</h3>
			<div class="benchmark-table">
				<div class="bench-row bench-header">
					<div>Operation</div>
					<div>Target</div>
					<div>Status</div>
				</div>
				<div class="bench-row">
					<div class="bench-op">Complete Verification</div>
					<div class="bench-target">&lt; 300ms</div>
					<div class="bench-status success">✓ Achieved</div>
				</div>
				<div class="bench-row">
					<div class="bench-op">Cryptographic zk-proof Validation</div>
					<div class="bench-target">&lt; 150ms</div>
					<div class="bench-status success">✓ Achieved</div>
				</div>
				<div class="bench-row">
					<div class="bench-op">BitString Retrieval from S3</div>
					<div class="bench-target">&lt; 100ms</div>
					<div class="bench-status success">✓ Achieved</div>
				</div>
				<div class="bench-row">
					<div class="bench-op">BBS+ Proof Verification</div>
					<div class="bench-target">~19ms</div>
					<div class="bench-status success">✓ Achieved</div>
				</div>
			</div>
		</div>

		<div class="benchmark-category">
			<h3>Revocation Processing</h3>
			<div class="benchmark-table">
				<div class="bench-row bench-header">
					<div>Operation</div>
					<div>Target</div>
					<div>Status</div>
				</div>
				<div class="bench-row">
					<div class="bench-op">Revocation Update Latency</div>
					<div class="bench-target">&lt; 10 minutes</div>
					<div class="bench-status inprogress"> Testing</div>
				</div>
				<div class="bench-row">
					<div class="bench-op">Batch Processing (100 requests)</div>
					<div class="bench-target">&lt; 3s per batch</div>
					<div class="bench-status inprogress"> Testing</div>
				</div>
				<div class="bench-row">
					<div class="bench-op">Race Condition Consistency</div>
					<div class="bench-target">99.9%</div>
					<div class="bench-status inprogress"> Testing</div>
				</div>
			</div>
		</div>
	</section>

	<section class="section" id="traceability">
		<h2>Traceability Matrix</h2>
		<p class="lead">Mapping user stories to test cases and validation methods</p>

		<div class="matrix-table">
			<div class="matrix-row matrix-header">
				<div>User Story</div>
				<div>Test Case</div>
				<div>Validation Method</div>
				<div>Status</div>
			</div>

			<div class="matrix-row">
				<div class="matrix-story">Credential Issuance</div>
				<div class="matrix-test">test_issue_credential_success</div>
				<div class="matrix-method">Integration test with mock IdP</div>
				<div class="matrix-status pass">✓ Pass</div>
			</div>

			<div class="matrix-row">
				<div class="matrix-story">ZK Proof Generation</div>
				<div class="matrix-test">test_generate_age_proof</div>
				<div class="matrix-method">Unit test with sample credentials</div>
				<div class="matrix-status pass">✓ Pass</div>
			</div>

			<div class="matrix-row">
				<div class="matrix-story">Proof Verification</div>
				<div class="matrix-test">test_verify_valid_proof</div>
				<div class="matrix-method">Integration test end-to-end</div>
				<div class="matrix-status pass">✓ Pass</div>
			</div>

			<div class="matrix-row">
				<div class="matrix-story">Replay Protection</div>
				<div class="matrix-test">test_reject_reused_proof</div>
				<div class="matrix-method">Security test with duplicate proofs</div>
				<div class="matrix-status pending"> Pending</div>
			</div>

			<div class="matrix-row">
				<div class="matrix-story">Credential Revocation</div>
				<div class="matrix-test">test_revoke_and_reject</div>
				<div class="matrix-method">Integration test with revocation flow</div>
				<div class="matrix-status pending"> Pending</div>
			</div>

			<div class="matrix-row">
				<div class="matrix-story">User Consent</div>
				<div class="matrix-test">test_user_denies_proof</div>
				<div class="matrix-method">UI test with consent screen</div>
				<div class="matrix-status pending"> Pending</div>
			</div>

			<div class="matrix-row">
				<div class="matrix-story">Selective Disclosure</div>
				<div class="matrix-test">test_hidden_attributes_not_revealed</div>
				<div class="matrix-method">Cryptographic verification test</div>
				<div class="matrix-status pass">✓ Pass</div>
			</div>
		</div>
	</section>

	<section class="section">
		<h2>Validation Methods</h2>

		<div class="validation-grid">
			<div class="validation-card">
				<h3>Functional Validation</h3>
				<ul>
					<li>Test with multiple IdPs and users</li>
					<li>Inspect wallet contents for correct attributes, signatures, and metadata</li>
					<li>Simulate proof requests and confirm delivery to wallet</li>
					<li>Verify hidden attributes remain concealed in generated proofs</li>
					<li>Compare verification results against expected outcomes</li>
				</ul>
			</div>

			<div class="validation-card">
				<h3>Security Validation</h3>
				<ul>
					<li>Penetration testing and access control audits</li>
					<li>Attempt unauthorized proof requests and tampering</li>
					<li>Verify encryption and key management implementation</li>
					<li>Test replay attack prevention mechanisms</li>
					<li>Inspect system architecture for centralized data storage</li>
				</ul>
			</div>

			<div class="validation-card">
				<h3>Performance Validation</h3>
				<ul>
					<li>Load testing with multiple concurrent users</li>
					<li>Measure proof generation and verification times</li>
					<li>Simulate large-scale usage scenarios</li>
					<li>Track system latency and throughput under high load</li>
				</ul>
			</div>

			<div class="validation-card">
				<h3>Usability Validation</h3>
				<ul>
					<li>Conduct usability testing with representative users</li>
					<li>Track number of actions to complete verification</li>
					<li>Test integration setup and error handling flows</li>
					<li>Verify clear, user-friendly error messages</li>
				</ul>
			</div>
		</div>
	</section>
</div>

<style>
	.verification-page {
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

	.testing-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.test-category {
		background-color: #161b22;
		border: 1px solid #30363d;
		border-radius: 8px;
		padding: 1.5rem;
	}

	.test-category h3 {
		font-size: 1.25rem;
		margin-bottom: 1rem;
	}

	.test-category h4 {
		font-size: 1rem;
		margin: 1.5rem 0 1rem;
		color: #8b949e;
	}

	.test-category ul {
		list-style: none;
		padding: 0;
	}

	.test-category li {
		padding: 0.5rem 0 0.5rem 1.5rem;
		color: #8b949e;
		line-height: 1.6;
		position: relative;
	}

	.test-category li::before {
		content: '▸';
		position: absolute;
		left: 0;
		color: #00d4ff;
	}

	.test-category strong {
		color: #c9d1d9;
		font-weight: 600;
	}

	.benchmark-category {
		margin-bottom: 3rem;
	}

	.benchmark-category h3 {
		font-size: 1.5rem;
		margin-bottom: 1.5rem;
		color: #00d4ff;
	}

	.benchmark-table {
		background-color: #161b22;
		border: 1px solid #30363d;
		border-radius: 8px;
		overflow: hidden;
	}

	.bench-row {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr;
		gap: 1.5rem;
		padding: 1rem 1.5rem;
		border-bottom: 1px solid #30363d;
	}

	.bench-row:last-child {
		border-bottom: none;
	}

	.bench-header {
		background-color: #0d1117;
		font-weight: 600;
		color: #8b949e;
		font-size: 0.9rem;
		text-transform: uppercase;
	}

	.bench-op {
		color: #c9d1d9;
	}

	.bench-target {
		font-family: 'Courier New', monospace;
		color: #9d4edd;
		font-weight: 600;
	}

	.bench-status {
		font-weight: 600;
	}

	.bench-status.success {
		color: #3fb950;
	}

	.bench-status.inprogress {
		color: #d29922;
	}

	.matrix-table {
		background-color: #161b22;
		border: 1px solid #30363d;
		border-radius: 8px;
		overflow: hidden;
		margin-top: 2rem;
	}

	.matrix-row {
		display: grid;
		grid-template-columns: 1.5fr 1.5fr 1.5fr 0.8fr;
		gap: 1.5rem;
		padding: 1rem 1.5rem;
		border-bottom: 1px solid #30363d;
	}

	.matrix-row:last-child {
		border-bottom: none;
	}

	.matrix-header {
		background-color: #0d1117;
		font-weight: 600;
		color: #8b949e;
		font-size: 0.9rem;
		text-transform: uppercase;
	}

	.matrix-story {
		color: #c9d1d9;
		font-weight: 600;
	}

	.matrix-test {
		font-family: 'Courier New', monospace;
		color: #9d4edd;
		font-size: 0.9rem;
	}

	.matrix-method {
		color: #8b949e;
		font-size: 0.95rem;
	}

	.matrix-status {
		font-weight: 600;
	}

	.matrix-status.pass {
		color: #3fb950;
	}

	.matrix-status.pending {
		color: #d29922;
	}

	.validation-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.validation-card {
		background-color: #161b22;
		border: 1px solid #30363d;
		border-radius: 8px;
		padding: 1.5rem;
	}

	.validation-card h3 {
		font-size: 1.25rem;
		margin-bottom: 1rem;
		color: #00d4ff;
	}

	.validation-card ul {
		list-style: none;
		padding: 0;
	}

	.validation-card li {
		padding: 0.5rem 0 0.5rem 1.5rem;
		color: #8b949e;
		line-height: 1.6;
		position: relative;
	}

	.validation-card li::before {
		content: '✓';
		position: absolute;
		left: 0;
		color: #3fb950;
		font-weight: 700;
	}

	@media (max-width: 768px) {
		.bench-row,
		.matrix-row {
			grid-template-columns: 1fr;
			gap: 0.5rem;
		}

		.bench-header,
		.matrix-header {
			display: none;
		}
	}
</style>
