const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'Technohack Edutech',
    type: 'Remote',
    period: 'Sep 2023 – Oct 2023',
    points: [
      'Debugged and resolved critical software modules reducing runtime errors',
      'Supported production deployment workflows and release procedures',
      'Improved overall application reliability and performance',
    ],
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
    dot: 'bg-cyan-400',
  },
  {
    role: 'Team Leader – Hackathons',
    company: 'Hack24 & Hack22 @ RIT',
    type: 'On-site',
    period: '2022 & 2024',
    points: [
      'Led cross-functional teams under tight deadlines in competitive hackathons',
      'Architected and implemented full-stack solutions end-to-end',
      'Delivered final presentations to judges, winning recognition',
    ],
    color: 'text-indigo-400',
    borderColor: 'border-indigo-500/30',
    dot: 'bg-indigo-400',
  },
]

export default function Experience() {
  return (
    <div className="py-24 px-4 bg-base-200/30">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 section-enter">
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">My journey</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-2">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-indigo-500/50 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative flex gap-6 section-enter" style={{ animationDelay: `${i * 0.2}s` }}>
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full bg-base-100 border-2 border-base-300/60 flex items-center justify-center`}>
                    <div className={`w-4 h-4 rounded-full ${exp.dot} shadow-lg`} />
                  </div>
                </div>

                {/* Card */}
                <div className={`flex-1 card bg-base-100 border ${exp.borderColor} card-hover`}>
                  <div className="card-body gap-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h3 className={`text-lg font-bold ${exp.color}`}>{exp.role}</h3>
                        <div className="flex items-center gap-2 flex-wrap mt-0.5">
                          <span className="text-base-content/80 font-semibold text-sm">{exp.company}</span>
                          <span className="badge badge-ghost badge-xs">{exp.type}</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-base-content/40 shrink-0 bg-base-200 px-3 py-1.5 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-base-content/65">
                          <span className={`${exp.color} mt-1 shrink-0`}>▸</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
