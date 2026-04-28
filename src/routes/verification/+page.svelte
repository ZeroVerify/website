<script lang="ts">
	import Section from '$lib/components/Section.svelte';
</script>

<svelte:head>
	<title>Verification - ZeroVerify</title>
</svelte:head>

<h1 class="mb-8 text-4xl font-bold">Verification & Testing</h1>

<Section title="Testing Strategy" bordered={false}>
	<p class="mb-4 leading-relaxed">
		ZeroVerify's testing strategy encompasses both unit and integration testing to ensure the system
		meets all functional and non-functional requirements. Testing focuses on cryptographic
		correctness, privacy guarantees, and system reliability.
	</p>
</Section>

<Section title="Unit Tests">
	<p class="mb-4">Unit tests validate individual components in isolation:</p>
	<ul class="text-text-secondary list-disc space-y-2 pl-6">
		<li>
			<strong>Cryptographic Functions:</strong> Validate BBS+ signature generation and verification, zk-SNARK
			proof generation and verification
		</li>
		<li>
			<strong>Credential Creation:</strong> Test credential schema compliance, attribute extraction from
			OAuth claims, credential signing and serialization
		</li>
		<li>
			<strong>Proof Generation:</strong> Validate circuit execution, public/private input handling, proof
			serialization
		</li>
		<li>
			<strong>Revocation Logic:</strong> Test bitstring updates, concurrent revocation handling, revocation
			status checks
		</li>
	</ul>
</Section>

<Section title="Integration Tests">
	<p class="mb-4">Integration tests validate end-to-end system flows:</p>
	<div class="space-y-4">
		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Credential Issuance Flow</h3>
			<ul class="text-text-secondary list-disc space-y-1 pl-6">
				<li>User authentication through OAuth/OIDC</li>
				<li>Credential generation and BBS+ signing</li>
				<li>Credential delivery to browser wallet</li>
				<li>Prevention of duplicate credential issuance</li>
			</ul>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Proof Generation and Verification</h3>
			<ul class="text-text-secondary list-disc space-y-1 pl-6">
				<li>End-to-end proof generation from stored credential</li>
				<li>Proof verification against issuer public key</li>
				<li>Validation of selective disclosure (only requested attributes revealed)</li>
				<li>Performance validation (proof generation &lt;5s, verification &lt;300ms)</li>
			</ul>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Revocation Flow</h3>
			<ul class="text-text-secondary list-disc space-y-1 pl-6">
				<li>Revocation request submission and processing</li>
				<li>Bitstring update and propagation</li>
				<li>Revoked credential rejection during verification</li>
				<li>Concurrent revocation consistency</li>
			</ul>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Replay Attack Prevention</h3>
			<ul class="text-text-secondary list-disc space-y-1 pl-6">
				<li>Challenge nonce binding to proof</li>
				<li>Nonce reuse detection and rejection</li>
				<li>Session expiration handling</li>
			</ul>
		</div>
	</div>
</Section>

<Section title="Success Metrics">
	<div class="space-y-4">
		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Functional Requirements</h3>
			<ul class="text-text-secondary list-disc space-y-1 pl-6">
				<li>100% of authenticated users receive credentials</li>
				<li>Proof requests delivered to wallet within ≤2 seconds</li>
				<li>Users see only requested attributes in consent screen</li>
				<li>Proof generation time ≤3–5 seconds under normal load</li>
				<li>Verifiers receive correct valid/invalid results</li>
				<li>Revoked credentials are flagged during verification</li>
			</ul>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Security</h3>
			<ul class="text-text-secondary list-disc space-y-1 pl-6">
				<li>Credentials, proofs, and keys protected in storage and transit</li>
				<li>Only authorized verifiers can request and verify proofs</li>
				<li>Tampered, invalid, or malformed proofs are detected and rejected</li>
				<li>Secure key management practices enforced (key rotation, least-privilege access)</li>
			</ul>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Privacy</h3>
			<ul class="text-text-secondary list-disc space-y-1 pl-6">
				<li>Raw personal identity data not stored centrally</li>
				<li>Only requested attributes disclosed during proof generation</li>
				<li>Minimal linkability across verification sessions</li>
			</ul>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Performance</h3>
			<ul class="text-text-secondary list-disc space-y-1 pl-6">
				<li>Zero-knowledge proofs generated in ≤3–5 seconds</li>
				<li>Proof verification completes in ≤1–2 seconds for real-time flows</li>
			</ul>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Usability</h3>
			<ul class="text-text-secondary list-disc space-y-1 pl-6">
				<li>Users complete verification in ≤3 actions</li>
				<li>Clear, user-friendly error messages displayed</li>
				<li>Straightforward integration experience for verifiers</li>
			</ul>
		</div>
	</div>
</Section>

<Section title="Validation Methods">
	<div class="space-y-4">
		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Credential Issuance</h3>
			<p class="text-text-secondary">
				Test with multiple IdPs and users. Inspect wallet contents for correct attributes,
				signatures, and metadata.
			</p>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Proof Generation</h3>
			<p class="text-text-secondary">
				End-to-end testing with sample credentials. Verify hidden attributes remain concealed.
				Measure generation time under normal load.
			</p>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Proof Verification</h3>
			<p class="text-text-secondary">
				Test verification with valid, revoked, and tampered proofs. Compare results against expected
				outcomes.
			</p>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Security</h3>
			<p class="text-text-secondary">
				Conduct penetration tests and security audits. Attempt unauthorized proof requests and
				tampering. Inspect encryption and key management implementation.
			</p>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Performance</h3>
			<p class="text-text-secondary">
				Load testing with multiple concurrent users. Measure proof generation and verification times
				under various load conditions.
			</p>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Scalability</h3>
			<p class="text-text-secondary">
				Simulate large-scale usage scenarios. Measure system latency and throughput under high load.
			</p>
		</div>
	</div>
</Section>

<Section title="Test Cases">
	<div class="space-y-4">
		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Happy Path</h3>
			<p class="text-text-secondary">Request → Approve → Proof generated → Verify → Accepted</p>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Failure Cases</h3>
			<ul class="text-text-secondary list-disc space-y-1 pl-6">
				<li>Replay attempt: Reused proof rejected</li>
				<li>Malformed input: Invalid proof structure detected</li>
				<li>Invalid proof: Cryptographic verification fails</li>
				<li>Revoked credential: Status check fails verification</li>
				<li>Expired session: Challenge nonce expired</li>
			</ul>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Edge Cases</h3>
			<ul class="text-text-secondary list-disc space-y-1 pl-6">
				<li>OAuth IdP failure or timeout</li>
				<li>Revocation list retrieval failure</li>
				<li>Concurrent credential issuance attempts</li>
				<li>Circuit breaker activation after repeated failures</li>
			</ul>
		</div>
	</div>
</Section>
