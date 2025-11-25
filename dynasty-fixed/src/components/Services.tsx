import React from 'react';
import { Rocket, ShieldCheck, Code2, Users } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    title: "Strategic Advisory",
    description: "Navigate the complex regulatory and economic landscapes of Web3 with our veteran insights.",
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    title: "Go-To-Market",
    description: "Launch with velocity. We provide access to our extensive network of exchanges, influencers, and market makers.",
    icon: <Rocket className="w-8 h-8" />
  },
  {
    title: "Engineering & Audit",
    description: "Our in-house dev team reviews contracts and assists with architecture. We build with you.",
    icon: <Code2 className="w-8 h-8" />
  },
  {
    title: "Talent Acquisition",
    description: "Recruiting top-tier talent for your protocol from our exclusive database of engineers and execs.",
    icon: <Users className="w-8 h-8" />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-dynasty-slate relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-sm font-display tracking-[0.2em] text-dynasty-lime mb-2">OUR CAPABILITIES</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">More Than Capital. <br/><span className="text-gray-500">Sweat Equity.</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative p-8 glass-panel hover:bg-white/5 transition-all duration-500 border-t-2 border-t-transparent hover:border-t-dynasty-lime">
              <div className="mb-6 text-dynasty-lime group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;