import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../motion'

const LOG_ENTRIES = [
  {
    date: (
      <>
        Jul 2026
        <br />— Present
      </>
    ),
    version: 'CURRENT',
    title: 'Junior Full-Stack Developer',
    company: 'Velocity Money · Part-time · Remote',
    desc: 'Rejoined to support technical continuity of a React/NestJS/Flutter mobile app, coordinating across Mobile and Backend teams. Build technical documentation covering architecture, API integrations, deployment, and CI/CD workflows. Support Mobile Money partner API integrations, including authentication flows, and participate in testing before production releases.',
    tags: ['React', 'NestJS', 'Flutter', 'API Integration', 'CI/CD', 'Technical Documentation'],
  },
  {
    date: (
      <>
        Oct 2024
        <br />— Present
      </>
    ),
    version: 'v3.0.0',
    title: 'Fulfillment Associate',
    company: 'Amazon · Dallas, TX',
    desc: 'Maintaining high accuracy and quality standards in a fast-paced operational environment while job-searching for developer roles — attention to detail carries over directly.',
    tags: [],
  },
  {
    date: (
      <>
        Jan 2024
        <br />— Jan 2025
      </>
    ),
    version: 'v2.0.0 · ⇄ concurrent',
    title: 'Full-Stack Engineer',
    company: 'Velocity Money · Full-time · Dakar, Remote',
    desc: 'Designed, developed, and maintained RESTful APIs with Node.js and NestJS following MVC architecture, and implemented JWT authentication with role-based access control (RBAC). Integrated relational databases with JSON schema validation, and collaborated in Agile/Scrum using GitLab and Trello for version control and sprint tracking, coordinating with the team via Discord across the full SDLC.',
    tags: ['Node.js', 'NestJS', 'JWT / RBAC', 'GitLab', 'Trello', 'Discord'],
  },
  {
    date: (
      <>
        Jan 2024
        <br />— Dec 2024
      </>
    ),
    version: 'v1.0.0 · ⇄ concurrent',
    title: 'Back End Developer',
    company: 'Kwiku SAS · Internship · Dakar Region, Senegal, Remote',
    desc: "Developed backend features using NestJS and integrated with the team's Flutter mobile app, validated JSON data flows, and troubleshot formatting issues in CI/CD pipelines. Implemented Firebase authentication and database integration, tracked work in Jira and GitHub, and coordinated daily with the team via Slack.",
    tags: ['NestJS', 'Flutter', 'Firebase', 'Jira', 'GitHub', 'Slack'],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <motion.div
          className="section-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div>
            <span className="section-num">04 / EXPERIENCE</span>
            <h2 className="section-title">Build log</h2>
          </div>
        </motion.div>

        <div className="log-list">
          {LOG_ENTRIES.map((entry, i) => (
            <motion.div
              className="log-entry"
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
            >
              <div className="log-date">{entry.date}</div>
              <div className="log-rail">
                <span className="log-dot"></span>
              </div>
              <div className="log-body">
                <p className="log-version">{entry.version}</p>
                <h3 className="log-title">{entry.title}</h3>
                <p className="log-company">{entry.company}</p>
                <p className="log-desc">{entry.desc}</p>
                {entry.tags.length > 0 && (
                  <div className="log-tags">
                    {entry.tags.map((tag) => (
                      <span className="chip" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
