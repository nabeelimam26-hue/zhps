import { ChartNoAxesCombined, Cpu, Layers3, ShieldCheck } from 'lucide-react';

export const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Proof', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const services = [
  {
    icon: Cpu,
    title: 'AI-ready product systems',
    description: 'Composable interfaces, automation flows, and data-backed experiences built to evolve with your roadmap.',
  },
  {
    icon: Layers3,
    title: 'Premium web platforms',
    description: 'High-performance React frontends with a polished visual language, accessible layouts, and reusable components.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Growth experience design',
    description: 'Landing pages, funnels, and dashboards tuned for clarity, trust, and measurable conversion momentum.',
  },
  {
    icon: ShieldCheck,
    title: 'Scalable foundations',
    description: 'Practical architecture decisions that keep delivery fast without creating brittle, overengineered systems.',
  },
];

export const testimonials = [
  {
    quote: 'The interface finally feels as advanced as the platform behind it. Our demo-to-close cycle shortened immediately.',
    name: 'Maya Chen',
    role: 'Founder, LumosGrid',
  },
  {
    quote: 'They brought structure, motion, and polish without slowing the product team down. It feels premium and practical.',
    name: 'Elias Morgan',
    role: 'VP Product, NovaOps',
  },
  {
    quote: 'The new system gave us a bold presence and a reusable foundation for every launch that followed.',
    name: 'Ari Patel',
    role: 'Growth Lead, HelioStack',
  },
];
