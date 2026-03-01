 "use client";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-[var(--bg)] border-b border-[var(--border)] transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-14 flex items-center justify-between">
        <img src="/logo.svg" alt="Cosmoid" className="h-7" />
        <div className="hidden md:flex items-center gap-7 text-sm text-[var(--muted)] font-medium">
          <a href="#features" className="hover:text-[var(--text)] transition-colors">
            기능
          </a>
          <a href="#pricing" className="hover:text-[var(--text)] transition-colors">
            요금제
          </a>
        </div>
        <a
          href="#beta"
          className="bg-[var(--purple)] text-white rounded-full px-5 py-2 text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          베타 신청
        </a>
      </div>
    </nav>
  );
}
