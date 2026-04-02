// Global type definitions for the enterprise website

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image?: string;
  price?: number;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
