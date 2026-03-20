import { motion } from "motion/react";
import puzzleImg from "figma:asset/e62482af7d539e8c5f10e1df6a3e538f5f22c9b4.png";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Phonics-подход для правильного произношения",
  "Не только чтение, но и письмо и аудирование",
  "Идеально подходит для уроков и самостоятельной работы дома",
  "Современный дизайн и вовлекающие игровые элементы",
];

export function WhySpecial() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-purple-50 rounded-l-[100px] -z-10 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Почему это пособие особенное?
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Мы объединили лучшие методики и завернули их в красивую, современную форму, от которой дети в восторге.
            </p>

            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-md lg:max-w-full relative"
          >
            <div className="absolute inset-0 bg-purple-200 rounded-full blur-3xl opacity-30 scale-90"></div>
            <img 
              src={puzzleImg} 
              alt="Owl with puzzle" 
              className="relative z-10 w-full h-auto drop-shadow-lg"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}