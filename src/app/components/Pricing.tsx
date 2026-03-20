import { motion } from "motion/react";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Стоимость</h2>
          <p className="text-slate-600 text-lg">Прозрачная цена за качественный материал</p>
        </div>

        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-[40px] p-8 md:p-12 border border-purple-100 shadow-xl shadow-purple-900/5 relative overflow-hidden"
          >
            {/* Decoration */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-50"></div>
            
            <div className="relative z-10">
              <span className="inline-block bg-white text-purple-600 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm mb-6 uppercase tracking-wider">
                Полный комплект
              </span>
              
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-extrabold text-slate-800">900</span>
                <span className="text-2xl font-bold text-slate-500">руб</span>
                <span className="text-sm text-slate-400 ml-2">+ доставка</span>
              </div>

              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-1 rounded-full"><Check className="w-4 h-4 text-emerald-600" /></div>
                  <span className="text-slate-700">Пособие формата А4</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-1 rounded-full"><Check className="w-4 h-4 text-emerald-600" /></div>
                  <span className="text-slate-700">90 страниц полезного контента</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-1 rounded-full"><Check className="w-4 h-4 text-emerald-600" /></div>
                  <span className="text-slate-700">Аудио и материалы по QR-коду</span>
                </li>
              </ul>

              <button className="w-full bg-purple-600 text-white py-4 rounded-2xl font-bold text-xl hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-200 transition-all active:scale-95 shadow-md">
                Заказать пособие
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}