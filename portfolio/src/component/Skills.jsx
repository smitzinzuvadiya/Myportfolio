import { motion } from 'framer-motion';
import { Code2, Database, Wrench, Layout } from 'lucide-react';

const skillCategories = [
    {
        title: "Languages",
        icon: <Code2 className="text-emerald-500 mb-6" size={36} strokeWidth={1.5} />,
        skills: [
            { name: "JavaScript", level: "90%" },
            { name: "HTML & CSS", level: "90%" },
            { name: "Python", level: "80%" },
            { name: "C++", level: "75%" }
        ],
    },
    {
        title: "Frameworks / Libraries",
        icon: <Layout className="text-emerald-500 mb-6" size={36} strokeWidth={1.5} />,
        skills: [
            { name: "React.js", level: "90%" },
            { name: "Node.js", level: "85%" }
        ],
    },
    {
        title: "Databases",
        icon: <Database className="text-emerald-500 mb-6" size={36} strokeWidth={1.5} />,
        skills: [
            { name: "MySQL", level: "85%" },
            { name: "MongoDB", level: "80%" },
            { name: "SQLite", level: "75%" }
        ],
    },
    {
        title: "Developer Tools",
        icon: <Wrench className="text-emerald-500 mb-6" size={36} strokeWidth={1.5} />,
        skills: [
            { name: "GitHub", level: "90%" },
            { name: "VS Code", level: "95%" },
            { name: "Antigravity", level: "90%" },
            { name: "Cursor", level: "90%" }
        ],
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 max-w-7xl mx-auto bg-zinc-50/50 dark:bg-zinc-900/20 rounded-t-[3rem]">
            <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Technical Proficiency</h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">A comprehensive overview of the tools and technologies I use to build scalable digital experiences.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                        className="p-8 border border-zinc-200 dark:border-zinc-800 rounded-3xl bg-white dark:bg-zinc-950 shadow-sm hover:shadow-emerald-500/5 transition-all"
                    >
                        {category.icon}
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">{category.title}</h3>

                        <div className="space-y-6">
                            {category.skills.map((skill, sIdx) => (
                                <div key={sIdx}>
                                    <div className="flex justify-between text-sm font-semibold mb-2">
                                        <span className="text-zinc-700 dark:text-zinc-300">{skill.name}</span>
                                        <span className="text-emerald-500 font-mono">{skill.level}</span>
                                    </div>
                                    {/* Progress Bar design */}
                                    <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: skill.level }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.3 + (sIdx * 0.1) }}
                                            className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
