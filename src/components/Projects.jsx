import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Image Classifier',
    desc: 'CNN-based classifier trained on CIFAR-10 with data augmentation and Grad-CAM visualizations.',
    tags: ['PyTorch', 'CNN', 'CIFAR-10'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Chat with PDF',
    desc: 'RAG pipeline using embeddings + vector search to talk with your documents.',
    tags: ['LLM', 'RAG', 'FastAPI'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Time Series Forecasting',
    desc: 'LSTM-based forecasting with experiment tracking and hyperparameter search.',
    tags: ['LSTM', 'Timeseries', 'Weights & Biases'],
    github: 'https://github.com/',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-white/70 mt-2">A selection of experiments and builds as I learn AI/ML.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:bg-white/10 transition"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">{p.title}</h3>
              </div>
              <p className="mt-2 text-white/70 min-h-[64px]">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/80">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
                  <Github className="h-4 w-4" /> Code
                </a>
                <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
                  <ExternalLink className="h-4 w-4" /> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
