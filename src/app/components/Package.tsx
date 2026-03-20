import { motion } from "motion/react";
import { BookOpenText, Speaker, FileHeart } from "lucide-react";

const packageItems = [
  {
    icon: <BookOpenText className="w-10 h-10" />,
    title: "Физическая книга",
    desc: "Качественная печать, формат А4, 90 страниц пользы.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <Speaker className="w-10 h-10" />,
    title: "Аудиоматериалы",
    desc: "Доступны по удобному QR-коду прямо на страницах пособия.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: <FileHeart className="w-10 h-10" />,
    title: "Дополнительные материалы",
    desc: "Бонусы для закрепления знаний и игр.",
    color: "bg-rose-50 text-rose-600",
  }
];

export function Package() {
  return (
    <section className="py-20 bg-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Комплект материалов</h2>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            Всё, что нужно для полноценного старта обучения, уже в комплекте.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packageItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className={`p-4 rounded-2xl inline-block mb-6 ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-purple-100 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}