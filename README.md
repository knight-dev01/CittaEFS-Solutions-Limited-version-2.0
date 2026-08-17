# CittaSL (Citta Software Limited) — Enterprise Software Ecosystem

[![Regulatory Compliance](https://img.shields.io/badge/Tax%20Compliance-NRS%20Pre--Clearance%20Ready-2582ff?style=flat-square)](#statutory-tax-compliance--cittaefs)
[![Data Privacy Seal](https://img.shields.io/badge/NDPA%202023-Audited%20%26%20Compliant-emerald?style=flat-square)](#security--data-privacy)
[![SMTP Gateway](https://img.shields.io/badge/Email%20Gateway-QServers%20SMTP%20Active-orange?style=flat-square)](#enterprise-email-functionality--qservers-smtp)
[![Deployment Ready](https://img.shields.io/badge/Deployment-Vercel%20%7C%20Node%20Server-purple?style=flat-square)](#deployment--production-readiness)

> **Citta Software Limited (CSL)** is a premier enterprise software architect operating under the **CittaNuvola** technology umbrella. CSL delivers mission-critical enterprise resource planning (ERP), advanced interactive schedulers, property management engines (PMS), high-throughput API mesh routers, and automated regulatory fiscal compliance infrastructure.

---

## 📑 Table of Contents
- [Executive Overview](#-executive-overview)
- [Implemented Features & Capabilities](#-implemented-features--capabilities)
  - [1. Core Enterprise Products](#1-core-enterprise-products)
  - [2. Interactive EFS Compliance Sandbox](#2-interactive-efs-compliance-sandbox)
  - [3. Enterprise Email Functionality (QServers SMTP)](#3-enterprise-email-functionality-qservers-smtp)
  - [4. Production Deployment & Vercel Serverless Ready](#4-production-deployment--vercel-serverless-ready)
  - [5. Visual Identity, Custom Favicon & Branding](#5-visual-identity-custom-favicon--branding)
  - [6. SEO, Structured Data & AI Search Optimization](#6-seo-structured-data--ai-search-optimization)
- [System Architecture](#-system-architecture)
- [Technology Stack](#-technology-stack)
- [Environment Configuration](#-environment-configuration)
- [Local Development & Build Scripts](#-local-development--build-scripts)
- [Corporate Profile & Support](#-corporate-profile--support)

---

## 🏛️ Executive Overview

Modern enterprises face immense friction when connecting complex day-to-day operations with statutory taxation mandates, legacy database silos, and distributed supply chains. CSL solves this by delivering an integrated, high-availability suite of software engines that run standalone or seamlessly overlay existing legacy infrastructure (SAP, Oracle, Microsoft Dynamics, Odoo) without operational downtime.

---

## 🚀 Implemented Features & Capabilities

### 1. Core Enterprise Products

* **⚡ CittaEFS (Electronic Fiscal System & Compliance Middleware)**
  * **Real-Time Pre-Clearance:** Bridges enterprise billing directly to the **National Revenue Service (NRS)** fiscalization APIs.
  * **Cryptographic Payload Signing:** Signs invoice records using standard SHA-256 / private key encryption at sub-second speeds.
  * **Math & Rounding Shield:** Automated validation engine that eliminates decimal precision errors before submission.
  * **7-Year Immutable Compliance Vault:** Encrypted, tamper-proof audit trails ensuring complete statutory audit-readiness.

* **⚙️ CittaMatrix (Enterprise ERP & Unified Ledger)**
  * **Financial Engine:** Multi-currency general ledger, automated reconciliation, bank feeds, and statutory financial reporting.
  * **Supply Chain & Inventory:** Multi-warehouse inventory tracking, procurement workflows, goods receipts, and vendor management.
  * **Asset Life Cycle:** Automated depreciation calculation, asset tagging, and maintenance logging.

* **🏨 CittaHospitalityX (PMS & Guest Experience Orchestration)**
  * **Property Management Core:** End-to-end reservation management for luxury hotels, multi-property resorts, and boutique lodges.
  * **Guest Journey Automation:** Mobile check-in, keyless room entry coordination, and guest profile history.
  * **Housekeeping & Folios:** Algorithmic room assignment, automated turnover schedules, and multi-point folio billing.

* **📅 CittaPlannerX (Resource Scheduling & Timeline Canvas)**
  * **Interactive Gantt Scheduler:** Canvas with drag-and-drop task rescheduling, dependency links, and milestone tracking.
  * **Resource Workload Leveling:** Prevents personnel and equipment bottlenecks across concurrent industrial projects.
  * **Critical Path Engine:** Dynamically recalculates project timelines on scope or shift modifications.

* **🔗 CittaNexus (API Gateway & Webhook Mesh)**
  * **Sub-Millisecond Message Router:** Manages all microservice events and bidirectional ERP data synchronization.
  * **Resilience Protocols:** Automated exponential backoff retry mechanisms, dead-letter queues, and circuit breaker patterns.

---

### 2. Interactive EFS Compliance Sandbox

* **Live Simulation Engine:** Allows technical directors and compliance officers to test real-world invoice fiscalization directly within the web app.
* **Payload Generator & JSON Inspector:** Generates raw and cryptographically signed payload structures matching NRS pre-clearance specifications.
* **Status Telemetry:** Visual indicators for QR validation codes, digital signature verification, and timestamp handshakes.

---

### 3. Enterprise Email Functionality (QServers SMTP)

* **Direct QServers / cPanel Relay:**
  * Uses `nodemailer` to dispatch corporate inquiries via **QServers Secure SSL/TLS** (`mail.cittanuvola.com:465`).
  * Sends verified incoming requests directly to **`cittasl@cittanuvola.com`**.
* **Enterprise HTML & Plaintext Templates:**
  * Formats submissions into styled corporate email reports containing inquirer details, organisation name, phone/WhatsApp, job title, area of interest, and full request specifications.
  * Dynamically populates `Reply-To` headers so responses go straight to the client's corporate inbox.
* **Resilient Dual-Path Dispatch:**
  * Automatically attempts secure backend SMTP transmission first.
  * Provides a zero-downtime client-side fallback with 1-click **"Copy Summary"** clipboard tools and pre-formatted mail launchers if SMTP credentials are being configured.

---

### 4. Production Deployment & Vercel Serverless Ready

* **Dual Runtime Compatibility:**
  * **Vercel Serverless Function (`/api/contact.ts`):** Native Vercel serverless handler with CORS management and JSON body parsing.
  * **Full-Stack Express Gateway (`server.ts`):** High-performance Express server bundled with `esbuild` for Docker containers, Cloud Run, or custom VPS instances.
* **Vercel Routing (`vercel.json`):** Pre-configured rewrite rules routing `/api/*` to serverless handlers and all other routes to the Single-Page Application (SPA) bundle.

---

### 5. Visual Identity, Custom Favicon & Branding

* **Official CSL Brand Integration:**
  * Integrated the official CSL logo (`src/logo.png`) across all application viewports.
* **Multi-Platform Favicon Specification:**
  * Synchronized `/src/logo.png`, `public/logo.png`, `public/favicon.ico`, `public/favicon.png`, and `public/apple-touch-icon.png`.
  * Configured active React lifecycle hooks to dynamic-bind the tab favicon in modern browsers, eliminating stale browser cache issues.

---

### 6. SEO, Structured Data & AI Search Optimization

* **Search Engine Meta & Social Sharing:**
  * OpenGraph and Twitter Cards pre-configured with canonical domain `https://www.cittasl.com`.
* **JSON-LD Structured Data Schema:**
  * Rich schema types for `Organization`, `SoftwareApplication` (CittaEFS, CittaMatrix, CittaHospitalityX), and `WebSite`.
* **AI Agent & LLM Manifests:**
  * `llms.txt` and `llms-full.txt` files placed in `/public` for LLM search indexing and AI crawler comprehension.
  * Complete `robots.txt` and `sitemap.xml`.

---

## 🛠️ System Architecture

```
                               ┌──────────────────────────────────────────────┐
                               │        CSL Enterprise Web Platform           │
                               │           (React 18 + TypeScript)            │
                               └──────────────────────┬───────────────────────┘
                                                      │
                       ┌──────────────────────────────┴──────────────────────────────┐
                       ▼                                                             ▼
         ┌───────────────────────────┐                                 ┌───────────────────────────┐
         │     Vercel Serverless     │                                 │     Full-Stack Express    │
         │     (/api/contact.ts)     │                                 │        (server.ts)        │
         └─────────────┬─────────────┘                                 └─────────────┬─────────────┘
                       │                                                             │
                       └──────────────────────────────┬──────────────────────────────┘
                                                      │  Secure SMTP (SSL / Port 465)
                                                      ▼
                                       ┌─────────────────────────────┐
                                       │     QServers Mail Gateway   │
                                       │   (mail.cittanuvola.com)    │
                                       └──────────────┬──────────────┘
                                                      │
                                                      ▼
                                       ┌─────────────────────────────┐
                                       │   cittasl@cittanuvola.com   │
                                       │      (Corporate Inbox)      │
                                       └─────────────────────────────┘
```

---

## 💻 Technology Stack

* **Frontend Framework:** React 18+ with strict TypeScript
* **Build Tooling:** Vite & esbuild
* **Styling Framework:** Tailwind CSS
* **Animations:** Framer Motion (`motion/react`)
* **Icons:** Lucide React (`lucide-react`)
* **Email Engine:** Nodemailer with QServers Secure SSL/TLS
* **Server Runtimes:** Express.js & Vercel Serverless Functions

---

## 🔐 Environment Configuration

Create a `.env` file in the project root or configure your production environment variables (e.g. in Vercel or Cloud Run settings):

```env
# Server Application URL
APP_URL="https://www.cittasl.com"

# QServers SMTP Mail Configuration
SMTP_HOST="mail.cittanuvola.com"
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER="cittasl@cittanuvola.com"
SMTP_PASS="YOUR_QSERVERS_EMAIL_PASSWORD"

# Recipient Address for Consultation Inquiries
CONTACT_RECIPIENT_EMAIL="cittasl@cittanuvola.com"
```

---

## 🚀 Local Development & Build Scripts

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Starts the full-stack development server on `http://localhost:3000`.

### 3. Production Build
```bash
npm run build
```
Compiles Vite client assets to `/dist` and bundles the standalone Node server to `/dist/server.cjs`.

### 4. Run Production Build
```bash
npm run start
```

### 5. Type-Checking & Linting
```bash
npm run lint
```

---

## 🏢 Corporate Profile & Support

**Citta Software Limited (CSL)**  
*Under the CittaNuvola Group*

* **Head Office:** 5, Sadiku Street, Agidingbi, Ikeja, Lagos, Nigeria.
* **Official Website:** [www.cittasl.com](https://www.cittasl.com)
* **Parent Organization:** [www.cittanuvola.com](https://www.cittanuvola.com)
* **Corporate Inquiries:** [cittasl@cittanuvola.com](mailto:cittasl@cittanuvola.com)
* **Phone / WhatsApp:** 0813–424–8104
* **Operating Hours:** Monday – Friday, 8:00 AM – 5:00 PM WAT
