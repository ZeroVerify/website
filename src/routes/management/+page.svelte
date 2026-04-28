<script lang="ts">
	import Section from '$lib/components/Section.svelte';
</script>

<svelte:head>
	<title>Management - ZeroVerify</title>
</svelte:head>

<h1 class="mb-8 text-4xl font-bold">Project Management</h1>

<Section title="Milestone Roadmap" bordered={false}>
	<p class="mb-6 leading-relaxed">
		The ZeroVerify project is organized into distinct phases, each building upon the previous to
		deliver a fully functional privacy-preserving identity verification system.
	</p>

	<div class="space-y-6">
		<div>
			<h3 class="text-primary mb-3 text-xl font-semibold">
				Phase 1 (Weeks 1-3): Prototype Implementation
			</h3>
			<div class="space-y-4">
				<div>
					<h4 class="mb-2 font-semibold">Infrastructure + Database Schema + Issuance Skeleton</h4>
					<ul class="text-text-secondary list-disc space-y-1 pl-6">
						<li>Set up basic infrastructure for end-to-end demo (frontend + backend)</li>
						<li>Create minimal database schema (credential storage + proof session tracking)</li>
						<li>Set up Keycloak identity middleware and connect to backend</li>
						<li>Stand up issuance API skeleton with basic endpoints</li>
					</ul>
				</div>

				<div>
					<h4 class="mb-2 font-semibold">Trusted Setup</h4>
					<ul class="text-text-secondary list-disc space-y-1 pl-6">
						<li>Run trusted setup to generate setup parameters for circuits</li>
						<li>Deploy verification and proving keys to S3</li>
					</ul>
				</div>

				<div>
					<h4 class="mb-2 font-semibold">Credential Issuance Flow</h4>
					<ul class="text-text-secondary list-disc space-y-1 pl-6">
						<li>Backend generates credential and returns it to web app</li>
						<li>Credential stored locally in user's browser</li>
						<li>User clicks "Request Credential" to start issuance</li>
						<li>Create a mock verifier</li>
					</ul>
				</div>

				<div>
					<h4 class="mb-2 font-semibold">Replay Protection</h4>
					<ul class="text-text-secondary list-disc space-y-1 pl-6">
						<li>Generate unique session challenge per verification attempt</li>
						<li>Bind challenge to proof (handled as part of circuit)</li>
					</ul>
				</div>

				<div>
					<h4 class="mb-2 font-semibold">Proof Generation + User Consent</h4>
					<ul class="text-text-secondary list-disc space-y-1 pl-6">
						<li>Proof request shown in web app with user approval/denial</li>
						<li>On approval, generate proof for one proof type (student status or over 21)</li>
					</ul>
				</div>

				<div>
					<h4 class="mb-2 font-semibold">Verifier Verification Flow</h4>
					<ul class="text-text-secondary list-disc space-y-1 pl-6">
						<li>Verify proof using issuer public key + public inputs</li>
						<li>Return Accepted/Rejected and log basic non-PII debug info</li>
					</ul>
				</div>
			</div>
		</div>

		<div>
			<h3 class="text-primary mb-3 text-xl font-semibold">
				Phase 4 (Weeks 4-6): Hardening + UI + Testing
			</h3>
			<p class="text-text-secondary mb-3">Goal: Done by April 13</p>
			<div class="space-y-4">
				<div>
					<h4 class="mb-2 font-semibold">Error Handling + Clear Rejection Reasons</h4>
					<ul class="text-text-secondary list-disc space-y-1 pl-6">
						<li><strong>Invalid:</strong> proof doesn't verify</li>
						<li><strong>Malformed:</strong> missing/wrong format</li>
						<li><strong>Revoked:</strong> credential was disabled</li>
						<li><strong>Expired:</strong> session/challenge/credential expired</li>
					</ul>
				</div>

				<div>
					<h4 class="mb-2 font-semibold">Revocation Checking</h4>
					<ul class="text-text-secondary list-disc space-y-1 pl-6">
						<li>Add revocation check during verification</li>
						<li>Demo case: revoked credential → rejected</li>
					</ul>
				</div>

				<div>
					<h4 class="mb-2 font-semibold">UI Polish for Demo Flow</h4>
					<ul class="text-text-secondary list-disc space-y-1 pl-6">
						<li>Simplify demo screens and prompts</li>
						<li>Clear "Approve/Deny" consent step</li>
						<li>Clear "Accepted/Rejected" result screen</li>
					</ul>
				</div>

				<div>
					<h4 class="mb-2 font-semibold">Testing Plan + Test Cases</h4>
					<ul class="text-text-secondary list-disc space-y-1 pl-6">
						<li>Happy path: request → approve → proof generated → verify → accepted</li>
						<li>Failure cases: replay attempt, malformed input, invalid proof, revoked/expired</li>
					</ul>
				</div>
			</div>
		</div>

		<div>
			<h3 class="text-primary mb-3 text-xl font-semibold">
				Phase 5 (Week 7-Finals): Final Checklist + Demo Prep
			</h3>
			<div class="space-y-4">
				<div>
					<h4 class="mb-2 font-semibold">Deployment/Demo Packaging + Documentation Cleanup</h4>
					<ul class="text-text-secondary list-disc space-y-1 pl-6">
						<li>Decide demo format: hosted or local run</li>
						<li>Create simple "how to run" steps</li>
						<li>Cleanup documentation to match what was built</li>
					</ul>
				</div>

				<div>
					<h4 class="mb-2 font-semibold">Final Deliverables Prep</h4>
					<ul class="text-text-secondary list-disc space-y-1 pl-6">
						<li>Finalize website/video</li>
						<li>Lock demo script + slide updates</li>
					</ul>
				</div>

				<div>
					<h4 class="mb-2 font-semibold">Final Product Demo (Finals Week)</h4>
					<ul class="text-text-secondary list-disc space-y-1 pl-6">
						<li>Final rehearsal + backup plan</li>
						<li>Deliver final demo during finals week</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</Section>

<Section title="Team Structure">
	<p class="mb-4 leading-relaxed">
		The ZeroVerify team consists of five Computer Science students working collaboratively on all
		aspects of the system:
	</p>
	<ul class="list-disc space-y-1 pl-6">
		<li>Lisa Nguyen (Computer Science)</li>
		<li>Anton Sakhanovych (Computer Science)</li>
		<li>Souleymane Sono (Computer Science)</li>
		<li>Fateha Ima (Computer Science)</li>
		<li>Simon Griemert (Computer Science)</li>
	</ul>
</Section>

<Section title="Ethics & IRB Considerations">
	<h3 class="text-primary mb-3 text-xl font-semibold">Privacy by Design</h3>
	<p class="mb-6 leading-relaxed">
		ZeroVerify is fundamentally built on privacy-preserving principles. The system is designed to
		minimize data collection, storage, and transmission at every layer. Unlike traditional identity
		verification systems that collect and retain full identity documents, ZeroVerify never persists
		raw personal identity data after credential issuance. The system stores only non-reversible
		cryptographic derivatives necessary for preventing duplicate credential issuance.
	</p>

	<h3 class="text-primary mb-3 text-xl font-semibold">Data Minimization</h3>
	<p class="mb-6 leading-relaxed">
		The core principle of ZeroVerify is data minimization at the protocol level. Users prove
		specific claims (e.g., "I am a student") without revealing any underlying personal attributes.
		Verifiers receive only a binary result: valid or invalid. This approach complies with GDPR and
		CCPA data minimization requirements and aligns with the EU's May 2024 digital identity
		regulation that explicitly requires zero-knowledge proofs.
	</p>

	<h3 class="text-primary mb-3 text-xl font-semibold">User Consent</h3>
	<p class="mb-6 leading-relaxed">
		Every verification attempt requires explicit user consent. Users review the requested proof type
		and either approve or deny before any proof is generated. The system provides clear information
		about what is being requested and what will be disclosed (in this case, only a yes/no
		confirmation of the claim, with no personal data).
	</p>

	<h3 class="text-primary mb-3 text-xl font-semibold">Security Considerations</h3>
	<p class="mb-6 leading-relaxed">
		All communications use HTTPS (TLS 1.2+). Server-side data is encrypted using AWS KMS.
		Credentials are stored locally in the user's browser and never retransmitted. Each proof is
		bound to a verifier-provided session nonce to prevent replay attacks. The system follows
		least-privilege principles for IAM roles, and all cryptographic keys are stored securely in AWS
		Secrets Manager.
	</p>

	<h3 class="text-primary mb-3 text-xl font-semibold">Responsible Disclosure</h3>
	<p class="leading-relaxed">
		ZeroVerify operates transparently with verifiers able to audit the public verification key and
		verification code. The system provides cryptographic certainty rather than relying on
		reputation. This transparency allows external security researchers and users to verify the
		system's privacy guarantees independently.
	</p>
</Section>
