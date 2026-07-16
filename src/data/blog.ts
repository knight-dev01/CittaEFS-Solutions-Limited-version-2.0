import { BlogPost, FAQItem } from '../types';

export const COMPLIANCE_FAQ: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'compliance',
    question: 'What is the NRS Electronic Invoicing Mandate?',
    answer: 'The Nigerian Tax Administration Act (NTAA) Section 23 mandates electronic fiscalisation for all businesses operating in Nigeria. Under this regulation, all tax-registered businesses must transmit transaction-level invoice data directly to the National Revenue Service (NRS) via the Merchant-Buyer Solution (MBS) for real-time validation, cryptographic signing, and QR code stamping. Manual or non-validated invoices are no longer legally recognized, and non-compliance leads to input VAT denials and financial penalties.'
  },
  {
    id: 'faq-2',
    category: 'general',
    question: 'Who needs to deploy CittaEFS?',
    answer: 'CittaEFS is designed for medium-to-large enterprise organisations, finance teams, and auditors running ERP systems (such as SAP, Oracle, Microsoft Dynamics, Odoo, custom ERPs) or accounting platforms. Any business required to issue VAT-compliant invoices in Nigeria needs an intelligent middleware like CittaEFS to translate business transactions into the complex cryptographic schema required by the NRS.'
  },
  {
    id: 'faq-3',
    category: 'integration',
    question: 'Can CittaEFS connect with legacy or custom ERP systems?',
    answer: 'Yes. CittaEFS acts as an intelligent abstraction middleware. It provides standard REST APIs, secure SFTP folders for file-based exchanges (JSON/XML/CSV), and a Universal Excel Import interface for organizations without direct API accessibility. Your legacy ERP does not need to be overhauled or rebuilt—CittaEFS maps your existing fields to the required compliance schema seamlessly.'
  },
  {
    id: 'faq-4',
    category: 'technical',
    question: 'What is the typical deployment timeline for CittaEFS?',
    answer: 'A standard integration takes between 5 to 10 business days. This includes onboarding (profile establishment and TIN validation), data mapping of invoice fields, staging tests against the NRS Test Environment, and production activation with our accredited Access Point Partner (APP) keys.'
  },
  {
    id: 'faq-5',
    category: 'compliance',
    question: 'What is an Accredited Partner (APP) and why is it required?',
    answer: 'An Accredited Partner (APP) is a licensed gateway operator authorized by the NRS to manage secure transmission channels and cryptographic signing of invoices. While CittaEFS acts as your internal intelligent brain (managing tax computation, validation rules, audit archiving, and system connectivity), we orchestrate the final clearance securely through integrated APP channels, guaranteeing compliant handshakes with the state servers.'
  },
  {
    id: 'faq-6',
    category: 'technical',
    question: 'How secure is CittaEFS with corporate financial data?',
    answer: 'Security is at our core. CittaEFS uses military-grade AES-256 encryption at rest and TLS 1.3 for data transmission. The platform is fully compliant with the Nigerian Data Protection Act (NDPA) 2023. Additionally, it maintains a 7-year immutable ledger-based audit trail of all invoices, credit notes, cancellations, and state-returned tokens for direct audit readiness.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    category: 'NRS Compliance',
    title: 'Understanding Section 23 of the NTAA: The Electronic Fiscalisation Shift',
    date: 'July 10, 2026',
    author: 'Chief Regulatory Officer, CSL',
    readTime: '6 min read',
    summary: 'An executive breakdown of the legal framework mandating digital validation of invoices, input VAT deductions rules, and what CFOs must prepare for.',
    content: `The landscape of tax administration in Nigeria is undergoing its most profound transformation with the implementation of the National Tax Administration Act (NTAA) Section 23. This legislation marks a structural shift from ex-post auditing to real-time transaction-level clearance. 

Historically, companies generated invoices in their local ERP systems and filed summary returns at the end of the month. This legacy approach is being retired. The state's new Merchant-Buyer Solution (MBS) demands that every invoice, debit note, and credit note undergo cryptographic validation at the exact moment of sale.

### Why Connectivity is Not Enough
Many IT managers mistakenly assume that simply opening an API port to the government fulfills compliance. In reality, sending invalid data—such as incorrect Taxpayer Identification Numbers (TIN), invalid tax codes, or mathematical rounding discrepancies—results in immediate invoice rejection. An invoice rejected by the state cannot be cleared, meaning the customer cannot claim Input VAT deduction. This directly disrupts business operations and damages B2B client relationships.

CittaEFS acts as the "Validation Shield", screening, calculating, and correcting transaction parameters on your side of the firewall before they ever touch the regulatory validation servers.`
  },
  {
    id: 'post-2',
    category: 'Enterprise IT',
    title: 'ERP Integration Architecture for NRS Electronic Invoicing',
    date: 'June 28, 2026',
    author: 'Principal Architect, CSL',
    readTime: '8 min read',
    summary: 'A technical guide on integrating SAP, Oracle, and Microsoft Dynamics with NRS gateways without interrupting existing transactional workflows.',
    content: `Integrating enterprise ERPs with modern state API endpoints involves resolving substantial architectural differences. Modern state gateways expect JSON or XML payloads in highly specified structures, signed with localized cryptographic keys, and returned within milliseconds. Legacy systems, however, are typically tuned for batches or structured database logs.

### The Middleware Approach: CittaEFS
Rather than paying hundreds of thousands of dollars in consulting fees to modify core ERP tables in SAP, Oracle, or Microsoft Dynamics, progressive enterprises deploy **CittaEFS** as an intelligent middleware abstraction. 

This architecture provides three primary pathways:
1. **Direct API Proxying**: Core transactional modules call the local CittaEFS micro-API during the checkout workflow.
2. **Directory Monitoring (Hot-folders)**: The ERP drops native XML, JSON, or CSV invoice dumps into secure SFTP volumes, which CittaEFS monitors, parses, validates, and transmits.
3. **Database Hooking**: Safe read-only agents pool staging tables for new transactions.

By isolating the compliance logic within CittaEFS, the primary ERP experiences zero performance overhead, and updates to tax laws can be implemented within the middleware in minutes without running full ERP code deploys.`
  },
  {
    id: 'post-3',
    category: 'Tax & Audit',
    title: 'Input VAT Optimization: Protecting Your Enterprise from Compliance Audit Rejections',
    date: 'June 15, 2026',
    author: 'Auditor Partner, CSL Advisory',
    readTime: '5 min read',
    summary: 'How manual invoicing leads to input VAT denial and financial exposure, and how automatic tax validation shields corporate ledgers.',
    content: `In the modern regulatory climate, tax compliance is no longer a post-transaction accounting exercise—it is a live operating constraint. For corporate buyers, VAT compliance is a bottom-line issue. 

Under the NRS e-Invoicing guidelines, a business cannot claim Input VAT credit unless the supporting purchase invoice possesses a valid Invoice Reference Number (IRN) and a cryptographically verifiable QR code issued by an accredited partner. 

### The Cost of Error
If a supplier issues a non-compliant invoice:
- The corporate buyer loses the ability to offset their input tax.
- The transaction risks trigger-points for a comprehensive corporate tax audit.
- Financial directors are forced to hold payments, straining cash flow cycles.

CittaEFS addresses this systemic risk by providing two-way validation. It checks outgoing invoices to ensure clients receive compliant clearance codes, and it provides incoming invoice validation, allowing procurement teams to verify vendor certificates before recording receipts.`
  }
];
