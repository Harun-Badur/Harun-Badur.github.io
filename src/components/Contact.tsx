import { Mail, MapPin, Terminal, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom SVG Icons for Github and Linkedin to guarantee version compatibility
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 md:px-12 py-16 relative z-10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#00C4CC]/2 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Header Area */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 select-none max-w-5xl mx-auto">
        {/* Title */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-cyber-green/10 border border-cyber-green/20 text-[#00C4CC] flex items-center justify-center">
            <Mail size={20} className="drop-shadow-[0_0_8px_rgba(0,196,204,0.5)]" />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-wide">İletişim</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        
        {/* Left Column: Creative Call & Connection Cards */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-between space-y-6"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Birlikte Harika Şeyler Üretelim! 🚀
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed font-sans select-text">
              Projeleriniz hakkında konuşmak, süreç otomasyonları entegre etmek veya yapay zeka kaldıraçlarıyla iş birliği yapmak için benimle iletişime geçin.
            </p>
          </div>

          {/* Vertical Glassmorphic Connection Cards */}
          <div className="space-y-3.5">
            
            {/* Email Card */}
            <a 
              href="mailto:harunxbadur@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-[#0d0f14]/80 border border-white/5 hover:border-[#00C4CC]/30 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(0,196,204,0.06)]"
            >
              <div className="p-3 rounded-lg bg-[#00C4CC]/5 border border-[#00C4CC]/10 text-[#00C4CC] group-hover:bg-[#00C4CC]/10 group-hover:border-[#00C4CC]/20 transition-colors">
                <Mail size={18} className="drop-shadow-[0_0_8px_rgba(0,196,204,0.4)]" />
              </div>
              <div className="flex-grow min-w-0">
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Email</div>
                <div className="text-xs font-semibold text-white truncate">harunxbadur@gmail.com</div>
              </div>
              <ExternalLink size={12} className="text-slate-600 group-hover:text-white transition-colors" />
            </a>

            {/* LinkedIn Card */}
            <a 
              href="https://www.linkedin.com/in/harunbadur"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-[#0d0f14]/80 border border-white/5 hover:border-[#00c8ff]/30 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(0,200,255,0.06)]"
            >
              <div className="p-3 rounded-lg bg-[#00c8ff]/5 border border-[#00c8ff]/10 text-[#00c8ff] group-hover:bg-[#00c8ff]/10 group-hover:border-[#00c8ff]/20 transition-colors">
                <LinkedinIcon className="w-[18px] h-[18px] drop-shadow-[0_0_8px_rgba(0,200,255,0.4)]" />
              </div>
              <div className="flex-grow min-w-0">
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">LinkedIn</div>
                <div className="text-xs font-semibold text-white truncate">linkedin.com/in/harunbadur</div>
              </div>
              <ExternalLink size={12} className="text-slate-600 group-hover:text-white transition-colors" />
            </a>

            {/* GitHub Card */}
            <a 
              href="https://github.com/Harun-Badur"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-[#0d0f14]/80 border border-white/5 hover:border-[#a855f7]/30 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(168,85,247,0.06)]"
            >
              <div className="p-3 rounded-lg bg-[#a855f7]/5 border border-[#a855f7]/10 text-[#a855f7] group-hover:bg-[#a855f7]/10 group-hover:border-[#a855f7]/20 transition-colors">
                <GithubIcon className="w-[18px] h-[18px] drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]" />
              </div>
              <div className="flex-grow min-w-0">
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">GitHub</div>
                <div className="text-xs font-semibold text-white truncate">github.com/Harun-Badur</div>
              </div>
              <ExternalLink size={12} className="text-slate-600 group-hover:text-white transition-colors" />
            </a>

          </div>

          {/* Location details */}
          <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 pt-2 select-none">
            <MapPin size={12} className="text-slate-500 shrink-0" />
            <span>Hatay / İskenderun, Turkey</span>
          </div>

        </motion.div>

        {/* Right Column: Futuristic Terminal Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="h-full flex items-center"
        >
          <div className="w-full rounded-2xl bg-[#07080b]/95 border border-white/5 shadow-[0_0_35px_rgba(168,85,247,0.04)] overflow-hidden group hover:border-[#a855f7]/20 hover:shadow-[0_0_40px_rgba(168,85,247,0.08)] transition-all duration-500">
            
            {/* Terminal Window Header Bar */}
            <div className="bg-[#0b0c10] px-4 py-3 flex items-center justify-between border-b border-white/5 select-none">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/60 border border-red-600/30" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60 border border-yellow-600/30" />
                <span className="w-3 h-3 rounded-full bg-green-500/60 border border-green-600/30" />
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                <Terminal size={10} />
                <span>bash</span>
              </div>
              <div className="w-12" /> {/* Spacer */}
            </div>

            {/* Terminal Monospace Content */}
            <div className="p-6 font-mono text-xs text-slate-300 leading-relaxed select-text space-y-4">
              
              {/* Command 1 */}
              <div>
                <div className="text-purple-400">$ whoami</div>
                <div className="text-[#00C4CC] mt-0.5">harun (AI Solutions Developer & Integrator)</div>
              </div>

              {/* Command 2 */}
              <div>
                <div className="text-purple-400">$ agent --status</div>
                <div className="text-cyan-400 mt-0.5">[STATUS] Core systems optimal. Open for new projects.</div>
              </div>

              {/* Command 3 */}
              <div>
                <div className="text-purple-400">$ echo "Feel free to reach out!"</div>
                <div className="text-white mt-0.5">
                  Feel free to reach out! 🚀
                  <motion.span 
                    animate={{ opacity: [1, 0, 1] }} 
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="inline-block w-1.5 h-3.5 bg-[#00C4CC] ml-1.5 align-middle"
                  />
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
