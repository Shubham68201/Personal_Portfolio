import { FiGithub, FiLinkedin, FiCode } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import profilePic from "../assets/pic (2).jpg";

export default function About() {
  return (
    <div className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 section-enter">
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Get to know me</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Avatar side */}
          <div className="flex flex-col items-center section-enter">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 blur-xl opacity-30 scale-110" />
              {/* Avatar circle */}
              <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border-2 border-cyan-500/30 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 bg-cyan-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                B.Tech CSE
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4 mt-10">
              <a
                href="https://github.com/Shubham68201"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm btn-circle hover:bg-gray-700 hover:border-gray-700 transition-all duration-300"
                aria-label="GitHub"
              >
                <FiGithub className="text-base" />
              </a>
              <a
                href="https://linkedin.com/in/shubham-bharti-079870252"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm btn-circle hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="text-base" />
              </a>
              <a
                href="https://leetcode.com/u/ramp68201/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm btn-circle hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
                aria-label="LeetCode"
              >
                <SiLeetcode className="text-base" />
              </a>
            </div>
          </div>

          {/* Bio side */}
          <div className="section-enter space-y-6">
            <h3 className="text-2xl font-bold text-base-content">
              Building digital experiences with <span className="text-cyan-400">passion & precision</span>
            </h3>
            <p className="text-base-content/70 leading-relaxed text-base">
              I'm a Computer Science Engineering student specializing in AI & ML at Roorkee Institute of Technology,
              graduating in 2026. My passion lies in building full-stack web applications using Java and the MERN stack,
              combined with a strong foundation in Data Structures & Algorithms.
            </p>
            <p className="text-base-content/70 leading-relaxed text-base">
              I've developed production-ready applications including a Learning Management System and an E-Commerce
              Platform, both deployed and live. I enjoy solving complex problems and translating ideas into scalable,
              maintainable code.
            </p>

            {/* Key highlights */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { label: 'Degree', value: 'B.Tech CSE (AI/ML)' },
                { label: 'CGPA', value: '7.14 / 10' },
                { label: 'Graduating', value: 'August 2026' },
                { label: 'Location', value: 'Fatehpur, UP, India' },
              ].map((item) => (
                <div key={item.label} className="bg-base-200/50 border border-base-300/50 rounded-xl p-4">
                  <div className="text-xs text-base-content/40 uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="text-sm font-semibold text-cyan-400">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Contact info quick */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="mailto:ramp68201@gmail.com"
                className="btn btn-primary btn-sm rounded-full gap-2 flex-1"
              >
                ramp68201@gmail.com
              </a>
              <a
                href="tel:+917007466432"
                className="btn btn-outline btn-sm rounded-full gap-2 flex-1"
              >
                +91 7007466432
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
