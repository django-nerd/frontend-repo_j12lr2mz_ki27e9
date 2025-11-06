import { motion } from 'framer-motion';
import { Code, Globe, Cpu } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Dashboard',
    description: 'Analytics dashboard with live data streams and smooth micro-interactions.',
    icon: Globe,
    tags: ['React', 'WebSockets', 'Tailwind'],
  },
  {
    title: 'Design System',
    description: 'Reusable component library with theming and accessibility baked in.',
    icon: Code,
    tags: ['Storybook', 'Radix', 'TypeScript'],
  },
  {
    title: '3D Playground',
    description: 'Experiments with Spline, WebGL and physics to build playful scenes.',
    icon: Cpu,
    tags: ['Spline', 'Three.js', 'Framer Motion'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Featured Work</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300 max-w-2xl">Selected projects that highlight my focus on modern UX, performance and playful interactions.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur hover:shadow-xl"
            >
              <div className="p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 text-white">
                  <p.icon size={18} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-gray-900 dark:text-white">{p.title}</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="inline-flex items-center rounded-full bg-gray-900/5 dark:bg-white/10 px-3 py-1 text-xs text-gray-700 dark:text-gray-300">{t}</span>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-x-0 -bottom-16 h-32 bg-gradient-to-t from-gray-50 dark:from-[#0b0b12] to-transparent transition-all duration-500 group-hover:bottom-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
