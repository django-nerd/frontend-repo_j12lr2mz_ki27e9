import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0b12] text-gray-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 border-t border-gray-200/60 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <a href="#hero" className="text-sm font-medium hover:opacity-80">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
