import React from 'react';
import { X, Fingerprint, Target, Zap, Users } from 'lucide-react';

interface ManifestoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ManifestoModal: React.FC<ManifestoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-dynasty-black border border-dynasty-lime/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(204,255,0,0.1)] animate-[fadeIn_0.3s_ease-out]">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-3 text-dynasty-lime">
            <Fingerprint className="w-6 h-6" />
            <h2 className="font-display tracking-[0.2em] text-sm">THE DYNASTY MANIFESTO</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-8 md:p-12 space-y-10 overflow-y-auto max-h-[70vh]">
          
          <div className="space-y-4">
             <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-dynasty-lime shrink-0 mt-1" />
                <p className="text-lg md:text-xl text-white font-light leading-relaxed">
                  We are working to build <span className="text-dynasty-lime font-normal">alongside founders</span>, helping shape the next generation of narratives and mindshare to get them to their next funding rounds.
                </p>
             </div>
          </div>
          
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          
          <div className="space-y-4">
             <div className="flex items-start gap-4">
                <Target className="w-6 h-6 text-dynasty-blue shrink-0 mt-1" />
                <p className="text-gray-300 leading-relaxed text-lg">
                  Our preferred investments are <strong className="text-white">active</strong> and as involved as possible. We connect projects with whomever may be most helpful to them and often times assist directly with TGE.
                </p>
             </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          <div className="space-y-4">
             <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-purple-500 shrink-0 mt-1" />
                <p className="text-gray-300 leading-relaxed text-lg">
                  We believe in building <strong className="text-white">sticky products</strong> that have high velocity potential and sustainable growth in revenues, token value, and long-term ecosystem vision.
                </p>
             </div>
          </div>
          
          <div className="pt-8 mt-8 border-t border-white/10 text-center">
            <p className="font-display text-dynasty-blue text-xs tracking-widest">BUILDING THE FUTURE, BLOCK BY BLOCK.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManifestoModal;