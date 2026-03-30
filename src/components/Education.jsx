const educations = [
  {
    degree: 'B.Tech – CSE (AI & ML)',
    institution: 'Roorkee Institute of Technology',
    period: 'Aug 2022 – Aug 2026',
    score: 'CGPA: 7.14 / 10',
    scoreLabel: 'CGPA',
    type: 'University',
    color: 'from-cyan-500/10 to-indigo-500/10',
    border: 'border-cyan-500/20',
    accent: 'text-cyan-400',
    icon: '🎓',
  },
  {
    degree: 'Intermediate – CISCE',
    institution: 'Playway English School',
    period: '2021',
    score: '86%',
    scoreLabel: 'Score',
    type: 'Class XII',
    color: 'from-indigo-500/10 to-purple-500/10',
    border: 'border-indigo-500/20',
    accent: 'text-indigo-400',
    icon: '📚',
  },
  {
    degree: 'High School – CISCE',
    institution: 'Playway English School',
    period: '2019',
    score: '86.4%',
    scoreLabel: 'Score',
    type: 'Class X',
    color: 'from-purple-500/10 to-pink-500/10',
    border: 'border-purple-500/20',
    accent: 'text-purple-400',
    icon: '🏫',
  },
]

export default function Education() {
  return (
    <div className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 section-enter">
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Academic background</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-2">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {educations.map((edu, i) => (
            <div
              key={edu.degree}
              className={`card bg-gradient-to-br ${edu.color} border ${edu.border} card-hover section-enter`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="card-body gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{edu.icon}</span>
                  <span className={`badge badge-sm font-mono ${edu.accent} bg-base-300/30 border-none`}>
                    {edu.type}
                  </span>
                </div>

                <div>
                  <h3 className={`text-base font-bold ${edu.accent} leading-tight`}>{edu.degree}</h3>
                  <p className="text-base-content/80 font-semibold text-sm mt-1">{edu.institution}</p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-base-300/30">
                  <span className="text-xs text-base-content/40 font-mono">{edu.period}</span>
                  <div className="text-right">
                    <div className="text-xs text-base-content/40 uppercase tracking-wider">{edu.scoreLabel}</div>
                    <div className={`text-lg font-black ${edu.accent}`}>{edu.score}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
