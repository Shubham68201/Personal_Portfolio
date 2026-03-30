const skillCategories = [
  {
    title: 'Languages',
    color: 'badge-primary',
    icon: '⌨️',
    skills: ['Java', 'JavaScript', 'Python', 'C', 'C++'],
  },
  {
    title: 'Web Frontend',
    color: 'badge-secondary',
    icon: '🎨',
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'React.js'],
  },
  {
    title: 'Backend & Database',
    color: 'badge-accent',
    icon: '🗄️',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'JWT', 'RESTful APIs', 'Razorpay'],
  },
  {
    title: 'Concepts',
    color: 'badge-warning',
    icon: '💡',
    skills: ['OOP', 'DSA', 'MVC', 'RBAC'],
  },
  {
    title: 'DevOps & Tools',
    color: 'badge-success',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'Docker', 'GitHub Actions', 'Postman', 'Linux'],
  },
]

export default function Skills() {
  return (
    <div className="py-24 px-4 bg-base-200/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 section-enter">
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">What I work with</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-2">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className="card bg-base-100 border border-base-300/40 card-hover section-enter"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="card-body gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="card-title text-base font-bold text-base-content">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`badge ${cat.color} badge-skill text-xs font-semibold py-3 px-3 rounded-lg`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
