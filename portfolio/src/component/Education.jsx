import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';

const educationData = [
  {
    institution: "Veer Narmad South Gujarat University",
    degree: "Bachelor of Computer Applications",
    years: "2023 - 2026",
    details: "CGPA: 7.0",
    icon: <GraduationCap className="text-blue-400 mb-6" size={36} strokeWidth={1.5} />
  },
  {
    institution: "K&M.P Science High School",
    degree: "11th – 12th (Science Stream)",
    years: "2021 - 2022",
    details: "Higher Secondary Education",
    icon: <School className="text-purple-400 mb-6" size={36} strokeWidth={1.5} />
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-7xl mx-auto bg-white relative">
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="mb-16 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Education Background</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">My academic journey and qualifications.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="p-8 border border-zinc-200 rounded-3xl bg-zinc-50 shadow-sm hover:border-zinc-300 hover:shadow-md transition-all relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              {edu.icon}
              <h3 className="text-xl font-bold text-zinc-900 mb-2">{edu.institution}</h3>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold mb-2">{edu.degree}</p>
              
              <div className="flex justify-between items-center text-sm text-zinc-500 mt-6 pt-6 border-t border-zinc-200">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
                  {edu.years}
                </span>
                <span className="font-mono bg-zinc-200 text-zinc-700 px-3 py-1 rounded-full text-xs">
                  {edu.details}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
