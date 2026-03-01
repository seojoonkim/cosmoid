"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass" : ""}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-black gradient-text">Cosmoid</div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">기능</a>
          <a href="#pricing" className="hover:text-white transition-colors">요금제</a>
          <a href="#beta" className="hover:text-white transition-colors">베타 신청</a>
        </div>
        <button className="gradient-btn text-white text-sm font-medium px-5 py-2.5 rounded-full">
          무료로 시작하기
        </button>
      </div>
    </nav>
  );
}
