import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Learning Management System",
    year: "2024",
    description: [
      "Secure authentication & role-based authorization (RBAC)",
      "Course creation with video lecture upload & progress tracking",
      "RESTful APIs with Express.js and MongoDB",
      "Fully responsive React frontend",
    ],
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    stackColor: "badge-success",
    live: "https://learning-management-system-peach.vercel.app/",
    github: "https://github.com/Shubham68201/lms-frontend",
    gradient: "from-green-500/10 to-cyan-500/10",
    border: "border-green-500/20",
    accent: "text-green-400",
  },
  {
    title: "E-Commerce Platform",
    year: "2025",
    description: [
      "Product management, cart & Razorpay payment gateway integration",
      "JWT authentication, email verification & password reset flow",
      "Admin dashboard with Chart.js analytics & Cloudinary media storage",
      "Deployed on Render (backend) + Vercel (frontend)",
    ],
    stack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Razorpay",
      "Cloudinary",
      "Chart.js",
    ],
    stackColor: "badge-primary",
    live: "https://ecommerce-mern-two.vercel.app/",
    github: "https://github.com/Shubham68201/ecommerce-mern",
    gradient: "from-cyan-500/10 to-indigo-500/10",
    border: "border-cyan-500/20",
    accent: "text-cyan-400",
  },
  {
    title: "Personal Portfolio Website",
    year: "2025",
    description: [
      "Fully responsive across all devices and screen sizes",
      "Cross-browser compatible design",
      "Clean showcase of skills, projects, and experience",
      "Built with HTML, CSS & JavaScript (vanilla)",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    stackColor: "badge-warning",
    live: "https://shubham68201.github.io/Personal_Portfolio/",
    github: "https://github.com/Shubham68201/Personal_Portfolio",
    gradient: "from-yellow-500/10 to-orange-500/10",
    border: "border-yellow-500/20",
    accent: "text-yellow-400",
  },
];

export default function Projects() {
  return (
    <div className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 section-enter">
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
            What I've built
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`card bg-gradient-to-br ${project.gradient} border ${project.border} card-hover group section-enter`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="card-body gap-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className={`text-xs font-mono ${project.accent} mb-1`}>
                      {project.year}
                    </div>
                    <h3 className="card-title text-lg font-bold leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost btn-xs btn-circle hover:bg-base-300"
                      aria-label="GitHub"
                    >
                      <FiGithub className="text-sm" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost btn-xs btn-circle hover:bg-base-300"
                      aria-label="Live demo"
                    >
                      <FiExternalLink className="text-sm" />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-1.5 flex-1">
                  {project.description.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 text-sm text-base-content/70"
                    >
                      <span className={`${project.accent} mt-1 shrink-0`}>
                        ▸
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-base-300/30">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className={`badge ${project.stackColor} badge-xs font-semibold py-2.5 px-2`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex gap-2 pt-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary flex-1 gap-1 rounded-full"
                  >
                    <FiExternalLink className="text-xs" /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline flex-1 gap-1 rounded-full"
                  >
                    <FiGithub className="text-xs" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
