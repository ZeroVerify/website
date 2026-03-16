# ZeroVerify — Developer Design Document

Version: 1.0  
Date: 3/6/26

Team: Lisa Nguyen (CS), Anton Sakhanovych (CS), Souleymane Sono (CS), Fateha Ima (CS), Simon Griemert (CS)

(CS) = Computer Science Major

---

## Project Overview

### Problem Summary

Existing identity verification systems require users to disclose entire credential documents (student IDs, driver's licenses, employment records) to prove a single attribute. This exposes unnecessary personal data.

For example, a student proving eligibility for a discount might upload a driver's license revealing their full name, birthdate, address, and photo. Verification services only need a single fact such as **“is this person a student?”**, but current systems expose much more information.

Protocols such as SAML, OAuth, and OpenID Connect transmit full identity attribute sets instead of selective claims, which increases privacy risk when systems are breached.

### Requirements / Goals

The system supports the following functional requirements:

**Credential Issuance**

- User authenticates through a trusted Identity Provider (OAuth / OIDC)
- System validates authentication
- System creates a signed credential
- Credential is delivered to the user's wallet
- User can view credentials in the wallet

**Proof Generation**

- Verifier redirects user to ZeroVerify
- User sees requested proof type
- User approves or denies request
- System generates a zero-knowledge proof
- Proof reveals only the requested attribute

**Verification**

- Verifier sends proof request
- Verifier receives proof
- Verifier validates proof cryptographically
- Verifier receives result: valid or invalid

### System Boundaries

The following features are out of scope for the MVP:

- Multiple credentials per institution
- Credential updates
- User-defined proof types
- Native mobile applications
- Cross-device credential sync
- Offline proof generation

---

## Solution Summary

ZeroVerify is a privacy-preserving identity verification layer that integrates with existing institutional identity systems.

The system works in two phases:

**Issuance Phase**

ZeroVerify authenticates the user through the institution’s identity provider and generates a signed credential. The credential is stored locally in the user’s browser wallet.

**Verification Phase**

A verifier requests proof of an attribute (for example: “is this person a student?”). The wallet generates a zero-knowledge proof showing the claim is true without revealing any personal data.

The verifier receives only a **valid/invalid result**, not personal information.

---

## High Level Design

### System Diagram

![System Architecture](/images/system-architecture-diagram.png)

### Main Components

#### Browser Wallet

Stores credentials locally and generates zero-knowledge proofs.

#### Keycloak

Acts as an identity broker between institutional identity providers and ZeroVerify.

#### Issuance Lambda

Creates signed credentials after authentication.

#### DynamoDB

Stores credential metadata and revocation indexes.

#### S3

Stores circuits and revocation bitstrings.

#### API Gateway

Provides secure API endpoints for credential issuance and revocation.

---

## Development Plan

### Testing Plan

Testing includes two categories:

**Unit Tests**

- Validate cryptographic functions
- Validate credential creation
- Validate proof generation
- Validate revocation logic

**Integration Tests**

- Credential issuance flow
- Proof generation and verification
- Revocation flow
- Replay attack prevention

---

## Future Improvements

Possible improvements include:

- Mobile applications
- Cross-device credential syncing
- Offline proof generation
- Verifier reputation system
- Additional proof types
