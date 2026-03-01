"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

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
          className="flex items-center gap-2"
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <motion.img
            src="/logo-icon.svg" alt="" className="h-8 w-8"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
          />
          <span style={{fontWeight:800,fontSize:"1.2rem",letterSpacing:"-0.04em",color:"#1c1033"}}>cosmoid</span>
        </motion.a>
        <div className="hidden md:flex items-center gap-7 text-base text-[var(--muted)] font-medium">
          <a href="#why" className="hover:text-[var(--text)] transition-colors">소개</a>
          <a href="#features" className="hover:text-[var(--text)] transition-colors">기능</a>
          <a href="#how" className="hover:text-[var(--text)] transition-colors">사용법</a>
          <a href="#pricing" className="hover:text-[var(--text)] transition-colors">요금제</a>
        </div>
        <a href="#beta" className="rounded-full px-5 py-2 text-base font-semibold text-white hover:opacity-90 transition-opacity" style={{background:"var(--purple)"}}>
          베타 신청
        </a>
      </div>
    </nav>
  );
}
