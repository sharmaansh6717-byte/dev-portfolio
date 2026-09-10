import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import MagneticButton from '../ui/MagneticButton'
import { social } from '../../data/social'

// Frontend-only for now. Wire handleSubmit to a real backend/service
// (Formspree, Resend, your own API route, etc.) when ready.

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      return
    }
    // TODO: replace with a real submission call
    setStatus('sent')
  }

  return (
    <section id="contact" className="px-6 py-28 sm:px-10 lg:px-20">
      <SectionHeading
        title="Have an idea worth building?"
        description="Let's build something interesting."
      />

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <div className="mb-8 flex flex-col gap-3">
              <a
              href={`mailto:${social.email}`}
              data-cursor="hover"
              className="flex items-center gap-3 text-text-primary hover:text-accent"
            >
              <Mail size={16} /> {social.email}
            </a>

              <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="flex items-center gap-3 text-text-primary hover:text-accent"
            >
              <Github size={16} /> GitHub
            </a>

              <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="flex items-center gap-3 text-text-primary hover:text-accent"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            className="rounded-md border border-border bg-surface px-4 py-3 text-sm text-text-primary outline-none focus:border-accent"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            className="rounded-md border border-border bg-surface px-4 py-3 text-sm text-text-primary outline-none focus:border-accent"
          />
          <textarea
            name="message"
            placeholder="What are you thinking of building?"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="rounded-md border border-border bg-surface px-4 py-3 text-sm text-text-primary outline-none focus:border-accent"
          />

          {status === 'error' && (
            <p className="text-sm text-red-400">Please fill in every field first.</p>
          )}
          {status === 'sent' && (
            <p className="text-sm text-accent">Message received — I'll get back to you soon.</p>
          )}

          <MagneticButton variant="primary" className="self-start">
            <span className="flex items-center gap-2">
              Send message <Send size={14} />
            </span>
          </MagneticButton>
        </motion.form>
      </div>
    </section>
  )
}
