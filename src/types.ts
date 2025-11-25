import React from 'react';

declare global {
  interface Window {
    ethereum?: any;
    okxwallet?: any;
  }
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PortfolioItem {
  name: string;
  description: string;
  category: string;
  image?: string;
  icon?: React.ReactNode;
  tag?: string;
  detail?: string;
  stats?: string[];
  color?: string; // For custom hover colors
  link?: string;
  hasCaseStudy?: boolean;
}

export interface OracleResponse {
  verdict: string;
  analysis: string;
  score: number;
}