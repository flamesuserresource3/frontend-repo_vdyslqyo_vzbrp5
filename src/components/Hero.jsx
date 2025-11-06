import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            Nimit Gupta
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg sm:text-xl text-white/80 max-w-xl"
          >
            AI/ML enthusiast building interactive, intelligent projects. I love exploring deep learning, LLMs, and data-driven experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            <a href="#projects" className="rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-black font-semibold px-5 py-2 transition">View Projects</a>
            <a href="#contact" className="rounded-full border border-white/20 hover:border-white/40 px-5 py-2 transition">Contact</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="md:justify-self-end"
        >
          <div className="grid grid-cols-3 gap-4">
            {['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'LLMs'].map((t) => (
              <div key={t} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center text-sm text-white/80">
                {t}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
