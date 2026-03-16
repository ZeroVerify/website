<script lang="ts">
	import { resolve } from '$app/paths';
	import Section from '$lib/components/Section.svelte';
</script>

<svelte:head>
	<title>Architecture - ZeroVerify</title>
</svelte:head>

<h1 class="mb-8 text-4xl font-bold">Technical Specification</h1>

<Section title="Product Overview" bordered={false}>
	<h3 class="text-primary mb-3 text-xl font-semibold">Problem Statement</h3>
	<p class="mb-6 leading-relaxed">
		Existing identity verification systems require users to disclose entire credential documents
		(student IDs, driver's licenses) to prove a single attribute, creating unnecessary privacy
		exposure and centralized data liability for verifiers. ZeroVerify allows circuit-defined
		attributes ("I am an enrolled student," "I am over 21") to be cryptographically proven without
		revealing any underlying personal data.
	</p>

	<h3 class="text-primary mb-3 text-xl font-semibold">MVP Features</h3>
	<ul class="mb-6 list-disc space-y-2 pl-6">
		<li>
			<strong>Credential Issuance:</strong> ZeroVerify authenticates the user via OAuth/OIDC IdP, generates
			a W3C Verifiable Credential, signs it with BBS+ signature, and delivers it to the user's client
			for local storage
		</li>
		<li>
			<strong>Proof Generation:</strong> User's client runs a zk-SNARK circuit against locally-stored
			credential, producing a proof of boolean claim without revealing underlying attributes
		</li>
		<li>
			<strong>Proof Verification:</strong> Verifier uses open-source SDK to validate zk-proof against
			issuer's verification key and checks revocation status via W3C Bitstring Status List
		</li>
	</ul>
</Section>

<Section title="System Architecture">
	<div class="mb-6 text-center">
		<a href={resolve('/images/system-architecture-diagram.png')} target="_blank" class="block">
			<img
				src="/images/system-architecture-diagram.png"
				alt="ZeroVerify System Architecture"
				class="border-borders mx-auto w-auto max-w-[800px] cursor-pointer rounded-lg border"
				title="Click to view full size"
			/>
		</a>
		<p class="text-text-secondary mt-4 text-sm">Click diagram to view full size</p>
	</div>

	<h3 class="text-primary mb-3 text-xl font-semibold">Architectural Boundary</h3>
	<p class="mb-6 leading-relaxed">
		ZeroVerify is a library and issuance service, not a verification intermediary. The system
		provides: (1) an issuance API that issues BBS+ signed credentials, (2) a client-SDK that handles
		credential storage and proof generation, and (3) a verification library that verifiers embed.
		Verifiers interact directly with users and only call ZeroVerify to get a W3C revocation
		bitstring.
	</p>
</Section>

<Section title="Tech Stack">
	<div class="space-y-4">
		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Backend: AWS Lambda (Rust)</h3>
			<p class="text-text-secondary">
				Serverless issuance function behind API Gateway. Lambda provides per-invocation billing and
				automatic scaling for unpredictable traffic spikes. Rust chosen for fast cold starts
				(100-300ms vs Java's 1-3s), memory safety guarantees, and mature BBS+ signature library
				ecosystem. Target: &lt;800ms total execution time.
			</p>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Database: AWS DynamoDB</h3>
			<p class="text-text-secondary">
				Credential metadata stored with key-value access pattern. Supports fast lookups for
				duplicate credential prevention and revocation status.
			</p>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Revocation Storage: AWS S3</h3>
			<p class="text-text-secondary">
				W3C Bitstring Status List stored as static object and replicated globally using S3 Cross
				Region Replication. Bitstring is small (1 bit per credential).
			</p>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Client SDK: TypeScript</h3>
			<p class="text-text-secondary">
				Proof generation library running entirely in browser. Fetches keys from ZeroVerify and
				executes Groth-16 zk-SNARK prover compiled to WebAssembly.
			</p>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Infrastructure: Terraform/OpenTofu</h3>
			<p class="text-text-secondary">
				Infrastructure defined as code for reproducible deployments and CI/CD.
			</p>
		</div>
	</div>
</Section>

<Section title="Data Design">
	<h3 class="text-primary mb-3 text-xl font-semibold">Credential Metadata Schema</h3>
	<div class="border-borders mb-6 overflow-x-auto rounded-lg border bg-black p-4">
		<pre class="text-text-secondary text-sm"><code
				>{JSON.stringify(
					{
						subject_id: 'did:key:z6MkF5rGMoatr...',
						credential_id: 'https://api.zeroverify.com/credentials/a3f8b2c1-...',
						credential_type: 'Student_Credential',
						issued_at: '2025-02-10T20:41:27Z',
						expiresAt: '2026-02-10T20:41:27Z',
						revocation_index: 94567,
						revoked: false
					},
					null,
					2
				)}</code
			></pre>
	</div>

	<h3 class="text-primary mb-3 text-xl font-semibold">Relationships</h3>
	<ul class="text-text-secondary list-disc space-y-1 pl-6">
		<li>
			One user can have multiple credentials from different sources (University, Job, Government)
		</li>
		<li>One user can generate many different proofs</li>
		<li>Each signed credential can be used to generate many proofs</li>
	</ul>
</Section>

<Section title="Performance Goals">
	<div class="space-y-4">
		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Credential Issuance</h3>
			<ul class="text-text-secondary list-disc space-y-1 pl-6">
				<li>OAuth/OIDC authentication: &lt;500ms</li>
				<li>Lambda execution: &lt;800ms</li>
				<li>BBS+ signature operation: 0.3-7.5ms per credential</li>
				<li>DynamoDB write: ~20ms</li>
				<li>Credential delivery to user: ~200ms</li>
			</ul>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Client-Side Proof Generation</h3>
			<ul class="text-text-secondary list-disc space-y-1 pl-6">
				<li>zk-SNARK circuit execution: &lt;4 seconds</li>
			</ul>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Proof Verification</h3>
			<ul class="text-text-secondary list-disc space-y-1 pl-6">
				<li>Complete verification: &lt;300ms</li>
				<li>Cryptographic zk-proof validation: &lt;150ms</li>
				<li>Bitstring retrieval from S3: &lt;100ms</li>
			</ul>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Revocation Processing</h3>
			<ul class="text-text-secondary list-disc space-y-1 pl-6">
				<li>Revocation update latency: &lt;10 min from request to global availability</li>
				<li>Batch processing: 100 revocations/batch</li>
				<li>Lambda execution time: &lt;3s/batch</li>
				<li>Target: 99.9% consistency for concurrent revocation updates</li>
			</ul>
		</div>
	</div>
</Section>

<Section title="Security">
	<ul class="list-disc space-y-2 pl-6">
		<li>All communication uses HTTPS (TLS 1.2+)</li>
		<li>Server-side data encrypted using AWS KMS</li>
		<li>ZeroVerify does not store raw PII after credential issuance</li>
		<li>Credentials stored locally in browser, never retransmitted to any server</li>
		<li>Each proof bound to verifier-provided session nonce to prevent replay attacks</li>
		<li>Session identifiers expire after fixed time window (5 minutes)</li>
		<li>
			Verification validates proof structure, cryptographic validity, issuer signature, and
			revocation status
		</li>
		<li>IAM roles follow least privilege principles</li>
		<li>Signing keys stored in AWS Secrets Manager, never hardcoded</li>
		<li>System never returns "valid" if verification fails or is incomplete</li>
	</ul>
</Section>

<Section title="Limitations and Tradeoffs">
	<div class="space-y-4">
		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Credential Revocation</h3>
			<p class="text-text-secondary">
				We implement W3C Bitstring Status Lists rather than PKI mechanisms (CRL/OCSP) because
				bitstrings preserve verification privacy. Bitstrings encode revocation as bit positions in a
				compressed list; merchants fetch the bitstring and check locally without revealing which
				credential they're verifying.
			</p>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Proof Generation Cost</h3>
			<p class="text-text-secondary">
				Generating ZK Proofs takes 2-5 seconds on modern devices. This is more compute-intensive
				than submitting a form but faster than uploading documents and waiting for manual approval.
				The computational cost shifts from servers to user's device.
			</p>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Browser Security</h3>
			<p class="text-text-secondary">
				Browser-based credential storage is less secure than hardware wallets. However, our
				architecture never transmits credentials after issuance. Credentials always stay on the
				device, and only ZK proofs are sent. We trade hardware-level security for zero data
				disclosure.
			</p>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Trust Model</h3>
			<p class="text-text-secondary">
				Merchants trust our mechanism through cryptographic verification, not reputation. The ZK
				proof is mathematically verifiable using our public key. We issue credentials only after
				OAuth confirmation from the authoritative source. Merchants can audit our public key and
				verification code for transparency.
			</p>
		</div>
	</div>
</Section>
