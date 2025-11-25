import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="pt-32 pb-8 relative">
      <div className="absolute inset-0 bg-dynasty-lime/5 clip-path-slant" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to Build?</h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          We are looking for the outliers. The visionaries who don't just predict the future, but write the code for it.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <div className="glass-panel p-8 md:w-1/2 text-left hover:border-dynasty-lime transition-colors duration-300">
                <h3 className="text-2xl text-white font-bold mb-2">Founders</h3>
                <p className="text-gray-400 mb-6 text-sm">Submit your deck. If you are building in DeFi, Infra, or AI x Crypto, we want to see it.</p>
                <a href="mailto:dynastyinc@proton.me" className="inline-flex items-center gap-2 text-dynasty-lime hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">
                    <Mail className="w-4 h-4" /> Send Pitch Deck
                </a>
            </div>

            <div className="glass-panel p-8 md:w-1/2 text-left hover:border-dynasty-lime transition-colors duration-300">
                <h3 className="text-2xl text-white font-bold mb-2">Limited Partners</h3>
                <p className="text-gray-400 mb-6 text-sm">Family offices and sophisticated investors looking for exposure to high-growth early stage assets.</p>
                <a href="mailto:dynastyinc@proton.me" className="inline-flex items-center gap-2 text-dynasty-lime hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">
                    <Mail className="w-4 h-4" /> Request Access
                </a>
            </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="border-t border-white/5 pt-6">
            <h3 className="text-[10px] font-bold text-gray-500 mb-2 tracking-widest text-left">DISCLAIMER</h3>
            <p className="text-[10px] text-gray-600 text-justify uppercase tracking-wide leading-relaxed font-mono">
                AS OF 24 NOVEMBER 2025. ALL FIGURES ARE BASED ON INTERNAL DATA AND THIRD-PARTY DATA WHICH MAY NOT HAVE BEEN EXTERNALLY VERIFIED. PORTFOLIO COMPANIES DISPLAYED ON THIS PAGE ARE NOT NECESSARILY REPRESENTATIVE OF ALL INVESTMENTS MADE BY DYNASTY IBC, AND THERE CAN BE NO ASSURANCE THAT SUCH INVESTMENTS WILL BE PROFITABLE OR THAT FUTURE INVESTMENTS WILL HAVE SIMILAR CHARACTERISTICS OR RESULTS.
                THIS LIST MAY INCLUDE CURRENT AND FORMER DYNASTY IBC PORTFOLIO COMPANIES THAT HAVE BEEN ACQUIRED, UNDERGONE AN INITIAL PUBLIC OFFERING, ARE NO LONGER OPERATING, OR HAVE CHANGED SECTOR, REGION, OR TECHNOLOGY. THIS LIST IS UPDATED PERIODICALLY AND MAY NOT REFLECT RECENT DYNASTY IBC INVESTMENTS OR INVESTMENTS THAT DYNASTY IBC IS RESTRICTED FROM PUBLICLY DISCLOSING DUE TO CONFIDENTIALITY AGREEMENTS.
                PAST RESULTS OF DYNASTY IBC INVESTMENTS OR STRATEGIES ARE NOT NECESSARILY INDICATIVE OF FUTURE PERFORMANCE. INDUSTRY, SUB-INDUSTRY, AND COUNTRY CATEGORIZATIONS ARE DETERMINED BY DYNASTY IBC, ARE SUBJECT TO CHANGE, AND MAY NOT ALIGN WITH INDUSTRY STANDARDS OR THE CLASSIFICATIONS USED BY OTHER INVESTORS OR BY THE COMPANIES LISTED. COUNTRY DESIGNATIONS REFLECT COMPANY HEADQUARTERS AS REPORTED BY THE COMPANY.
                NO CONTENT ON THIS PAGE SHOULD BE CONSIDERED AN OFFER TO SELL OR A SOLICITATION OF INTEREST TO PURCHASE ANY SECURITIES, NOR SHOULD IT BE CONSTRUED AS FUND MARKETING MATERIALS FOR PROSPECTIVE INVESTORS, NOR USED AS THE BASIS FOR ANY INVESTMENT DECISIONS.
                ALL LOGOS, NAMES, AND TRADEMARKS OF THIRD PARTIES REFERENCED HEREIN ARE THE PROPERTY OF THEIR RESPECTIVE OWNERS. ANY SUCH INCLUSION DOES NOT IMPLY OR CONSTITUTE ANY APPROVAL, ENDORSEMENT, OR SPONSORSHIP OF DYNASTY IBC BY THOSE OWNERS.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;