import { useState, useEffect } from 'react';
import dashboardImg from '../assets/images/enterprise_dashboard_render_1783971827280.jpg';
import { 
  FileText, Play, CheckCircle2, AlertCircle, RefreshCw, Layers, Database, Code, 
  PlusCircle, Search, HelpCircle, Terminal, ClipboardCheck, ArrowRight, Download
} from 'lucide-react';
import { Invoice, SandboxInvoiceInput, APILog } from '../types';

export default function InteractiveDashboard() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'sandbox' | 'logs'>('dashboard');
  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: 'inv-1',
      invoiceNumber: 'INV-2026-042',
      date: '2026-07-13',
      customerName: 'Dangote Conglomerates',
      customerTIN: '10943288-0001',
      amount: 45000000,
      taxAmount: 3375000, // 7.5%
      status: 'Validated',
      irn: 'IRN-9430-8430-2224-5551',
      qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CittaEFS_Cleared_INV-2026-042_Dangote_48375000'
    },
    {
      id: 'inv-2',
      invoiceNumber: 'INV-2026-043',
      date: '2026-07-12',
      customerName: 'Flour Mills of Nigeria',
      customerTIN: '20493822-0002',
      amount: 18500000,
      taxAmount: 1387500,
      status: 'Validated',
      irn: 'IRN-2049-3822-9911-3042',
      qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CittaEFS_Cleared_INV-2026-043_FlourMills_19887500'
    },
    {
      id: 'inv-3',
      invoiceNumber: 'INV-2026-044',
      date: '2026-07-12',
      customerName: 'Mega Logistics Ltd',
      customerTIN: 'invalid-tin-99',
      amount: 2300000,
      taxAmount: 150000, // Rounding error (should be 172,500)
      status: 'Rejected',
      errors: [
        'Invalid Customer TIN: [invalid-tin-99] is non-numeric',
        'Tax Mismatch: Specified Tax N150,000 does not match calculated N172,500 (7.5% Standard VAT)'
      ]
    },
    {
      id: 'inv-4',
      invoiceNumber: 'INV-2026-045',
      date: '2026-07-11',
      customerName: 'Genesis Healthcare',
      customerTIN: '18493822-0001',
      amount: 7200000,
      taxAmount: 540000,
      status: 'Validated',
      irn: 'IRN-1849-3822-5522-1002',
      qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CittaEFS_Cleared_INV-2026-045_Genesis_7740000'
    }
  ]);

  const [sandboxInput, setSandboxInput] = useState<SandboxInvoiceInput>({
    customerName: 'Apex Telecom West Africa',
    customerTIN: '19034821-0001',
    amount: 1250000,
    taxRate: 7.5,
    currency: 'NGN'
  });

  const [sandboxStage, setSandboxStage] = useState<number>(0); // 0: Idle, 1: Checking TIN, 2: Math Check, 3: Cryptography, 4: Transmission, 5: Done
  const [sandboxLogs, setSandboxLogs] = useState<string[]>([]);
  const [newGeneratedInvoice, setNewGeneratedInvoice] = useState<Invoice | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [apiLogs, setApiLogs] = useState<APILog[]>([
    { timestamp: '10:04:02', method: 'POST', endpoint: '/api/v1/validate', status: 200, message: 'Invoice INV-2026-042 validated successfully.' },
    { timestamp: '10:03:45', method: 'POST', endpoint: '/api/v1/validate', status: 200, message: 'Invoice INV-2026-043 validated successfully.' },
    { timestamp: '10:01:20', method: 'POST', endpoint: '/api/v1/validate', status: 422, message: 'Validation failed for INV-2026-044. Reject payload generated.' },
  ]);

  const runSandboxValidation = () => {
    setSandboxStage(1);
    setNewGeneratedInvoice(null);
    setSandboxLogs(['[System] Initiating CittaEFS Middleware Sandbox Engine...']);
    
    setTimeout(() => {
      // Stage 1: TIN Check
      const tinRegex = /^\d+-\d+$/;
      const isTinValid = sandboxInput.customerTIN.length >= 8 && (tinRegex.test(sandboxInput.customerTIN) || /^\d+$/.test(sandboxInput.customerTIN));
      
      setSandboxStage(2);
      setSandboxLogs(prev => [
        ...prev,
        `[1/4] TIN Check: Validating Customer "${sandboxInput.customerName}" with TIN "${sandboxInput.customerTIN}"...`,
        isTinValid ? '✓ TIN check: Valid format and verified with NRS registries.' : '✕ Error: Malformed TIN format. Expected numeric sequence (e.g., 12345678-0001).'
      ]);

      setTimeout(() => {
        // Stage 2: Tax Check
        const calculatedTax = parseFloat((sandboxInput.amount * (sandboxInput.taxRate / 100)).toFixed(2));
        
        setSandboxStage(3);
        setSandboxLogs(prev => [
          ...prev,
          `[2/4] Tax Computation: checking base amount of ₦${sandboxInput.amount.toLocaleString()} at ${sandboxInput.taxRate}% VAT...`,
          `✓ Calculated VAT: ₦${calculatedTax.toLocaleString()} generated. No rounding mismatch.`,
        ]);

        setTimeout(() => {
          // Stage 3: Cryptography
          const mockIrn = `IRN-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`;
          
          setSandboxStage(4);
          setSandboxLogs(prev => [
            ...prev,
            `[3/4] Secure Cryptography: Generating localized key signatures...`,
            `✓ Applied secure SHA-256 digital envelope signature.`,
            `✓ Generated unique Invoice Reference Number: ${mockIrn}`
          ]);

          setTimeout(() => {
            // Stage 4: Transmission
            setSandboxStage(5);
            
            const isOverallSuccess = isTinValid;
            
            if (isOverallSuccess) {
              const generatedInv: Invoice = {
                id: `sandbox-${Date.now()}`,
                invoiceNumber: `INV-2026-${Math.floor(100 + Math.random() * 900)}`,
                date: new Date().toISOString().split('T')[0],
                customerName: sandboxInput.customerName,
                customerTIN: sandboxInput.customerTIN,
                amount: sandboxInput.amount,
                taxAmount: calculatedTax,
                status: 'Validated',
                irn: mockIrn,
                qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CittaEFS_Cleared_${mockIrn}_${sandboxInput.amount}`
              };

              setNewGeneratedInvoice(generatedInv);
              setInvoices(prev => [generatedInv, ...prev]);
              setApiLogs(prev => [
                {
                  timestamp: new Date().toTimeString().split(' ')[0],
                  method: 'POST',
                  endpoint: '/api/v1/validate',
                  status: 200,
                  message: `Invoice ${generatedInv.invoiceNumber} successfully pre-cleared by Middleware.`
                },
                ...prev
              ]);

              setSandboxLogs(prev => [
                ...prev,
                `[4/4] Gateway handshake completed with Accredited APP Partner.`,
                `✓ State returned code: 200 CLEARANCE APPROVED.`,
                `[System] SUCCESS: QR code embedded. Invoice added to validated ledger.`
              ]);
            } else {
              setSandboxLogs(prev => [
                ...prev,
                `[4/4] Gateway submission aborted due to critical pre-clearance validation failures.`,
                `✕ Blocked: Secure block triggered. Malformed invoice prevented from submitting to state servers (rejection avoided).`
              ]);
              setApiLogs(prev => [
                {
                  timestamp: new Date().toTimeString().split(' ')[0],
                  method: 'POST',
                  endpoint: '/api/v1/validate',
                  status: 422,
                  message: `Validation abort: Blocked submit for malformed customer parameters.`
                },
                ...prev
              ]);
            }
          }, 1000);

        }, 1000);

      }, 1000);

    }, 1000);
  };

  const filteredInvoices = invoices.filter(inv => 
    inv.customerName.toLowerCase().includes(searchQuery.toLowerCase()) || 
    inv.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    inv.customerTIN.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-12 sm:py-24 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16 gap-4 sm:gap-6">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-emerald-800 font-bold bg-emerald-100/60 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Product Screens & Simulation
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            The CittaEFS Compliance Command Center
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            Take full control of tax compliance telemetry. Preview the real validated invoice registries, audit records, and run a live interactive compliance sandbox.
          </p>
        </div>

        {/* Tab Controls with mobile scrolling safety */}
        <div className="flex justify-center mb-8 w-full overflow-x-auto scrollbar-none pb-2 px-4">
          <div className="inline-flex bg-white border border-slate-200 p-1.5 rounded-2xl shadow-sm min-w-max">
            <button
              id="dash-tab-dashboard"
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'dashboard'
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Invoice Registry</span>
            </button>
            <button
              id="dash-tab-sandbox"
              onClick={() => setActiveTab('sandbox')}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'sandbox'
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50'
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>Live Validation Sandbox</span>
            </button>
            <button
              id="dash-tab-logs"
              onClick={() => setActiveTab('logs')}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'logs'
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50'
              }`}
            >
              <Code className="w-4 h-4" />
              <span>Real-time API Logs</span>
            </button>
          </div>
        </div>

        {/* Dynamic Display Panel */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-md">
          
          {/* TAB 1: Invoice Registry Dashboard */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              
              <div className="mb-6 sm:mb-8">
                <img src={dashboardImg} alt="CittaEFS Compliance Dashboard" className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100" />
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search invoices by client, ID, or TIN..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:outline-none text-sm text-slate-800"
                  />
                </div>
                <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-mono text-slate-500">
                  <span className="flex items-center space-x-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1.5 rounded-lg text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Validated: {invoices.filter(i => i.status === 'Validated').length}</span>
                  </span>
                  <span className="flex items-center space-x-1.5 bg-red-500/10 border border-red-500/20 px-2.5 py-1.5 rounded-lg text-red-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Rejected: {invoices.filter(i => i.status === 'Rejected').length}</span>
                  </span>
                </div>
              </div>

              {/* Invoice List Table - Desktop Only */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 font-mono text-xs">
                      <th className="py-4 px-3">Invoice ID</th>
                      <th className="py-4 px-3">Customer</th>
                      <th className="py-4 px-3">Customer TIN</th>
                      <th className="py-4 px-3 text-right">Amount</th>
                      <th className="py-4 px-3 text-right">VAT (7.5%)</th>
                      <th className="py-4 px-3 text-center">Status</th>
                      <th className="py-4 px-3">Tax stamp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredInvoices.map((inv) => (
                      <tr key={inv.id} className="border-b border-slate-100 hover:bg-slate-50/50 transition-all text-slate-700">
                        <td className="py-4 px-3 font-mono text-emerald-800 font-semibold">{inv.invoiceNumber}</td>
                        <td className="py-4 px-3 font-medium text-slate-900">{inv.customerName}</td>
                        <td className="py-4 px-3 font-mono text-xs text-slate-500">{inv.customerTIN}</td>
                        <td className="py-4 px-3 text-right font-mono font-medium text-slate-900">₦{inv.amount.toLocaleString()}</td>
                        <td className="py-4 px-3 text-right font-mono text-slate-600">₦{inv.taxAmount.toLocaleString()}</td>
                        <td className="py-4 px-3 text-center">
                          <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${
                            inv.status === 'Validated'
                              ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20'
                              : 'bg-red-500/10 text-red-600 border border-red-500/20'
                          }`}>
                            {inv.status}
                          </span>
                        </td>
                        <td className="py-4 px-3">
                          {inv.irn ? (
                            <div className="flex items-center space-x-2">
                              <span className="text-[10px] font-mono text-slate-500 truncate max-w-[120px]" title={inv.irn}>
                                {inv.irn}
                              </span>
                              <div className="relative group cursor-pointer bg-white p-0.5 rounded border border-slate-200">
                                <img src={inv.qrCodeUrl} className="w-6 h-6 object-contain" referrerPolicy="no-referrer" alt="QR" />
                                <div className="absolute right-0 bottom-full mb-2 hidden group-hover:block z-20 bg-slate-900 border border-slate-700 rounded-lg p-2 w-48 shadow-xl text-white">
                                  <p className="text-[9px] text-slate-400 leading-normal">
                                    Official regulatory validation QR stamped. Click to view high-res certificate.
                                  </p>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="text-slate-500 text-xs flex flex-col">
                              <span>Blocked: data errors</span>
                              <span className="text-[9px] text-red-500 font-mono italic max-w-[180px] truncate" title={inv.errors?.join(', ')}>
                                {inv.errors?.[0]}
                              </span>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                    {filteredInvoices.length === 0 && (
                      <tr>
                        <td colSpan={7} className="py-12 text-center text-slate-500">
                          No invoicing records match your search parameter.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Invoice List Mobile Cards - Stacked Vertically */}
              <div className="block md:hidden space-y-4">
                {filteredInvoices.map((inv) => (
                  <div key={inv.id} className="bg-slate-50 rounded-2xl border border-slate-200 p-4 space-y-3 text-slate-700">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-emerald-800 font-bold">{inv.invoiceNumber}</span>
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                        inv.status === 'Validated'
                          ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20'
                          : 'bg-red-500/10 text-red-600 border border-red-500/20'
                      }`}>
                        {inv.status}
                      </span>
                    </div>
                    
                    <div className="space-y-1 text-left">
                      <div className="text-xs font-semibold text-slate-900">{inv.customerName}</div>
                      <div className="text-[10px] font-mono text-slate-500">TIN: {inv.customerTIN}</div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-150 text-xs text-left">
                      <div>
                        <span className="block text-[9px] font-mono uppercase text-slate-400">Amount</span>
                        <span className="font-mono font-semibold text-slate-900">₦{inv.amount.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="block text-[9px] font-mono uppercase text-slate-400">VAT (7.5%)</span>
                        <span className="font-mono text-slate-600">₦{inv.taxAmount.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-150 flex items-center justify-between gap-2">
                      <span className="text-[9px] font-mono text-slate-400 uppercase">Tax Stamp</span>
                      {inv.irn ? (
                        <div className="flex items-center space-x-1.5">
                          <span className="text-[10px] font-mono text-slate-500 truncate max-w-[110px]" title={inv.irn}>
                            {inv.irn}
                          </span>
                          <div className="bg-white p-0.5 rounded border border-slate-200">
                            <img src={inv.qrCodeUrl} className="w-5 h-5 object-contain" referrerPolicy="no-referrer" alt="QR" />
                          </div>
                        </div>
                      ) : (
                        <div className="text-red-500 text-[10px] font-mono italic max-w-[180px] truncate" title={inv.errors?.join(', ')}>
                          {inv.errors?.[0]}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {filteredInvoices.length === 0 && (
                  <div className="py-8 text-center text-slate-500 text-sm">
                    No invoicing records match your search parameter.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: Live Validation Sandbox */}
          {activeTab === 'sandbox' && (
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Input Form Column */}
              <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                <h4 className="font-display font-semibold text-slate-900 text-base border-b border-slate-200 pb-2">
                  Create Compliance Invoice
                </h4>
                
                <div className="space-y-3.5 text-left">
                  <div>
                    <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 font-semibold">
                      Customer/Buyer Name
                    </label>
                    <input
                      type="text"
                      value={sandboxInput.customerName}
                      onChange={(e) => setSandboxInput({ ...sandboxInput, customerName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-sm focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 flex items-center justify-between font-semibold">
                      <span>Customer TIN</span>
                      <span className="text-[10px] text-slate-400 font-normal">Format: XXXXXXXX-XXXX</span>
                    </label>
                    <input
                      type="text"
                      value={sandboxInput.customerTIN}
                      onChange={(e) => setSandboxInput({ ...sandboxInput, customerTIN: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-sm focus:border-emerald-500 focus:outline-none font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 font-semibold">
                        Amount (₦)
                      </label>
                      <input
                        type="number"
                        value={sandboxInput.amount}
                        onChange={(e) => setSandboxInput({ ...sandboxInput, amount: parseInt(e.target.value) || 0 })}
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-sm focus:border-emerald-500 focus:outline-none font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 font-semibold">
                        Tax Rate (%)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={sandboxInput.taxRate}
                        onChange={(e) => setSandboxInput({ ...sandboxInput, taxRate: parseFloat(e.target.value) || 0 })}
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-sm focus:border-emerald-500 focus:outline-none font-mono"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={runSandboxValidation}
                    disabled={sandboxStage > 0 && sandboxStage < 5}
                    className="w-full py-3.5 rounded-xl bg-slate-900 text-white hover:bg-slate-850 transition-all duration-300 font-semibold text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    {sandboxStage > 0 && sandboxStage < 5 ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Running Validation Shield...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-current text-emerald-400" />
                        <span>Run Middleware Clearance</span>
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-slate-400 font-mono text-center mt-2">
                    Running live validation simulation rule checks against tax tables.
                  </p>
                </div>
              </div>

              {/* Dynamic Sandbox Pipeline Logs Column */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Visual Pipeline Progression Tracker */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-mono mb-3">
                    <span>Validation Sequence</span>
                    <span className="text-emerald-700 font-bold font-mono">Stage {sandboxStage} of 5</span>
                  </div>
                  <div className="grid grid-cols-5 gap-1.5 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className={`h-full ${sandboxStage >= 1 ? 'bg-emerald-700' : 'bg-transparent'} transition-all`} />
                    <div className={`h-full ${sandboxStage >= 2 ? 'bg-emerald-700' : 'bg-transparent'} transition-all`} />
                    <div className={`h-full ${sandboxStage >= 3 ? 'bg-emerald-500' : 'bg-transparent'} transition-all`} />
                    <div className={`h-full ${sandboxStage >= 4 ? 'bg-emerald-400' : 'bg-transparent'} transition-all`} />
                    <div className={`h-full ${sandboxStage >= 5 ? 'bg-emerald-600' : 'bg-transparent'} transition-all`} />
                  </div>
                </div>

                {/* Simulated Log Output Window */}
                <div className="bg-black/80 rounded-2xl border border-slate-800 p-4 font-mono text-xs text-slate-300 min-h-[160px] max-h-[160px] overflow-y-auto space-y-1">
                  <div className="text-slate-500 border-b border-slate-800 pb-1 mb-2 flex items-center justify-between text-[10px]">
                    <span>CITTALINK ENGINE LOGS</span>
                    <span>T={new Date().toLocaleTimeString()}</span>
                  </div>
                  {sandboxLogs.length === 0 ? (
                    <p className="text-slate-500 italic">Logs are empty. Click "Run Middleware Clearance" above to fire pipeline triggers.</p>
                  ) : (
                    sandboxLogs.map((log, idx) => {
                      const isErr = log.startsWith('✕') || log.includes('Error') || log.includes('Blocked');
                      const isOk = log.startsWith('✓') || log.includes('SUCCESS');
                      return (
                        <p key={idx} className={isErr ? 'text-red-400' : isOk ? 'text-emerald-400' : 'text-slate-300'}>
                          {log}
                        </p>
                      );
                    })
                  )}
                </div>

                {/* Completed Output Card */}
                {newGeneratedInvoice && (
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 p-5 rounded-2xl shadow-md space-y-4 animate-fade-in relative overflow-hidden text-slate-800">
                    {/* Glowing design asset */}
                    <div className="absolute top-0 right-0 h-20 w-20 bg-emerald-500/10 rounded-full blur-2xl" />

                    <div className="flex justify-between items-start border-b border-slate-200 pb-3">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-emerald-600 text-xs font-mono font-bold uppercase flex items-center space-x-1.5">
                            <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-ping" />
                            <span>Approved & Cleared</span>
                          </span>
                        </div>
                        <h5 className="font-display font-bold text-slate-900 text-base mt-1">
                          NRS Digital Stamp Generated
                        </h5>
                      </div>
                      <span className="text-xs font-mono text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded-lg">
                        {newGeneratedInvoice.invoiceNumber}
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4 text-xs font-mono text-left">
                      <div>
                        <span className="text-slate-500 block uppercase text-[10px]">Taxpayer/Buyer</span>
                        <span className="text-slate-800 font-medium block truncate mt-0.5">{newGeneratedInvoice.customerName}</span>
                        <span className="text-slate-400 text-[11px] block mt-0.5">{newGeneratedInvoice.customerTIN}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block uppercase text-[10px]">Net Transaction Base</span>
                        <span className="text-slate-800 font-medium block mt-0.5">₦{newGeneratedInvoice.amount.toLocaleString()}</span>
                        <span className="text-slate-400 text-[11px] block mt-0.5">7.5% Tax Applied</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block uppercase text-[10px]">Total Invoice Clearance</span>
                        <span className="text-emerald-800 font-bold block mt-0.5">₦{(newGeneratedInvoice.amount + newGeneratedInvoice.taxAmount).toLocaleString()}</span>
                        <span className="text-slate-400 text-[11px] block mt-0.5">Incl. ₦{newGeneratedInvoice.taxAmount.toLocaleString()} VAT</span>
                      </div>
                    </div>

                    {/* QR Code and Reference Block */}
                    <div className="bg-white border border-slate-200 rounded-xl p-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="space-y-1.5 flex-1 text-left">
                        <span className="text-slate-500 font-mono text-[9px] uppercase tracking-wider block">Official Invoice Reference Number (IRN)</span>
                        <span className="text-slate-800 font-mono text-xs block bg-slate-50 px-2.5 py-1 rounded border border-slate-200 break-all">
                          {newGeneratedInvoice.irn}
                        </span>
                      </div>
                      <div className="bg-white p-1 rounded-lg shrink-0 flex items-center justify-center border border-slate-100">
                        <img 
                          src={newGeneratedInvoice.qrCodeUrl} 
                          alt="NRS Verification Stamp" 
                          className="w-16 h-16 object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>

                  </div>
                )}

              </div>

            </div>
          )}

          {/* TAB 3: API Monitor */}
          {activeTab === 'logs' && (
            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                <span className="text-slate-400 uppercase font-bold text-xs">Live REST API Handshake Log</span>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                  Middleware API Server: ACTIVE
                </span>
              </div>

              <div className="space-y-2 max-h-[360px] overflow-y-auto">
                {apiLogs.map((log, idx) => (
                  <div key={idx} className="bg-black/40 border border-slate-800/80 rounded-xl p-3 sm:p-3.5 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 hover:bg-black/65 transition-all text-left">
                    <span className="text-slate-500 shrink-0 select-none">[{log.timestamp}]</span>
                    <span className={`font-bold shrink-0 ${log.method === 'POST' ? 'text-emerald-400' : 'text-emerald-500'}`}>
                      {log.method}
                    </span>
                    <span className="text-emerald-400 shrink-0 font-medium">{log.endpoint}</span>
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold shrink-0 ${
                      log.status === 200 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
                    }`}>
                      {log.status}
                    </span>
                    <span className="text-slate-300 w-full sm:w-auto sm:flex-1 truncate block mt-1 sm:mt-0">{log.message}</span>
                  </div>
                ))}
              </div>

              {/* Raw JSON Mock payload visualizer */}
              <div className="bg-black/85 p-4 rounded-xl border border-slate-800 space-y-1 mt-6">
                <div className="text-slate-500 text-[10px] uppercase border-b border-slate-800 pb-1 mb-2">
                  Sample JSON Compliance payload sent to Access Point (APP)
                </div>
                <pre className="text-amber-300/90 text-[11px] overflow-x-auto leading-normal">
{`{
  "header": {
    "systemCode": "CITTA_EFS_MIDDLEWARE_V1",
    "transmissionTimestamp": "${new Date().toISOString()}"
  },
  "seller": {
    "tin": "10034923-0001",
    "name": "CittaERP Solutions Limited"
  },
  "buyer": {
    "tin": "${sandboxInput.customerTIN}",
    "name": "${sandboxInput.customerName}"
  },
  "financials": {
    "currency": "NGN",
    "netBase": ${sandboxInput.amount},
    "taxApplied": 7.5,
    "calculatedVAT": ${parseFloat((sandboxInput.amount * 0.075).toFixed(2))},
    "grossTotal": ${parseFloat((sandboxInput.amount * 1.075).toFixed(2))}
  }
}`}
                </pre>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
