import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import calender from '../assets/calender.png';
import instagram from '../assets/instagram.png';
import thread from '../assets/thread.png';
import food from '../assets/food.png';


const projects = [
  {
    title: 'MERN Social Media Platform',
    description: 'Built a full-stack social media platform with REST APIs and JWT/Bcrypt authentication. Developed a responsive React 19 + Tailwind UI with Axios for dynamic data rendering. Designed MongoDB schemas for follow/unfollow logic and optimized for mobile performance.',
    image: instagram,
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind'],
    github: 'https://github.com/smitzinzuvadiya/social-media-website',
    live: 'https://example.com',
  },
  {
    title: 'Netflix-Clone',
    description: 'A responsive Netflix-style clone with features like watch trailers, login & signup, and mobile friendly UI. Firebase is used for managing user login data.',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=800',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Firebase'],
    github: 'https://github.com/smitzinzuvadiya/Netflix',
    live: 'https://example.com',
  },
  {
    title: 'Calendar Event Management System',
    description: 'Built a full-stack MERN calendar app for event and schedule management. Implemented JWT authentication with persistent login using LocalStorage. Developed REST APIs and a responsive UI for smooth CRUD operations and navigation.',
    image: calender,
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/smitzinzuvadiya/Calendar',
    live: 'https://example.com',
  },
  {
    title: 'Online Food Order or Recipes Website',
    description: 'A responsive online food ordering and recipe website. Users can browse delicious recipes, view food menus, and place orders with a clean, interactive interface.',
    image: food,
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/smitzinzuvadiya/food',
    live: 'https://example.com',
  },
  {
    title: 'Threads Clone',
    description: 'Developed a responsive social media application using the MERN stack to enable seamless real-time user interactions. Integrated dynamic thread management, an interactive liking system, and a nested commenting architecture, all styled with a modern, glassmorphic UI.',
    image: thread,
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind'],
    github: 'https://github.com/smitzinzuvadiya/thread',
    live: 'https://example.com',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white min-h-screen relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
            A selection of my recent work. These projects demonstrate my expertise in building scalable, user-centric applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-50 border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{project.title}</h3>
                <p className="text-zinc-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-400/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-zinc-200">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
