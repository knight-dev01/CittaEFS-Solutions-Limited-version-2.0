import { useState } from 'react';
import { 
  FileText, Download, HelpCircle, ArrowRight, ChevronDown, ChevronUp, BookOpen, 
  Sparkles, CheckCircle2, Search
} from 'lucide-react';
import { COMPLIANCE_FAQ, BLOG_POSTS } from '../data/blog';

export default function ResourcesTab() {
  const [activeFAQId, setActiveFAQId] = useState<string | null>('faq-1');
  const [activePostId, setActivePostId] = useState<string | null>(null);
  const [downloadingFile, setDownloadingFile] = useState<string | null>(null);
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'downloading' | 'completed'>('idle');
  const [searchTerm, setSearchTerm] = useState('');

  const triggerDownload = (fileName: string) => {
    setDownloadingFile(fileName);
    setDownloadStatus('downloading');
    setTimeout(() => {
      setDownloadStatus('completed');
      setTimeout(() => {
        setDownloadStatus('idle');
        setDownloadingFile(null);
      }, 2000);
    }, 1500);
  };

  const filteredFAQs = COMPLIANCE_FAQ.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="pt-28 pb-12 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-36 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title / Headline Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16 gap-4 sm:gap-6">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-emerald-800 font-bold bg-emerald-100/60 px-3.5 py-1.5 rounded-full border border-emerald-200">
            06. Knowledge Hub
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            CSL Compliance & Ecosystem Knowledge Hub
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            As the parent corporate brand guiding global enterprise systems, <strong>CittaERP Solutions Limited (CSL)</strong> provides comprehensive resource archives, capabilities briefs, legal compliance files, and technical manuals covering our entire multi-ecosystem suite: <strong>CittaEFS</strong>, <strong>CittaMatrix</strong>, <strong>CittaHospitalityX</strong>, <strong>CittaPlannerX</strong>, and <strong>CittaNexus</strong>.
          </p>
        </div>

        {/* Resources Grid (Brochures & Guides) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {/* Item 1: Product Brochure */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div className="space-y-4 text-left">
              <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-2xl w-12 h-12 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 block mb-1">Product Datasheet</span>
                <h3 className="font-display text-lg font-bold text-slate-900">CSL Unified Capabilities Brochure</h3>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                A comprehensive capabilities brief detailing enterprise security, cloud performance, API parameters, and deployment service-level SLA statistics.
              </p>
            </div>
            <button 
              id="res-dl-brochure"
              onClick={() => triggerDownload("CittaEFS-Capabilities-Brochure.pdf")}
              disabled={downloadStatus === 'downloading'}
              className={`mt-6 w-full py-3 rounded-xl border font-semibold text-xs tracking-wide transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                downloadingFile === 'CittaEFS-Capabilities-Brochure.pdf' && downloadStatus === 'completed'
                  ? 'bg-emerald-600 border-emerald-600 text-white'
                  : 'border-emerald-200 hover:border-emerald-500 text-emerald-800 hover:bg-emerald-50'
              }`}
            >
              {downloadingFile === 'CittaEFS-Capabilities-Brochure.pdf' && downloadStatus === 'downloading' ? (
                <>
                  <div className="w-4 h-4 border-2 border-emerald-200 border-t-emerald-800 rounded-full animate-spin" />
                  <span>Assembling PDF...</span>
                </>
              ) : downloadingFile === 'CittaEFS-Capabilities-Brochure.pdf' && downloadStatus === 'completed' ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Downloaded Successfully!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Brochure (PDF)</span>
                </>
              )}
            </button>
          </div>

          {/* Item 2: IT Integration Guide */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div className="space-y-4 text-left">
              <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-2xl w-12 h-12 flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 block mb-1">Technical Manual</span>
                <h3 className="font-display text-lg font-bold text-slate-900">CSL IT Integration & API Manual</h3>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Contains REST API schemas, JSON examples, directory monitoring hot-folder configs, and mapping templates for SAP, Oracle, and MS Dynamics.
              </p>
            </div>
            <button 
              id="res-dl-tech"
              onClick={() => triggerDownload("CittaEFS-IT-Integration-Manual.pdf")}
              disabled={downloadStatus === 'downloading'}
              className={`mt-6 w-full py-3 rounded-xl border font-semibold text-xs tracking-wide transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                downloadingFile === 'CittaEFS-IT-Integration-Manual.pdf' && downloadStatus === 'completed'
                  ? 'bg-emerald-600 border-emerald-600 text-white'
                  : 'border-emerald-200 hover:border-emerald-500 text-emerald-800 hover:bg-emerald-50'
              }`}
            >
              {downloadingFile === 'CittaEFS-IT-Integration-Manual.pdf' && downloadStatus === 'downloading' ? (
                <>
                  <div className="w-4 h-4 border-2 border-emerald-200 border-t-emerald-800 rounded-full animate-spin" />
                  <span>Assembling PDF...</span>
                </>
              ) : downloadingFile === 'CittaEFS-IT-Integration-Manual.pdf' && downloadStatus === 'completed' ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Downloaded Successfully!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Integration Guide</span>
                </>
              )}
            </button>
          </div>

          {/* Item 3: Tax compliance roadmap */}
          <div className="bg-gradient-to-br from-slate-950 via-navy-medium to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-emerald-500/20 shadow-xl flex flex-col justify-between">
            <div className="space-y-4 text-left">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-2xl w-12 h-12 flex items-center justify-center border border-emerald-500/20">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 block mb-1">Compliance Standard</span>
                <h3 className="font-display text-lg font-bold">NRS e-Invoicing Compliance Brief</h3>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                A non-technical brief explaining the legal structure of Section 23 of the NTAA, financial penalty guidelines, and input VAT offset frameworks.
              </p>
            </div>
            <button 
              id="res-dl-compliance"
              onClick={() => triggerDownload("NTAA-Section-23-Brief.pdf")}
              disabled={downloadStatus === 'downloading'}
              className={`mt-6 w-full py-3 rounded-xl font-bold text-xs tracking-wide transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                downloadingFile === 'NTAA-Section-23-Brief.pdf' && downloadStatus === 'completed'
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-emerald-600 text-white hover:bg-emerald-500 border-emerald-600'
              }`}
            >
              {downloadingFile === 'NTAA-Section-23-Brief.pdf' && downloadStatus === 'downloading' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Assembling PDF...</span>
                </>
              ) : downloadingFile === 'NTAA-Section-23-Brief.pdf' && downloadStatus === 'completed' ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Downloaded Successfully!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Executive Brief</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Blog & Regulatory Updates (Two Column Layout) */}
        <div className="grid lg:grid-cols-12 gap-12 pt-8 border-t border-slate-200">
          
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3 text-left">
              <h3 className="font-display text-2xl font-bold text-slate-900">
                Frequently Answered Regulations
              </h3>
              <p className="text-slate-600 text-sm">
                Search answers to common queries regarding Nigeria's Merchant-Buyer Solution.
              </p>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search FAQ articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 focus:border-emerald-500 focus:outline-none text-xs sm:text-sm"
                />
              </div>
            </div>

            <div className="space-y-3">
              {filteredFAQs.map((faq) => {
                const isOpen = activeFAQId === faq.id;
                return (
                  <div 
                    key={faq.id}
                    className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm transition-all"
                  >
                    <button
                      id={`faq-btn-${faq.id}`}
                      onClick={() => setActiveFAQId(isOpen ? null : faq.id)}
                      className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer"
                    >
                      <span className="font-display font-bold text-slate-900 text-sm sm:text-base leading-snug">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-emerald-600 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3 text-left">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Thought Leadership Articles */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1 text-left">
              <h3 className="font-display text-2xl font-bold text-slate-900">
                Regulatory & Integration Insights
              </h3>
              <p className="text-slate-600 text-sm">
                Compliance breakdowns written by CittaERP Solutions' legal and technical architecture experts.
              </p>
            </div>

            <div className="space-y-4">
              {BLOG_POSTS.map((post) => {
                const isSelected = activePostId === post.id;
                return (
                  <div 
                    key={post.id}
                    className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 text-left"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-emerald-700 mb-2.5">
                      <span className="font-bold">{post.category}</span>
                      <span className="text-slate-400">{post.date}</span>
                    </div>

                    <h4 className="font-display font-bold text-slate-900 text-lg leading-snug mb-3">
                      {post.title}
                    </h4>

                    {!isSelected ? (
                      <div>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                          {post.summary}
                        </p>
                        <button
                          id={`blog-read-btn-${post.id}`}
                          onClick={() => setActivePostId(post.id)}
                          className="text-emerald-700 hover:text-emerald-600 text-xs font-semibold flex items-center space-x-1 cursor-pointer"
                        >
                          <span>Read Full Executive Article</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4 border-t border-slate-100 pt-4">
                        <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 mb-3">
                          <span>By {post.author}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        
                        <div className="text-slate-700 text-xs sm:text-sm leading-relaxed space-y-3 whitespace-pre-line">
                          {post.content}
                        </div>

                        <button
                          id={`blog-collapse-btn-${post.id}`}
                          onClick={() => setActivePostId(null)}
                          className="text-slate-400 hover:text-slate-600 text-xs font-semibold block pt-2 cursor-pointer"
                        >
                          Collapse Article
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
