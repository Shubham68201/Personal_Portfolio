import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-base-100/95 backdrop-blur-md shadow-lg border-b border-cyan-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="text-xl font-bold gradient-text font-mono tracking-tight"
          >
            &lt;SB /&gt;
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="px-3 py-2 text-sm font-medium text-base-content/70 hover:text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Theme toggle + mobile menu */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-sm btn-circle"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <FiSun className="text-yellow-400 text-lg" />
              ) : (
                <FiMoon className="text-indigo-400 text-lg" />
              )}
            </button>

            {/* Hamburger */}
            <button
              className="btn btn-ghost btn-sm btn-circle lg:hidden"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-base-100/98 backdrop-blur-md border-t border-cyan-500/10 px-4 pb-4 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className="block px-4 py-3 text-sm font-medium text-base-content/70 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
