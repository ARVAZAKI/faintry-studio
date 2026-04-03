export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://faintrystudio.com';
export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? 'Faintry Studio';

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '6285158473994';
export const WHATSAPP_MESSAGE =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
  'Halo Faintry Studio, saya ingin berkonsultasi mengenai pembuatan website.';

export const NAV_LINKS = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Tentang', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimoni', href: '#testimonials' },
  { label: 'Harga', href: '#pricing' },
] as const;

export const COLORS = {
  darkBlue: '#0A1628',
  blue: '#1E40AF',
  lightBlue: '#38BDF8',
  white: '#F8FAFC',
} as const;
