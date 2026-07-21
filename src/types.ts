export type PageId = 'home' | 'about' | 'why-we-exist' | 'challenges' | 'products' | 'services' | 'industries' | 'why-choose-csl' | 'approach' | 'vision' | 'contact' | 'cittaefs' | 'solutions' | 'resources' | 'company' | 'cittamatrix' | 'cittahospitalityx' | 'cittaplannerx' | 'cittanexus' | 'testimonials' | 'faq';

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  summary: string;
  content: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'technical' | 'compliance' | 'integration';
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  date: string;
  customerName: string;
  customerTIN: string;
  amount: number;
  taxAmount: number;
  status: 'Draft' | 'Validating' | 'Validated' | 'Rejected';
  irn?: string;
  qrCodeUrl?: string;
  errors?: string[];
}

export interface SandboxInvoiceInput {
  customerName: string;
  customerTIN: string;
  amount: number;
  taxRate: number; // e.g. 7.5 for Nigeria VAT
  currency: string;
}

export interface APILog {
  timestamp: string;
  method: 'POST' | 'GET' | 'PUT';
  endpoint: string;
  status: number;
  message: string;
}
