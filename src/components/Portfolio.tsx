import React from 'react';
import { FlaskConical, BrainCircuit, ArrowUpRight, BarChart3, ChevronDown, ChevronUp } from 'lucide-react';
import { PortfolioItem } from '../types';

// Custom Icon for FLAP based on the provided logo (Purple Butterfly/Wings)
const FlapIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left Wing */}
    <path d="M48 50C48 50 42 25 20 25C5 25 5 45 22 50C5 55 5 75 20 75C42 75 48 50 48 50Z" />
    {/* Right Wing */}
    <path d="M52 50C52 50 58 25 80 25C95 25 95 45 78 50C95 55 95 75 80 75C58 75 52 50 52 50Z" />
  </svg>
);

// Custom Icon for OKX based on the X grid logo with Green Background
const OKXIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Green Background */}
    <rect width="100" height="100" rx="20" fill="#CCFF00" />
    {/* Black Squares forming X */}
    <rect x="22" y="22" width="16" height="16" rx="3" fill="#000000" />
    <rect x="62" y="22" width="16" height="16" rx="3" fill="#000000" />
    <rect x="42" y="42" width="16" height="16" rx="3" fill="#000000" />
    <rect x="22" y="62" width="16" height="16" rx="3" fill="#000000" />
    <rect x="62" y="62" width="16" height="16" rx="3" fill="#000000" />
  </svg>
);

// Custom Icon for KingMaker (Accurate Crown + M)
const KingMakerIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Orb on top */}
    <circle cx="50" cy="15" r="5" />
    
    {/* Crown M Shape */}
    <path d="
      M 25 85
      L 25 45
      L 12 32  
      L 35 42
      L 48 22
      L 52 22
      L 65 42
      L 88 32
      L 75 45
      L 75 85
      L 60 85
      L 60 60
      L 50 70
      L 40 60
      L 40 85
      Z
    " />
  </svg>
);

const portfolioData: PortfolioItem[] = [
  {
    name: "FLAP",
    tag: "INCUBATION",
    category: "LAUNCHPAD",
    description: "Launch a token on BNB, Monad, and X Layer instantly.",
    detail: "Seamless multi-chain token deployment protocol.",
    icon: <FlapIcon className="w-8 h-8" />,
    color: "text-purple-500", 
    stats: ["BNB Chain", "Monad", "X Layer", "Pre-TGE"],
    link: "http://flap.sh",
    hasCaseStudy: true
  },
  {
    name: "FULCRUM LABS",
    tag: "INCUBATION",
    category: "Market Making",
    description: "Market Making Technology & Liquidity Provider.",
    detail: "Advanced algorithmic trading strategies and liquidity provisioning.",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "text-dynasty-blue",
    stats: ["Market Making", "DEV SHOP"],
    link: "https://fulcrumlabs.tech/"
  },
  {
    name: "LAB TRADING",
    tag: "ADVISORY",
    category: "DEX TRADING",
    description: "Institutional-grade execution layer. 100M+ trading volume pre-TGE.",
    detail: "TGE on Binance Alpha, OKX, Bybit & Tier 1 Exchanges.",
    icon: <FlaskConical className="w-8 h-8" />,
    color: "text-dynasty-lime",
    stats: ["Binance Alpha", "Pre-TGE", "Seed Stage"],
    link: "#",
    hasCaseStudy: true
  },
  {
    name: "OKX WALLET",
    tag: "ADVISORY",
    category: "DEX TRADING",
    description: "Next-generation DEX aggregation and wallet architecture.",
    detail: "Strategic incubation of DEX features, growing monthly user trading volume, and wallet UI/UX feedback loop.",
    icon: <OKXIcon className="w-8 h-8" />,
    color: "text-white",
    stats: ["DEX Aggregation", "GROWTH", "Advisory"],
    link: "#",
    hasCaseStudy: true
  },
  {
    name: "KINGMAKER",
    tag: "INCUBATION",
    category: "AI TRADING",
    description: "Trade Smarter, Not Harder. AI Signals & Automated Trading Tools.",
    detail: "Next-gen algorithmic execution strategies.",
    icon: <KingMakerIcon className="w-8 h-8" />,
    color: "text-dynasty-lime",
    stats: ["PRE-TGE", "AI", "GROWTH"],
    link: "#",
    hasCaseStudy: true
  },
  {
    name: "TAOCAT",
    tag: "EXIT",
    category: "AI x Crypto",
    description: "Autonomous agent economy powered by Bittensor & Virtuals Protocol.",
    detail: "Experimental AI logic layer. Built by Masafi. Project handed over.",
    icon: <BrainCircuit className="w-8 h-8" />,
    color: "text-dynasty-blue",
    stats: ["AI Agents", "PRE-TGE"],
    link: "#",
    hasCaseStudy: true
  }
];

interface PortfolioProps {
  showAll: boolean;
  setShowAll: (show: boolean) => void;
  onOpenCaseStudy?: (projectId: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ showAll, setShowAll, onOpenCaseStudy }) => {
  // Determine which items to show based on state
  const visibleItems = showAll ? portfolioData : portfolioData.slice(0, 3);

  // Helper to determine background glow based on item color
  const getGlowColor = (colorClass: string) => {
    if (colorClass.includes('lime')) return 'bg-dynasty-lime/5';
    if (colorClass.includes('blue')) return 'bg-dynasty-blue/5';
    if (colorClass.includes('purple')) return 'bg-purple-500/5';
    return 'bg-white/5';
  };

  const handleItemClick = (e: React.MouseEvent, item: PortfolioItem) => {
    if (item.hasCaseStudy && onOpenCaseStudy) {
      e.preventDefault();
      onOpenCaseStudy(item.name);
    }
    // If it has a link and isn't a case study, default behavior (anchor tag) works
  };

  return (
    <section id="portfolio" className="py-32 bg-dynasty-black relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-dynasty-lime/20 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-dynasty-blue/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-dynasty-lime rounded-full animate-pulse"></span>
              <h2 className="text-sm font-display tracking-[0.2em] text-dynasty-lime">PORTFOLIO</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Forging The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">Next Paradigm</span>
            </h3>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-gray-500 text-sm max-w-xs mb-4">
              We don't just invest. We architect, incubate, and accelerate high-conviction protocols.
            </p>
            <button 
              onClick={() => setShowAll(!showAll)}
              className="text-sm text-white border-b border-dynasty-lime/50 pb-1 hover:text-dynasty-lime hover:border-dynasty-lime transition-all"
            >
              {showAll ? 'VIEW LESS' : 'VIEW FULL TRACK RECORD'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((item, index) => {
            // Use 'a' tag if it's a link or if it has a case study (we treat case study click as a link interaction effectively)
            const Component = (item.link && item.link !== '#') || item.hasCaseStudy ? 'a' : 'div';
            
            return (
              <Component 
                key={index}
                href={item.link && item.link !== '#' ? item.link : '#'}
                target={item.link && item.link !== '#' && !item.hasCaseStudy ? "_blank" : undefined}
                rel={item.link && item.link !== '#' && !item.hasCaseStudy ? "noopener noreferrer" : undefined}
                onClick={(e) => handleItemClick(e, item)}
                className="group relative bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1 block cursor-pointer flex flex-col"
              >
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none radial-glow ${getGlowColor(item.color || '')}`}></div>
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ${item.color}`}></div>

                <div className="p-8 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-lg bg-white/5 ${item.color} group-hover:scale-110 transition-transform duration-500`}>
                      {item.icon}
                    </div>
                    <div className="flex flex-col items-end">
                      <span className={`text-[10px] font-display font-bold px-2 py-1 rounded bg-white/5 border border-white/5 ${item.tag === 'EXIT' ? 'text-gray-400 border-gray-500/30' : item.color} tracking-wider mb-2`}>
                        {item.tag}
                      </span>
                      {(item.link && item.link !== '#') || item.hasCaseStudy ? (
                        <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                      ) : null}
                    </div>
                  </div>

                  <div className="mb-auto">
                    <h4 className="text-2xl font-bold text-white mb-2 font-display">{item.name}</h4>
                    <p className="text-xs font-mono text-gray-500 mb-4 uppercase tracking-wider">{item.category}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <p className="text-xs text-gray-500 border-l-2 border-white/10 pl-3 italic">
                      {item.detail}
                    </p>
                    
                    {item.hasCaseStudy && (
                      <div className="mt-4 inline-block border border-dynasty-blue/30 text-dynasty-blue text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-dynasty-blue/5 hover:bg-dynasty-blue/10 transition-colors">
                         View Case Study
                      </div>
                    )}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                      {item.stats?.map((stat, i) => (
                        <span key={i} className="text-[10px] uppercase font-mono text-gray-400 bg-black/50 px-2 py-1 rounded border border-white/5">
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Component>
            );
          })}
        </div>
        
        {/* Mobile / Bottom Toggle Button */}
        <div className="mt-12 text-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 text-sm text-white border border-white/20 py-4 px-8 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest font-bold"
            >
                {showAll ? 'Show Less' : 'View All Investments'}
                {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />}
            </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;