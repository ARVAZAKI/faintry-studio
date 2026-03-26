/**
 * Pricing service.
 * Currently returns local data; swap to an API call when ready.
 */

import type { PricingPackage } from '@/types';
import { pricingData } from '@/data/pricing.data';
// import { api } from './api';

export async function getPricingPackages(): Promise<PricingPackage[]> {
  // When API is ready, replace with:
  // return api.get<PricingPackage[]>('/pricing', { cache: 'force-cache', tags: ['pricing'] });

  return Promise.resolve(pricingData);
}
