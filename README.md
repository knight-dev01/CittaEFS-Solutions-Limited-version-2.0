# CittaEFS (Electronic Fiscal System) Middleware Platform

[![Regulatory Status](https://img.shields.io/badge/Regulatory-NRS%20Ready-emerald?style=flat-square)](#compliance-standards)
[![License Sec Seal](https://img.shields.io/badge/NDPA%202023-Audited-blue?style=flat-square)](#security--data-privacy)
[![Build Status](https://img.shields.io/badge/Build-Passed-success?style=flat-square)](#)

> Stay NRS Compliant Without Replacing Your ERP. A secure, enterprise-grade middleware platform built for modern B2B tax synchronization and automated pre-clearance.

CittaEFS is an intelligent Electronic Fiscal System (EFS) and compliant middleware platform designed and developed by **CittaERP Solutions Limited (CSL)**. It bridges the gap between sophisticated legacy ERP systems (such as SAP, Oracle, Microsoft Dynamics, Odoo, or custom databases) and federal tax authorities like the **National Revenue Service (NRS)** via accredited Access Point partners.

---

## 🏛️ Executive Summary

National Revenue Services globally are transitioning to real-time pre-clearance electronic invoicing mandates. For large enterprises, modifying core ERP ledgers directly to comply with complex, fast-changing local schemas is costly, risky, and prone to system failures.

**CittaEFS** acts as an intelligent, secure routing and translation buffer:
1. **Intercepts** transactional billing files and REST payloads from existing ERP systems.
2. **Validates** tax mathematics, rounding decimals, and mandatory parameters against the latest National Tax Administration Act guidelines.
3. **Applies** secure cryptographic digital signatures (SHA-256) under local guidelines.
4. **Acquires** a unique Invoice Reference Number (IRN) and generates a regulation-compliant high-density QR code.
5. **Transfers** verified payloads directly to the National Revenue Service (NRS).

---

## ✨ Features & Capabilities

### 🔌 Intelligent ERP Connectors
* **Enterprise ERP Adapters:** Plug-and-play integrations for SAP ERP, Oracle Financials, Microsoft Dynamics 365, Odoo, and raw SQL databases.
* **REST/JSON APIs:** Sub-second micro-transaction validation interfaces for fast, high-volume checkout counters and e-commerce baskets.
* **Bulk File Processor:** Queue and process large batches of invoices (Excel, CSV, custom XML) using asynchronous background pipelines with zero database lockups.

### 🛡️ Compliance & Core Safeguards
* **NRS pre-clearance Handshake:** Built on standard Merchant-Buyer Solution protocols.
* **SHA-256 Cryptographic Seals:** Encrypts and stamps every transactional record with non-repudiable digital certificates.
* **Auto-Rounding Shield:** Prevents math and decimal rounding errors that trigger regulatory API rejections.
* **7-Year Compliance Vault:** Holds fully indexed transactional audits and telemetry histories in high-availability immutable archives.

### 📊 Modern Interactive Interfaces
* **Real-time Live Dashboard:** Advanced monitoring UI for financial executives and ERP administrators, displaying IRNs, validation signals, status codes, and QR stamps.
* **Live Validation Sandbox:** Interactive developer sandbox where you can paste invoice JSON payloads to watch the middleware clean, validate, sign, and render compliant outputs instantly.

---

## 🧱 System Architecture

```
┌──────────────────┐      🚀 REST API / Bulk Files       ┌──────────────────────┐
│  Enterprise ERP  │ ─────────────────────────────────>  │  CittaEFS Middleware │
│  (SAP, Oracle,   │ <─────────────────────────────────  │  • Verification      │
│  Dynamics, etc.) │        IRN & QR Code Return         │  • SHA-256 Sign      │
└──────────────────┘                                     │  • Error Shield      │
                                                         └──────────────────────┘
                                                                    │
                                                                    │ Secure TLS 1.3
                                                                    ▼
┌──────────────────┐      🏛️ Federal Verification       ┌──────────────────────┐
│ National Revenue │ <─────────────────────────────────  │  Accredited Access   │
│  Service (NRS)   │ ─────────────────────────────────>  │    Point Partner     │
└──────────────────┘             IRN & QR                └──────────────────────┘
```

---

## 💻 Tech Stack & Engineering Standards

The corporate website is designed and optimized with high-performance modern web practices:

* **Framework:** React 18+ (TypeScript)
* **Build System:** Vite
* **Styling Engine:** Tailwind CSS
* **Animations:** Framer Motion (`motion/react`)
* **Component Library / Icons:** Lucide Icons
* **Hosting Ingress:** Cloud Run containers mapped on secure endpoints.

---

## 🛠️ Developer Setup & Deployment

### Prerequisites
* **Node.js** v18 or newer
* **npm** or **yarn** package managers

### Installation
Clone or navigate to the directory and install dependencies:
```bash
npm install
```

### Development Server
Spin up the local development web server:
```bash
npm run dev
```
The application will be accessible locally on port `3000` (or the default system-assigned routing address).

### Quality Verification
Run the TypeScript compiler and linter checks to guarantee strict type safety and code standards:
```bash
npm run lint
```

### Production Bundling
Compile the application into optimized static assets ready for secure Cloud CDN deployment:
```bash
npm run build
```

---

## 🔒 Security & Data Privacy

* **TLS 1.3 Encryption:** All transmission vectors are secured using industry-standard TLS 1.3 protocol.
* **NDPA 2023 Compliant:** Patient, customer, and sensitive personal identifier fields are automatically anonymized or masked prior to regulatory handshakes to adhere to the Nigerian Data Protection Act (NDPA) 2023 guidelines.
* **SAML / OIDC Single Sign-On:** Fully compatible with enterprise identity providers (Azure AD, Okta, Active Directory) for restricted Role-Based Access Control (RBAC).

---

## 🏢 Corporate Profile

**CittaEFS** is a registered proprietary system built, maintained, and backed by:

* **Company:** CittaERP Solutions Limited (CSL)
* **HQ Location:** Plot 24, Lekki Phase 1, Lagos, Nigeria
* **Support Email:** info@cittaefs.com
* **Corporate Website:** [https://cittaefs.com](https://cittaefs.com)
