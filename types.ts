import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  description: string;
  tags: string[];
  kpi: string;
  image: string;
  // Detailed fields for modal
  challenge: string;
  solution: string;
}

export interface MetricItem {
  value: string;
  label: string;
  icon: LucideIcon;
}