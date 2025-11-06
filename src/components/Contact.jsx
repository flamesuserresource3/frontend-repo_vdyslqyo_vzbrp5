import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // Backend would go here in a full MERN app. For now, simulate success.
      await new Promise((r) => setTimeout(r, 800));
      setStatus('Thanks! I will get back to you soon.');
    } catch (e) {
      setStatus('Something went wrong.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-950 to-black text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Get in touch</h2>
          <p className="text-white/70 mt-2">Have a question or want to collaborate? Let’s talk.</p>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/70 mb-1">Name</label>
              <input required className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white outline-none focus:border-cyan-400" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Email</label>
              <input type="email" required className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white outline-none focus:border-cyan-400" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-white/70 mb-1">Message</label>
            <textarea rows="5" required className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white outline-none focus:border-cyan-400" />
          </div>
          <div className="mt-6 flex items-center gap-3">
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-black font-semibold px-5 py-2 transition">
              <Send className="h-4 w-4" /> Send Message
            </button>
            <p className="text-sm text-white/70">{status}</p>
          </div>
        </motion.form>

        <footer className="mt-12 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Nimit Gupta • Built with love for AI/ML
        </footer>
      </div>
    </section>
  );
}
