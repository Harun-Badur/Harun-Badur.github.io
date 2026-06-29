import { User, Code2, Brain, Sparkles, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom corporate brand SVGs for the skills grid
const PythonIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.895 2C8.384 2 8.016 2.152 6.634 2.78c-1.325.602-2.28 1.488-2.731 2.915-.478 1.516-.494 2.93-.494 5.097h3.946V11.23h5.688V5.55h-5.688V4.86c0-1.28.718-1.97 1.996-1.97h3.693V2h-1.149zm-3.327 1.637a.684.684 0 1 1 0 1.368.684.684 0 0 1 0-1.368z" fill="#3773A6"/>
    <path d="M12.105 22c3.511 0 3.879-.152 5.261-.78 1.325-.602 2.28-1.488 2.731-2.915.478-1.516.494-2.93.494-5.097h-3.946V12.77h-5.688v5.68c0 1.28-.718 1.97-1.996 1.97H5.268V22h6.837zm3.327-1.637a.684.684 0 1 1 0-1.368.684.684 0 0 1 0 1.368z" fill="#FFD43B"/>
  </svg>
);

const ReactIcon = () => (
  <svg className="w-5 h-5 shrink-0 animate-[spin_20s_linear_infinite]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(0 12 12)"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)"/>
    <circle cx="12" cy="12" r="1.8" fill="#61DAFB"/>
  </svg>
);

const TypeScriptIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#3178C6"/>
    <path d="M12.983 18.539c-.198-.109-.344-.246-.438-.413a.965.965 0 0 1-.14-.523c0-.18.046-.333.136-.459a.952.952 0 0 1 .374-.325c.158-.078.337-.116.536-.116.279 0 .524.073.736.219.213.146.368.349.467.608.098.26.147.564.147.914 0 .341-.052.637-.156.888a1.597 1.597 0 0 1-.462.628c-.205.17-.456.299-.753.385-.297.086-.628.129-.993.129-.636 0-1.189-.136-1.657-.407-.468-.271-.828-.667-1.079-1.187-.251-.521-.377-1.155-.377-1.902 0-.742.128-1.378.385-1.908s.618-.931 1.084-1.203c.465-.272 1.012-.408 1.639-.408.621 0 1.159.13 1.616.39.456.26.81.63 1.06 1.111.25.481.375 1.054.375 1.718v.538h-4.887c.012.392.086.72.222.984.136.265.326.467.57.608.243.14.526.21.848.21.328 0 .612-.07.854-.21.242-.14.415-.357.519-.652h1.168c-.065.41-.219.76-.462 1.05-.243.291-.564.516-.963.676a3.25 3.25 0 0 1-1.306.24c-.67 0-1.254-.132-1.752-.397zm.056-4.665c-.244.137-.433.33-.568.58-.135.25-.21.554-.226.914h3.044v-.092c-.006-.312-.062-.578-.168-.8s-.266-.395-.48-.521a1.272 1.272 0 0 0-.693-.19c-.334 0-.638.103-.909.31zM6.9 19.5h1.22V10h-2.1v.96H6.9v8.54zM5.5 8.24a.87.87 0 0 1 .256-.634c.17-.171.378-.256.624-.256.246 0 .454.085.624.256a.87.87 0 0 1 .256.634.87.87 0 0 1-.256.634.863.863 0 0 1-.624.256c-.246 0-.454-.085-.624-.256A.87.87 0 0 1 5.5 8.24z" fill="white"/>
  </svg>
);

const TailwindIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.001 4.8C9.601 4.8 8.161 6 7.681 8.4C8.641 7.44 9.841 7.08 11.281 7.32C12.102 7.457 12.691 8.053 13.344 8.715c1.063 1.077 2.296 2.325 4.977 2.325c2.4 0 3.84-1.2 4.32-3.6c-.96.96-2.16 1.32-3.6 1.08c-.821-.137-1.41-.733-2.063-1.395C15.915 6.048 14.682 4.8 12.001 4.8zm-6 6C3.601 10.8 2.161 12 1.681 14.4c.96-.96 2.16-1.32 3.6-1.08c.821.137 1.41.733 2.063 1.395c1.063 1.077 2.296 2.325 4.977 2.325c2.4 0 3.84-1.2 4.32-3.6c-.96.96-2.16 1.32-3.6 1.08c-.821-.137-1.41-.733-2.063-1.395C9.915 12.048 8.682 10.8 6.001 10.8z" fill="#06B6D4"/>
  </svg>
);

const GeminiIcon = () => (
  <svg className="w-5 h-5 shrink-0 animate-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2a1 1 0 0 1 1 1v2.172l3.414-3.414a1 1 0 1 1 1.414 1.414L14.414 6.586A8 8 0 0 1 12 19a8 8 0 0 1-2.414-12.414L6.172 3.172a1 1 0 1 1 1.414-1.414L11 5.172V3a1 1 0 0 1 1-1z" fill="url(#gemini-grad)"/>
    <defs>
      <linearGradient id="gemini-grad" x1="6" y1="2" x2="18" y2="19" gradientUnits="userSpaceOnUse">
        <stop stopColor="#a855f7"/>
        <stop offset="1" stopColor="#00c8ff"/>
      </linearGradient>
    </defs>
  </svg>
);

const DeepSeekIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#0D47A1" opacity="0.15"/>
    <path d="M12 3a9 9 0 0 0-9 9c0 4.19 2.87 7.71 6.75 8.7l.5-.86c-.95-.41-1.78-1.07-2.42-1.92l.74-.64c.54.72 1.25 1.27 2.06 1.6l.5-.86a7.28 7.28 0 0 1-1.39-1.27l.74-.64c.33.39.73.71 1.18.96l.5-.86c-.34-.14-.66-.33-.94-.56l.74-.64c.15.13.31.24.48.33l.5-.86a3.86 3.86 0 0 1-.39-.14l.74-.64c.03.02.06.05.08.07l.5-.86v-6.79l.5-.29V12a8 8 0 0 1 8 8 9 9 0 0 0 2.25-8 9 9 0 0 0-9-9z" fill="#2979FF"/>
  </svg>
);

const ClaudeIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 22h20L12 2zm0 4.8l6.4 12.8H5.6L12 6.8z" fill="#D97706" opacity="0.2"/>
    <path d="M12 6.8L6.4 18h11.2L12 6.8zM12 9.5l3.2 6.4H8.8L12 9.5z" fill="#D97706"/>
  </svg>
);

const N8nIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#FF6E5F" opacity="0.15"/>
    <path d="M7.5 16.5V7.5L12 12l4.5-4.5v9" stroke="#FF6E5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const McpIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6h16M4 12h16M4 18h16" stroke="#00c8ff" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="6" cy="6" r="2" fill="#00c8ff"/>
    <circle cx="18" cy="12" r="2" fill="#00c8ff"/>
    <circle cx="10" cy="18" r="2" fill="#00c8ff"/>
  </svg>
);

const SmolagentsIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#F1C40F" opacity="0.15"/>
    <path d="M12 6a6 6 0 0 1 6 6v2a6 6 0 0 1-12 0v-2a6 6 0 0 1 6-6z" fill="#F1C40F"/>
    <circle cx="10" cy="12" r="1.5" fill="#000"/>
    <circle cx="14" cy="12" r="1.5" fill="#000"/>
  </svg>
);

const CursorIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 3l13 13-5.5 1.5L10 21l-4.5-18z" fill="white" opacity="0.2"/>
    <path d="M5.5 3l13 13-5.5 1.5-3 6.5-4.5-21z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function About() {
  const skills = [
    { name: "Python", icon: <PythonIcon />, glowClass: "hover:border-[#3773a6]/50 hover:shadow-[0_0_20px_rgba(55,115,166,0.35)]" },
    { name: "React", icon: <ReactIcon />, glowClass: "hover:border-[#61dafb]/50 hover:shadow-[0_0_20px_rgba(97,218,251,0.35)]" },
    { name: "TypeScript", icon: <TypeScriptIcon />, glowClass: "hover:border-[#3178c6]/50 hover:shadow-[0_0_20px_rgba(49,120,198,0.35)]" },
    { name: "Tailwind CSS", icon: <TailwindIcon />, glowClass: "hover:border-[#38bdf8]/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)]" },
    { name: "Gemini API", icon: <GeminiIcon />, glowClass: "hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]" },
    { name: "DeepSeek API", icon: <DeepSeekIcon />, glowClass: "hover:border-[#2979FF]/50 hover:shadow-[0_0_20px_rgba(41,121,255,0.35)]" },
    { name: "Claude Code", icon: <ClaudeIcon />, glowClass: "hover:border-[#D97706]/50 hover:shadow-[0_0_20px_rgba(217,119,6,0.35)]" },
    { name: "n8n", icon: <N8nIcon />, glowClass: "hover:border-[#FF6E5F]/50 hover:shadow-[0_0_20px_rgba(255,110,95,0.35)]" },
    { name: "Model Context Protocol (MCP)", icon: <McpIcon />, glowClass: "hover:border-[#00c8ff]/50 hover:shadow-[0_0_20px_rgba(0,200,255,0.35)]" },
    { name: "smolagents", icon: <SmolagentsIcon />, glowClass: "hover:border-[#f1c40f]/50 hover:shadow-[0_0_20px_rgba(241,196,15,0.35)]" },
    { name: "Cursor", icon: <CursorIcon />, glowClass: "hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]" }
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 md:px-12 py-16 relative z-10">
      
      {/* Background glow behind about row */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* 50-50 Equal Grid Layout with Stretch Alignment */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        
        {/* Left Panel: Hakkımda (h-full flex flex-col justify-between) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full bg-gradient-to-b from-[#14161d]/85 to-[#0a0b0e]/85 border border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-md rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-white/10 transition-all duration-500"
        >
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-6 select-none">
              <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                <User size={20} className="drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
              </div>
              <h2 className="text-xl font-bold text-white tracking-wide">Hakkımda</h2>
            </div>

            {/* Content Text */}
            <p className="text-slate-400 text-sm leading-relaxed font-sans font-normal select-text">
              Yapısal zeka kaldıraçlarıyla iş dünyasını dönüştürmeyi hedefleyen bir Yönetim Bilişim Sistemleri mezunuyum. 
              Kariyerimi Yapay Zeka Çözüm Geliştiricisi ve Entegratörü olarak inşa etmeyi amaçlayan bir yaklaşımla; 
              çoklu platform entegrasyonları ve Agentic AI (yapay zeka ajanları) tasarımlarına odaklanıyorum. 
              Süreç optimizasyonundaki pratik deneyimimi liderlik vizyonumla birleştirerek, karmaşık yapıları yüksek 
              verimli otonom iş modellerine dönüştürmeyi hedefliyorum.
            </p>
          </div>

          {/* Integrated Mindset & Yetkinlikler (Horizontal 1x4 Grid) */}
          <div className="border-t border-white/5 pt-6 w-full mt-8">
            <div className="text-[9px] uppercase tracking-wider font-mono text-slate-500 mb-3 select-none">
              MINDSET & YETKİNLİKLER
            </div>
            
            {/* 4 Cards laid out side-by-side on tablet/desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 select-none">
              
              {/* Problem Solving */}
              <div className="bg-[#0b0c10]/60 border border-white/5 rounded-xl p-3 flex flex-col items-center justify-center text-center hover:border-white/10 hover:bg-white/5 transition-all duration-300 group">
                <Brain size={18} className="text-purple-400 mb-2 drop-shadow-[0_0_8px_rgba(168,85,247,0.3)] transition-transform duration-300 group-hover:scale-110" />
                <span className="text-[10px] font-mono text-slate-400 font-medium">Problem Çözme</span>
              </div>

              {/* Creativity */}
              <div className="bg-[#0b0c10]/60 border border-white/5 rounded-xl p-3 flex flex-col items-center justify-center text-center hover:border-white/10 hover:bg-white/5 transition-all duration-300 group">
                <Sparkles size={18} className="text-purple-400 mb-2 drop-shadow-[0_0_8px_rgba(168,85,247,0.3)] transition-transform duration-300 group-hover:scale-110" />
                <span className="text-[10px] font-mono text-slate-400 font-medium">Yaratıcılık</span>
              </div>

              {/* Communication */}
              <div className="bg-[#0b0c10]/60 border border-white/5 rounded-xl p-3 flex flex-col items-center justify-center text-center hover:border-white/10 hover:bg-white/5 transition-all duration-300 group">
                <MessageSquare size={18} className="text-purple-400 mb-2 drop-shadow-[0_0_8px_rgba(168,85,247,0.3)] transition-transform duration-300 group-hover:scale-110" />
                <span className="text-[10px] font-mono text-slate-400 font-medium">İletişim</span>
              </div>

              {/* Learning Passion */}
              <div className="bg-[#0b0c10]/60 border border-white/5 rounded-xl p-3 flex flex-col items-center justify-center text-center hover:border-white/10 hover:bg-white/5 transition-all duration-300 group">
                <span className="text-xl font-bold text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] leading-none mb-1.5 transition-transform duration-300 group-hover:scale-120">∞</span>
                <span className="text-[10px] font-mono text-slate-400 font-medium">Öğrenme İsteği</span>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Right Panel: Beceriler (h-full flex-col) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="h-full bg-gradient-to-b from-[#14161d]/85 to-[#0a0b0e]/85 border border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-md rounded-2xl p-6 md:p-8 flex flex-col justify-start hover:border-white/10 transition-all duration-500"
        >
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-6 select-none">
              <div className="p-2.5 rounded-lg bg-cyber-green/10 border border-cyber-green/20 text-[#00C4CC] flex items-center justify-center">
                <Code2 size={20} className="drop-shadow-[0_0_8px_rgba(0,196,204,0.5)]" />
              </div>
              <h2 className="text-xl font-bold text-white tracking-wide">Beceriler</h2>
            </div>

            {/* Filled, Large Glassmorphic Technology Matrix Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className={`flex items-center gap-3 p-3 px-4 rounded-xl bg-[#0b0c10]/70 border border-white/5 text-xs font-mono text-slate-300 transition-all duration-300 cursor-default select-none group ${skill.glowClass}`}
                >
                  {skill.icon}
                  <span className="truncate group-hover:text-white transition-colors">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
