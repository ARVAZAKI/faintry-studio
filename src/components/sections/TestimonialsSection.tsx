'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

type Testimonial = {
  business: string;
  initial: string;
  message: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    business: 'PT Nusantara Jaya',
    initial: 'NJ',
    message:
      'Website kami sekarang jauh lebih profesional. Banyak klien baru yang bilang mereka tertarik setelah lihat website kami. Hasilnya melebihi ekspektasi!',
    rating: 5,
  },
  {
    business: 'Klinik Sehat Bersama',
    initial: 'KS',
    message:
      'Proses pengerjaannya cepat dan responsif. Tim Faintry selalu siap membantu bahkan setelah website selesai. Sangat rekomendasikan!',
    rating: 5,
  },
  {
    business: 'CV Mitra Sejahtera',
    initial: 'MS',
    message:
      'Desainnya modern dan elegan persis seperti yang kami bayangkan. Klien-klien kami langsung notice perubahan positifnya.',
    rating: 5,
  },
  {
    business: 'Yayasan Pendidikan Mulia',
    initial: 'YP',
    message:
      'Awalnya kami ragu soal budget, tapi ternyata harganya sangat worth it. Website kami sekarang masuk halaman pertama Google!',
    rating: 5,
  },
  {
    business: 'FreshMart Online',
    initial: 'FM',
    message:
      'Timnya sangat komunikatif dan paham kebutuhan bisnis kami. Setiap revisi ditanggapi cepat tanpa drama. Top banget!',
    rating: 5,
  },
  {
    business: 'Studio ArtiBox',
    initial: 'AB',
    message:
      'Portofolio online kami sekarang tampil jauh lebih menarik. Order masuk meningkat signifikan setelah website baru diluncurkan.',
    rating: 5,
  },
  {
    business: 'Bengkel Auto Prima',
    initial: 'AP',
    message:
      'Tidak menyangka bisnis bengkel pun bisa punya website sekeren ini. Banyak pelanggan baru nemu kami lewat Google sekarang.',
    rating: 5,
  },
  {
    business: 'Butik Naira Collection',
    initial: 'NC',
    message:
      'Website-nya cantik banget, sesuai brand kami. Penjualan online meningkat drastis dalam sebulan pertama. Terima kasih Faintry!',
    rating: 5,
  },
];

// Duplicate for seamless infinite loop
const row1 = [...testimonials.slice(0, 4), ...testimonials.slice(0, 4)];
const row2 = [...testimonials.slice(4), ...testimonials.slice(4)];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-amber-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="w-[320px] shrink-0 mx-3 bg-white/[0.05] border border-white/[0.08] rounded-2xl p-5 flex flex-col gap-4 hover:bg-white/[0.08] hover:border-[#38BDF8]/20 transition-colors duration-300">
      {/* Quote mark */}
      <svg className="w-6 h-6 text-[#38BDF8]/40 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      {/* Message */}
      <p className="text-blue-100/80 text-sm leading-relaxed flex-1">
        {item.message}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-white/[0.07]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1E40AF] to-[#38BDF8] flex items-center justify-center text-white text-xs font-black shrink-0">
            {item.initial}
          </div>
          <span className="text-white text-xs font-semibold">{item.business}</span>
        </div>
        <StarRating count={item.rating} />
      </div>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: Testimonial[]; reverse?: boolean }) {
  const duration = items.length * 8;
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex"
        animate={{ x: reverse ? ['0%', '50%'] : ['0%', '-50%'] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        style={{ willChange: 'transform' }}
      >
        {items.map((item, i) => (
          <TestimonialCard key={`${item.business}-${i}`} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-[#0A1628] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[#38BDF8] text-sm font-semibold tracking-widest uppercase mb-3">
            Apa Kata Mereka
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Klien Kami Berbicara
          </h2>
          <div className="w-12 h-1 rounded-full bg-[#38BDF8] mx-auto" />
        </motion.div>
      </div>

      {/* Rows with fade edges */}
      <div className="relative flex flex-col gap-5">
        {/* Left & right fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#0A1628] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#0A1628] to-transparent" />

        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
