import React from 'react';
import { 
  PieChart, 
  TrendingUp, 
  Calendar, 
  FileText, 
  Download, 
  ChevronRight, 
  LogOut, 
  Briefcase,
  Mail
} from 'lucide-react';

interface DashboardProps {
  address: string;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ address, onLogout }) => {
  // Mock Data for the Whitelisted LP
  const stats = [
    { label: 'Total Capital Deployed', value: '$2,500,000', change: '+15% from Q4', icon: <Briefcase className="w-5 h-5 text-dynasty-blue" /> },
    { label: 'Current Portfolio Value', value: '$4,125,000', change: '1.65x TVPI', icon: <PieChart className="w-5 h-5 text-dynasty-lime" /> },
    { label: 'Net IRR', value: '32.5%', change: 'Vintage 2024', icon: <TrendingUp className="w-5 h-5 text-purple-500" /> },
  ];

  const reports = [
    { name: 'Q1 2025 LP Update', date: 'Mar 15, 2025', type: 'PDF' },
    { name: 'FY 2024 Audited Financials', date: 'Jan 20, 2025', type: 'PDF' },
    { name: 'Deep Dive: AI Infrastructure Thesis', date: 'Dec 10, 2024', type: 'Deck' },
  ];

  const allocations = [
    { name: 'Dynasty Fund II', status: 'Deploying', progress: 65, color: 'bg-dynasty-lime' },
    { name: 'Liquid Token Strat', status: 'Active', progress: 100, color: 'bg-dynasty-blue' },
    { name: 'SPV: Layer 1 Infra', status: 'Closed', progress: 100, color: 'bg-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-dynasty-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-dynasty-lime rounded-full animate-pulse"></span>
              <h2 className="text-xs font-display tracking-[0.2em] text-dynasty-lime">LIMITED PARTNER PORTAL</h2>
            </div>
            <h1 className="text-3xl font-bold text-white">Investment Overview</h1>
          </div>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <div className="text-right">
              <p className="text-[10px] text-gray-500 uppercase tracking-wider">Connected Wallet</p>
              <p className="font-mono text-sm text-dynasty-blue">{address.slice(0, 6)}...{address.slice(-4)}</p>
            </div>
            <button 
              onClick={onLogout}
              className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="glass-panel p-6 rounded-xl border-t border-white/5 relative overflow-hidden group hover:border-dynasty-lime/30 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <p className="text-xs text-gray-400 uppercase tracking-widest">{stat.label}</p>
                <div className="p-2 bg-white/5 rounded-lg group-hover:scale-110 transition-transform">{stat.icon}</div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2 font-display">{stat.value}</h3>
              <p className="text-xs text-gray-500 font-mono">{stat.change}</p>
              
              {/* Decorative Glow */}
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-dynasty-lime/10 transition-colors"></div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Timeline / Allocation Status */}
          <div className="lg:col-span-2 glass-panel p-8 rounded-xl">
             <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-dynasty-lime" />
                Fund Allocation Status
             </h3>
             
             <div className="space-y-8">
                {allocations.map((alloc, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-end mb-2">
                      <div>
                        <h4 className="font-bold text-white">{alloc.name}</h4>
                        <span className="text-xs text-gray-500 uppercase tracking-wider">{alloc.status}</span>
                      </div>
                      <span className="font-mono text-dynasty-lime text-sm">{alloc.progress}% Deployed</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${alloc.color} transition-all duration-1000 ease-out`} 
                        style={{ width: `${alloc.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
             </div>

             <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-[10px] text-gray-500 uppercase">Next Capital Call</p>
                  <p className="text-white font-bold mt-1">Q3 2025</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase">Distributions</p>
                  <p className="text-white font-bold mt-1">$125,000</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase">Management Fee</p>
                  <p className="text-white font-bold mt-1">2.0%</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase">Carry</p>
                  <p className="text-white font-bold mt-1">20%</p>
                </div>
             </div>
          </div>

          {/* Reports & Meetings */}
          <div className="space-y-6">
            
            {/* Reports */}
            <div className="glass-panel p-6 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-dynasty-blue" />
                Quarterly Reports
              </h3>
              <div className="space-y-3">
                {reports.map((report, i) => (
                  <div key={i} className="group flex justify-between items-center p-3 bg-white/5 rounded hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 bg-black/50 rounded text-gray-400 group-hover:text-white">
                        <FileText className="w-3 h-3" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-200 group-hover:text-white font-medium">{report.name}</p>
                        <p className="text-[10px] text-gray-500">{report.date}</p>
                      </div>
                    </div>
                    <Download className="w-4 h-4 text-gray-600 group-hover:text-dynasty-lime transition-colors" />
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 text-xs text-gray-400 hover:text-white border border-white/10 hover:border-white/30 rounded transition-colors uppercase tracking-wider">
                View All Documents
              </button>
            </div>

            {/* Request Meeting */}
            <div className="bg-gradient-to-br from-dynasty-blue/20 to-purple-900/20 border border-dynasty-blue/30 p-6 rounded-xl text-center">
              <h3 className="text-white font-bold mb-2">Need Assistance?</h3>
              <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                Schedule a direct line with our managing partners to discuss portfolio performance or upcoming allocation rights.
              </p>
              <a 
                href="mailto:dynastyinc@proton.me?subject=LP%20Meeting%20Request"
                className="inline-flex items-center gap-2 bg-dynasty-blue text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Request Meeting
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
