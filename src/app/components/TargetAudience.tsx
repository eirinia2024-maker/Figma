import { motion } from "motion/react";
import audienceImg from "../assets/audience.png";
import { Baby, GraduationCap, Home, BookOpen } from "lucide-react";

const audiences = [
  {
    icon: <Baby className="w-6 h-6 text-pink-500" />,
    title: "Дети",
    desc: "Начинающие свой путь в чтении",
    color: "bg-pink-100",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-purple-600" />,
    title: "Преподаватели",
    desc: "Английского языка",
    color: "bg-purple-100",
  },
  {
    icon: <Home className="w-6 h-6 text-emerald-600" />,
    title: "Родители",
    desc: "Для домашних занятий",
    color: "bg-emerald-100",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-amber-500" />,
    title: "Уроки и дом",
    desc: "Универсальный формат",
    color: "bg-amber-100",
  },
];

export function TargetAudience() {
  return (
    <section className="py-20 bg-white" id="audience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full max-w-md lg:max-w-full relative"
          >
            <div className="absolute inset-0 bg-emerald-100 rounded-full blur-3xl opacity-40 scale-105"></div>
            <img 
              src={audienceImg} 
              alt="Owls learning together" 
              className="relative z-10 w-full h-auto"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Для кого создано пособие?
            </h2>
            <p className="text-slate-600 text-lg mb-10">
              «Read with Owly» — это универсальный инструмент, который делает процесс обучения радостным и понятным для всех участников.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {audiences.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow flex items-start gap-4"
                >
                  <div className={`p-3 rounded-2xl ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
