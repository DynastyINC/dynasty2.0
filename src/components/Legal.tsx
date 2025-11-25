import React, { useState, useEffect } from 'react';
import { X, ArrowLeft, Shield, Globe, Lock, FileText, UserCheck, Eye } from 'lucide-react';

interface LegalProps {
  onClose: () => void;
}

const sections = [
  { id: 'privacy', title: '1. Privacy Policy', icon: <Globe className="w-4 h-4" /> },
  { id: 'gdpr', title: '2. GDPR Addendum', icon: <Shield className="w-4 h-4" /> },
  { id: 'cpra', title: '3. CA Privacy (CPRA)', icon: <Lock className="w-4 h-4" /> },
  { id: 'hr', title: '4. CA HR Privacy', icon: <UserCheck className="w-4 h-4" /> },
  { id: 'terms', title: '5. Terms of Use', icon: <FileText className="w-4 h-4" /> },
  { id: 'conduct', title: '6. Code of Conduct', icon: <UserCheck className="w-4 h-4" /> },
  { id: 'accessibility', title: '7. Accessibility', icon: <Eye className="w-4 h-4" /> },
];

const Legal: React.FC<LegalProps> = ({ onClose }) => {
  const [activeSection, setActiveSection] = useState('privacy');

  // Simple intersection observer to update active section on scroll could be added,
  // but for simplicity we'll just set it on click.
  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-dynasty-black flex flex-col md:flex-row animate-[fadeIn_0.3s_ease-out]">
      
      {/* Sidebar Navigation - Sticky */}
      <div className="w-full md:w-80 bg-[#0a0a0a] border-b md:border-b-0 md:border-r border-white/10 flex-shrink-0 flex flex-col h-[auto] md:h-full z-20">
        
        {/* Header / Back Button */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#0a0a0a]">
           <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-dynasty-lime" />
              <h2 className="text-xl font-display font-bold text-white tracking-widest">LEGAL</h2>
           </div>
           <button onClick={onClose} className="md:hidden text-gray-400 hover:text-white p-2">
              <X className="w-6 h-6" />
           </button>
        </div>

        {/* Nav Links */}
        <div className="overflow-x-auto md:overflow-y-auto md:flex-1 p-4 md:p-6 custom-scrollbar">
           <button onClick={onClose} className="hidden md:flex items-center gap-2 text-gray-500 hover:text-white mb-8 text-xs font-bold uppercase tracking-widest transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Site
           </button>

           <div className="flex md:flex-col gap-2 min-w-max md:min-w-0">
              {sections.map(section => (
                  <button
                      key={section.id}
                      onClick={() => scrollTo(section.id)}
                      className={`flex items-center gap-3 w-full text-left py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeSection === section.id ? 'bg-dynasty-lime text-black shadow-[0_0_20px_rgba(204,255,0,0.2)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                  >
                      {section.icon}
                      {section.title}
                  </button>
              ))}
           </div>
        </div>

        <div className="hidden md:block p-6 border-t border-white/10 text-[10px] text-gray-600 font-mono">
            LAST UPDATED: NOV 24 2025
        </div>
      </div>

      {/* Content Area - Scrollable */}
      <div className="flex-1 overflow-y-auto bg-dynasty-black relative scroll-smooth p-6 md:p-16 custom-scrollbar" id="legal-content">
         <div className="max-w-4xl mx-auto space-y-24 pb-24">
            
            {/* 1. Privacy Policy */}
            <section id="privacy" className="scroll-mt-24">
               <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">1. PRIVACY POLICY (GLOBAL)</h2>
               <div className="w-24 h-1 bg-dynasty-lime mb-8"></div>
               
               <div className="prose prose-invert prose-sm max-w-none text-gray-300 font-light leading-relaxed">
                  <p className="font-mono text-xs text-gray-500 mb-6">Effective Date: November 24, 2025 | Last Updated: November 24, 2025</p>
                  
                  <p>This Privacy Policy explains how Dynasty (“Dynasty,” “we,” “us,” or “our”) collects, uses, shares, and protects information in connection with your use of:</p>
                  <ul className="list-disc pl-5 space-y-2 mt-4 mb-6">
                    <li><span className="text-white">https://dynasty.build</span> and any related subdomains (the “Site”);</li>
                    <li>products, services, programs, tools, and features we provide (collectively, the “Services”);</li>
                    <li>any communication or interaction with Dynasty, including email, support channels, events, or social platforms.</li>
                  </ul>
                  <p className="mb-8">This Privacy Policy applies to customers, prospective customers, partners, suppliers, applicants, and any other individuals whose information we collect.</p>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Information We Collect</h3>
                  <p>We collect the following categories of information depending on your interactions with Dynasty:</p>
                  
                  <h4 className="text-lg text-white font-medium mt-6 mb-2">Personal Information</h4>
                  <p>Information that identifies or can be reasonably linked to you, such as:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                     <li>Name</li>
                     <li>Contact details (email, phone, address)</li>
                     <li>Professional information (title, employer, qualifications)</li>
                     <li>Payment details (processed securely by third-party processors)</li>
                     <li>Social media handles or usernames</li>
                     <li>Account login information</li>
                     <li>Any information you submit through forms, onboarding, or customer support</li>
                     <li>Information included in communications sent to us</li>
                  </ul>

                  <h4 className="text-lg text-white font-medium mt-6 mb-2">Automatically Collected Information</h4>
                  <p>When you access the Site, we may automatically collect:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                     <li>IP address</li>
                     <li>Browser type and device information</li>
                     <li>Pages viewed and actions taken</li>
                     <li>Access timestamps</li>
                     <li>Cookies and similar tracking technologies</li>
                     <li>Referral sources</li>
                     <li>Diagnostic and performance data</li>
                  </ul>

                  <h4 className="text-lg text-white font-medium mt-6 mb-2">Information From Third Parties</h4>
                  <p>We may receive information from:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                     <li>Social media platforms (depending on your settings)</li>
                     <li>Payment processors</li>
                     <li>Analytics providers</li>
                     <li>Event partners or registration platforms</li>
                     <li>Business partners or affiliates</li>
                  </ul>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">How We Use Information</h3>
                  <p>Dynasty uses collected information to:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                     <li>Provide, maintain, and improve our Services</li>
                     <li>Process requests, applications, and transactions</li>
                     <li>Communicate with you, including service updates and administrative messages</li>
                     <li>Personalize your experience</li>
                     <li>Conduct analytics and performance monitoring</li>
                     <li>Support security and prevent fraud</li>
                     <li>Comply with legal obligations</li>
                     <li>Market Dynasty services where permitted</li>
                     <li>Facilitate events, programs, and partnerships</li>
                  </ul>
                  <p>We use Non-Personal Information (aggregated or anonymized) for analytics, product development, and business insights. This information does not identify you and may be used without restriction.</p>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">How We Share Information</h3>
                  <p>We may share your information with:</p>
                  
                  <h4 className="text-lg text-white font-medium mt-6 mb-2">Service Providers</h4>
                  <p>Partners who assist with: Hosting, Payment processing, Analytics, Customer support, Communications, Event management, Security services. They are only permitted to use your information as necessary to perform services on our behalf.</p>

                  <h4 className="text-lg text-white font-medium mt-6 mb-2">Business Partners</h4>
                  <p>In aggregated or non-identifiable form, or where necessary for joint programs, collaborations, or events.</p>

                  <h4 className="text-lg text-white font-medium mt-6 mb-2">Legal and Compliance</h4>
                  <p>We may disclose information when required to: Comply with applicable laws, Respond to valid legal requests, Protect the rights, safety, or property of Dynasty or its users, Enforce policies.</p>

                  <h4 className="text-lg text-white font-medium mt-6 mb-2">Corporate Transactions</h4>
                  <p>If Dynasty participates in a merger, acquisition, restructuring, or asset transfer, information may be shared as necessary.</p>

                  <h4 className="text-lg text-white font-medium mt-6 mb-2">Marketing</h4>
                  <p>If you subscribe to Dynasty communications, you may receive updates, newsletters, or announcements. You can unsubscribe at any time using the link in emails or by contacting: privacy@dynasty.build</p>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Cookies & Tracking</h3>
                  <p>We use cookies and similar technologies to: Enable core Site functionality, Improve user experience, Analyze usage patterns, Support security, Serve relevant content. You may disable cookies through your browser settings, but certain features may not function.</p>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Data Security</h3>
                  <p>We implement reasonable administrative, technical, and physical safeguards to protect information. However, no system is completely secure, and we cannot guarantee absolute protection.</p>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Data Retention</h3>
                  <p>We retain information for as long as necessary to: Fulfill the purposes outlined in this Policy, Comply with legal obligations, Resolve disputes, Maintain business records.</p>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Changes to This Policy</h3>
                  <p>We may update this Privacy Policy periodically. The “Last Updated” date reflects the latest version. Continued use of our Services means you accept the updated Policy.</p>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Contact Us</h3>
                  <p>For questions or privacy-related requests, contact:</p>
                  <p className="mt-2">Email: <a href="mailto:privacy@dynasty.build" className="text-dynasty-lime hover:underline">privacy@dynasty.build</a></p>
                  <p>Website: https://dynasty.build</p>
               </div>
            </section>

            {/* 2. GDPR Addendum */}
            <section id="gdpr" className="scroll-mt-24 pt-12 border-t border-white/10">
               <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">2. PRIVACY POLICY: EU USERS (GDPR ADDENDUM)</h2>
               <div className="w-24 h-1 bg-dynasty-lime mb-8"></div>
               
               <div className="prose prose-invert prose-sm max-w-none text-gray-300 font-light leading-relaxed">
                  <p className="font-mono text-xs text-gray-500 mb-6">Effective Date: November 24, 2025</p>
                  <p>This GDPR Addendum applies to individuals located in the European Union (EU) or European Economic Area (EEA). Dynasty acts as a “data controller” when processing your Personal Data under this section.</p>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Legal Bases for Processing</h3>
                  <p>We process Personal Data under the following legal bases:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                     <li>Contractual necessity: To provide requested Services</li>
                     <li>Legitimate interests: Security, analytics, business operations</li>
                     <li>Compliance: Legal and regulatory obligations</li>
                     <li>Consent: Where required (e.g., marketing or certain cookies)</li>
                  </ul>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Your Rights (EU/EEA)</h3>
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                     <li>Access your Personal Data</li>
                     <li>Correct inaccurate data</li>
                     <li>Delete your data (“right to be forgotten”)</li>
                     <li>Restrict or object to processing</li>
                     <li>Data portability</li>
                     <li>Withdraw consent</li>
                     <li>File a complaint with your supervisory authority</li>
                  </ul>
                  <p>To exercise rights, email: <a href="mailto:privacy@dynasty.build" className="text-dynasty-lime hover:underline">privacy@dynasty.build</a></p>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">International Transfers</h3>
                  <p>Dynasty may transfer EU/EEA Personal Data to countries outside the EU. Where we do, we rely on: Standard contractual clauses (SCCs), or Equivalent safeguards.</p>
               </div>
            </section>

            {/* 3. CPRA */}
            <section id="cpra" className="scroll-mt-24 pt-12 border-t border-white/10">
               <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">3. CALIFORNIA CONSUMER PRIVACY NOTICE (CPRA)</h2>
               <div className="w-24 h-1 bg-dynasty-lime mb-8"></div>
               
               <div className="prose prose-invert prose-sm max-w-none text-gray-300 font-light leading-relaxed">
                  <p className="font-mono text-xs text-gray-500 mb-6">Effective Date: November 24, 2025</p>
                  <p>This section applies to California residents (“Consumers”) under the California Privacy Rights Act (CPRA).</p>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Categories of Personal Information Collected</h3>
                  <p>We collect:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                     <li>Identifiers (name, email, phone)</li>
                     <li>Commercial information</li>
                     <li>Internet activity information</li>
                     <li>Professional information</li>
                     <li>Inferences derived from other information</li>
                  </ul>
                  <p>We do not sell or share Personal Information for cross-context behavioral advertising.</p>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Your CPRA Rights</h3>
                  <p>You may:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                     <li>Access Personal Information</li>
                     <li>Delete Personal Information</li>
                     <li>Correct inaccurate information</li>
                     <li>Opt out of certain uses</li>
                     <li>Obtain a portable copy of your data</li>
                     <li>Limit use of sensitive data (if applicable)</li>
                  </ul>
                  <p>Submit a request via: <a href="mailto:privacy@dynasty.build" className="text-dynasty-lime hover:underline">privacy@dynasty.build</a></p>
                  <p>We will verify your identity before processing your request.</p>
               </div>
            </section>

             {/* 4. HR Privacy */}
             <section id="hr" className="scroll-mt-24 pt-12 border-t border-white/10">
               <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">4. CALIFORNIA HR PRIVACY NOTICE</h2>
               <div className="w-24 h-1 bg-dynasty-lime mb-8"></div>
               
               <div className="prose prose-invert prose-sm max-w-none text-gray-300 font-light leading-relaxed">
                  <p>This applies to California employees, applicants, contractors, and other workforce members.</p>
                  <p className="mt-4">We collect typical HR-related categories of Personal Information for: Hiring, Employment administration, Compliance, Security, Payroll and benefits (where applicable).</p>
                  <p className="mt-4">Employees have the right to: Know information collected, Correct or delete information, Request disclosures, Exercise privacy rights without discrimination.</p>
                  <p className="mt-4">Submit HR privacy requests to: <a href="mailto:privacy@dynasty.build" className="text-dynasty-lime hover:underline">privacy@dynasty.build</a></p>
               </div>
            </section>

            {/* 5. Terms of Use */}
            <section id="terms" className="scroll-mt-24 pt-12 border-t border-white/10">
               <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">5. TERMS OF USE</h2>
               <div className="w-24 h-1 bg-dynasty-lime mb-8"></div>
               
               <div className="prose prose-invert prose-sm max-w-none text-gray-300 font-light leading-relaxed">
                  <p className="font-mono text-xs text-gray-500 mb-6">Effective Date: November 24, 2025 | Last Updated: November 24, 2025</p>
                  <p>These Terms govern your use of the Site and Services operated by Dynasty.</p>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Acceptance of Terms</h3>
                  <p>By accessing or using our Site or Services, you agree to these Terms. If you do not agree, do not use the Services.</p>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Use of the Site</h3>
                  <p>You agree not to:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                     <li>Infringe intellectual property</li>
                     <li>Access or tamper with systems or data</li>
                     <li>Use the Services to violate laws</li>
                     <li>Distribute harmful or illegal content</li>
                     <li>Reverse engineer any part of the Services</li>
                     <li>Interfere with other users’ access</li>
                  </ul>
                  <p>Dynasty may suspend or terminate access for violations.</p>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Content Is Informational Only</h3>
                  <p>The Site and Services provide general information. Nothing is financial, legal, tax, investment, or professional advice. No content constitutes an offer to sell or solicit securities.</p>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Intellectual Property</h3>
                  <p>All content, branding, materials, and software are owned by Dynasty. You may not copy, distribute, resell, or create derivative works without permission.</p>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Limitation of Liability</h3>
                  <p>The Services are provided “as is” without warranties. Dynasty is not liable for indirect or consequential damages. Where liability cannot be excluded, Dynasty’s aggregate liability is limited to $250.</p>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Indemnification</h3>
                  <p>You agree to indemnify Dynasty against claims arising from: Your use of the Services, Your violation of these Terms.</p>

                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Contact</h3>
                  <p>Email: <a href="mailto:legal@dynasty.build" className="text-dynasty-lime hover:underline">legal@dynasty.build</a></p>
               </div>
            </section>

            {/* 6. Code of Conduct */}
            <section id="conduct" className="scroll-mt-24 pt-12 border-t border-white/10">
               <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">6. CODE OF CONDUCT</h2>
               <div className="w-24 h-1 bg-dynasty-lime mb-8"></div>
               
               <div className="prose prose-invert prose-sm max-w-none text-gray-300 font-light leading-relaxed">
                  <p>Dynasty prohibits and will not tolerate:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4 mt-4">
                     <li>Harassment, discrimination, or intimidation</li>
                     <li>Abuse, threats, or hostile behavior</li>
                     <li>Violations of safety, privacy, or security</li>
                     <li>Unethical or unprofessional conduct</li>
                  </ul>
                  <p>To report misconduct, contact: <a href="mailto:legal@dynasty.build" className="text-dynasty-lime hover:underline">legal@dynasty.build</a></p>
               </div>
            </section>

             {/* 7. Accessibility */}
             <section id="accessibility" className="scroll-mt-24 pt-12 border-t border-white/10">
               <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">7. ACCESSIBILITY STATEMENT</h2>
               <div className="w-24 h-1 bg-dynasty-lime mb-8"></div>
               
               <div className="prose prose-invert prose-sm max-w-none text-gray-300 font-light leading-relaxed">
                  <p>Dynasty is committed to ensuring accessibility for all users.</p>
                  <p className="mt-4">If you experience accessibility issues, need accommodations, or have feedback, contact: <a href="mailto:accessibility@dynasty.build" className="text-dynasty-lime hover:underline">accessibility@dynasty.build</a></p>
                  <p className="mt-4">We will work to address your request promptly.</p>
               </div>
            </section>

         </div>
      </div>
    </div>
  );
};

export default Legal;