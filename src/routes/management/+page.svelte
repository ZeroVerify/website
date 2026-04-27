<svelte:head>
	<title>Management - ZeroVerify</title>
</svelte:head>

<div class="management-page">
	<h1>Project Management</h1>
	<p class="subtitle">Timeline, task breakdown, and ethical considerations</p>

	<!-- Timeline -->
	<section class="section" id="timeline">
		<h2>Project Timeline</h2>
		<p class="lead">15-week development roadmap from prototyping to final demo</p>

		<div class="timeline">
			<div class="timeline-phase">
				<div class="phase-header phase-1">
					<div class="phase-number"><span>Phase 1</span></div>
					<div class="phase-info">
						<h3>Prototype Implementation</h3>
						<span class="phase-duration">Weeks 1-3</span>
					</div>
				</div>
				<div class="phase-content">
					<div class="milestone">
						<div class="milestone-icon"> </div>
						<div class="milestone-details">
							<h4>Infrastructure + Database Schema</h4>
							<p>Set up basic infrastructure, create minimal database schema, stand up issuance API skeleton endpoints</p>
							<span class="milestone-status completed">✓ Completed</span>
						</div>
					</div>
					<div class="milestone">
						<div class="milestone-icon"> </div>
						<div class="milestone-details">
							<h4>Trusted Setup</h4>
							<p>Run trusted setup to generate parameters for circuits. Deploy verification and proving keys to S3</p>
							<span class="milestone-status completed">✓ Completed</span>
						</div>
					</div>
					<div class="milestone">
						<div class="milestone-icon"> </div>
						<div class="milestone-details">
							<h4>Credential Issuance Flow</h4>
							<p>Backend generates credential and returns it to web app. Credential stored locally in browser</p>
							<span class="milestone-status completed">✓ Completed</span>
						</div>
					</div>
					<div class="milestone">
						<div class="milestone-icon"> </div>
						<div class="milestone-details">
							<h4>Replay Protection</h4>
							<p>Generate unique session challenge per verification attempt and bind it to proof</p>
							<span class="milestone-status inprogress"> In Progress</span>
						</div>
					</div>
					<div class="milestone">
						<div class="milestone-icon"> </div>
						<div class="milestone-details">
							<h4>Proof Generation + User Consent</h4>
							<p>Proof request shown in web app. User approves/denies. Generate proof for one proof type (student status)</p>
							<span class="milestone-status inprogress">  In Progress</span>
						</div>
					</div>
					<div class="milestone">
						<div class="milestone-icon"> </div>
						<div class="milestone-details">
							<h4>Verifier Verification Flow</h4>
							<p>Verify proof using issuer public key. Return Accepted/Rejected with basic debug logging</p>
							<span class="milestone-status pending">⬜ Pending</span>
						</div>
					</div>
				</div>
			</div>

			<div class="timeline-phase">
				<div class="phase-header phase-2">
					<div class="phase-number"><span>Phase 2</span></div>
					<div class="phase-info">
						<h3>Hardening + UI + Testing</h3>
						<span class="phase-duration">Weeks 4-6 (Goal: April 13)</span>
					</div>
				</div>
				<div class="phase-content">
					<div class="milestone">
						<div class="milestone-icon"> </div>
						<div class="milestone-details">
							<h4>Error Handling</h4>
							<p>Add clear rejection reasons: invalid, malformed, revoked, expired</p>
							<span class="milestone-status pending">⬜ Pending</span>
						</div>
					</div>
					<div class="milestone">
						<div class="milestone-icon"> </div>
						<div class="milestone-details">
							<h4>Revocation Checking</h4>
							<p>Add revocation check during verification. Demo case: revoked credential → rejected</p>
							<span class="milestone-status pending">⬜ Pending</span>
						</div>
					</div>
					<div class="milestone">
						<div class="milestone-icon"> </div>
						<div class="milestone-details">
							<h4>UI Polish for Demo</h4>
							<p>Simplify demo screens, clear Approve/Deny consent step, clear Accepted/Rejected result screen</p>
							<span class="milestone-status pending">⬜ Pending</span>
						</div>
					</div>
					<div class="milestone">
						<div class="milestone-icon"> </div>
						<div class="milestone-details">
							<h4>Testing Plan</h4>
							<p>Happy path, replay attempt, malformed input, invalid proof, revoked/expired credentials</p>
							<span class="milestone-status pending">⬜ Pending</span>
						</div>
					</div>
				</div>
			</div>

			<div class="timeline-phase">
				<div class="phase-header phase-3">
					<div class="phase-number"><span>Phase 3</span></div>
					<div class="phase-info">
						<h3>Final Checklist + Demo Prep</h3>
						<span class="phase-duration">Week 7-Finals</span>
					</div>
				</div>
				<div class="phase-content">
					<div class="milestone">
						<div class="milestone-icon"> </div>
						<div class="milestone-details">
							<h4>Deployment/Demo Packaging</h4>
							<p>Decide demo format (hosted or local). Create simple "how to run" steps</p>
							<span class="milestone-status pending">⬜ Pending</span>
						</div>
					</div>
					<div class="milestone">
						<div class="milestone-icon"> </div>
						<div class="milestone-details">
							<h4>Documentation Cleanup</h4>
							<p>Update documentation to match actual implementation</p>
							<span class="milestone-status pending">⬜ Pending</span>
						</div>
					</div>
					<div class="milestone">
						<div class="milestone-icon"> </div>
						<div class="milestone-details">
							<h4>Final Deliverables</h4>
							<p>Finalize website/video. Lock demo script and slide updates</p>
							<span class="milestone-status pending">⬜ Pending</span>
						</div>
					</div>
					<div class="milestone">
						<div class="milestone-icon"> </div>
						<div class="milestone-details">
							<h4>Final Product Demo</h4>
							<p>Final rehearsal with backup plan. Deliver demo during finals week</p>
							<span class="milestone-status pending">⬜ Pending</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Task Breakdown -->
	<section class="section">
		<h2>Sprint Task Breakdown</h2>
		<p class="lead">Current sprint priorities and team assignments</p>

		<div class="sprint-grid">
			<div class="sprint-card">
				<h3>Current Sprint (Week 6)</h3>
				<div class="task-list">
					<div class="task">
						<input type="checkbox" checked />
						<span>Complete proof generation UI with consent screen</span>
					</div>
					<div class="task">
						<input type="checkbox" checked />
						<span>Implement session nonce binding for replay protection</span>
					</div>
					<div class="task">
						<input type="checkbox" />
						<span>Add error handling for all failure modes</span>
					</div>
					<div class="task">
						<input type="checkbox" />
						<span>Test revocation flow end-to-end</span>
					</div>
					<div class="task">
						<input type="checkbox" />
						<span>Write integration tests for happy path</span>
					</div>
				</div>
			</div>

			<div class="sprint-card">
				<h3>Next Sprint (Week 7)</h3>
				<div class="task-list">
					<div class="task">
						<input type="checkbox" />
						<span>UI polish and responsive design improvements</span>
					</div>
					<div class="task">
						<input type="checkbox" />
						<span>Performance testing and optimization</span>
					</div>
					<div class="task">
						<input type="checkbox" />
						<span>Security audit and penetration testing</span>
					</div>
					<div class="task">
						<input type="checkbox" />
						<span>Documentation finalization</span>
					</div>
					<div class="task">
						<input type="checkbox" />
						<span>Demo script preparation</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Ethics Statement -->
	<section class="section" id="ethics">
		<h2>Ethics & Governance</h2>

		<div class="ethics-card">
			<h3>Privacy & Data Minimization</h3>
			<p>
				ZeroVerify is built on the principle that <strong>users should never surrender more data than
				absolutely necessary</strong>. Current identity verification systems create centralized honeypots
				of personal information that become targets for breaches. Our zero-knowledge architecture ensures
				that verifiers learn only the minimum required information (a boolean yes/no answer) without ever
				seeing the underlying personal data.
			</p>
			<div class="ethics-principles">
				<div class="principle">
					<h4>Data Minimization</h4>
					<p>We collect only what's needed for issuance and store no raw PII after credential delivery. The credential stays on the user's device.</p>
				</div>
				<div class="principle">
					<h4>User Consent</h4>
					<p>Every proof generation requires explicit user approval. Users see exactly what attribute is being verified and can deny the request.</p>
				</div>
				<div class="principle">
					<h4>Transparency</h4>
					<p>All cryptographic operations are open-source and auditable. Verification keys and revocation lists are publicly accessible.</p>
				</div>
			</div>
		</div>

		<div class="ethics-card">
			<h3>Regulatory Compliance</h3>
			<p>
				ZeroVerify is compliant by design with major privacy regulations:
			</p>
			<ul>
				<li><strong>GDPR (General Data Protection Regulation):</strong> Article 5(1)(c) requires data minimization. We satisfy this at the protocol level, not through organizational policy.</li>
				<li><strong>CCPA (California Consumer Privacy Act):</strong> Requires businesses to collect only necessary personal information. ZeroVerify reduces data collection to cryptographic proofs.</li>
				<li><strong>EU Digital Identity Regulation (May 2024):</strong> Explicitly requires zero-knowledge proofs for identity verification, validating our technical approach.</li>
			</ul>
		</div>

		<div class="ethics-card">
			<h3>Ethical Considerations</h3>
			<div class="consideration">
				<h4> Balancing Privacy vs. Accountability</h4>
				<p>
					While zero-knowledge proofs maximize user privacy, they could theoretically be used to obscure
					fraudulent activity. Our mitigation: credential revocation mechanisms ensure that compromised
					or fraudulent credentials can be invalidated by issuers.
				</p>
			</div>
			<div class="consideration">
				<h4> Digital Divide</h4>
				<p>
					Browser-based cryptography requires modern devices with sufficient compute power. Older devices
					or slow internet connections may struggle with proof generation (2-5 seconds). We acknowledge
					this accessibility limitation and are exploring optimizations to reduce computation requirements.
				</p>
			</div>
			<div class="consideration">
				<h4> Trust in Cryptography</h4>
				<p>
					Zero-knowledge proofs require a trusted setup ceremony. If the setup is compromised, the entire
					system's security is at risk. We mitigate this through multi-party computation (MPC) ceremonies
					with public transcripts, making it extremely difficult for any single party to compromise the setup.
				</p>
			</div>
		</div>

		<div class="ethics-card irb-section">
			<h3>IRB/CITI Status</h3>
			<p class="irb-status">
				<strong>Status:</strong> Not Applicable (N/A)
			</p>
			<p>
				This project does not involve human subjects research as defined by IRB guidelines. ZeroVerify
				is a technical implementation project focused on cryptographic protocols and software engineering.
				Any usability testing conducted will use team members as participants and will not collect or
				publish personally identifiable information.
			</p>
			<p>
				If future deployment involves collecting user feedback or behavioral data from external users,
				we will submit an IRB application before proceeding.
			</p>
		</div>
	</section>

	<!-- Risk Management -->
	<section class="section">
		<h2>Risk Management</h2>

		<div class="risk-grid">
			<div class="risk-card high">
				<div class="risk-header">
					<span class="risk-level">High Risk</span>
					<h4>Cryptographic Complexity</h4>
				</div>
				<p><strong>Risk:</strong> ZK-SNARKs and BBS+ signatures are complex cryptographic primitives. Implementation errors could compromise security.</p>
				<p><strong>Mitigation:</strong> Use established libraries (snarkjs, BBS+ Rust crates). Extensive testing and security audits before production deployment.</p>
			</div>

			<div class="risk-card medium">
				<div class="risk-header">
					<span class="risk-level">Medium Risk</span>
					<h4>Browser Performance</h4>
				</div>
				<p><strong>Risk:</strong> Client-side proof generation may take too long on older devices, degrading user experience.</p>
				<p><strong>Mitigation:</strong> Optimize circuits for minimal computation. Provide loading indicators and clear expectations (2-5 second wait).</p>
			</div>

			<div class="risk-card medium">
				<div class="risk-header">
					<span class="risk-level">Medium Risk</span>
					<h4>IdP Integration Variability</h4>
				</div>
				<p><strong>Risk:</strong> Universities use different OAuth/SAML implementations with varying standards compliance.</p>
				<p><strong>Mitigation:</strong> Keycloak acts as normalization layer. Extensive testing with multiple IdP configurations.</p>
			</div>

			<div class="risk-card low">
				<div class="risk-header">
					<span class="risk-level">Low Risk</span>
					<h4>Adoption Barriers</h4>
				</div>
				<p><strong>Risk:</strong> Merchants may be hesitant to adopt new verification technology without proven track record.</p>
				<p><strong>Mitigation:</strong> Pilot programs with privacy-conscious brands. Clear documentation and easy integration (two-line SDK).</p>
			</div>
		</div>
	</section>
</div>

<style>
	.management-page {
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

	/* Timeline */
	.timeline {
		margin-top: 2rem;
	}

	.timeline-phase {
		margin-bottom: 3rem;
	}

	.phase-header {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		padding: 1.5rem;
		border-radius: 8px;
		margin-bottom: 1.5rem;
	}

	.phase-header.phase-1 {
		background: linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(0, 212, 255, 0.05));
		border: 1px solid #00d4ff;
	}

	.phase-header.phase-2 {
		background: linear-gradient(135deg, rgba(157, 78, 221, 0.2), rgba(157, 78, 221, 0.05));
		border: 1px solid #9d4edd;
	}

	.phase-header.phase-3 {
		background: linear-gradient(135deg, rgba(139, 148, 158, 0.2), rgba(139, 148, 158, 0.05));
		border: 1px solid #8b949e;
	}

	.phase-number {
		width: 80px;
		height: 80px;
		background: linear-gradient(135deg, #00d4ff 0%, #9d4edd 100%);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1rem;
		font-weight: 700;
		color: #fff;
		flex-shrink: 0;
		-webkit-text-fill-color: #fff;
	}

	.phase-number span {
		color: #fff;
		background: none !important;
		-webkit-background-clip: unset !important;
		-webkit-text-fill-color: #fff !important;
		background-clip: unset !important;
	}

	.phase-info h3 {
		font-size: 1.5rem;
		margin-bottom: 0.25rem;
		background: none !important;
		-webkit-background-clip: unset !important;
		-webkit-text-fill-color: unset !important;
		background-clip: unset !important;
		color: #c9d1d9;
	}

	.phase-duration {
		color: #8b949e;
		font-size: 0.95rem;
	}

	.phase-content {
		padding-left: 2rem;
	}

	.milestone {
		display: flex;
		gap: 1.25rem;
		padding: 1.25rem;
		background-color: #161b22;
		border: 1px solid #30363d;
		border-radius: 8px;
		margin-bottom: 1rem;
	}

	.milestone-icon {
		font-size: 2rem;
		width: 50px;
		flex-shrink: 0;
	}

	.milestone-details h4 {
		font-size: 1.1rem;
		margin-bottom: 0.5rem;
		color: #c9d1d9;
	}

	.milestone-details p {
		color: #8b949e;
		line-height: 1.6;
		margin-bottom: 0.75rem;
	}

	.milestone-status {
		display: inline-block;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
		font-weight: 600;
	}

	.milestone-status.completed {
		background-color: rgba(63, 185, 80, 0.2);
		color: #3fb950;
	}

	.milestone-status.inprogress {
		background-color: rgba(210, 153, 34, 0.2);
		color: #d29922;
	}

	.milestone-status.pending {
		background-color: rgba(139, 148, 158, 0.2);
		color: #8b949e;
	}

	/* Sprint Grid */
	.sprint-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.sprint-card {
		background-color: #161b22;
		border: 1px solid #30363d;
		border-radius: 8px;
		padding: 1.5rem;
	}

	.sprint-card h3 {
		font-size: 1.25rem;
		margin-bottom: 1.5rem;
		color: #00d4ff;
	}

	.task-list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.task {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.75rem;
		background-color: #0d1117;
		border: 1px solid #30363d;
		border-radius: 6px;
	}

	.task input[type="checkbox"] {
		width: 18px;
		height: 18px;
		flex-shrink: 0;
	}

	.task span {
		color: #8b949e;
		line-height: 1.5;
	}

	/* Ethics Cards */
	.ethics-card {
		background-color: #161b22;
		border: 1px solid #30363d;
		border-radius: 12px;
		padding: 2rem;
		margin-bottom: 2rem;
	}

	.ethics-card h3 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		color: #00d4ff;
	}

	.ethics-card p {
		color: #8b949e;
		line-height: 1.7;
		margin-bottom: 1rem;
	}

	.ethics-card ul {
		list-style: none;
		padding: 0;
	}

	.ethics-card li {
		padding: 0.75rem 0 0.75rem 1.5rem;
		color: #8b949e;
		line-height: 1.6;
		position: relative;
		border-bottom: 1px solid #21262d;
	}

	.ethics-card li:last-child {
		border-bottom: none;
	}

	.ethics-card li::before {
		content: '▸';
		position: absolute;
		left: 0;
		color: #00d4ff;
	}

	.ethics-card strong {
		color: #c9d1d9;
	}

	.ethics-principles {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
		margin-top: 1.5rem;
	}

	.principle {
		background-color: #0d1117;
		border: 1px solid #30363d;
		border-radius: 8px;
		padding: 1.25rem;
	}

	.principle h4 {
		font-size: 1rem;
		margin-bottom: 0.75rem;
		color: #9d4edd;
	}

	.principle p {
		color: #8b949e;
		font-size: 0.95rem;
		line-height: 1.6;
		margin: 0;
	}

	.consideration {
		background-color: #0d1117;
		border: 1px solid #30363d;
		border-radius: 8px;
		padding: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.consideration h4 {
		font-size: 1.1rem;
		margin-bottom: 0.75rem;
		color: #c9d1d9;
	}

	.consideration p {
		margin: 0;
	}

	.irb-section {
		border: 2px solid #9d4edd;
	}

	.irb-status {
		font-size: 1.1rem;
		color: #c9d1d9;
		background-color: #0d1117;
		padding: 1rem;
		border-radius: 6px;
		margin-bottom: 1.5rem;
	}

	/* Risk Grid */
	.risk-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.risk-card {
		border-radius: 8px;
		padding: 1.5rem;
	}

	.risk-card.high {
		background-color: rgba(248, 81, 73, 0.1);
		border: 2px solid #f85149;
	}

	.risk-card.medium {
		background-color: rgba(210, 153, 34, 0.1);
		border: 2px solid #d29922;
	}

	.risk-card.low {
		background-color: rgba(63, 185, 80, 0.1);
		border: 2px solid #3fb950;
	}

	.risk-header {
		margin-bottom: 1rem;
	}

	.risk-level {
		display: inline-block;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
		font-weight: 700;
		margin-bottom: 0.75rem;
	}

	.risk-card.high .risk-level {
		background-color: #f85149;
		color: #fff;
	}

	.risk-card.medium .risk-level {
		background-color: #d29922;
		color: #fff;
	}

	.risk-card.low .risk-level {
		background-color: #3fb950;
		color: #fff;
	}

	.risk-header h4 {
		font-size: 1.1rem;
		margin: 0;
		color: #c9d1d9;
	}

	.risk-card p {
		color: #8b949e;
		line-height: 1.6;
		margin-bottom: 0.75rem;
		font-size: 0.95rem;
	}

	.risk-card p:last-child {
		margin-bottom: 0;
	}
</style>
