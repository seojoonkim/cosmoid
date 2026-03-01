"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 bg-[var(--bg)] border-b border-[var(--border)] transition-shadow ${scrolled ? "shadow-sm" : ""}`}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <motion.a
          href="/"
          className="flex items-center gap-1.5"
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <motion.img
            src="/logo-icon.svg" alt="" className="h-9 w-9"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
          />
          <motion.span
            style={{
              fontWeight: 800,
              fontSize: "1.45rem",
              letterSpacing: "-0.03em",
              fontFamily: "var(--font-nunito, 'Nunito', system-ui)",
              background: "linear-gradient(90deg, #7c3aed 0%, #6366f1 40%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundSize: "200% 100%",
            }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >cosmoid</motion.span>
        </motion.a>
        <div className="hidden md:flex items-center gap-7 text-base text-[var(--muted)] font-medium">
          <a href="#why" className="hover:text-[var(--text)] transition-colors">소개</a>
          <a href="#features" className="hover:text-[var(--text)] transition-colors">기능</a>
          <a href="#how" className="hover:text-[var(--text)] transition-colors">사용법</a>
          <a href="#pricing" className="hover:text-[var(--text)] transition-colors">요금제</a>
        </div>
        <div className="hidden md:flex">
          <a href="#cta" className="rounded-full px-5 py-2 text-base font-semibold text-white hover:opacity-90 transition-opacity" style={{background:"var(--purple)"}}>
            베타 신청
          </a>
        </div>
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-[var(--border)] p-2.5 text-[var(--text)]"
          aria-label="메뉴 열기"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden overflow-hidden border-b border-[var(--border)] bg-[var(--bg)]"
          >
            <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-3 text-[var(--muted)] font-medium">
              <a href="#why" className="py-1.5 hover:text-[var(--text)] transition-colors" onClick={() => setIsOpen(false)}>소개</a>
              <a href="#features" className="py-1.5 hover:text-[var(--text)] transition-colors" onClick={() => setIsOpen(false)}>기능</a>
              <a href="#how" className="py-1.5 hover:text-[var(--text)] transition-colors" onClick={() => setIsOpen(false)}>사용법</a>
              <a href="#pricing" className="py-1.5 hover:text-[var(--text)] transition-colors" onClick={() => setIsOpen(false)}>요금제</a>
              <a
                href="#cta"
                className="mt-2 inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-base font-semibold text-white hover:opacity-90 transition-opacity"
                style={{ background: "var(--purple)" }}
                onClick={() => setIsOpen(false)}
              >
                베타 신청
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
