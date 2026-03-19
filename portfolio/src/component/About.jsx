import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16 items-center">

                {/* Text Narrative */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex-1"
                >
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">About Me</h2>
                        <div className="w-16 h-1.5 bg-emerald-500 rounded-full"></div>
                    </div>

                    <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                        <p>
                            I am a passionate Full-Stack Developer who has recently completed my{" "}
                            <span className="text-zinc-900 dark:text-zinc-100 font-bold">
                                Bachelor of Computer Applications (BCA)
                            </span>
                            .                        </p>
                        <p>
                            My journey in web development is driven by a deep focus on problem-solving and effectively bridging the gap between seamless front-end user experiences and robust, scalable back-end architectures.
                        </p>
                        <p>
                            Whether I'm designing complex MongoDB schemas, securing RESTful APIs with JWT, or orchestrating responsive state-driven UIs in React, I am firmly committed to a philosophy of continuous learning and deliberate, clean engineering.
                        </p>
                    </div>
                </motion.div>

                {/* Visual Element (Abstract shapes or placeholder image) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 w-full relative"
                >
                    <div className="aspect-square max-w-md mx-auto relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/10">
                        {/* Replace this src with your actual professional headshot */}
                        <img
                            src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1000&auto=format&fit=crop"
                            alt="Developer Workspace"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        {/* Design accents */}
                        <div className="absolute inset-0 border-4 border-white/10 dark:border-zinc-900/50 rounded-3xl z-10"></div>
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-500 rounded-full blur-3xl opacity-30"></div>
                </motion.div>

            </div>
        </section>
    );
}
