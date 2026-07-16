import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Database, FileSpreadsheet, ShieldCheck, RefreshCw, Server, Cloud, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import cslLogo from '../logo.png';
import bridgeImg from '../assets/images/digital_bridge_concept_1783971813302.jpg';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

function Tooltip({ content, children }: TooltipProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative inline-block w-full cursor-help"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-30 bottom-full left-1/2 -translate-x-1/2 mb-3.5 w-56 p-3 bg-slate-900 text-white text-xs rounded-xl shadow-xl border border-slate-800 text-center leading-normal"
          >
            {/* Arrow pointing down */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900" />
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface HeroProps {
  onGetStarted: () => void;
  onLearnMore: () => void;
}

type StepId = 'erp' | 'middleware' | 'app' | 'nrs';

export default function Hero({ onGetStarted, onLearnMore }: HeroProps) {
  const [activeStep, setActiveStep] = useState<StepId>('middleware');
  const [packetPosition, setPacketPosition] = useState(0); // 0: ERP, 1: Middleware, 2: APP, 3: NRS
  const [pulseCount, setPulseCount] = useState(0);
  
  const [availCount, setAvailCount] = useState(95.0);
  const [deployCount, setDeployCount] = useState(1);

  // Dynamic system status badge cycling list
  const [statusIndex, setStatusIndex] = useState(0);
  const statuses = [
    { label: 'Operational', icon: ShieldCheck, color: 'text-emerald-700 bg-emerald-50 border-emerald-100' },
    { label: 'NRS Connected', icon: Cloud, color: 'text-blue-700 bg-blue-50 border-blue-100' },
    { label: 'High Availability', icon: Server, color: 'text-teal-700 bg-teal-50 border-teal-100' },
  ];

  // Auto-cycle the System Status badge every 3.5 seconds
  useEffect(() => {
    const statusInterval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statuses.length);
    }, 3500);
    return () => clearInterval(statusInterval);
  }, [statuses.length]);

  // Statistics row count-up states
  const [enterpriseClients, setEnterpriseClients] = useState(0);
  const [invoicesProcessed, setInvoicesProcessed] = useState(0.0);

  useEffect(() => {
    // Count up for enterprise clients: 0 to 100
    const clientsTimer = setInterval(() => {
      setEnterpriseClients(prev => {
        if (prev >= 100) {
          clearInterval(clientsTimer);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    // Count up for invoices processed: 0.0M to 5.0M
    const invoicesTimer = setInterval(() => {
      setInvoicesProcessed(prev => {
        if (prev >= 5.0) {
          clearInterval(invoicesTimer);
          return 5.0;
        }
        return parseFloat((prev + 0.1).toFixed(1));
      });
    }, 30);

    return () => {
      clearInterval(clientsTimer);
      clearInterval(invoicesTimer);
    };
  }, []);


  // Auto-cycle the active step and packets for maximum life and interaction
  useEffect(() => {
    const interval = setInterval(() => {
      setPacketPosition((prev) => {
        const next = (prev + 1) % 4;
        const steps: StepId[] = ['erp', 'middleware', 'app', 'nrs'];
        setActiveStep(steps[next]);
        return next;
      });
      setPulseCount((prev) => prev + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Stats count-up simulation
  useEffect(() => {
    const statInterval = setInterval(() => {
      setAvailCount(prev => (prev < 99.99 ? parseFloat((prev + 0.17).toFixed(2)) : 99.99));
      setDeployCount(prev => (prev < 5 ? prev + 1 : 5));
    }, 40);
    return () => clearInterval(statInterval);
  }, []);

  const stepsDetails = {
    erp: {
      title: "Your Business System",
      sub: "ERP / Excel upload",
      desc: "Connect your SAP, Oracle, Dynamics, Odoo, or simple Excel sheets. CittaEFS handles any format, extracting raw invoicing parameters automatically.",
      color: "from-slate-700 to-slate-900",
      icon: Database,
      badge: "Source Systems"
    },
    middleware: {
      title: "CittaEFS Middleware",
      sub: "Intelligent Abstraction Gate",
      desc: "Our engine performs 3-tier validation: validating customer TIN real-time, matching transaction math accuracy, mapping correct tax codes, and creating immutable audit trails.",
      color: "from-emerald-500 to-emerald-700 border-emerald-500",
      icon: ShieldCheck,
      badge: "Validation & Compute"
    },
    app: {
      title: "Accredited Access Point",
      sub: "Authorized Regulatory Path",
      desc: "Cryptographically signs invoices, generates unique Invoice Reference Numbers (IRN), issues legal compliance QR Codes, and packs transactions into secure encrypted wrappers.",
      color: "from-slate-800 to-emerald-900",
      icon: Server,
      badge: "Encryption Gateway"
    },
    nrs: {
      title: "NRS Portal",
      sub: "National Revenue Authority",
      desc: "Final clearance validation and state timestamp record. Returns immediate success acknowledgments and validates compliance for your B2B customers.",
      color: "from-emerald-500 to-teal-600",
      icon: Cloud,
      badge: "Official Clearance"
    }
  };

  const currentDetails = stepsDetails[activeStep];
  const CurrentIcon = currentDetails.icon;

  return (
    <div className="relative pt-28 pb-12 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-36 bg-gradient-to-b from-white via-slate-50/50 to-slate-50 text-slate-800 overflow-hidden">
      {/* Decorative subtle emerald glowing backgrounds */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Hero Messaging Column */}
          <div className="lg:col-span-5 text-left space-y-6 sm:space-y-8">
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-white border border-slate-200 text-[10px] sm:text-xs text-emerald-800 font-mono tracking-wide shrink-0">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="font-semibold">03. FLAGSHIP COMPLIANCE SOLUTION</span>
              </div>
              
              {/* Dynamic System Status Badge */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={statusIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl border text-[10px] sm:text-xs font-mono font-bold tracking-wide shadow-sm shrink-0 ${statuses[statusIndex].color}`}
                >
                  {React.createElement(statuses[statusIndex].icon, { className: "w-3.5 h-3.5 animate-pulse shrink-0" })}
                  <span>{statuses[statusIndex].label}</span>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-slate-900">
              Tax Compliance <br className="hidden sm:inline" />
              Simplified for <br />
              <span className="text-emerald-700">
                Enterprises
              </span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
              Developed by <strong>CittaERP Solutions Limited (CSL)</strong>, <strong>CittaEFS</strong> is our flagship Intelligent Electronic Fiscal System and middleware. We bridge the gap between legacy ERP systems and complex regulatory portals, ensuring flawless real-time compliance without system replacement costs.
            </p>

            <img src={cslLogo} alt="CSL Logo" className="h-10 sm:h-12 w-auto" />

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onGetStarted}
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-semibold tracking-wide text-white bg-slate-900 hover:bg-slate-800 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-slate-950/10"
              >
                <span>Request Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onGetStarted}
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-semibold tracking-wide text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-sm"
              >
                <span>Contact Sales</span>
              </button>
            </div>

            {/* Premium, Interactive, scrolling Stats Block with custom tooltips */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-4">
              <div>
                <Tooltip content="Guaranteed platform availability, featuring server redundancy across independent regions.">
                  <div className="font-display text-lg sm:text-2xl font-bold text-emerald-700">{availCount.toFixed(2)}%</div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-wider break-words">Platform SLA</div>
                </Tooltip>
              </div>
              <div>
                <Tooltip content="Average timeline to full production deployment, including testing in sandbox environments.">
                  <div className="font-display text-lg sm:text-2xl font-bold text-emerald-700">{deployCount}–10 Days</div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-wider break-words">Onboarding Pipeline</div>
                </Tooltip>
              </div>
              <div>
                <Tooltip content="Advanced Encryption Standard with a 256-bit key length, secure and robust against brute-force attacks.">
                  <div className="font-display text-lg sm:text-2xl font-bold text-slate-900">AES-256</div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-wider break-words">Transport Security</div>
                </Tooltip>
              </div>
              <div>
                <Tooltip content="Real-time connection with official revenue service clearing nodes for instantaneous compliance certification.">
                  <div className="font-display text-lg sm:text-2xl font-bold text-emerald-600">NRS Ready</div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-wider break-words">Verification Link</div>
                </Tooltip>
              </div>
            </div>
          </div>

          {/* Right Hero Diagram Column */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center w-full gap-6">
            <img src={bridgeImg} alt="CittaEFS Digital Bridge" className="w-full h-auto rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100" />
            
            {/* Live Interactive Diagram Container */}
            <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 relative overflow-hidden shadow-lg shadow-slate-100">
              <div className="hidden sm:flex absolute top-0 right-0 p-3 font-mono text-[10px] text-emerald-800 tracking-widest uppercase items-center space-x-1.5 bg-slate-50 rounded-bl-xl border-l border-b border-slate-200">
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Architecture Simulation</span>
              </div>

              <h3 className="font-display text-sm sm:text-base font-semibold text-slate-900 tracking-tight mb-4 flex flex-wrap items-center gap-2">
                <span className="p-1 rounded-md bg-emerald-50 text-emerald-700">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
                </span>
                <span>The CittaEFS Middleware Flow</span>
                <span className="sm:hidden px-1.5 py-0.5 rounded text-[8px] font-mono uppercase bg-slate-50 text-slate-600 border border-slate-200">
                  Interactive
                </span>
              </h3>

              {/* Graphical Pipeline Path - Desktop (Horizontal) */}
              <div className="hidden sm:block w-full overflow-x-auto scrollbar-none pb-4 mb-2">
                <div className="relative py-12 flex items-center justify-between min-w-[500px] sm:min-w-0 px-2 select-none">
                  {/* Connecting background pipeline vector with flowing dashes */}
                  <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-slate-200 via-emerald-200 to-teal-200 rounded-full opacity-60 pointer-events-none" />
                  
                  {/* Active animated traveling dot representation */}
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 h-3.5 w-3.5 bg-emerald-500 rounded-full blur-[2px] shadow-md shadow-emerald-500/40 transition-all duration-1000 ease-in-out pointer-events-none"
                    style={{
                      left: `${8 + packetPosition * 27}%`,
                      opacity: 1
                    }}
                  />

                  {/* STEP 1: Business ERP */}
                  <button
                    id="diag-step-erp"
                    onClick={() => { setActiveStep('erp'); setPacketPosition(0); }}
                    className={`relative flex flex-col items-center z-10 p-3 rounded-2xl border transition-all duration-300 w-20 sm:w-24 ${
                      activeStep === 'erp'
                        ? 'bg-slate-50 border-slate-400 text-slate-900 scale-110 shadow-md'
                        : 'bg-white border-slate-100 hover:border-slate-300 text-slate-500'
                    }`}
                  >
                    <div className="p-2 bg-slate-100 rounded-xl text-slate-700 mb-2">
                      <Database className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-center">ERP System</span>
                    <span className="text-[8px] opacity-70 mt-0.5 text-center leading-tight">Excel Upload</span>
                  </button>

                  {/* Arrow */}
                  <ArrowRight className="w-4 h-4 text-slate-300 hidden sm:block" />

                  {/* STEP 2: CittaEFS Middleware */}
                  <button
                    id="diag-step-middleware"
                    onClick={() => { setActiveStep('middleware'); setPacketPosition(1); }}
                    className={`relative flex flex-col items-center z-10 p-3 rounded-2xl border transition-all duration-300 w-20 sm:w-24 ${
                      activeStep === 'middleware'
                        ? 'bg-emerald-50 border-emerald-400 text-slate-900 scale-115 shadow-md shadow-emerald-500/10'
                        : 'bg-white border-slate-100 hover:border-slate-300 text-slate-500'
                    }`}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-emerald-600 text-white text-[8px] font-bold uppercase tracking-wider rounded">
                      CittaEFS
                    </div>
                    <div className="p-2 bg-emerald-50 rounded-xl text-emerald-600 mb-2">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 text-center">Middleware</span>
                    <span className="text-[8px] opacity-70 mt-0.5 text-center leading-tight">Validation Shield</span>
                  </button>

                  {/* Arrow */}
                  <ArrowRight className="w-4 h-4 text-slate-300 hidden sm:block" />

                  {/* STEP 3: Accredited Partner APP */}
                  <button
                    id="diag-step-app"
                    onClick={() => { setActiveStep('app'); setPacketPosition(2); }}
                    className={`relative flex flex-col items-center z-10 p-3 rounded-2xl border transition-all duration-300 w-20 sm:w-24 ${
                      activeStep === 'app'
                        ? 'bg-slate-50 border-slate-400 text-slate-900 scale-110 shadow-md'
                        : 'bg-white border-slate-100 hover:border-slate-300 text-slate-500'
                    }`}
                  >
                    <div className="p-2 bg-slate-100 rounded-xl text-slate-700 mb-2">
                      <Server className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-center">Accredited APP</span>
                    <span className="text-[8px] opacity-70 mt-0.5 text-center leading-tight">QR & IRN Sign</span>
                  </button>

                  {/* Arrow */}
                  <ArrowRight className="w-4 h-4 text-slate-300 hidden sm:block" />

                  {/* STEP 4: NRS Portal */}
                  <button
                    id="diag-step-nrs"
                    onClick={() => { setActiveStep('nrs'); setPacketPosition(3); }}
                    className={`relative flex flex-col items-center z-10 p-3 rounded-2xl border transition-all duration-300 w-20 sm:w-24 ${
                      activeStep === 'nrs'
                        ? 'bg-emerald-50 border-emerald-400 text-slate-900 scale-110 shadow-md'
                        : 'bg-white border-slate-100 hover:border-slate-300 text-slate-500'
                    }`}
                  >
                    <div className="p-2 bg-emerald-100/50 rounded-xl text-emerald-600 mb-2">
                      <Cloud className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-center">NRS Portal</span>
                    <span className="text-[8px] opacity-70 mt-0.5 text-center leading-tight">Final Clearance</span>
                  </button>
                </div>
              </div>

              {/* Vertical timeline for mobile viewports */}
              <div className="block sm:hidden space-y-2 mb-4">
                <div className="grid grid-cols-4 gap-2">
                  {Object.entries(stepsDetails).map(([key, value], idx) => {
                    const isActive = activeStep === key;
                    const StepIcon = value.icon;
                    return (
                      <button
                        key={key}
                        onClick={() => { setActiveStep(key as StepId); setPacketPosition(idx); }}
                        className={`flex flex-col items-center p-2 rounded-xl border text-center transition-all ${
                          isActive
                            ? 'bg-emerald-50 border-emerald-400 text-emerald-950 shadow-xs'
                            : 'bg-slate-50/50 border-slate-100 text-slate-500'
                        }`}
                      >
                        <div className={`p-1.5 rounded-lg mb-1 ${isActive ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-400'}`}>
                          <StepIcon className="w-4 h-4" />
                        </div>
                        <span className="text-[8px] font-mono block text-slate-400">0{idx + 1}</span>
                        <span className="text-[8px] font-bold block truncate max-w-full leading-tight uppercase tracking-tight">{key === 'middleware' ? 'CittaEFS' : key === 'app' ? 'APP' : key}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic details for the active pipeline card with Framer Motion */}
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 min-h-fit sm:min-h-[160px] flex flex-col justify-between relative text-slate-800">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase bg-emerald-50 text-emerald-800 border border-emerald-200">
                          {currentDetails.badge}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">Step {packetPosition + 1} of 4</span>
                    </div>

                    <h4 className="font-display font-bold text-slate-950 text-sm sm:text-base">
                      {currentDetails.title} <span className="text-slate-500 font-normal font-sans text-xs">({currentDetails.sub})</span>
                    </h4>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {currentDetails.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-3 pt-2.5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[10px] text-slate-500 font-mono">
                  <span>Pipeline state: Running normal checks...</span>
                  <div className="flex items-center space-x-1 text-emerald-600">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Secure Live Link</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Supporting slide footnote */}
            <div className="mt-2 text-left sm:text-center text-[10px] sm:text-xs text-slate-400 flex items-start sm:items-center gap-1.5 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5 sm:mt-0" />
              <span className="leading-normal">Key Takeaway: CittaEFS manages compliance complexity; our Accredited Partners manage final transmission.</span>
            </div>

          </div>

        </div>

        {/* Dynamic statistics row beneath the Hero section with counting animations */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200/80">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            
            {/* Stat 1 */}
            <div className="bg-white border border-slate-200/60 rounded-2xl p-4 sm:p-6 text-center shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center space-y-1 hover:border-emerald-500/20 group">
              <div className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight transition-transform duration-300 group-hover:scale-105">
                {enterpriseClients}+
              </div>
              <div className="text-[10px] font-mono font-bold uppercase text-slate-500 tracking-widest mt-1">
                Enterprise Clients
              </div>
              <p className="text-[11px] text-slate-400 max-w-xs mt-1 leading-normal">
                Integrated installations across leading ERP platforms
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white border border-slate-200/60 rounded-2xl p-4 sm:p-6 text-center shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center space-y-1 hover:border-emerald-500/20 group">
              <div className="text-2xl sm:text-4xl font-display font-extrabold text-emerald-700 tracking-tight transition-transform duration-300 group-hover:scale-105">
                {invoicesProcessed.toFixed(1)}M+
              </div>
              <div className="text-[10px] font-mono font-bold uppercase text-slate-500 tracking-widest mt-1">
                Invoices Processed
              </div>
              <p className="text-[11px] text-slate-400 max-w-xs mt-1 leading-normal">
                Cleared automatically with 100% NRS compliant validation
              </p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white border border-slate-200/60 rounded-2xl p-4 sm:p-6 text-center shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center space-y-1 hover:border-emerald-500/20 group">
              <div className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight flex items-center justify-center gap-2 transition-transform duration-300 group-hover:scale-105">
                <span className="flex h-3 w-3 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>24/7</span>
              </div>
              <div className="text-[10px] font-mono font-bold uppercase text-slate-500 tracking-widest mt-1">
                Support Active
              </div>
              <p className="text-[11px] text-slate-400 max-w-xs mt-1 leading-normal">
                Around-the-clock principal engineering coverage
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
