/**
 * Portfolio service.
 * Currently returns local data; swap `getPortfolioItems` to an API call
 * once the backend is ready — just uncomment the api.get() line.
 */

import type { PortfolioItem } from '@/types';
import { portfolioData } from '@/data/portfolio.data';
// import { api } from './api';

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  // When API is ready, replace with:
  // return api.get<PortfolioItem[]>('/portfolio', { cache: 'force-cache', tags: ['portfolio'] });

  return Promise.resolve(portfolioData);
}

export async function getPortfolioItemById(id: string): Promise<PortfolioItem | undefined> {
  const items = await getPortfolioItems();
  return items.find((item) => item.id === id);
}
