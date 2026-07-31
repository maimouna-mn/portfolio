import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../motion'
import { desc } from 'framer-motion/client'

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
    desc: 'Develop and integrate the React-based back-office admin panel with a Spring Boot (Java) backend for a mobile money platform, implementing JWT authentication flows, dashboard analytics, and transaction management features. Coordinate across Mobile (Flutter) and Backend teams to ensure API contract consistency, and author technical documentation covering system architecture, API integrations, and deployment workflows.',
    tags: ['React', 'Spring Boot', 'Java', 'REST APIs', 'JWT', 'Docker', 'Swagger'],
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
    desc: "Maintain high accuracy and quality standards in a fast-paced operational environment while continuing to develop my technical skills and pursue software engineering opportunities.",    tags: [],
  },
  {
    date: (
      <>
        Jan 2024
        <br />—  Jun 2024 
      </>
    ),
    version: 'v2.0.0 · ⇄ concurrent',
    title: 'Junior BackEnd Developer',
    company: 'Velocity Money · Part-time · Dakar, Remote',
    desc: 'Designed, developed, and maintained RESTful APIs with Node.js and NestJS following MVC architecture, and implemented JWT authentication with role-based access control (RBAC). Integrated relational databases with JSON schema validation, and collaborated in Agile/Scrum using GitLab for version control and sprint tracking, coordinating with the team via Discord across the full SDLC.',
    tags: ['Node.js', 'NestJS', 'JWT / RBAC', 'GitLab', 'Discord'],
  },
 {
    date: (
      <>
        Jan 2024
        <br />— Dec 2024
      </>
    ),
    version: 'v1.0.0 · ⇄ concurrent',
    title: 'Junior BackEnd Developer',
    company: 'Kwiku SAS · Full-time · Dakar Region, Senegal, Remote',
    desc:"Developed backend APIs using NestJS to support integration with the team's Flutter mobile application. Documented and tested API endpoints using Swagger and Postman. Implemented Firebase authentication with OTP verification and integrated Mobile Money payment partners, including Orange Money and Wave. Tracked work in Jira and GitHub and collaborated with the team through Slack.",
    tags: ['NestJS', 'Firebase', 'OTP', 'Postman', 'Swagger', 'Jira', 'GitHub', 'Slack'],
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
