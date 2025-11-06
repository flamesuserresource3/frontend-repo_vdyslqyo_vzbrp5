import { motion } from 'framer-motion';
import { Brain, School } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About</h2>
          <p className="text-white/70 mt-2">A quick snapshot of my learning path and interests.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-center gap-3">
              <Brain className="h-5 w-5 text-cyan-400" />
              <h3 className="text-xl font-semibold">Focus Areas</h3>
            </div>
            <ul className="mt-4 list-disc list-inside space-y-1 text-white/80">
              <li>Deep Learning (vision and NLP)</li>
              <li>LLMs, prompts, and RAG systems</li>
              <li>MLOps and experiment tracking</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-center gap-3">
              <School className="h-5 w-5 text-violet-400" />
              <h3 className="text-xl font-semibold">Current Learning</h3>
            </div>
            <ul className="mt-4 list-disc list-inside space-y-1 text-white/80">
              <li>Transformers and attention mechanisms</li>
              <li>Vector databases and embeddings</li>
              <li>FastAPI for serving ML models</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
