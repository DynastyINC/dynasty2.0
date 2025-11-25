import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ManifestoModal from './components/ManifestoModal';
import CaseStudyModal from './components/CaseStudyModal';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Legal from './components/Legal';

function App() {
  const [isManifestoOpen, setIsManifestoOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);
  const [showAllPortfolio, setShowAllPortfolio] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'login' | 'dashboard' | 'legal'>('home');
  const [userAddress, setUserAddress] = useState<string>('');

  const handleOpenPortfolio = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        setShowAllPortfolio(true);
        const element = document.getElementById('portfolio');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setShowAllPortfolio(true);
      const element = document.getElementById('portfolio');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenCaseStudy = (projectId: string) => {
    setSelectedCaseStudy(projectId);
  };

  const handleLoginSuccess = (address: string) => {
    setUserAddress(address);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setUserAddress('');
    setCurrentView('home');
  };

  if (currentView === 'login') {
    return (
      <Login 
        onBack={() => setCurrentView('home')} 
        onLoginSuccess={handleLoginSuccess} 
      />
    );
  }

  if (currentView === 'dashboard') {
    return (
      <div className="min-h-screen bg-dynasty-black text-white selection:bg-dynasty-lime selection:text-black">
        <Navbar onLoginClick={() => {}} isLoggedIn={true} />
        <Dashboard address={userAddress} onLogout={handleLogout} />
        <Footer 
          onOpenManifesto={() => setIsManifestoOpen(true)} 
          onOpenPortfolio={() => {
            setCurrentView('home');
            handleOpenPortfolio();
          }}
          onLoginClick={() => {}}
          onOpenLegal={() => setCurrentView('legal')}
        />
        <ManifestoModal 
          isOpen={isManifestoOpen} 
          onClose={() => setIsManifestoOpen(false)} 
        />
      </div>
    );
  }

  if (currentView === 'legal') {
    return (
      <div className="min-h-screen bg-dynasty-black text-white selection:bg-dynasty-lime selection:text-black">
        <Legal onClose={() => setCurrentView('home')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dynasty-black text-white selection:bg-dynasty-lime selection:text-black">
      <Navbar 
        onLoginClick={() => setCurrentView('login')} 
        onOpenPortfolio={handleOpenPortfolio}
        isLoggedIn={false} 
      />
      <main>
        <Hero />
        <Portfolio 
          showAll={showAllPortfolio} 
          setShowAll={setShowAllPortfolio} 
          onOpenCaseStudy={handleOpenCaseStudy}
        />
        {/* Oracle removed */}
        <Contact />
      </main>
      <Footer 
        onOpenManifesto={() => setIsManifestoOpen(true)} 
        onOpenPortfolio={handleOpenPortfolio}
        onLoginClick={() => setCurrentView('login')}
        onOpenLegal={() => setCurrentView('legal')}
      />
      <ManifestoModal 
        isOpen={isManifestoOpen} 
        onClose={() => setIsManifestoOpen(false)} 
      />
      <CaseStudyModal 
        isOpen={!!selectedCaseStudy} 
        onClose={() => setSelectedCaseStudy(null)} 
        projectId={selectedCaseStudy || ''}
      />
    </div>
  );
}

export default App;
