import { motion } from "motion/react";
import { Users, User, Layout, Home } from "lucide-react";

const places = [
  { icon: <User className="w-8 h-8" />, label: "Индивидуальные занятия" },
  { icon: <Users className="w-8 h-8" />, label: "Мини-группы" },
  { icon: <Layout className="w-8 h-8" />, label: "Курсы" },
  { icon: <Home className="w-8 h-8" />, label: "Занятия дома" },
];

export function WhereToUse() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12">Где использовать?</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {places.map((place, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shadow-inner">
                  {place.icon}
                </div>
                <h3 className="font-semibold text-slate-700 text-lg">{place.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}