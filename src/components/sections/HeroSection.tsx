'use client';

import { motion } from 'framer-motion';
import { buildWhatsAppUrl } from '@/lib/utils';
import { WHATSAPP_NUMBER } from '@/constants';



export default function HeroSection() {
  const waUrl = buildWhatsAppUrl(WHATSAPP_NUMBER, 'Halo Faintry Studio, saya ingin konsultasi gratis!');

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#0A1628] flex flex-col">

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Diagonal right-panel accent */}
      <div className="absolute top-0 right-0 w-[55%] h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-bl from-[#1E40AF]/25 via-[#0f2d6e]/10 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full border-l border-white/[0.05] skew-x-[-6deg] origin-top-right" />
      </div>

      {/* Rotating ring */}
      <motion.div
        className="absolute bottom-16 right-16 w-36 h-36 rounded-full border border-[#38BDF8]/15 hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        style={{ willChange: 'transform' }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#38BDF8]/70" />
      </motion.div>
      <motion.div
        className="absolute bottom-24 right-24 w-20 h-20 rounded-full border border-[#38BDF8]/10 hidden lg:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{ willChange: 'transform' }}
      />

      {/* Glowing orb - subtle */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-[#1E40AF]/20 blur-[100px] pointer-events-none" />

      {/* Main layout */}
      <div className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 pt-28 pb-16 items-center">

          {/* ── Left column ── */}
          <div className="flex flex-col">

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl xl:text-[5.5rem] font-black text-white leading-[1.02] tracking-tight mb-7"
            >
              Bisnis Anda<br />
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#818CF8]">
                  Layak Tampil
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-[5px] w-full bg-gradient-to-r from-[#38BDF8]/50 to-[#818CF8]/30 rounded-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, delay: 0.85, ease: 'easeOut' }}
                />
              </span>
              <br />Lebih Keren.
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-blue-300/75 text-lg leading-relaxed max-w-lg mb-10"
            >
              Kami bangun website company profile yang tidak hanya{' '}
              <span className="text-white font-semibold">cantik</span> tapi juga{' '}
              <span className="text-white font-semibold">cepat</span>, teroptimasi{' '}
              <span className="text-white font-semibold">SEO</span>, dan membuat calon klien Anda
              terkesan sejak detik pertama.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-3 mb-14"
            >
              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#0A1628] font-bold text-sm rounded-xl hover:bg-[#38BDF8] transition-all duration-200 shadow-[0_0_0_0] hover:shadow-[0_8px_30px_rgba(56,189,248,0.35)]"
              >
                Lihat Karya Kami
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 text-white/75 hover:text-white hover:border-white/30 font-semibold text-sm rounded-xl transition-all duration-200 backdrop-blur-sm hover:bg-white/5"
              >
                <svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Konsultasi Gratis
              </a>
            </motion.div>


          </div>

          {/* ── Right column — Browser mockup ── */}
          <div className="relative hidden lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full"
            >
              {/* Browser window */}
              <div className="bg-[#0d1b33] rounded-2xl border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)] overflow-hidden">
                {/* Bar */}
                <div className="flex items-center gap-2.5 px-4 py-3 bg-[#091325] border-b border-white/[0.07]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]/80" />
                  </div>
                  <div className="flex-1 mx-3 bg-white/[0.07] rounded-md h-5 flex items-center px-3">
                    <span className="text-[10px] text-blue-300/50 font-mono">faintrystudio.com</span>
                  </div>
                  <div className="w-4 h-4 text-white/20">
                    <svg viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="8" r="1.5"/><circle cx="3" cy="8" r="1.5"/><circle cx="13" cy="8" r="1.5"/></svg>
                  </div>
                </div>

                {/* Fake page preview */}
                <div className="h-56 bg-gradient-to-br from-[#0a1628] via-[#0d1e3a] to-[#0c1730] relative overflow-hidden p-5">
                  {/* Fake nav bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-16 h-2 bg-white/30 rounded" />
                    <div className="flex gap-3">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-10 h-1.5 bg-white/15 rounded" />
                      ))}
                    </div>
                  </div>
                  {/* Fake hero text */}
                  <div className="w-12 h-1.5 bg-[#38BDF8]/50 rounded mb-3" />
                  <div className="w-48 h-3.5 bg-white/25 rounded mb-2" />
                  <div className="w-36 h-3.5 bg-white/20 rounded mb-5" />
                  <div className="w-full h-1.5 bg-white/10 rounded mb-1.5" />
                  <div className="w-3/4 h-1.5 bg-white/10 rounded mb-5" />
                  <div className="flex gap-2">
                    <div className="w-20 h-7 bg-[#1E40AF] rounded-lg" />
                    <div className="w-20 h-7 bg-white/10 border border-white/20 rounded-lg" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0A1628]/80 to-transparent" />
                </div>
              </div>

              {/* Floating badge — SEO */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
                className="absolute -top-5 -right-6 bg-white rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-3"
                style={{ willChange: 'transform' }}
              >
                <div className="w-8 h-8 rounded-xl bg-green-100 flex items-center justify-center text-green-600 text-base font-bold">✓</div>
                <div>
                  <div className="text-[#0A1628] font-bold text-xs leading-tight">SEO Optimized</div>
                  <div className="text-slate-500 text-[10px]">Google #1 Ready</div>
                </div>
              </motion.div>

              {/* Floating badge — Speed */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6, repeatType: 'mirror' }}
                className="absolute -bottom-5 -left-6 bg-[#0d1b33] border border-[#38BDF8]/30 rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-3"
                style={{ willChange: 'transform' }}
              >
                <div className="w-8 h-8 rounded-xl bg-[#38BDF8]/10 flex items-center justify-center text-[#38BDF8] text-base">⚡</div>
                <div>
                  <div className="text-white font-bold text-xs leading-tight">Page Speed 98</div>
                  <div className="text-blue-400 text-[10px]">Ultra Fast Load</div>
                </div>
              </motion.div>

              {/* Floating badge — Mobile */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.2, repeatType: 'mirror' }}
                className="absolute top-1/2 -translate-y-1/2 -left-10 bg-gradient-to-r from-[#1E40AF] to-[#2563EB] rounded-2xl px-4 py-3 shadow-2xl"
                style={{ willChange: 'transform' }}
              >
                <div className="text-white font-bold text-xs">Full Responsive</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>


    </section>
  );
}
