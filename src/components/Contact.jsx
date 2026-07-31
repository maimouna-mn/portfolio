import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../motion'

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <motion.div
          className="contact-inner"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div>
            <h2 className="contact-title">Let's build something.</h2>
            <p className="contact-body">
              Open to full-stack, front-end, and backend roles — on-site in
              Dallas, remote, or contract. If you have something worth
              building, I'd like to hear about it.
            </p>
            <a href="/Maimouna_Ndiaye_Resume.pdf" className="btn btn-primary">
              ↓ Download CV
            </a>
          </div>
          <div className="contact-list">
            <a href="mailto:maymounandiaye55@gmail.com">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="4" width="20" height="16" rx="1" />
                <path d="m2 7 10 6 10-6" />
              </svg>
              maymounandiaye55@gmail.com
            </a>
            <a href="https://linkedin.com/in/maimouna-ndiaye-12b332249" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="2" />
                <path d="M7 10v7M7 7v.01M11 17v-4.5a1.5 1.5 0 0 1 3 0V17M14 12.5a1.5 1.5 0 0 1 3 0V17" />
              </svg>
              linkedin.com/in/maimouna-ndiaye
            </a>
            <a href="https://github.com/maimouna-mn" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
              </svg>
              github.com/maimouna-mn
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Dallas, Texas, USA
            </a>
          </div>
        </motion.div>
      </div>
      <footer className="bottom">
        <span>© 2026 Maimouna Ndiaye</span>
        <span>Built with intent, not a template.</span>
      </footer>
    </section>
  )
}
