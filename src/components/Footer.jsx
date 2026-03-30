import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="bg-base-200/60 border-t border-base-300/40 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        {/* Logo */}
        <span className="text-2xl font-black gradient-text font-mono">&lt;SB /&gt;</span>

        {/* Social links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Shubham68201"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm btn-circle hover:bg-gray-700 hover:text-white transition-all duration-300"
            aria-label="GitHub"
          >
            <FiGithub className="text-lg" />
          </a>
          <a
            href="https://linkedin.com/in/shubham-bharti-079870252"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm btn-circle hover:bg-blue-600 hover:text-white transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="text-lg" />
          </a>
          <a
            href="https://leetcode.com/u/ramp68201/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm btn-circle hover:bg-orange-500 hover:text-white transition-all duration-300"
            aria-label="LeetCode"
          >
            <SiLeetcode className="text-lg" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

        {/* Copyright */}
        <p className="text-sm text-base-content/40 flex items-center gap-1.5">
          © 2025 Shubham Bharti · Made with
          <FiHeart className="text-red-400 text-xs" />
          using React + Tailwind + DaisyUI
        </p>
      </div>
    </footer>
  )
}
