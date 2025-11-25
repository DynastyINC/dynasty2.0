import React from 'react';

interface FooterProps {
  onOpenManifesto: () => void;
  onOpenPortfolio: () => void;
  onLoginClick: () => void;
  onOpenLegal: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenManifesto, onOpenPortfolio, onLoginClick, onOpenLegal }) => {
  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-sans font-bold text-white mb-2 tracking-tight">
            DY<span className="logo-n">N</span>ASTY
          </h2>
          <p className="text-gray-500 text-sm max-w-xs">
            Forging the future of decentralized finance and technology. 
            Invested in the builders of tomorrow.
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-8 text-sm text-gray-400">
          <button onClick={onOpenManifesto} className="hover:text-dynasty-lime transition-colors">Manifesto</button>
          <button onClick={onOpenPortfolio} className="hover:text-dynasty-lime transition-colors">Portfolio</button>
          <button onClick={onLoginClick} className="hover:text-dynasty-lime transition-colors">LPs Login</button>
          <a href="#" className="hover:text-dynasty-lime transition-colors">Careers</a>
          <a href="mailto:dynastyinc@proton.me" className="hover:text-dynasty-lime transition-colors">Contact</a>
        </div>
      </div>
      <div className="mt-16 border-t border-white/5 pt-8 text-center flex flex-col md:flex-row justify-between items-center px-6 max-w-7xl mx-auto gap-4">
        <div className="text-gray-800 text-[10px] font-mono uppercase">
            &copy; {new Date().getFullYear()} DYNASTY VENTURES. ALL RIGHTS RESERVED.
        </div>
        <button 
            onClick={onOpenLegal} 
            className="text-[10px] font-mono uppercase text-gray-600 hover:text-dynasty-lime transition-colors border-b border-transparent hover:border-dynasty-lime"
        >
            LEGAL & PRIVACY
        </button>
      </div>
    </footer>
  );
};

export default Footer;