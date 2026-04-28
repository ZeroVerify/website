<script lang="ts">
	import { resolve } from '$app/paths';
	import Hero from '$lib/components/Hero.svelte';
	import Button from '$lib/components/Button.svelte';
	import Section from '$lib/components/Section.svelte';
	import Card from '$lib/components/Card.svelte';
</script>

<svelte:head>
	<title>ZeroVerify - Privacy-Preserving Credential Verification</title>
</svelte:head>

<Hero
	title="Securing Credentials Without Exposing Identity"
	subtitle="A Privacy-Preserving Verification System Using Zero-Knowledge Proofs"
	imageSrc="/images/LOGO.png"
	imageAlt="ZeroVerify System"
>
	<Button href={resolve('/requirements')} variant="primary">View Requirements</Button>
	<Button href="https://github.com/ZeroVerify" target="_blank" variant="secondary">
		GitHub Repository
	</Button>
</Hero>

<Section title="The Problem" bordered={false}>
	<p class="text-lg leading-relaxed">
		Over <strong>17 billion personal records</strong> were compromised in 2023 alone. Current identity
		verification systems (SAML, OAuth, OpenID Connect) require transmitting full identity attribute sets
		to verify simple claims. To confirm "Is this person a student?", systems expose names, birthdates,
		addresses, and more. This structural mismatch between what verifiers need and what protocols deliver
		creates unnecessary privacy risks and data breach exposure.
	</p>
</Section>

<Section title="Our Solution">
	<p class="text-lg leading-relaxed">
		ZeroVerify uses <strong>zero-knowledge proofs</strong> to enable credential verification without data
		disclosure. Users authenticate with their institution via OAuth, receive a cryptographically signed
		credential stored in their browser wallet, and generate mathematical proofs for verification. Merchants
		receive only the proof confirming the claim (e.g., "this person is a student") without seeing any
		personal information—no names, universities, or dates.
	</p>
</Section>

<Section title="">
	<div class="flex flex-wrap justify-center gap-8">
		<Card title="Privacy-First" centered class="w-full max-w-[280px]">
			<p class="text-text-secondary">
				Zero-knowledge proofs ensure no personal data is ever disclosed during verification
			</p>
		</Card>
		<Card title="Browser-Based" centered class="w-full max-w-[280px]">
			<p class="text-text-secondary">
				Credentials stored locally in browser wallet with client-side proof generation
			</p>
		</Card>
		<Card title="Standards-Based" centered class="w-full max-w-[280px]">
			<p class="text-text-secondary">
				Built on W3C Verifiable Credentials 2.0 and OAuth/OIDC integration
			</p>
		</Card>
	</div>
</Section>

<Section title="System Architecture">
	<div class="text-center">
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
</Section>

<Section title="Team">
	<div class="flex flex-wrap justify-center gap-6">
		<Card class="w-full max-w-[220px]">
			<h3 class="mb-1 font-semibold">Lisa Nguyen</h3>
			<p class="text-text-secondary text-sm">Computer Science</p>
		</Card>
		<Card class="w-full max-w-[220px]">
			<h3 class="mb-1 font-semibold">Anton Sakhanovych</h3>
			<p class="text-text-secondary text-sm">Computer Science</p>
		</Card>
		<Card class="w-full max-w-[220px]">
			<h3 class="mb-1 font-semibold">Souleymane Sono</h3>
			<p class="text-text-secondary text-sm">Computer Science</p>
		</Card>
		<Card class="w-full max-w-[220px]">
			<h3 class="mb-1 font-semibold">Fateha Ima</h3>
			<p class="text-text-secondary text-sm">Computer Science</p>
		</Card>
		<Card class="w-full max-w-[220px]">
			<h3 class="mb-1 font-semibold">Simon Griemert</h3>
			<p class="text-text-secondary text-sm">Computer Science</p>
		</Card>
	</div>
</Section>
