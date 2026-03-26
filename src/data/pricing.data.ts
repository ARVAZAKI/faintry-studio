import type { PricingPackage } from '@/types';
import { WHATSAPP_NUMBER } from '@/constants';

const buildOrderMessage = (packageName: string) =>
  `Halo Faintry Studio, saya tertarik dengan paket *${packageName}*. Bisa bantu saya?`;

export const pricingData: PricingPackage[] = [
  {
    id: 'pkg-starter',
    name: 'Starter',
    price: 'Rp 500.000',
    priceNote: 'mulai dari',
    description:
      'Pilihan tepat untuk bisnis yang ingin mulai hadir secara digital dengan tampilan profesional dan harga terjangkau.',
    highlighted: false,
    ctaLabel: 'Pesan Sekarang',
    features: [
      { label: 'Desain Landing Page Modern', included: true },
      { label: 'Desain Responsif Mobile', included: true },
      { label: 'Tombol & Form Kontak WhatsApp', included: true },
      { label: 'SEO Dasar (Meta, Open Graph)', included: true },
      { label: 'Revisi hingga 3x', included: true },
      { label: 'Gratis Domain .com 1 Tahun', included: true },
      { label: 'Animasi Scroll & Interaktivitas', included: false },
      { label: 'Multi Halaman', included: false },
      { label: 'Kelola Konten Sendiri via Admin', included: false },
    ],
  },
  {
    id: 'pkg-professional',
    name: 'Professional',
    price: 'Rp 1.000.000',
    priceNote: 'mulai dari',
    description:
      'Website multi-halaman yang bisa Anda kelola dan perbarui sendiri kapan saja — tanpa perlu keahlian coding.',
    highlighted: true,
    ctaLabel: 'Pilih Paket Ini',
    features: [
      { label: 'Hingga 5 Halaman Custom', included: true },
      { label: 'Desain Responsif Mobile', included: true },
      { label: 'Tombol & Form Kontak WhatsApp', included: true },
      { label: 'SEO Lanjutan (Schema, Sitemap)', included: true },
      { label: 'Revisi hingga 5x', included: true },
      { label: 'Gratis Domain .com 1 Tahun', included: true },
      { label: 'Animasi Scroll & Interaktivitas', included: true },
      { label: 'Panel Admin — Ubah Konten Sendiri', included: true },
      { label: 'Garansi Pemeliharaan 3 Bulan', included: true },
    ],
  },
  {
    id: 'pkg-custom',
    name: 'Custom',
    price: 'Rp 2.000.000',
    priceNote: 'mulai dari',
    description:
      'Kebutuhan khusus? Fitur dan spesifikasi sepenuhnya kami sesuaikan lewat sesi diskusi bersama tim kami.',
    highlighted: false,
    ctaLabel: 'Diskusikan Kebutuhan',
    features: [
      { label: 'Halaman & Fitur Sesuai Kebutuhan', included: true },
      { label: 'Desain Responsif Mobile', included: true },
      { label: 'Tombol & Form Kontak WhatsApp', included: true },
      { label: 'SEO Lanjutan (Schema, Sitemap)', included: true },
      { label: 'Revisi Tidak Terbatas', included: true },
      { label: 'Domain & Hosting (diskusikan)', included: true },
      { label: 'Animasi Scroll & Interaktivitas', included: true },
      { label: 'Panel Admin — Kelola Konten Sendiri', included: true },
      { label: 'Garansi Pemeliharaan 3 Bulan', included: true },
    ],
  },
];

export { buildOrderMessage, WHATSAPP_NUMBER };
