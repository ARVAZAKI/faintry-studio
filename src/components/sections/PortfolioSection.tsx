import Image from 'next/image';
import type { PortfolioItem } from '@/types';
import { AnimatedSection, SectionTitle } from '@/components/ui';

type Props = { items: PortfolioItem[] };

export default function PortfolioSection({ items }: Props) {
  return (
    <section id="portfolio" className="py-24 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title="Portfolio Kami"
          subtitle="Beberapa project yang telah kami kerjakan dengan penuh dedikasi dan kebanggaan."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.08} direction="up">
              <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#38BDF8]/50 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-[#38BDF8]/10">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 bg-[#38BDF8] text-[#0A1628] text-sm font-bold rounded-full"
                    >
                      Lihat Project →
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-blue-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
