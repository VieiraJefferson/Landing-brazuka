// Type definitions for the landing page

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  video?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  business: string;
  text: string;
  rating: number;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

