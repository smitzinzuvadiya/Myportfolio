import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Send, User } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
            <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Let's Connect</h2>
                <p className="text-zinc-600 dark:text-zinc-400">Whether you have a question, a project in mind, or just want to say hi, I will try my best to get back to you!</p>
            </div>

            <div className="flex flex-col md:flex-row gap-12 bg-white dark:bg-zinc-900/40 p-8 md:p-12 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/20 dark:shadow-none">

                {/* Contact Info & Socials */}
                <div className="flex-1 space-y-8">
                    <div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Direct Contact</h3>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 font-medium">
                                <User size={20} /> Smit Zinzuvadiya
                            </div>
                            <a href="tel:+917203095508" className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors font-medium">
                                <Phone size={20} /> +91 7203095508
                            </a>
                            <a href="mailto:smitzinzuvadiya37@gmail.com" className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors font-medium">
                                <Mail size={20} /> smitzinzuvadiya37@gmail.com
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Social Profiles</h3>
                        <div className="flex gap-4">
                            <a href="https://github.com/smitzinzuvadiya" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-emerald-500 hover:text-white transition-all transform hover:-translate-y-1">
                                <Github size={22} />
                            </a>
                            <a href="https://www.linkedin.com/in/smit-zinzuvadiya-831b71309/" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-emerald-500 hover:text-white transition-all transform hover:-translate-y-1">
                                <Linkedin size={22} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="flex-[1.5]">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-zinc-900 dark:text-zinc-50 transition-all font-medium placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-zinc-900 dark:text-zinc-50 transition-all font-medium placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="How can I help you?"
                                className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-zinc-900 dark:text-zinc-50 transition-all font-medium placeholder:text-zinc-400 dark:placeholder:text-zinc-600 resize-none"
                            ></textarea>
                        </div>

                        <button type="submit" className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-500/20">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}

