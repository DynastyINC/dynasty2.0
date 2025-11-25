import React, { useState } from 'react';
import { ArrowLeft, Wallet, Lock, Mail, ChevronRight, Loader2, ScanLine, X, CheckCircle2, AlertTriangle } from 'lucide-react';

interface LoginProps {
  onBack: () => void;
  onLoginSuccess: (address: string) => void;
}

// The specific whitelisted address requested
const WHITELISTED_ADDRESSES = [
  "0x952ea4c8720f214f10bf6c42b427cf1b879ec707".toLowerCase()
];

const Login: React.FC<LoginProps> = ({ onBack, onLoginSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [walletState, setWalletState] = useState<'idle' | 'scanning' | 'verifying' | 'success' | 'denied'>('idle');
  const [connectedAddress, setConnectedAddress] = useState<string>('');

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call failure or success - keeping email purely visual for now as per instructions mostly focusing on wallet
    setTimeout(() => setLoading(false), 2000);
  };

  const handleWalletClick = () => {
    setShowWalletModal(true);
    setWalletState('scanning');
    
    // Immediately try to connect browser wallet
    connectBrowserWallet();
  };

  const connectBrowserWallet = async () => {
    // Detect OKX Wallet or standard Ethereum provider
    const provider = window.okxwallet || window.ethereum;

    if (!provider) {
      // No wallet detected
      setTimeout(() => {
        // If after a brief scan we don't find anything, we stay in 'scanning' but user will see the QR code 
        // (simulating mobile flow) or we could show an error.
        // For now, we keep the "scanning" state to show the QR code as fallback visual.
      }, 1000);
      return;
    }

    try {
      setWalletState('verifying');
      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      if (accounts && accounts.length > 0) {
        verifyWallet(accounts[0]);
      } else {
        setWalletState('idle');
      }
    } catch (error) {
      console.error("Connection failed", error);
      setWalletState('idle'); 
    }
  };

  const verifyWallet = (address: string) => {
    setConnectedAddress(address);
    // Simulate a brief verification delay for effect
    setTimeout(() => {
        if (WHITELISTED_ADDRESSES.includes(address.toLowerCase())) {
            setWalletState('success');
            setTimeout(() => {
               onLoginSuccess(address);
            }, 1000);
        } else {
            setWalletState('denied');
        }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-dynasty-black text-white flex flex-col relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-dynasty-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-dynasty-lime/5 blur-[100px] pointer-events-none" />

      {/* Navigation */}
      <div className="p-6 md:p-12 relative z-10">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Return Home
        </button>
      </div>

      {/* Login Container */}
      <div className="flex-1 flex items-center justify-center px-6 relative z-10">
        <div className="w-full max-w-md animate-[fadeIn_0.5s_ease-out]">
          
          <div className="text-center mb-10">
             <div className="text-3xl font-sans font-bold text-white tracking-tight mb-2">
              DY<span className="logo-n">N</span>ASTY
            </div>
            <h1 className="text-dynasty-lime font-display tracking-[0.2em] text-sm">LIMITED PARTNER PORTAL</h1>
          </div>

          <div className="glass-panel p-8 rounded-2xl border-t border-t-white/10">
            
            {/* Wallet Connect Option */}
            <button 
              onClick={handleWalletClick}
              className="w-full group relative overflow-hidden bg-white/[0.03] hover:bg-dynasty-blue/10 border border-white/10 hover:border-dynasty-blue/50 text-white p-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 mb-8"
            >
              <div className="p-2 bg-dynasty-blue/20 rounded-lg group-hover:bg-dynasty-blue/30 transition-colors">
                <Wallet className="w-6 h-6 text-dynasty-blue" />
              </div>
              <div className="text-left">
                <span className="block font-bold tracking-wide text-sm">CONNECT WALLET</span>
                <span className="block text-[10px] text-gray-500 font-mono">Metamask / OKX / Phantom</span>
              </div>
              <ChevronRight className="ml-auto w-4 h-4 text-gray-600 group-hover:text-dynasty-blue transition-colors" />
            </button>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#0a0a0a] px-4 text-gray-500 font-mono">Or login with credentials</span>
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs text-gray-500 uppercase tracking-wider font-bold ml-1">Email Access</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-3.5 w-4 h-4 text-gray-500 group-focus-within:text-dynasty-lime transition-colors" />
                  <input 
                    type="email" 
                    required
                    placeholder="lp@dynasty.vc"
                    className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-11 pr-4 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-dynasty-lime/50 focus:ring-1 focus:ring-dynasty-lime/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-xs text-gray-500 uppercase tracking-wider font-bold">Password</label>
                  <a href="#" className="text-[10px] text-gray-600 hover:text-dynasty-lime transition-colors">Forgot?</a>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-3.5 w-4 h-4 text-gray-500 group-focus-within:text-dynasty-lime transition-colors" />
                  <input 
                    type="password" 
                    required
                    placeholder="••••••••••••"
                    className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-11 pr-4 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-dynasty-lime/50 focus:ring-1 focus:ring-dynasty-lime/50 transition-all"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-white text-black font-display font-bold tracking-widest py-4 rounded-lg hover:bg-dynasty-lime transition-colors duration-300 flex items-center justify-center gap-2 mt-6"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>ACCESS PORTAL <ChevronRight className="w-4 h-4" /></>}
              </button>
            </form>
          </div>

          <div className="text-center mt-8">
            <p className="text-xs text-gray-600">
              Restricted access for Limited Partners & Portfolio Founders only.
            </p>
          </div>
        </div>
      </div>

      {/* Wallet Connection Modal */}
      {showWalletModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <div className="bg-dynasty-black border border-dynasty-blue/30 rounded-2xl w-full max-w-md overflow-hidden shadow-[0_0_50px_rgba(46,92,255,0.15)] animate-[fadeIn_0.3s_ease-out]">
                
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-white/10 bg-white/5">
                    <div className="flex items-center gap-2 text-dynasty-blue">
                        <ScanLine className="w-5 h-5" />
                        <span className="font-display tracking-widest text-xs">SECURE CONNECT</span>
                    </div>
                    <button 
                        onClick={() => {
                            setShowWalletModal(false);
                            setWalletState('idle');
                        }}
                        className="text-gray-500 hover:text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col items-center justify-center min-h-[300px]">
                    
                    {walletState === 'scanning' || walletState === 'idle' ? (
                        <>
                            <div className="relative w-48 h-48 bg-white p-2 rounded-xl mb-6 shadow-lg shadow-dynasty-blue/20">
                                {/* Simulated QR Code for visual effect - functionality driven by window.ethereum/okxwallet */}
                                <img 
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=dynasty-vc-login-auth-token-connect" 
                                    alt="Login QR Code" 
                                    className="w-full h-full opacity-90"
                                />
                                <div className="absolute inset-0 border-2 border-dynasty-blue/50 rounded-xl animate-pulse"></div>
                                <div className="absolute top-1/2 left-0 w-full h-1 bg-dynasty-blue/50 blur-sm animate-[scan_2s_ease-in-out_infinite]"></div>
                            </div>
                            <p className="text-white font-bold mb-2">Waiting for Connection...</p>
                            <p className="text-gray-500 text-xs text-center max-w-xs">
                                Accept the connection request in your browser wallet (Metamask/OKX) or scan the code with your mobile wallet.
                            </p>
                            {!window.ethereum && !window.okxwallet && (
                               <p className="text-red-400 text-[10px] mt-4 bg-red-900/20 px-3 py-1 rounded">
                                  No wallet extension detected. Please install MetaMask or OKX Wallet.
                               </p>
                            )}
                        </>
                    ) : walletState === 'verifying' ? (
                        <div className="flex flex-col items-center">
                            <Loader2 className="w-12 h-12 text-dynasty-blue animate-spin mb-4" />
                            <h3 className="text-white font-display tracking-widest text-lg">VERIFYING IDENTITY</h3>
                            <p className="text-gray-500 text-xs mt-2 font-mono">{connectedAddress.slice(0,6)}...{connectedAddress.slice(-4)}</p>
                        </div>
                    ) : walletState === 'success' ? (
                         <div className="flex flex-col items-center animate-[fadeIn_0.5s_ease-out]">
                            <div className="w-16 h-16 bg-dynasty-lime/10 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-8 h-8 text-dynasty-lime" />
                            </div>
                            <h3 className="text-white font-display tracking-widest text-lg mb-2">ACCESS GRANTED</h3>
                            <p className="text-gray-400 text-sm text-center mb-6">Welcome back, Partner.</p>
                            <div className="bg-white/5 border border-white/10 rounded px-4 py-2 font-mono text-xs text-dynasty-lime">
                                Redirecting to Dashboard...
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center animate-[shake_0.5s_ease-in-out]">
                            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
                                <AlertTriangle className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="text-white font-display tracking-widest text-lg mb-2">ACCESS DENIED</h3>
                            <p className="text-gray-400 text-sm text-center max-w-xs mb-6">
                                Wallet address is not whitelisted for LP Portal access.
                            </p>
                             <button 
                                onClick={() => {
                                    setWalletState('idle');
                                    connectBrowserWallet(); // Retry
                                }}
                                className="text-xs text-gray-500 hover:text-white underline decoration-dotted"
                             >
                                Retry Connection
                             </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Login;