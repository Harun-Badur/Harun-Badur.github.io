import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

// Code segments structure for the editor syntax highlighting
interface CodeSegment {
  text: string;
  color: string;
  highlightId?: number;
}

const CODE_SEGMENTS: CodeSegment[] = [
  { text: "import ", color: "text-purple-400" },
  { text: "{ Developer } ", color: "text-blue-400" },
  { text: "from ", color: "text-purple-400" },
  { text: "'harun';\n\n", color: "text-cyber-green" },
  
  { text: "// Tech Stack & Skills\n", color: "text-slate-500" },
  { text: "const ", color: "text-purple-400" },
  { text: "skills ", color: "text-blue-400" },
  { text: "= [\n  ", color: "text-slate-300" },
  { text: "'React', 'TypeScript', 'TailwindCSS',\n  ", color: "text-cyber-green" },
  { text: "'Node.js', 'Python', 'Gemini API'\n", color: "text-cyber-green" },
  { text: "];\n\n", color: "text-slate-300" },
  
  { text: "const ", color: "text-purple-400" },
  { text: "passion ", color: "text-blue-400" },
  { text: "= ", color: "text-purple-400" },
  { text: "true;\n\n", color: "text-amber-400" },
  
  { text: "function ", color: "text-purple-400" },
  { text: "createSolutions", color: "text-yellow-400" },
  { text: "() {\n  ", color: "text-slate-300" },
  { text: "if ", color: "text-purple-400" },
  { text: "(passion) {\n    ", color: "text-slate-300" },
  
  { text: "developInteractiveApps();\n    ", color: "text-blue-400", highlightId: 0 },
  { text: "integrateGenerativeAI();\n    ", color: "text-blue-400", highlightId: 1 },
  { text: "solveBusinessProblems();\n  ", color: "text-blue-400", highlightId: 2 },
  
  { text: "}\n  ", color: "text-slate-300" },
  { text: "return ", color: "text-purple-400" },
  { text: "'🚀';\n", color: "text-cyber-green" },
  { text: "}", color: "text-slate-300" }
];

const totalCharacters = CODE_SEGMENTS.reduce((sum, segment) => sum + segment.text.length, 0);

const TITLES = [
  "Agentic AI & LLM Entegrasyonu",
  "AI Çözümleri Geliştirme",
  "İş Analizi",
  "Veri Görselleştirme"
];

export default function Hero() {
  // Subtitle typewriter state
  const [subtitleText, setSubtitleText] = useState('');
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [isDeletingSubtitle, setIsDeletingSubtitle] = useState(false);
  const [subtitleSpeed, setSubtitleSpeed] = useState(100);

  useEffect(() => {
    let timer: any;
    const currentTitle = TITLES[subtitleIndex];

    const handleType = () => {
      if (!isDeletingSubtitle) {
        setSubtitleText(currentTitle.substring(0, subtitleText.length + 1));
        if (subtitleText === currentTitle) {
          timer = setTimeout(() => setIsDeletingSubtitle(true), 2500);
          return;
        }
      } else {
        setSubtitleText(currentTitle.substring(0, subtitleText.length - 1));
        if (subtitleText === '') {
          setIsDeletingSubtitle(false);
          setSubtitleIndex((prev) => (prev + 1) % TITLES.length);
          setSubtitleSpeed(200);
          return;
        }
      }

      setSubtitleSpeed(isDeletingSubtitle ? 40 : 100);
      timer = setTimeout(handleType, subtitleSpeed);
    };

    timer = setTimeout(handleType, subtitleSpeed);
    return () => clearTimeout(timer);
  }, [subtitleText, isDeletingSubtitle, subtitleIndex, subtitleSpeed]);

  // Code editor states
  const [currentCharCount, setCurrentCharCount] = useState(-1); // -1 = Initial state (instructions)
  const [isTyping, setIsTyping] = useState(false);
  const [highlightedLines, setHighlightedLines] = useState<Record<number, boolean>>({});
  const typingTimerRef = useRef<any>(null);

  // Trigger typing simulation
  const handleEditorClick = () => {
    if (isTyping) return;

    // Reset simulation and start typing
    setIsTyping(true);
    setHighlightedLines({});
    setCurrentCharCount(0);
  };

  // Typing effect loop
  useEffect(() => {
    if (!isTyping || currentCharCount === -1) return;

    if (currentCharCount < totalCharacters) {
      typingTimerRef.current = setTimeout(() => {
        // Increment characters per tick for a fast, responsive typing experience
        setCurrentCharCount((prev) => Math.min(prev + 4, totalCharacters));
      }, 15);
    } else {
      setIsTyping(false);
      triggerGlowSimulation();
    }

    return () => {
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    };
  }, [isTyping, currentCharCount]);

  // Glow execution simulation
  const triggerGlowSimulation = () => {
    // Sequentially light up code statements
    const glowSequence = [0, 1, 2];
    glowSequence.forEach((id, index) => {
      setTimeout(() => {
        setHighlightedLines(prev => ({ ...prev, [id]: true }));
      }, index * 400); // 400ms delay between each line glow
    });
  };

  // Helper to render code segments up to the current typed character index
  const renderTypedCode = () => {
    let globalCharIndex = 0;
    const elements: React.ReactNode[] = [];

    for (let i = 0; i < CODE_SEGMENTS.length; i++) {
      const segment = CODE_SEGMENTS[i];
      const startOfSegment = globalCharIndex;
      const endOfSegment = globalCharIndex + segment.text.length;

      if (currentCharCount >= endOfSegment) {
        // Entire segment is typed
        const isHighlighted = segment.highlightId !== undefined && highlightedLines[segment.highlightId];
        elements.push(
          <span 
            key={i} 
            className={`${segment.color} transition-all duration-500 ${
              isHighlighted ? 'bg-cyber-green/20 text-[#00C4CC] text-shadow-[0_0_10px_#00C4CC] font-bold px-1 rounded' : ''
            }`}
          >
            {segment.text}
          </span>
        );
      } else if (currentCharCount > startOfSegment && currentCharCount < endOfSegment) {
        // Segment is partially typed
        const visibleLength = currentCharCount - startOfSegment;
        elements.push(
          <span key={i} className={segment.color}>
            {segment.text.substring(0, visibleLength)}
          </span>
        );
        break; // Stop rendering subsequent segments
      } else {
        break; // Not reached yet
      }

      globalCharIndex += segment.text.length;
    }

    // Append blinking cursor
    elements.push(
      <span key="cursor" className="text-cyber-green animate-typing-cursor inline-block font-mono">
        █
      </span>
    );

    return elements;
  };

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-[#0d0e12]">
      
      {/* Decorative neon glow backdrops */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-purple-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] bg-cyber-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Hero Text & Typewriter */}
        <div className="flex flex-col items-start text-left z-10 w-full">
          
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Harun <span className="text-[#00C4CC]">Badur</span>
          </h1>
          
          {/* Typewriter text */}
          <div className="h-8 flex items-center select-none min-h-[2rem] mt-4">
            <span className="text-sm md:text-base font-mono text-gray-400 flex items-center whitespace-nowrap">
              <span className="text-[#7D2AE8] font-bold mr-2">//</span>
              {subtitleText}
              <span className="animate-typing-cursor text-[#7D2AE8] font-normal ml-0.5">|</span>
            </span>
          </div>



          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2 w-full sm:w-auto select-none mt-6">
            <a 
              href="#projects" 
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#00C4CC] to-[#7D2AE8] hover:opacity-90 shadow-[0_0_20px_rgba(0,196,204,0.3)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Projelerim</span>
              <span className="font-mono font-bold">&gt;</span>
            </a>
            <a 
              href="#contact" 
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-transparent border border-cyber-blue/35 hover:border-cyber-blue/60 hover:bg-cyber-blue/5 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shadow-[0_0_15px_rgba(125,42,232,0.05)]"
            >
              <span>İletişim</span>
            </a>
          </div>
        </div>

        {/* Right Column - Playable Code Editor */}
        <div className="relative z-10 flex justify-center lg:justify-end">
          
          {/* Subtle neon drop shadow backdrop behind editor */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-cyber-green/10 rounded-3xl blur-2xl -z-10 scale-95" />

          <motion.div
            whileHover={{ scale: 1.01 }}
            onClick={handleEditorClick}
            className={`w-full max-w-lg glass-card rounded-2xl overflow-hidden border border-white/5 shadow-2xl transition-all duration-300 cursor-pointer group ${
              isTyping ? 'ring-1 ring-cyber-green/30' : 'hover:border-white/10'
            }`}
          >
            {/* Window title bar */}
            <div className="bg-[#12141a]/95 px-5 py-3.5 flex items-center justify-between border-b border-white/5 select-none">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="font-mono text-xs text-slate-400 flex items-center gap-1.5">
                portfolio.js
              </span>
              
              {/* Play symbol indicator */}
              <div className="flex items-center gap-1 font-mono text-[10px] text-slate-500 group-hover:text-cyber-green transition-colors">
                <Play size={10} className={`${isTyping ? 'animate-ping' : ''}`} />
                <span>RUN</span>
              </div>
            </div>

            {/* Window Content */}
            <div className="p-6 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto min-h-[340px] flex flex-col justify-start bg-[#0d0e12]/80">
              {currentCharCount === -1 ? (
                // Initial static instruction state
                <div className="text-slate-500 select-none flex flex-col justify-center items-center h-[280px] text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 group-hover:text-cyber-green group-hover:border-cyber-green/20 group-hover:bg-cyber-green/5 transition-all duration-300">
                    <Play size={20} className="ml-0.5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-slate-400 font-semibold text-xs md:text-sm">⚡ portfolio.js</p>
                    <p className="text-[11px] text-slate-500">Kodu yazmak ve çalıştırmak için tıklayın.</p>
                    <p className="text-[10px] text-slate-600 font-mono">Click anywhere to type and execute.</p>
                  </div>
                </div>
              ) : (
                // Active typing/simulation state
                <pre className="whitespace-pre">
                  <code>{renderTypedCode()}</code>
                </pre>
              )}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
