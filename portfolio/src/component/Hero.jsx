import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8 bg-zinc-50 overflow-hidden relative">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-zinc-500 font-medium tracking-wider uppercase mb-3 sm:mb-4">
              Welcome to my portfolio
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-900 mb-6 leading-tight">
              Crafting Digital <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-zinc-600 text-lg sm:text-xl max-w-2xl mx-auto md:mx-0 mb-8 sm:mb-10 line-clamp-3">
              I'm a passionate full-stack developer dedicated to building elegant, responsive, and user-centric web applications. Transforming ideas into robust digital solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 text-white font-semibold rounded-full hover:bg-zinc-800 transition-colors duration-200 flex items-center justify-center group"
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              {[
                { icon: <Github size={24} />, href: "https://github.com/smitzinzuvadiya", label: "GitHub" },
                { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/smit-zinzuvadiya-831b71309/", label: "LinkedIn" },
                { icon: <Mail size={24} />, href: "mailto:smitzinzuvadiya37@gmail.com", label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-zinc-200 rounded-full text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 hover:shadow-sm transition-all duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Hero Visual/Image (Placeholder) */}
        <div className="flex-1 w-full max-w-md md:max-w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-xl"
          >
            {/* Abstract visual representation instead of a real image to keep it looking clean */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black p-8 flex flex-col">
               <div className="flex gap-2 mb-6">
                 <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
               </div>
               <div className="flex-1 border border-gray-800 rounded-lg bg-black/50 p-4 font-mono text-sm text-blue-400 opacity-80 flex flex-col gap-2">
                 <p><span className="text-pink-500">const</span> developer = {'{'}</p>
                 <p className="ml-4">name: <span className="text-green-400">'John Doe'</span>,</p>
                 <p className="ml-4">skills: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Node'</span>, <span className="text-green-400">'Tailwind'</span>],</p>
                 <p className="ml-4">passion: <span className="text-purple-400">true</span></p>
                 <p>{'};'}</p>
                 <br />
                 <p className="animate-pulse">_</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
