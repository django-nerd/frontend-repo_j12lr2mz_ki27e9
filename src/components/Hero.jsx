import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white"
              >
                Hi, I’m <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">Your Name</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-xl"
              >
                I craft interactive web experiences with a focus on performance, accessibility, and delightful motion.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-8 flex items-center gap-4"
              >
                <a href="#projects" className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow hover:opacity-90">
                  View Projects
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white/70 backdrop-blur px-5 py-3 text-sm font-semibold hover:bg-white">
                  Contact Me
                </a>
              </motion.div>
            </div>

            <div className="hidden lg:block lg:col-span-6" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-[#0b0b12] to-transparent" />
    </section>
  );
}
