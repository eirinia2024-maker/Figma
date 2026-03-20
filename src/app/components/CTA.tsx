import { motion } from "motion/react";

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-t from-emerald-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-6">
            🎉 Уже в продаже
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Пособие «Read with Owly» ждёт вас!
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Сделайте инвестицию в будущее ребёнка. Увлекательные уроки, качественные материалы и видимый результат с первых занятий.
          </p>
          
          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-emerald-500 text-white px-10 py-5 rounded-full font-extrabold text-2xl hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-200 transition-all active:scale-95 shadow-lg"
          >
            Купить пособие
          </button>
        </motion.div>
      </div>
    </section>
  );
}