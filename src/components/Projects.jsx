import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, viewportOnce } from "../motion";

const PROJECTS = [
  {
    title: "Space Travel Web Application",
    image:
      "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=600&q=80",
    desc: "A space travel management application that allows users to build and manage spacecraft, view planetary populations, and transfer spacecraft between planets. Features full CRUD functionality, dynamic routing, form validation, Context API state management, and a mock API backed by local storage.",
    tags: [
      "React",
      "React Router",
      "Context API",
      "CRUD",
      "Mock API",
      "Local Storage",
      "Responsive Design",
    ],
    github: "https://github.com/maimouna-mn/space-travel-react",
    demo: "https://space-travel-react-wine.vercel.app/",
  },
  {
    title: "Jeopardy Trivia Game",
    image:
      "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&q=80",
    desc:"An interactive trivia game inspired by Jeopardy that fetches categories, questions, and answers from a live API. Features dynamic DOM updates, scoring logic, responsive gameplay, and interactive question-and-answer states built with JavaScript, HTML, and CSS.",
    tags: ["JavaScript", "HTML", "CSS", "DOM", "API", "Trivia Game"],
    github: "https://github.com/maimouna-mn/jeopardy-trivia-game",
    demo: "https://jeopardy-trivia-game.vercel.app/",
  },
  {
    title: "Course Management Platform",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
    desc: "A full-stack web and mobile platform that helps students and instructors manage courses, enrollment, and schedules. Features authentication, bulk student enrollment, responsive interfaces, and REST API integration using Angular, Laravel, Ionic, and Tailwind CSS.",
    tags: [
      "Angular",
      "Laravel",
      "Ionic",
      "Tailwind CSS",
      "REST API",
      "Authentication",
    ],
    github: "https://github.com/maimouna-mn/Course-School-Management-Platform",
  },
  //   ,
  //   {
  //     title: "Inter-Network Money Transfer System",
  //     image:
  //       "https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=600&q=80",
  //     desc: "Secure cross-network transfer system with JSON payload validation, RESTful APIs, and database integration.",
  //    tags: [
  //   "Node.js",
  //   "NestJS",
  //   "MySQL",
  //   "REST API",
  //   "JSON",
  //   "Backend"
  // ],
  //     github:
  //       "https://github.com/maimouna-mn/Inter-Network-Money-Transfer-System",
  //   }
];
const VISIBLE_COUNT = 3;

export default function Projects() {
  const [startIndex, setStartIndex] = useState(0);
  const maxIndex = PROJECTS.length - VISIBLE_COUNT;

  const visibleProjects = PROJECTS.slice(
    startIndex,
    startIndex + VISIBLE_COUNT,
  );

  const goNext = () => setStartIndex((i) => Math.min(i + 1, maxIndex));
  const goPrev = () => setStartIndex((i) => Math.max(i - 1, 0));

  return (
    <section id="projects">
      <div className="wrap">
        <motion.div
          className="section-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div>
            <span className="section-num">03 / PROJECTS</span>
            <h2 className="section-title">Selected work</h2>
          </div>
          <a
            href="https://github.com/maimouna-mn"
            target="_blank"
            rel="noreferrer"
            className="section-link"
          >
            View all on GitHub →
          </a>
        </motion.div>

        <div className="projects-carousel">
          {/* <button
            className="carousel-arrow"
            onClick={goPrev}
            disabled={startIndex === 0}
            aria-label="Previous projects"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button> */}

          <div className="projects-grid">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project) => (
                <motion.div
                  className="project-card"
                  key={project.title}
                  layout
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                >
                  <div className="project-media">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-body">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.desc}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span className="chip" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        GitHub ↗
                      </a>
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          Live demo ↗
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* <button
            className="carousel-arrow"
            onClick={goNext}
            disabled={startIndex >= maxIndex}
            aria-label="Next projects"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button> */}
        </div>
      </div>
    </section>
  );
}
