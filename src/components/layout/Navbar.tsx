'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, SITE_NAME } from '@/constants';

/** Geometric "F" logomark */
function FaintryMark() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <rect width="30" height="30" rx="7" fill="url(#logo-grad)" />
      <path d="M7 7h16v3.5H10.5v3.5H20v3.5H10.5V23H7V7Z" fill="white" />
      <rect x="14" y="13" width="9" height="3.5" rx="1" fill="#38BDF8" />
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E40AF" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Track active section via IntersectionObserver */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace('#', ''));
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-35% 0px -55% 0px' },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0A1628]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_40px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10 h-16 flex items-center justify-between gap-6">

          {/* Logo */}
          <button
            onClick={() => handleNavClick('#hero')}
            className="flex items-center gap-2.5 group shrink-0"
            aria-label="Kembali ke atas"
          >
            <FaintryMark />
            <span className="text-white font-extrabold text-base tracking-tight group-hover:text-[#38BDF8] transition-colors duration-200">
              {SITE_NAME}
            </span>
          </button>

          {/* Desktop Nav — pill container */}
          <nav className="hidden md:flex items-center flex-1 justify-center">
            <div
              className={`flex items-center gap-0.5 px-1.5 py-1.5 rounded-2xl transition-all duration-300 ${
                scrolled ? 'bg-white/[0.06] border border-white/[0.08]' : ''
              }`}
            >
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive ? 'text-white' : 'text-blue-300/60 hover:text-blue-100'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white/10 rounded-xl border border-white/[0.12]"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* CTA button */}
          <div className="hidden md:block shrink-0">
            <motion.button
              onClick={() => handleNavClick('#pricing')}
              className="px-5 py-2 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-[#1E40AF] to-[#2563EB] hover:to-[#38BDF8] transition-all duration-300 shadow-lg shadow-blue-900/30 hover:shadow-[#38BDF8]/25"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Mulai Sekarang →
            </motion.button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px]"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-5 h-[2px] bg-white rounded-full origin-center"
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block w-5 h-[2px] bg-white rounded-full"
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-5 h-[2px] bg-white rounded-full origin-center"
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            {/* Card drawer */}
            <motion.div
              className="fixed top-[72px] left-4 right-4 z-40 bg-[#0d1b33]/98 backdrop-blur-xl border border-white/[0.1] rounded-2xl shadow-2xl shadow-black/60 overflow-hidden md:hidden"
              initial={{ opacity: 0, scale: 0.94, y: -12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -12 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              {/* Nav links */}
              <nav className="p-3 flex flex-col gap-0.5">
                {NAV_LINKS.map((link, i) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.2 }}
                      onClick={() => handleNavClick(link.href)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-left transition-all ${
                        isActive
                          ? 'bg-white/10 text-white border border-white/[0.1]'
                          : 'text-blue-300/70 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shrink-0" />
                      )}
                      {link.label}
                    </motion.button>
                  );
                })}
              </nav>

              {/* Divider + CTA */}
              <div className="border-t border-white/[0.07] p-3">
                <button
                  onClick={() => handleNavClick('#pricing')}
                  className="w-full py-3 bg-gradient-to-r from-[#1E40AF] to-[#2563EB] text-white text-sm font-bold rounded-xl hover:to-[#38BDF8] transition-all"
                >
                  Mulai Sekarang →
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
