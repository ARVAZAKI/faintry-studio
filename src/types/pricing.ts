export type PricingFeature = {
  label: string;
  included: boolean;
};

export type PricingPackage = {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: PricingFeature[];
  highlighted: boolean;
  ctaLabel: string;
};
