import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../motion";

const STATS = [
  { k: "Professional dev experience", v: "~1 year" },
  { k: "Languages", v: "English / French" },
  { k: "Working style", v: "On-site preferred, Remote" },
  { k: "Currently", v: "Open to contract + FT roles" },
];

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
              working solutions, and I've never lost that excitement.
            </p>

            <div className="about-body">
              <p>
                <p>
                  My path into software development grew through hands-on
                  projects, real-world experience, and a career-focused
                  full-stack program. Since then, I've strengthened my backend
                  development skills while working with professional development
                  teams.
                </p>
              </p>
              <p>
                I've gained hands-on experience with REST APIs and JWT
                authentication. I enjoy continuously expanding my skills by
                working with new technologies and taking on real-world
                challenges.
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
  );
}
