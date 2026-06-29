import React, { useState, useEffect } from 'react';
import { Folder, ArrowRight, ArrowLeft, Sparkles, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom Mini SVGs for Tech Tags
const PythonLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.895 2C8.384 2 8.016 2.152 6.634 2.78c-1.325.602-2.28 1.488-2.731 2.915-.478 1.516-.494 2.93-.494 5.097h3.946V11.23h5.688V5.55h-5.688V4.86c0-1.28.718-1.97 1.996-1.97h3.693V2h-1.149zm-3.327 1.637a.684.684 0 1 1 0 1.368.684.684 0 0 1 0-1.368z" fill="#3773A6"/>
    <path d="M12.105 22c3.511 0 3.879-.152 5.261-.78 1.325-.602 2.28-1.488 2.731-2.915.478-1.516.494-2.93.494-5.097h-3.946V12.77h-5.688v5.68c0 1.28-.718 1.97-1.996 1.97H5.268V22h6.837zm3.327-1.637a.684.684 0 1 1 0-1.368.684.684 0 0 1 0 1.368z" fill="#FFD43B"/>
  </svg>
);

const ReactLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0 animate-[spin_12s_linear_infinite]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(0 12 12)"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)"/>
    <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
  </svg>
);

const TypeScriptLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#3178C6"/>
    <path d="M12.983 18.539c-.198-.109-.344-.246-.438-.413a.965.965 0 0 1-.14-.523c0-.18.046-.333.136-.459a.952.952 0 0 1 .374-.325c.158-.078.337-.116.536-.116.279 0 .524.073.736.219.213.146.368.349.467.608.098.26.147.564.147.914 0 .341-.052.637-.156.888a1.597 1.597 0 0 1-.462.628c-.205.17-.456.299-.753.385-.297.086-.628.129-.993.129-.636 0-1.189-.136-1.657-.407-.468-.271-.828-.667-1.079-1.187-.251-.521-.377-1.155-.377-1.902 0-.742.128-1.378.385-1.908s.618-.931 1.084-1.203c.465-.272 1.012-.408 1.639-.408.621 0 1.159.13 1.616.39.456.26.81.63 1.06 1.111.25.481.375 1.054.375 1.718v.538h-4.887c.012.392.086.72.222.984.136.265.326.467.57.608.243.14.526.21.848.21.328 0 .612-.07.854-.21.242-.14.415-.357.519-.652h1.168c-.065.41-.219.76-.462 1.05-.243.291-.564.516-.963.676a3.25 3.25 0 0 1-1.306.24c-.67 0-1.254-.132-1.752-.397zm.056-4.665c-.244.137-.433.33-.568.58-.135.25-.21.554-.226.914h3.044v-.092c-.006-.312-.062-.578-.168-.8s-.266-.395-.48-.521a1.272 1.272 0 0 0-.693-.19c-.334 0-.638.103-.909.31zM6.9 19.5h1.22V10h-2.1v.96H6.9v8.54zM5.5 8.24a.87.87 0 0 1 .256-.634c.17-.171.378-.256.624-.256.246 0 .454.085.624.256a.87.87 0 0 1 .256.634.87.87 0 0 1-.256.634.863.863 0 0 1-.624.256c-.246 0-.454-.085-.624-.256A.87.87 0 0 1 5.5 8.24z" fill="white"/>
  </svg>
);

const TailwindLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.001 4.8C9.601 4.8 8.161 6 7.681 8.4C8.641 7.44 9.841 7.08 11.281 7.32C12.102 7.457 12.691 8.053 13.344 8.715c1.063 1.077 2.296 2.325 4.977 2.325c2.4 0 3.84-1.2 4.32-3.6c-.96.96-2.16 1.32-3.6 1.08c-.821-.137-1.41-.733-2.063-1.395C15.915 6.048 14.682 4.8 12.001 4.8zm-6 6C3.601 10.8 2.161 12 1.681 14.4c.96-.96 2.16-1.32 3.6-1.08c.821.137 1.41.733 2.063 1.395c1.063 1.077 2.296 2.325 4.977 2.325c2.4 0 3.84-1.2 4.32-3.6c-.96.96-2.16 1.32-3.6 1.08c-.821-.137-1.41-.733-2.063-1.395C9.915 12.048 8.682 10.8 6.001 10.8z" fill="#06B6D4"/>
  </svg>
);

const GeminiLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2a1 1 0 0 1 1 1v2.172l3.414-3.414a1 1 0 1 1 1.414 1.414L14.414 6.586A8 8 0 0 1 12 19a8 8 0 0 1-2.414-12.414L6.172 3.172a1 1 0 1 1 1.414-1.414L11 5.172V3a1 1 0 0 1 1-1z" fill="url(#proj-gemini-grad-strat)"/>
    <defs>
      <linearGradient id="proj-gemini-grad-strat" x1="6" y1="2" x2="18" y2="19" gradientUnits="userSpaceOnUse">
        <stop stopColor="#a855f7"/>
        <stop offset="1" stopColor="#00c8ff"/>
      </linearGradient>
    </defs>
  </svg>
);

const CursorLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 3l13 13-5.5 1.5L10 21l-4.5-18z" fill="white" opacity="0.2"/>
    <path d="M5.5 3l13 13-5.5 1.5-3 6.5-4.5-21z" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ThreeJsLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 22h20L12 2zm0 3.84l7.16 14.32H4.84L12 5.84zm-4 12.32h8v1.5h-8v-1.5z"/>
  </svg>
);

const DeepSeekLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#2979FF" opacity="0.15"/>
    <path d="M12 3a9 9 0 0 0-9 9c0 4.19 2.87 7.71 6.75 8.7l.5-.86c-.95-.41-1.78-1.07-2.42-1.92l.74-.64c.54.72 1.25 1.27 2.06 1.6l.5-.86a7.28 7.28 0 0 1-1.39-1.27l.74-.64c.33.39.73.71 1.18.96l.5-.86c-.34-.14-.66-.33-.94-.56l.74-.64c.15.13.31.24.48.33l.5-.86a3.86 3.86 0 0 1-.39-.14l.74-.64c.03.02.06.05.08.07l.5-.86v-6.79l.5-.29V12a8 8 0 0 1 8 8 9 9 0 0 0 2.25-8 9 9 0 0 0-9-9z" fill="#2979FF"/>
  </svg>
);

const ViteLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.5 3L12 21 1.5 3h21z" fill="url(#vite-grad-strat)" />
    <path d="M12.5 6L6 14h5.5l-1 6.5L18 11h-5.5l1-5z" fill="#FFD600" />
    <defs>
      <linearGradient id="vite-grad-strat" x1="1.5" y1="3" x2="22.5" y2="21" gradientUnits="userSpaceOnUse">
        <stop stopColor="#41D1FF" />
        <stop offset="1" stopColor="#BD34FE" />
      </linearGradient>
    </defs>
  </svg>
);

const FastApiLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5v-3.5H9v-2h2V8.5h2V12h2v2h-2v3.5h-2z" fill="#009688"/>
  </svg>
);

const SqliteLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6v4c0 2.2 3.6 4 8 4s8-1.8 8-4V6m-16 6v4c0 2.2 3.6 4 8 4s8-1.8 8-4v-4m-16-6c0-2.2 3.6-4 8-4s8 1.8 8 4-3.6 4-8 4-8-1.8-8-4z" stroke="#3178C6" strokeWidth="1.5"/>
  </svg>
);

const SwaggerLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0 text-[#85ea2d]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
  </svg>
);

const StreamlitLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="#FF4B4B">
    <path d="M12 2L2 22h20L12 2zM12 7.2l6.4 12.8H5.6L12 7.2z" />
  </svg>
);

const GraphqlLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2z" stroke="#E10098" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="3" fill="#E10098"/>
  </svg>
);

const RestApiLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2 2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1"/>
    <path d="M18 8h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-4"/>
    <line x1="8" y1="12" x2="16" y2="12"/>
  </svg>
);

const SheetsLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0 text-[#0F9D58]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V7h2v2zm10 8h-8v-2h8v2zm0-4h-8v-2h8v2zm0-4h-8V7h8v2z"/>
  </svg>
);

const MailLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const SmolagentsLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#F1C40F" opacity="0.15"/>
    <path d="M12 6a6 6 0 0 1 6 6v2a6 6 0 0 1-12 0v-2a6 6 0 0 1 6-6z" fill="#F1C40F"/>
    <circle cx="10" cy="12" r="1.2" fill="#000"/>
    <circle cx="14" cy="12" r="1.2" fill="#000"/>
  </svg>
);

const FirecrawlLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0 text-[#FF5A1F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" fill="#FF5A1F" opacity="0.15"/>
  </svg>
);

const NodejsLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0 text-[#68a063]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5H9v-2h2v2zm0-4.5H9v-2h2v2zm0-4.5H9V6.5h2v2zm4 9H13v-2h2v2zm0-4.5H13v-2h2v2zm0-4.5H13V6.5h2v2z"/>
  </svg>
);

const NanobotLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0 text-[#00c8ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2"/>
    <circle cx="12" cy="5" r="2"/>
    <path d="M12 7v4M8 15h.01M16 15h.01"/>
  </svg>
);

const EsmLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M2 3h20v18H2V3zm4 4v10h12V7H6zm2 2h3v1.5H8V9zm0 3.5h3V14H8v-1.5z"/>
  </svg>
);

const StorageLogo = () => (
  <svg className="w-3.5 h-3.5 shrink-0 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
    <line x1="6" y1="6" x2="6.01" y2="6"/>
    <line x1="6" y1="18" x2="6.01" y2="18"/>
  </svg>
);

interface TechTag {
  name: string;
  icon: React.ReactNode;
}

interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  coverGradient: string;
  coverPattern: React.ReactNode;
  techs: TechTag[];
  githubUrl: string;
  glowClass: string;
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Handle mobile check on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const PROJECTS_DATA: Project[] = [
    {
      id: 1,
      category: "3D Simulation / AI",
      title: "ReEarthSim - 3D İklim Zekası Gösterge Paneli",
      description: "NASA'nın gerçek zamanlı iklim verilerini görselleştiren, bilimsel modeller kullanarak gelecekteki senaryoları öngören ve DeepSeek entegrasyonu aracılığıyla yapay zeka destekli kriz bilgilendirmeleri üreten, etkileşimli 3 boyutlu küre tabanlı bir simülasyon platformu.",
      coverGradient: "from-blue-600/20 via-cyan-500/10 to-[#0d0e12]",
      coverPattern: (
        <div className="absolute inset-0 flex items-center justify-center opacity-30 select-none">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <div className="absolute w-24 h-24 rounded-full border border-cyan-400/40 shadow-[0_0_20px_rgba(6,182,212,0.2)] flex items-center justify-center">
              <div className="absolute w-24 h-6 rounded-full border border-cyan-400/30 transform rotate-12" />
              <div className="absolute w-24 h-16 rounded-full border border-cyan-400/20 transform -rotate-12" />
              <div className="absolute w-6 h-24 rounded-full border border-emerald-400/30" />
            </div>
            <div className="absolute top-2 left-0 w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px] animate-[pulse_2s_infinite]" />
            <div className="absolute bottom-6 left-0 w-32 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent blur-[1px] animate-[pulse_3s_infinite]" />
          </div>
        </div>
      ),
      techs: [
        { name: "React 19", icon: <ReactLogo /> },
        { name: "TypeScript 6", icon: <TypeScriptLogo /> },
        { name: "Tailwind CSS 3", icon: <TailwindLogo /> },
        { name: "Three.js", icon: <ThreeJsLogo /> },
        { name: "DeepSeek V3", icon: <DeepSeekLogo /> }
      ],
      githubUrl: "https://github.com/Harun-Badur/ReEarthSim",
      glowClass: "hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]"
    },
    {
      id: 2,
      category: "Automation Pipeline / Omni-Channel",
      title: "Akıllı E-Ticaret ve Stok Otomasyon Sistemi",
      description: "Trendyol, Hepsiburada, n11 ve ikas altyapılarını tek bir merkezde birleştiren; asenkron kuyruk yönetimi, GraphQL mutasyonları ve Google Sheets tabanlı akıllı entegrasyonlar yardımıyla çok kanallı mağaza stoklarını tek tıkla otonom optimize eden ve yöneten kurumsal otomasyon sistemi.",
      coverGradient: "from-[#00C4CC]/15 via-purple-600/10 to-[#0d0e12]",
      coverPattern: (
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00C4CC_1px,transparent_1px)] bg-[size:1.2rem_1.2rem] flex items-center justify-center select-none">
          <div className="w-4/5 h-2/3 border border-white/10 rounded-lg bg-[#07080b]/90 p-3 relative flex items-center justify-between overflow-hidden shadow-inner">
            <div className="w-10 h-10 rounded-lg border border-[#0F9D58]/40 flex items-center justify-center bg-[#0F9D58]/10">
              <span className="text-[10px] font-bold text-[#0F9D58] animate-pulse">Sheet</span>
            </div>
            
            <svg className="w-12 h-6 absolute left-[50px] top-8" viewBox="0 0 30 15" fill="none">
              <path d="M0 7.5 H30" stroke="#00C4CC" strokeWidth="1" strokeDasharray="2 2" />
              <path d="M0 7.5 Q15 0, 30 0" stroke="#00C4CC" strokeWidth="0.8" strokeDasharray="2 2" />
              <path d="M0 7.5 Q15 15, 30 15" stroke="#00C4CC" strokeWidth="0.8" strokeDasharray="2 2" />
            </svg>
            
            <div className="flex flex-col gap-1 z-10">
              <div className="w-8 h-2.5 bg-orange-600/20 border border-orange-500/30 rounded flex items-center justify-center text-[4px] font-mono text-orange-300">Trendyol</div>
              <div className="w-8 h-2.5 bg-blue-600/20 border border-blue-500/30 rounded flex items-center justify-center text-[4px] font-mono text-blue-300">Hepsiburada</div>
              <div className="w-8 h-2.5 bg-purple-600/20 border border-purple-500/30 rounded flex items-center justify-center text-[4px] font-mono text-purple-300">ikas</div>
            </div>
          </div>
        </div>
      ),
      techs: [
        { name: "Python", icon: <PythonLogo /> },
        { name: "Streamlit", icon: <StreamlitLogo /> },
        { name: "GraphQL", icon: <GraphqlLogo /> },
        { name: "REST API", icon: <RestApiLogo /> },
        { name: "Sheets API", icon: <SheetsLogo /> },
        { name: "SMTP Alerts", icon: <MailLogo /> }
      ],
      githubUrl: "https://github.com/Harun-Badur?tab=repositories",
      glowClass: "hover:border-[#00C4CC]/40 hover:shadow-[0_0_30px_rgba(0,196,204,0.12)]"
    },
    {
      id: 3,
      category: "Agentic AI / Market Intelligence",
      title: "Pazar İstihbaratı - AI Destekli Rakip & Yorum Analiz Ajanı",
      description: "Trendyol ürün linklerinden Firecrawl yardımıyla ham markdown verisi kazıyan, smolagents (ToolCallingAgent) mimarisiyle iş akışını otonom yöneten ve DeepSeek API kullanarak anlık rakip fiyatlandırması, pazar trendleri ve tüketici yorum analizi üreten yapay zeka ajanı.",
      coverGradient: "from-[#FF5A1F]/15 via-orange-600/10 to-[#0d0e12]",
      coverPattern: (
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#FF5A1F_1px,transparent_1px),linear-gradient(to_bottom,#FF5A1F_1px,transparent_1px)] bg-[size:1.2rem_1.2rem] flex items-center justify-center select-none">
          <div className="w-4/5 h-2/3 border border-white/10 rounded-lg bg-[#07080b]/90 p-3 relative flex items-center justify-between overflow-hidden shadow-inner">
            <div className="w-9 h-9 rounded-full border border-[#FF5A1F]/30 flex items-center justify-center bg-[#FF5A1F]/10">
              <span className="text-[5px] font-bold text-[#FF5A1F] animate-pulse">CRAWL</span>
            </div>
            
            <svg className="w-12 h-6 absolute left-[45px] top-8" viewBox="0 0 30 15" fill="none">
              <path d="M0 7.5 H30" stroke="#FF5A1F" strokeWidth="1" strokeDasharray="3 1" />
            </svg>
            
            <div className="w-9 h-9 rounded-full border border-yellow-500/30 flex items-center justify-center bg-yellow-500/10">
              <span className="text-[6px] font-bold text-yellow-500">AGENT</span>
            </div>
          </div>
        </div>
      ),
      techs: [
        { name: "Python", icon: <PythonLogo /> },
        { name: "Streamlit", icon: <StreamlitLogo /> },
        { name: "smolagents", icon: <SmolagentsLogo /> },
        { name: "DeepSeek API", icon: <DeepSeekLogo /> },
        { name: "Firecrawl", icon: <FirecrawlLogo /> }
      ],
      githubUrl: "https://github.com/Harun-Badur?tab=repositories",
      glowClass: "hover:border-[#00C4CC]/40 hover:shadow-[0_0_30px_rgba(0,196,204,0.12)]"
    },
    {
      id: 4,
      category: "Web App",
      title: "ProdCon - AI Ürün Analiz Paneli",
      description: "Yapay zeka motorları ile e-ticaret pazar verilerini anlık analiz eden, kullanıcı taleplerini ve ürün trendlerini grafiklerle görselleştiren mobil uyumlu analiz platformu.",
      coverGradient: "from-emerald-500/20 via-cyan-500/10 to-[#0d0e12]",
      coverPattern: (
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#00C4CC_1px,transparent_1px),linear-gradient(to_bottom,#00C4CC_1px,transparent_1px)] bg-[size:1.2rem_1.2rem] flex items-center justify-center select-none">
          <div className="w-4/5 h-2/3 border border-white/10 rounded-lg bg-[#07080b]/90 p-3 relative flex flex-col justify-between overflow-hidden shadow-inner">
            <div className="flex justify-between items-center pb-2 border-b border-white/5">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
              </div>
              <div className="w-12 h-1.5 bg-white/5 rounded" />
            </div>
            
            <div className="flex items-end gap-1.5 h-12 w-full pt-2">
              <div className="w-full bg-gradient-to-t from-[#00C4CC]/50 to-[#7D2AE8]/50 h-[30%] rounded-sm shadow-[0_0_10px_rgba(0,196,204,0.3)]" />
              <div className="w-full bg-gradient-to-t from-[#00C4CC]/50 to-[#7D2AE8]/50 h-[65%] rounded-sm shadow-[0_0_10px_rgba(0,196,204,0.3)]" />
              <div className="w-full bg-gradient-to-t from-[#00C4CC]/50 to-[#7D2AE8]/50 h-[45%] rounded-sm shadow-[0_0_10px_rgba(0,196,204,0.3)]" />
              <div className="w-full bg-gradient-to-t from-[#00C4CC]/50 to-[#7D2AE8]/50 h-[90%] rounded-sm shadow-[0_0_10px_rgba(0,196,204,0.3)]" />
              <div className="w-full bg-gradient-to-t from-[#00C4CC]/50 to-[#7D2AE8]/50 h-[50%] rounded-sm shadow-[0_0_10px_rgba(0,196,204,0.3)]" />
            </div>
          </div>
        </div>
      ),
      techs: [
        { name: "React", icon: <ReactLogo /> },
        { name: "TypeScript", icon: <TypeScriptLogo /> },
        { name: "Tailwind CSS", icon: <TailwindLogo /> },
        { name: "Gemini API", icon: <GeminiLogo /> }
      ],
      githubUrl: "https://github.com/Harun-Badur?tab=repositories",
      glowClass: "hover:border-[#00C4CC]/40 hover:shadow-[0_0_30px_rgba(0,196,204,0.12)]"
    },
    {
      id: 5,
      category: "AI Tool",
      title: "NOTGÖR - Akıllı Not Özetleme",
      description: "Gemini Imagen ve Live API entegrasyonu yardımıyla karmaşık metinsel notları anında yapılandırılmış özetlere, aksiyon planlarına ve yapay zeka destekli görsellere dönüştüren asistan uygulaması.",
      coverGradient: "from-purple-600/20 via-pink-500/10 to-[#0d0e12]",
      coverPattern: (
        <div className="absolute inset-0 flex items-center justify-center opacity-30 select-none">
          <div className="relative w-28 h-28 flex items-center justify-center">
            <div className="absolute w-6 h-6 rounded-full bg-purple-500/40 border border-purple-500/60 flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(168,85,247,0.7)]">
              <Sparkles size={11} className="text-purple-100" />
            </div>
            <div className="absolute border border-dashed border-purple-500/30 rounded-full w-14 h-14 animate-[spin_10s_linear_infinite]" />
            <div className="absolute border border-dashed border-pink-500/20 rounded-full w-24 h-24 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute top-2 left-6 w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.6)]" />
            <div className="absolute bottom-5 right-2 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
            <div className="absolute bottom-2 left-4 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
          </div>
        </div>
      ),
      techs: [
        { name: "TypeScript", icon: <TypeScriptLogo /> },
        { name: "Gemini API", icon: <GeminiLogo /> },
        { name: "Tailwind CSS", icon: <TailwindLogo /> },
        { name: "Cursor", icon: <CursorLogo /> }
      ],
      githubUrl: "https://github.com/Harun-Badur?tab=repositories",
      glowClass: "hover:border-[#a855f7]/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]"
    },
    {
      id: 6,
      category: "Retail IoT / Queue Automation",
      title: "SiraCell - Premium Uçtan Uca Bilet & Sıra Yönetim Platformu",
      description: "Turkcell mağazalarının dijital birer ikiz yapısını sunarak, mağaza içi operasyonları şeffaflaştırmak ve fiziksel sıraları akıllı algoritmalarla optimize etmek amacıyla Turkcell CodeNight 2026 için geliştirilmiş sıra yönetim platformu.",
      coverGradient: "from-[#FFC800]/15 via-[#003B57]/20 to-[#0d0e12]",
      coverPattern: (
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#003b57_1px,transparent_1px)] bg-[size:1rem_1rem] flex items-center justify-center select-none">
          <div className="w-4/5 h-2/3 flex items-center justify-between border border-[#FFC800]/20 rounded-lg bg-[#07080b]/90 p-3 relative overflow-hidden">
            <div className="flex flex-col gap-2">
              <div className="w-10 h-3 bg-blue-900/60 border border-blue-500/30 rounded flex items-center justify-center text-[6px] font-mono text-blue-300">Bilet</div>
              <div className="w-10 h-3 bg-[#FFC800]/20 border border-[#FFC800]/40 rounded flex items-center justify-center text-[6px] font-mono text-[#FFC800]">Sıra #A</div>
            </div>
            <svg className="w-16 h-8 absolute left-[45px] top-6" viewBox="0 0 40 20" fill="none">
              <path d="M0 10h40" stroke="#FFC800" strokeWidth="1" strokeDasharray="2 2" />
              <circle cx="20" cy="10" r="2.5" fill="#003B57" className="animate-ping" />
            </svg>
            <div className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center bg-blue-950/40">
              <span className="text-[8px] font-bold text-[#FFC800] animate-pulse">IOT</span>
            </div>
          </div>
        </div>
      ),
      techs: [
        { name: "React 18", icon: <ReactLogo /> },
        { name: "Vite", icon: <ViteLogo /> },
        { name: "TypeScript", icon: <TypeScriptLogo /> },
        { name: "TailwindCSS", icon: <TailwindLogo /> },
        { name: "FastAPI", icon: <FastApiLogo /> },
        { name: "SQLite", icon: <SqliteLogo /> },
        { name: "Swagger UI", icon: <SwaggerLogo /> }
      ],
      githubUrl: "https://github.com/Harun-Badur?tab=repositories",
      glowClass: "hover:border-[#FFC800]/40 hover:shadow-[0_0_30px_rgba(255,200,0,0.12)]"
    },
    {
      id: 7,
      category: "Local AI / Sales Automation",
      title: "Satış Yardımcı Pilotu - Local-First Satış Asistanı",
      description: "Potansiyel müşteri araştırması, lead puanlaması ve kişiselleştirilmiş iletişim taslakları üretmek için Node.js ve nanobot CLI altyapısıyla kurgulanmış; veritabanı bağımlılığı olmadan tamamen dosya tabanlı (workspace hafıza modeli) çalışan yerel yapay zeka satış asistanı.",
      coverGradient: "from-purple-600/20 via-cyan-500/10 to-[#0d0e12]",
      coverPattern: (
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#a855f7_1px,transparent_1px),linear-gradient(to_bottom,#a855f7_1px,transparent_1px)] bg-[size:1rem_1rem] flex items-center justify-center select-none">
          <div className="w-[85%] h-[75%] border border-white/10 rounded-lg bg-[#07080b]/95 p-2 relative flex flex-col justify-start overflow-hidden shadow-2xl font-mono text-[6px] text-slate-300">
            <div className="flex gap-1 pb-1 border-b border-white/5 mb-1 items-center">
              <span className="w-1 h-1 rounded-full bg-red-500/50" />
              <span className="w-1 h-1 rounded-full bg-yellow-500/50" />
              <span className="w-1 h-1 rounded-full bg-green-500/50" />
              <span className="text-[5px] text-slate-500 ml-1">Terminal</span>
            </div>
            <div className="text-purple-400">PS C:\workspace&gt; .\start-sales-console.cmd</div>
            <div className="text-cyan-400 font-semibold mt-0.5">🚀 Loading nanobot local-first engine...</div>
            <div className="text-slate-500 mt-0.5">Found workspace files: USER.md, MEMORY.md</div>
          </div>
        </div>
      ),
      techs: [
        { name: "Node.js", icon: <NodejsLogo /> },
        { name: "nanobot CLI", icon: <NanobotLogo /> },
        { name: "ES Modules", icon: <EsmLogo /> },
        { name: "DeepSeek API", icon: <DeepSeekLogo /> },
        { name: "Gemini API", icon: <GeminiLogo /> },
        { name: "Local Storage", icon: <StorageLogo /> }
      ],
      githubUrl: "https://github.com/Harun-Badur?tab=repositories",
      glowClass: "hover:border-[#a855f7]/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]"
    }
  ];

  const visibleCardsCount = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, PROJECTS_DATA.length - visibleCardsCount);

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 md:px-12 py-16 relative z-10 overflow-hidden">
      
      {/* Background neon ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-purple-500/3 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Header Area */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 select-none">
        
        {/* Title */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-cyber-green/10 border border-cyber-green/20 text-[#00C4CC] flex items-center justify-center">
            <Folder size={20} className="drop-shadow-[0_0_8px_rgba(0,196,204,0.5)]" />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-wide">Projeler</h2>
        </div>

        {/* Carousel controls + GitHub Link */}
        <div className="flex items-center gap-5 w-full sm:w-auto justify-between sm:justify-end">
          <a 
            href="https://github.com/Harun-Badur" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 text-xs font-mono font-bold text-[#00C4CC] hover:text-[#7D2AE8] group transition-colors duration-300"
          >
            <span>Tüm Projeleri Gör</span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>

          {/* Navigation Arrows */}
          {PROJECTS_DATA.length > visibleCardsCount && (
            <div className="flex items-center gap-2">
              <button 
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`p-2 rounded-lg border border-white/5 bg-white/5 transition-all duration-300 ${
                  currentIndex === 0 
                    ? 'opacity-35 cursor-not-allowed text-slate-500' 
                    : 'opacity-100 hover:bg-white/10 hover:border-white/20 text-white cursor-pointer'
                }`}
                title="Geri"
              >
                <ArrowLeft size={16} />
              </button>
              <button 
                onClick={nextSlide}
                disabled={currentIndex === maxIndex}
                className={`p-2 rounded-lg border border-white/5 bg-white/5 transition-all duration-300 ${
                  currentIndex === maxIndex 
                    ? 'opacity-35 cursor-not-allowed text-slate-500' 
                    : 'opacity-100 hover:bg-white/10 hover:border-white/20 text-white cursor-pointer'
                }`}
                title="İleri"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Viewport Boundary Wrapper with side paddings and margins to prevent shadow clipping */}
      <div className="relative w-full overflow-hidden px-4 md:px-6 py-6 -mx-4 md:-mx-6">
        
        {/* Carousel slide track container */}
        <motion.div
          className="flex gap-6 w-full overflow-visible"
          animate={{ x: isMobile ? `calc(-${currentIndex * 100}% - ${currentIndex * 24}px)` : `calc(-${currentIndex * 33.333}% - ${currentIndex * 16}px)` }}
          transition={{ type: "spring", stiffness: 200, damping: 24 }}
        >
          {PROJECTS_DATA.map((project) => (
            <div 
              key={project.id}
              className={`w-full md:w-[calc(33.333%-16px)] shrink-0 flex flex-col bg-[#0d0f14]/90 border border-white/5 rounded-2xl overflow-hidden group transition-all duration-500 h-[470px] justify-between cursor-default backdrop-blur-md ${project.glowClass} hover:-translate-y-1.5`}
            >
              {/* Cover image mockup */}
              <div className={`relative h-44 bg-gradient-to-b ${project.coverGradient} border-b border-white/5 flex items-center justify-center overflow-hidden`}>
                {project.coverPattern}
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-[#00C4CC] to-[#7D2AE8] text-[9px] font-mono font-extrabold text-white select-none tracking-wider uppercase shadow-[0_2px_8px_rgba(0,196,204,0.3)]">
                  {project.category}
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex justify-between items-start">
                    <h3 className="text-[14px] font-bold text-white group-hover:text-[#00C4CC] transition-colors duration-300 line-clamp-1">
                      {project.title}
                    </h3>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-slate-500 hover:text-white transition-colors p-0.5"
                      title="Github'da İncele"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-sans select-text line-clamp-4 min-h-[4.5rem]">
                    {project.description}
                  </p>
                </div>

                {/* Footer Tech tag pills */}
                <div className="space-y-4 pt-3 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5 select-none min-h-[1.75rem]">
                    {project.techs.map((tech) => (
                      <div 
                        key={tech.name} 
                        className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-[#1a1d26]/80 border border-white/5 text-[9px] font-mono text-slate-400 group-hover:border-white/10 transition-colors"
                      >
                        {tech.icon}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>

                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl bg-white/5 hover:bg-purple-500/10 border border-white/5 hover:border-purple-500/30 text-[10px] font-mono font-bold text-slate-300 hover:text-purple-300 transition-all duration-300 cursor-pointer select-none"
                  >
                    <span>Koda Git</span>
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dynamic Paginator Dots tracking active index */}
      {PROJECTS_DATA.length > visibleCardsCount && (
        <div className="flex justify-center gap-2 mt-4 select-none">
          {Array.from({ length: maxIndex + 1 }).map((_, dIdx) => (
            <button
              key={dIdx}
              onClick={() => setCurrentIndex(dIdx)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === dIdx 
                  ? 'bg-[#00C4CC] w-3 shadow-[0_0_6px_rgba(0,196,204,0.8)]' 
                  : 'bg-white/15 hover:bg-white/30'
              }`}
              title={`Sayfa ${dIdx + 1}`}
            />
          ))}
        </div>
      )}

    </section>
  );
}
