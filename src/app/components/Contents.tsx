import { motion } from "motion/react";
import { BookA, SpellCheck, PenTool, Headphones, ListPlus, Smile, TrendingUp } from "lucide-react";

const contentItems = [
  { icon: <BookA className="w-8 h-8" />, title: "Буквы и звуки", color: "bg-purple-100 text-purple-600", border: "border-purple-200" },
  { icon: <SpellCheck className="w-8 h-8" />, title: "Чтение", desc: "Слов и предложений", color: "bg-emerald-100 text-emerald-600", border: "border-emerald-200" },
  { icon: <PenTool className="w-8 h-8" />, title: "Письмо", color: "bg-blue-100 text-blue-600", border: "border-blue-200" },
  { icon: <Headphones className="w-8 h-8" />, title: "Listening", color: "bg-pink-100 text-pink-600", border: "border-pink-200" },
  { icon: <ListPlus className="w-8 h-8" />, title: "Лексика", color: "bg-amber-100 text-amber-600", border: "border-amber-200" },
  { icon: <Smile className="w-8 h-8" />, title: "Мини-комиксы", color: "bg-rose-100 text-rose-600", border: "border-rose-200" },
  { icon: <TrendingUp className="w-8 h-8" />, title: "Усложнение", desc: "Постепенный прогресс", color: "bg-teal-100 text-teal-600", border: "border-teal-200" },
];

export function Contents() {
  return (
    <section className="py-20 bg-slate-50" id="contents">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Что внутри пособия?</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Всё необходимое для комплексного освоения языка, собранное под одной обложкой.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {contentItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className={`bg-white rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all border ${item.border}`}
            >
              <div className={`p-4 rounded-full ${item.color} mb-4`}>
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-1">{item.title}</h3>
              {item.desc && <p className="text-slate-500 text-sm">{item.desc}</p>}
            </motion.div>
          ))}
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: contentItems.length * 0.1 }}
             className="bg-purple-600 rounded-3xl p-6 sm:p-8 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-lg transition-all text-white"
          >
             <h3 className="font-bold text-xl mb-2">И многое другое!</h3>
             <p className="text-purple-200 text-sm">Всё в одном месте</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}