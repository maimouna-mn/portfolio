import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document
        .querySelectorAll(".pulse")
        .forEach((el) => (el.style.animation = "none"));
    }
  }, []);

  return (
    <section className="hero" style={{ borderTop: "none" }}>
      <div className="wrap hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="tag-row">
            <span className="tag live">
              <span className="pulse"></span>Open to work
            </span>
            <span className="tag">On-site (Dallas) · Remote</span>
            <span className="tag">EN / FR</span>
          </div>
          <p className="eyebrow">// Junior Full-Stack Software Engineer</p>
          <h1 className="name">Maimouna Ndiaye</h1>
          <p className="role">
            builds the parts of the app that make it feel solid.
          </p>
          <p className="pitch">
            I build web and cross-platform mobile applications using React,
            Angular, and Ionic, with Node.js, NestJS, and Laravel powering the
            backend. I focus on clean architecture, maintainable code, and
            reliable user experiences.
          </p>
          <div className="meta-row">
            <span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Dallas, TX
            </span>
            <span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="2" y="4" width="20" height="16" rx="1" />
                <path d="m2 7 10 6 10-6" />
              </svg>
              maymounandiaye55@gmail.com
            </span>
          </div>
          <div className="hero-actions">
            <a href="/cv-maimouna-ndiaye.pdf" className="btn btn-primary">
              ↓ Download CV
            </a>
            <a
              href="https://github.com/maimouna-mn"
              target="_blank"
              rel="noreferrer"
              className="icon-link"
              aria-label="GitHub"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .5C5.7.5.9 5.3.9 11.6c0 5 3.3 9.3 7.8 10.8.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.1-3.1-.1-.3-.5-1.4.1-3 0 0 .9-.3 3 1.1.9-.2 1.8-.4 2.8-.4s1.9.1 2.8.4c2.1-1.4 3-1.1 3-1.1.6 1.6.2 2.7.1 3 .7.8 1.1 1.8 1.1 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.8C23.1 5.3 18.3.5 12 .5Z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/maimouna-ndiaye-12b332249"
              target="_blank"
              rel="noreferrer"
              className="icon-link"
              aria-label="LinkedIn"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5V9h3ZM6.5 7.7A1.7 1.7 0 1 1 6.5 4.3a1.7 1.7 0 0 1 0 3.4ZM19 19h-3v-5c0-1.2 0-2.7-1.6-2.7S12.6 12.6 12.6 14v5h-3V9h2.9v1.3h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.6 2 3.6 4.6Z" />
              </svg>
            </a>
            <a href="#contact" className="text-link">
              Contact me →
            </a>
          </div>
        </motion.div>

        <motion.div
          className="photo-module"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <div className="photo-frame">
            <span className="corner tl"></span>
            <span className="corner tr"></span>
            <span className="corner bl"></span>
            <span className="corner br"></span>
            <img src="/photo.jpg" alt="Maimouna Ndiaye" />
          </div>
          <div className="label-strip">
            <span>FIG. MN—01</span>
            <span>JUNIOR FULL-STACK / DALLAS, TX</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
