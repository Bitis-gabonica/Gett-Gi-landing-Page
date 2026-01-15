export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  gridSpan?: number; // 1 or 2 columns
  bgImage?: string;
  variant?: 'default' | 'image' | 'gradient';
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  type: string;
  description: string;
  cta: string;
  isPopular?: boolean;
}