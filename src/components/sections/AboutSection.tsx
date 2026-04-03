import { AnimatedSection, SectionTitle } from '@/components/ui';

const stats = [
  { value: '50+', label: 'Project Selesai' },
  { value: '40+', label: 'Klien Puas' },
  { value: '3+', label: 'Tahun Pengalaman' },
  { value: '100%', label: 'On-Time Delivery' },
];

const values = [
  { label: 'Hasil Sesuai Ekspektasi', desc: 'Desain dan fitur sesuai kebutuhan bisnis Anda.' },
  { label: 'Pengerjaan Tepat Waktu', desc: 'Komitmen deadline tanpa kompromi kualitas.' },
  { label: 'Mudah Ditemukan di Google', desc: 'Setiap website kami optimalkan untuk SEO.' },
  { label: 'Nyaman di Semua Perangkat', desc: 'Tampil sempurna di HP, tablet, dan desktop.' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title="Tentang Faintry Studio"
          subtitle="Kami hadir agar bisnis Anda tidak sekadar punya website, tapi punya aset digital yang benar-benar bekerja untuk Anda."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <AnimatedSection direction="left">
            <h3 className="text-2xl font-bold text-[#0A1628] mb-4">
              Kami Bangun Website yang Bikin Klien Percaya
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Kesan pertama itu penting. Ketika calon klien membuka website Anda, mereka
              memutuskan dalam hitungan detik apakah bisnis Anda layak dipercaya atau tidak.
              Faintry Studio memastikan detik-detik pertama itu selalu meninggalkan kesan
              yang tak terlupakan.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Lebih dari sekadar tampilan, setiap website yang kami bangun dirancang agar
              mudah ditemukan di Google, cepat diakses, dan nyaman digunakan sehingga
              bisnis Anda terus berkembang bahkan saat Anda sedang tidur.
            </p>

            {/* Value props */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((v, i) => (
                <div
                  key={v.label}
                  className="group relative px-5 py-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-[#38BDF8]/40 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shrink-0" />
                    <span className="text-[#0A1628] text-sm font-semibold">{v.label}</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed pl-3.5">{v.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: stats + visual */}
          <AnimatedSection direction="right" className="flex flex-col gap-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#0A1628] rounded-2xl p-6 flex flex-col justify-between min-h-[110px]"
                >
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#38BDF8] to-[#60A5FA]">
                    {stat.value}
                  </div>
                  <div className="text-blue-300/70 text-sm font-medium mt-2">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Accent card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1E40AF] to-[#2563EB] p-6 text-white">
              <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-white/10" />
              <div className="absolute -right-2 -bottom-2 w-16 h-16 rounded-full bg-white/5" />
              <p className="text-sm font-semibold leading-relaxed relative z-10">
                &ldquo;Website bukan sekadar alamat online, ini adalah wajah bisnis Anda yang bekerja 24 jam sehari.&rdquo;
              </p>
              <div className="mt-4 text-blue-200 text-xs font-medium relative z-10">— Tim Faintry Studio</div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
