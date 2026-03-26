import { NAV_LINKS, SITE_NAME, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/constants';
import { buildWhatsAppUrl } from '@/lib/utils';

export default function Footer() {
  const year = 2026;
  const waUrl = buildWhatsAppUrl(WHATSAPP_NUMBER, WHATSAPP_MESSAGE);

  return (
    <footer className="bg-[#060e1c] text-blue-300 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-white font-bold text-lg mb-3">{SITE_NAME}</h3>
          <p className="text-sm text-blue-400 leading-relaxed">
            Kami membangun company profile modern yang membantu bisnis Anda tampil profesional dan
            menarik di dunia digital.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
            Navigasi
          </h4>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm hover:text-[#38BDF8] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
            Kontak
          </h4>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors"
          >
            Chat via WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/5 text-center py-4 text-xs text-blue-500">
        © 2024 {SITE_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
