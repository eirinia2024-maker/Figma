import { motion } from "motion/react";
import heroImg from "../assets/73002c54f9c0b66c8641748843072ed429ecbbbf.png";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-6 shadow-sm">
              ✨ Новое издание
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
              Пособие <span className="text-purple-600">«Read with Owly»</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Современное пособие по обучению чтению на английском языке для детей. Сделайте первые шаги в чтении лёгкими, весёлыми и эффективными!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-200 transition-all active:scale-95"
              >
                Купить пособие
              </button>
              <button 
                onClick={() => document.getElementById('contents')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-purple-600 border-2 border-purple-100 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 hover:border-purple-200 transition-all active:scale-95"
              >
                Узнать больше
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative w-full max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-yellow-100 rounded-full blur-3xl opacity-50 transform translate-y-10 scale-110"></div>
            <img 
              src={heroImg} 
              alt="Read with Owly Character" 
              className="relative z-10 w-full h-auto drop-shadow-xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
