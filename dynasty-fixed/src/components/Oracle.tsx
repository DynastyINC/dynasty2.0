import React, { useState } from 'react';
import { getOracleInsight } from '../services/gemini';
import { OracleResponse } from '../types';
import { BrainCircuit, Cpu, ArrowRight, Loader2, AlertCircle } from 'lucide-react';

const Oracle: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<OracleResponse | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse(null);
    
    // Simulate a "scanning" delay for effect if the API is too fast
    const result = await getOracleInsight(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <div id="oracle" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-dynasty-blue/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          <div className="md:w-1/2">
            <div className="flex items-center gap-3 mb-6 text-dynasty-lime">
              <BrainCircuit className="w-6 h-6" />
              <span className="font-display tracking-widest text-sm">DYNASTY ORACLE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Test Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-dynasty-lime to-white">Thesis</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Leverage our proprietary AI to stress-test your elevator pitch or get an instant sentiment analysis on emerging protocols. 
              We don't just invest; we analyze with machine precision.
            </p>

            <form onSubmit={handleAnalyze} className="relative">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-dynasty-lime to-dynasty-blue rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center bg-dynasty-black rounded-lg border border-white/10 p-2">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="E.g., 'L2 scaling on Ethereum using ZK-rollups' or 'DePIN for GPU compute'"
                    className="w-full bg-transparent text-white px-4 py-3 focus:outline-none placeholder-gray-600 font-mono text-sm"
                  />
                  <button
                    type="submit"
                    disabled={loading || !query}
                    className="p-3 bg-white/10 hover:bg-dynasty-lime hover:text-black rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ArrowRight className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-600 flex items-center gap-2">
                <Cpu className="w-3 h-3" />
                Powered by Gemini 2.5 Flash
              </p>
            </form>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="glass-panel min-h-[400px] rounded-2xl p-8 border-l-4 border-l-dynasty-lime/50 relative">
              {!response && !loading && (
                <div className="h-full flex flex-col items-center justify-center text-gray-600 opacity-50">
                  <Cpu className="w-16 h-16 mb-4 animate-pulse-slow" />
                  <p className="font-display tracking-widest text-xs">SYSTEM IDLE // AWAITING INPUT</p>
                </div>
              )}

              {loading && (
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="flex gap-1 mb-4">
                    <div className="w-2 h-16 bg-dynasty-lime animate-[pulse_1s_ease-in-out_infinite]"></div>
                    <div className="w-2 h-16 bg-dynasty-lime animate-[pulse_1.2s_ease-in-out_infinite]"></div>
                    <div className="w-2 h-16 bg-dynasty-lime animate-[pulse_0.8s_ease-in-out_infinite]"></div>
                  </div>
                  <p className="text-dynasty-lime font-mono text-sm animate-pulse">ANALYZING MARKET VECTORS...</p>
                </div>
              )}

              {response && (
                <div className="animate-[fadeIn_0.5s_ease-out]">
                  <div className="flex justify-between items-start mb-8 border-b border-white/10 pb-4">
                    <div>
                      <h3 className="text-xs text-gray-500 font-display tracking-widest mb-1">VERDICT</h3>
                      <p className="text-2xl font-bold text-white uppercase tracking-tight">{response.verdict}</p>
                    </div>
                    <div className="text-right">
                      <h3 className="text-xs text-gray-500 font-display tracking-widest mb-1">VIABILITY SCORE</h3>
                      <div className="text-3xl font-display text-dynasty-lime">{response.score}<span className="text-sm text-gray-600">/100</span></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xs text-gray-500 font-display tracking-widest">ANALYSIS</h3>
                    <p className="text-gray-300 leading-relaxed font-light border-l-2 border-dynasty-blue pl-4">
                      {response.analysis}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-dynasty-lime/70">
                    <AlertCircle className="w-4 h-4" />
                    <span>Dynasty Oracle analysis is for informational purposes only. Not financial advice.</span>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Oracle;