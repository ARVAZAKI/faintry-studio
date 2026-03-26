'use client';

import { motion } from 'framer-motion';
import type { PricingPackage } from '@/types';
import { AnimatedSection, SectionTitle } from '@/components/ui';
import { buildWhatsAppUrl } from '@/lib/utils';
import { WHATSAPP_NUMBER } from '@/constants';
import { buildOrderMessage } from '@/data/pricing.data';

type Props = { packages: PricingPackage[] };

export default function PricelistSection({ packages }: Props) {
  return (
    <section id="pricing" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title="Paket Harga"
          subtitle="Pilih paket yang sesuai dengan kebutuhan dan anggaran bisnis Anda."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, i) => (
            <AnimatedSection key={pkg.id} delay={i * 0.07} direction="up">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                className={`relative flex flex-col h-full rounded-2xl border p-8 transition-shadow duration-300 ${
                  pkg.highlighted
                    ? 'bg-[#0A1628] border-[#38BDF8] shadow-2xl shadow-[#38BDF8]/20'
                    : 'bg-white border-slate-200 hover:shadow-lg'
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#38BDF8] text-[#0A1628] text-xs font-bold rounded-full shadow-md">
                    ⭐ PALING POPULER
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      pkg.highlighted ? 'text-white' : 'text-[#0A1628]'
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={`text-sm mb-4 ${
                      pkg.highlighted ? 'text-blue-300' : 'text-slate-500'
                    }`}
                  >
                    {pkg.description}
                  </p>
                  <div className="flex items-end gap-1">
                    <span
                      className={`text-3xl font-extrabold ${
                        pkg.highlighted ? 'text-[#38BDF8]' : 'text-[#1E40AF]'
                      }`}
                    >
                      {pkg.price}
                    </span>
                    <span
                      className={`text-sm mb-1 ${
                        pkg.highlighted ? 'text-blue-400' : 'text-slate-400'
                      }`}
                    >
                      /{pkg.priceNote}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div
                  className={`h-px w-full mb-6 ${
                    pkg.highlighted ? 'bg-white/10' : 'bg-slate-100'
                  }`}
                />

                {/* Features */}
                <ul className="flex-1 space-y-3 mb-8">
                  {pkg.features.map((feat) => (
                    <li key={feat.label} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 shrink-0 text-base ${
                          feat.included
                            ? 'text-green-400'
                            : pkg.highlighted
                            ? 'text-white/20'
                            : 'text-slate-300'
                        }`}
                      >
                        {feat.included ? '✓' : '✕'}
                      </span>
                      <span
                        className={`text-sm ${
                          feat.included
                            ? pkg.highlighted
                              ? 'text-blue-100'
                              : 'text-slate-700'
                            : pkg.highlighted
                            ? 'text-white/30 line-through'
                            : 'text-slate-300 line-through'
                        }`}
                      >
                        {feat.label}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={buildWhatsAppUrl(WHATSAPP_NUMBER, buildOrderMessage(pkg.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 rounded-full font-semibold text-sm transition-all ${
                    pkg.highlighted
                      ? 'bg-[#38BDF8] text-[#0A1628] hover:bg-sky-300 shadow-lg shadow-[#38BDF8]/30'
                      : 'bg-[#1E40AF] text-white hover:bg-[#2563EB]'
                  }`}
                >
                  {pkg.ctaLabel}
                </a>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
