# CSL (CittaERP Solutions Limited) - Enterprise Software Ecosystem

[![Regulatory Status](https://img.shields.io/badge/Regulatory-NRS%20Ready-emerald?style=flat-square)](#compliance-standards)
[![License Sec Seal](https://img.shields.io/badge/NDPA%202023-Audited-blue?style=flat-square)](#security--data-privacy)
[![Build Status](https://img.shields.io/badge/Build-Passed-success?style=flat-square)](#)

> **CittaERP Solutions Limited (CSL)** is a premier enterprise software architect. CSL unifies specialized digital solutions, advanced resource leveling, and statutory tax compliance under an enterprise-shielded secure architecture.

This repository hosts the official corporate presentation platform and interactive middleware sandbox of CSL. It showcases our specialized software family, industry vertical solutions, and an interactive Electronic Fiscal System (EFS) simulator.

---

## 🏛️ Executive Summary & Mission

CSL unifies complex business workflows into a highly secure, reliable, and integrated software ecosystem. Standardized operating models demand that modern enterprises navigate intricate statutory taxation, hospitality guest experience cycles, deep supply chain schedules, and legacy accounting systems. 

Our mission is to dissolve technical debt, eliminate structural fragmentation, and secure full compliance without disrupting active business operations.

---

## 🧱 The CSL Software Ecosystem & Core Products

Our core suite consists of highly integrated, enterprise-grade software products designed for frictionless scalability:

### ⚡ CittaEFS (Compliance & Electronic Fiscal System)
* **Pre-clearance Handshake:** Bridges legacy ERPs (SAP, Oracle, MS Dynamics, Odoo) with federal tax authorities like the **National Revenue Service (NRS)**.
* **Cryptographic Signing:** Digitally signs (SHA-256) transaction payloads in real-time under local regulation standards.
* **Error Prevention Shield:** Prevents math and decimal rounding errors that trigger regulatory API rejections.
* **7-Year Compliance Vault:** Retains fully indexed transactional history in high-availability immutable ledger archives.

### ⚙️ CittaMatrix (Core ERP & Advanced Ledger)
* **Financial Core:** Professional multi-currency accounting, comprehensive journal entries, and automated financial reporting.
* **Supply Chain Suite:** Live warehousing, stock movement tracking, automated procurement, and vendor portals.
* **API First:** Natively integrates with modern cloud systems and webhooks.

### 🏨 CittaHospitalityX (PMS & Guest Orchestration)
* **PMS Core:** Next-generation property management software for luxury hotels, resorts, and vacation properties.
* **Guest Flow:** Frictionless booking, self-service check-in kiosks, guest profiles, and digital room key orchestration.
* **Housekeeping Engines:** Algorithmic room status tracking and maintenance dispatching.

### 📅 CittaPlannerX (Interactive Scheduler & Resource Leveling)
* **Timeline Canvas:** Dynamic, interactive scheduler with drag-and-drop mechanics.
* **Resource Optimization:** Automated workload balancing, critical path analysis, and equipment leveling.
* **Operational Sync:** Integrates directly with core manufacturing, PMS, and project accounting modules.

### 🔗 CittaNexus (API & Webhook Router)
* **Routing Gateway:** Central communication hub managing all secure webhooks and microservice integrations.
* **High Availability:** Sub-millisecond latency routing with automatic circuit-breakers and retry policies.

---

## 🛠️ System Architecture

```
                       ┌────────────────────────────────────────┐
                       │      CSL Unified Parent Framework      │
                       └───────────────────┬────────────────────┘
                                           │
         ┌───────────────────┬─────────────┼─────────────┬───────────────────┐
         ▼                   ▼             ▼             ▼                   ▼
   ┌───────────┐       ┌───────────┐ ┌───────────┐ ┌───────────┐       ┌───────────┐
   │ CittaEFS  │       │CittaMatrix│ │Hospitality│ │ PlannerX  │       │CittaNexus │
   │Compliance │       │ Core ERP  │ │    PMS    │ │ Scheduler │       │ API Route │
   └─────┬─────┘       └───────────┘ └───────────┘ └───────────┘       └───────────┘
         │
         │ Secure REST API / TLS 1.3
         ▼
   ┌────────────────────────────────────────┐
   │    Accredited Access Point Partner     │
   └───────────────────┬────────────────────┘
                       │
                       ▼
   ┌────────────────────────────────────────┐
   │     National Revenue Service (NRS)     │
   └────────────────────────────────────────┘
```

---

## 💻 Tech Stack & Design Standards

The CSL corporate platform is engineered using modern, high-performance web practices:

* **Framework:** React 18+ with strict TypeScript
* **Build Engine:** Vite
* **Styling Paradigm:** Tailwind CSS utility class system
* **Animations:** Fluid, declarative transitions powered by Framer Motion (`motion/react`)
* **Icons:** Standardized SVG imports from `lucide-react`
* **Accessibility:** Generous typographic hierarchy and deep contrast values adhering to WCAG standards.

---

## 🚀 Developer Setup & Command Line Interface

### Prerequisites
* **Node.js** v18 or newer
* **npm** or **yarn** package managers

### Installation
Clone or download the project files and run dependency installation:
```bash
npm install
```

### Local Development Server
Boot the HMR-configured development server locally:
```bash
npm run dev
```
The server binds to port `3000` (mapped via nginx proxy) and will be accessible at http://localhost:3000.

### Static Production Build
Compile the application into highly compressed, optimized static assets under `/dist`:
```bash
npm run build
```

### Static Build Execution
To run the production bundle locally:
```bash
npm run start
```

### Quality Assurance & Linting
Validate type safety, syntax consistency, and formatting standards:
```bash
npm run lint
```

---

## 🔒 Security & Regulatory Foundations

* **TLS 1.3 Architecture:** All internal and external routing vectors are protected by transport-layer security protocols.
* **NDPA 2023 Audited:** All sensitive transactional databases, employee records, and client databases conform to the guidelines of the **Nigerian Data Protection Act (NDPA) 2023**.
* **ISO 27001 Prepared:** Systems are structured around strict information security management system (ISMS) controls.
* **NTAA Section 23 Compliant:** Financial ledgers are immutable and automatically mirror statutory records in complete alignment with regional tax laws.

---

## 🏢 Corporate Profile & Contact Info

**CittaERP Solutions Limited (CSL)** is a registered, licensed corporate technology firm.

* **HQ Location:** Victoria Island Corporate District, Lagos State, Nigeria.
* **Web:** [www.cittanuvola.com](http://www.cittanuvola.com)
* **Inquiries & Support:** [info@cittanuvola.com](mailto:info@cittanuvola.com) | [info1@cittanuvola.com](mailto:info1@cittanuvola.com)
* **Corporate Telephone:** +234 (1) 888-EFS9 (+234 1 888 3379)
* **SLA Target:** 99.99% system availability with 24/7 designated solutions architect support.
