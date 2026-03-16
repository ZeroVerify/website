<script lang="ts">
	import Section from '$lib/components/Section.svelte';
</script>

<svelte:head>
	<title>Requirements - ZeroVerify</title>
</svelte:head>

<h1 class="mb-8 text-4xl font-bold">Product Requirements Document</h1>

<Section title="Executive Summary" bordered={false}>
	<h3 class="text-primary mb-3 text-xl font-semibold">The Hook</h3>
	<p class="mb-6 leading-relaxed">
		Over 17 billion personal records were compromised in 2023 alone. Current identity verification
		protocols (SAML, OAuth, OpenID Connect) require transmitting full identity attribute sets rather
		than selective proofs of individual claims. To confirm "Is this person a student?", systems
		expose names, birthdates, addresses, and more. ZeroVerify attacks the collection requirement
		itself.
	</p>

	<h3 class="text-primary mb-3 text-xl font-semibold">The Problem</h3>
	<p class="mb-6 leading-relaxed">
		Current digital identity verification operates on a structural mismatch between what verifiers
		need and what protocols deliver. To confirm a single boolean claim, SAML, OAuth, OIDC return a
		full attribute assertion containing every identity field the institution has on record. No
		existing system integrates zero-knowledge proofs into standard OAuth 2.0 and OIDC flows such
		that a verifier can confirm a claim without receiving any personal attributes at all.
	</p>

	<h3 class="text-primary mb-3 text-xl font-semibold">The Solution</h3>
	<p class="leading-relaxed">
		ZeroVerify is a privacy-preserving identity verification layer that integrates with existing
		identity infrastructure. In the issuance phase, ZeroVerify federates with an institution's IdP
		via Keycloak, extracts verified attributes, and produces a BBS+ signed verifiable credential
		stored in the user's mobile wallet. In the verification phase, the wallet uses the stored
		credential to generate a zk-SNARK proof confirming a claim without encoding any attribute value.
		The verifier receives a single result: valid or invalid.
	</p>
</Section>

<Section title="Product Definition">
	<p class="leading-relaxed">
		ZeroVerify is a privacy-centered verification platform that lets users confirm eligibility
		claims, like student status or age requirements, without exposing unnecessary personal
		information. After authentication through trusted Identity Providers, the platform issues signed
		credentials for local storage. When verification is requested, users generate mathematical
		proofs for specific proof types (circuits) and receive Accepted/Rejected results without
		disclosing full identity data.
	</p>
</Section>

<Section title="Target Audience">
	<div class="space-y-6">
		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">
				Primary: Verifiers (merchants, websites, service providers)
			</h3>
			<p class="text-text-secondary mb-2">Pain points:</p>
			<ul class="text-text-secondary list-disc space-y-1 pl-6">
				<li>Existing methods require collecting full identity attribute sets for simple claims</li>
				<li>Storing identity data increases breach risk and compliance burden</li>
				<li>Manual verification is slow and high-friction</li>
			</ul>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">
				Secondary: End users (students/individuals)
			</h3>
			<p class="text-text-secondary mb-2">Pain points:</p>
			<ul class="text-text-secondary list-disc space-y-1 pl-6">
				<li>Forced to share more personal info than necessary</li>
				<li>Limited control over data retention</li>
			</ul>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">
				Supporting: Institutions/IdPs (universities/enterprises)
			</h3>
			<p class="text-text-secondary mb-2">Pain points:</p>
			<ul class="text-text-secondary list-disc space-y-1 pl-6">
				<li>Don't want to replace or rework existing SAML/OAuth/OIDC setups</li>
			</ul>
		</div>
	</div>
</Section>

<Section title="Minimum Viable Product (MVP)">
	<p class="mb-4 leading-relaxed">
		For the initial launch, ZeroVerify will support one end-to-end verification flow with at least
		one proof type (e.g., student status).
	</p>
	<ul class="list-disc space-y-2 pl-6">
		<li>
			<strong>Issuance via existing IdP:</strong> User authenticates through Keycloak, and ZeroVerify
			issues a signed credential
		</li>
		<li>
			<strong>Credential storage in user wallet:</strong> Credential delivered to user and stored locally
		</li>
		<li>
			<strong>Verifier challenge + proof request:</strong> Verifier requests a supported proof type
		</li>
		<li>
			<strong>User consent:</strong> User reviews request and approves/denies proof generation
		</li>
		<li>
			<strong>Proof generation:</strong> User generates a proof for the requested proof type
		</li>
		<li>
			<strong>Verification result:</strong> Verifier receives a clear valid/invalid result
		</li>
		<li>
			<strong>Replay protection:</strong> Proof is bound to verifier challenge to prevent reuse
		</li>
		<li>
			<strong>Revocation checking:</strong> Verification includes check against credential revocation
			status
		</li>
	</ul>
</Section>

<Section title="Functional Requirements">
	<div class="space-y-6">
		<div>
			<h3 class="text-primary mb-3 text-lg font-semibold">Credential Issuance</h3>
			<ul class="text-text-secondary list-disc space-y-1 pl-6">
				<li>User logs in using a trusted Identity Provider</li>
				<li>User receives a digital credential in their wallet</li>
				<li>User can view their credentials inside their wallet</li>
			</ul>
		</div>

		<div>
			<h3 class="text-primary mb-3 text-lg font-semibold">User Generates ZK Proof</h3>
			<ul class="text-text-secondary list-disc space-y-1 pl-6">
				<li>User receives a notification about a proof request</li>
				<li>User views which type of proof the verifier requests</li>
				<li>User can accept or decline the request</li>
				<li>User generates a ZK proof that only reveals the requested attributes</li>
				<li>User sends the proof back to the verifier</li>
			</ul>
		</div>

		<div>
			<h3 class="text-primary mb-3 text-lg font-semibold">Proof Verification</h3>
			<ul class="text-text-secondary list-disc space-y-1 pl-6">
				<li>Verifier submits the received proof for validation</li>
				<li>Verifier receives confirmation if the proof is valid</li>
				<li>Verifier sees if the credential is revoked or still active</li>
				<li>Verifier decides to approve or deny based on the result</li>
			</ul>
		</div>

		<div>
			<h3 class="text-primary mb-3 text-lg font-semibold">Security and Access Control</h3>
			<ul class="text-text-secondary list-disc space-y-1 pl-6">
				<li>System protects credentials, proofs, and cryptographic keys in storage and transit</li>
				<li>System ensures only authorized verifiers can request credentials and verify proofs</li>
				<li>System detects and rejects tampered, invalid, or malformed proofs</li>
				<li>System supports key management practices, including key rotation</li>
				<li>
					System does not persist raw identity attributes—only a non-reversible cryptographic
					derivative
				</li>
			</ul>
		</div>
	</div>
</Section>

<Section title="Non-Functional Requirements">
	<div class="space-y-4">
		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Privacy</h3>
			<p class="text-text-secondary">
				System does not persist raw identity attributes. Supports selective disclosure by revealing
				only attribute(s) required by the requested proof type.
			</p>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Performance</h3>
			<p class="text-text-secondary">
				ZK proofs generated in 1-5 seconds under normal load. Verifiers validate proofs quickly
				enough for real-time checkout flows.
			</p>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Scalability</h3>
			<p class="text-text-secondary">
				System supports growth in users, issuers, and verifiers without significant performance
				degradation.
			</p>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Usability</h3>
			<p class="text-text-secondary">
				Simple verification experience with 3 user actions or fewer and clear consent prompts.
				Straightforward integration for verifiers with clear documentation.
			</p>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Reliability</h3>
			<p class="text-text-secondary">
				System remains available during verification requests and handles transient failures
				gracefully. Fails safely when proof generation or verification cannot be completed.
			</p>
		</div>

		<div>
			<h3 class="text-primary mb-2 text-lg font-semibold">Interoperability</h3>
			<p class="text-text-secondary">
				Aligns with W3C verifiable credential standards. Supports common authentication systems
				(OAuth/SSO) and works across major browsers/devices.
			</p>
		</div>
	</div>
</Section>
