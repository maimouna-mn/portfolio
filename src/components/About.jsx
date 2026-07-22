import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../motion'

const STATS = [
  { k: 'Professional dev experience', v: '~1 year' },
  { k: 'Languages', v: 'English / French' },
  { k: 'Working style', v: 'On-site preferred, Remote ' },
  { k: 'Currently', v: 'Open to contract + FT roles' },
]

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <motion.div
          className="section-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div>
            <span className="section-num">01 / ABOUT</span>
            <h2 className="section-title">Why I build</h2>
          </div>
        </motion.div>
        <motion.div
          className="about-grid"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div>
            <p className="about-lede">
              I got into development because I enjoyed turning problems into
              working solutions — and I've never lost that excitement.
            </p>
            <div className="about-body">
              <p>
                My path went through Université Cheikh Anta Diop, ISI Dakar,
                and ESIA before a career-track program sharpened it into
                full-stack practice. Since then I've worked across backend
                contracts and a remote internship, building the habit of
                asking "does this actually hold up" before calling something
                done.
              </p>
              <p>
                I'm upfront about where my experience is deep and where it
                isn't — I've got real, hands-on time with REST APIs, JWT auth,
                and CI/CD pipelines; I'm still building depth in dedicated
                A/B-testing tooling, and I'd rather say that than pad a
                resume.
              </p>
            </div>
          </div>
          <div className="stat-list">
            {STATS.map((stat) => (
              <div className="stat-row" key={stat.k}>
                <span className="k">{stat.k}</span>
                <span className="v">{stat.v}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
