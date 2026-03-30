import { useState, useEffect } from "react";
import { FiArrowDown } from "react-icons/fi";

const titles = [
  "Java",
  "MERN Stack Developer",
  "DSA Enthusiast",
  "Full Stack Developer",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout;

    if (typing) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => {
          setDisplayed((prev) => prev + current[charIndex]);
          setCharIndex((i) => i + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed((prev) => prev.slice(0, -1));
          setCharIndex((i) => i - 1);
        }, 40);
      } else {
        setTitleIndex((i) => (i + 1) % titles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, typing, titleIndex]);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 animate-fade-in-up">
        {/* Greeting badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 mt-6">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 leading-none">
          <span className="text-base-content">Hi, I'm </span>
          <span className="gradient-text">Shubham</span>
        </h1>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 text-base-content/80">
          Bharti
        </h2>

        {/* Typewriter */}
        <div className="h-14 flex items-center justify-center mb-6">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 font-mono">
            {displayed}
            <span className="cursor-blink text-cyan-300">|</span>
          </span>
        </div>

        {/* Tagline */}
        <p className="text-base sm:text-lg text-base-content/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Passionate software developer crafting scalable web applications with
          Java & MERN Stack. Building efficient solutions and solving complex
          problems through code.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToProjects}
            className="btn btn-primary btn-lg rounded-full btn-glow gap-2 text-base font-semibold"
          >
            View Projects
          </button>
          <a
            href="#"
            className="btn btn-outline btn-lg rounded-full gap-2 text-base font-semibold hover:btn-primary transition-all duration-300"
          >
            Download Resume
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 text-base-content/30 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <FiArrowDown className="text-lg" />
        </div>
      </div>
    </div>
  );
}
