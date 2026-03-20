import React from "react";
import { Hero } from "./components/Hero";
import { TargetAudience } from "./components/TargetAudience";
import { Contents } from "./components/Contents";
import { WhySpecial } from "./components/WhySpecial";
import { Package } from "./components/Package";
import { WhereToUse } from "./components/WhereToUse";
import { Pricing } from "./components/Pricing";
import { CTA } from "./components/CTA";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-purple-200 selection:text-purple-900 overflow-x-hidden">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-slate-800 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
            <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center font-extrabold">
              O
            </div>
            Read with Owly
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#audience" className="text-slate-600 hover:text-purple-600 font-medium transition-colors">Для кого</a>
            <a href="#contents" className="text-slate-600 hover:text-purple-600 font-medium transition-colors">Что внутри</a>
            <a href="#pricing" className="text-slate-600 hover:text-purple-600 font-medium transition-colors">Стоимость</a>
          </nav>
          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-bold hover:bg-purple-200 transition-colors"
          >
            Купить
          </button>
        </div>
      </header>

      <main>
        <Hero />
        <TargetAudience />
        <Contents />
        <WhySpecial />
        <Package />
        <WhereToUse />
        <Pricing />
        <CTA />
      </main>
      
      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-4 text-slate-300 font-medium">© {new Date().getFullYear()} Read with Owly. Все права защищены.</p>
          <p className="text-sm">Создано с любовью для маленьких учеников.</p>
        </div>
      </footer>
    </div>
  );
}