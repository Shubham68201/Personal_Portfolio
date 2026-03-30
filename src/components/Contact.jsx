import { FiMail, FiPhone, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'

const contactItems = [
  {
    icon: <FiMail className="text-2xl text-cyan-400" />,
    label: 'Email',
    value: 'ramp68201@gmail.com',
    href: 'mailto:ramp68201@gmail.com',
  },
  {
    icon: <FiPhone className="text-2xl text-indigo-400" />,
    label: 'Phone',
    value: '+91 7007466432',
    href: 'tel:+917007466432',
  },
  {
    icon: <FiMapPin className="text-2xl text-green-400" />,
    label: 'Location',
    value: 'Fatehpur, Uttar Pradesh, India',
    href: null,
  },
]

const socialLinks = [
  {
    icon: <FiGithub className="text-xl" />,
    label: 'GitHub',
    href: 'https://github.com/Shubham68201',
    color: 'hover:bg-gray-700 hover:border-gray-700 hover:text-white',
  },
  {
    icon: <FiLinkedin className="text-xl" />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/shubham-bharti-079870252',
    color: 'hover:bg-blue-600 hover:border-blue-600 hover:text-white',
  },
  {
    icon: <SiLeetcode className="text-xl" />,
    label: 'LeetCode',
    href: 'https://leetcode.com/u/ramp68201/',
    color: 'hover:bg-orange-500 hover:border-orange-500 hover:text-white',
  },
]

export default function Contact() {
  return (
    <div className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 section-enter">
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Let's connect</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-2">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full mx-auto mt-4" />
          <p className="text-base-content/60 mt-6 max-w-xl mx-auto text-base">
            I'm currently open to new opportunities. Whether you have a job offer,
            a project idea, or just want to say hi — my inbox is always open!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact info */}
          <div className="space-y-5 section-enter">
            <h3 className="text-xl font-bold text-base-content mb-6">Contact Information</h3>
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 rounded-2xl bg-base-200/50 border border-base-300/40 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="shrink-0">{item.icon}</div>
                <div>
                  <div className="text-xs text-base-content/40 uppercase tracking-wider mb-0.5">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-semibold text-base-content hover:text-cyan-400 transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-base-content">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social and CTA */}
          <div className="section-enter space-y-8">
            <div>
              <h3 className="text-xl font-bold text-base-content mb-6">Find Me Online</h3>
              <div className="flex flex-col gap-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-outline gap-3 justify-start rounded-2xl transition-all duration-300 ${s.color}`}
                  >
                    {s.icon}
                    <span className="font-semibold">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="card bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 border border-cyan-500/20 p-6">
              <p className="text-base-content/70 text-sm leading-relaxed mb-4">
                Looking for a dedicated developer for your next project? I'm available for
                freelance work and full-time roles.
              </p>
              <a
                href="mailto:ramp68201@gmail.com"
                className="btn btn-primary rounded-full btn-glow w-full gap-2"
              >
                <FiMail />
                Send me an email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
