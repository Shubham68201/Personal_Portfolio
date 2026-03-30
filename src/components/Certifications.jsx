const certs = [
  { title: 'C Programming', issuer: 'Technohacks Edutech', icon: '💻', color: 'from-blue-500/10 to-cyan-500/10', border: 'border-blue-500/20', accent: 'text-blue-400' },
  { title: 'Python 101 for Data Science', issuer: 'IBM', icon: '🐍', color: 'from-yellow-500/10 to-orange-500/10', border: 'border-yellow-500/20', accent: 'text-yellow-400' },
  { title: 'Python 3.4.3', issuer: 'IIT Bombay', icon: '🎓', color: 'from-green-500/10 to-teal-500/10', border: 'border-green-500/20', accent: 'text-green-400' },
  { title: 'Web Development Bootcamp', issuer: 'Explorin', icon: '🌐', color: 'from-purple-500/10 to-indigo-500/10', border: 'border-purple-500/20', accent: 'text-purple-400' },
  { title: 'AMCAT Certification', issuer: 'Aspiring Minds', icon: '✅', color: 'from-cyan-500/10 to-sky-500/10', border: 'border-cyan-500/20', accent: 'text-cyan-400' },
  { title: 'RIT Hackathon 2022', issuer: 'Roorkee Institute of Technology', icon: '🏆', color: 'from-orange-500/10 to-red-500/10', border: 'border-orange-500/20', accent: 'text-orange-400' },
]

export default function Certifications() {
  return (
    <div className="py-24 px-4 bg-base-200/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 section-enter">
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">My credentials</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-2">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {certs.map((cert, i) => (
            <div
              key={cert.title}
              className={`card bg-gradient-to-br ${cert.color} border ${cert.border} card-hover section-enter group`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="card-body flex-row items-center gap-4 py-5">
                <div className={`text-4xl shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {cert.icon}
                </div>
                <div className="min-w-0">
                  <h3 className={`font-bold text-sm leading-tight ${cert.accent}`}>{cert.title}</h3>
                  <p className="text-xs text-base-content/50 mt-1 truncate">{cert.issuer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
