import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../motion'

const SKILL_GROUPS = [
  {
    category: 'Frontend',
    skills: [
      'React',
      'Angular',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
    ],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'NestJS', 'Laravel', 'PHP', 'REST APIs', 'JWT Authentication'],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'Firebase', 'SQL Server'],
  },
  {
    category: 'Developer Tools',
    skills: [
      'Git',
      'GitHub',
      'GitLab',
      'Swagger',
      'Postman',
      'Jira',
      'Trello',
      'Slack',
      'Discord',
    ],
  },
    {
    category: 'Methodologies',
    skills: ['Agile / Scrum', 'MVC Architecture', 'RBAC', 'SDLC'],
  },
   {
  category: "Interests",
  skills: [
    "Personal Development",
    "Reading",
    "Scrabble",
    "Travel",
    "Entrepreneurship",
  ],
},
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <motion.div
          className="section-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div>
            <span className="section-num">02 / STACK</span>
            <h2 className="section-title">What I work with</h2>
          </div>
        </motion.div>
        <motion.div
          className="skills-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {SKILL_GROUPS.map((group) => (
            <motion.div className="skill-cell" key={group.category} variants={staggerItem}>
              <p className="skill-cat">{group.category}</p>
              <div className="chip-list">
                {group.skills.map((skill) => (
                  <span className="chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}