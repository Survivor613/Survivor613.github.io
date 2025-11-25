import React from 'react';
import ReactMarkdown from 'react-markdown';
import ProfileSidebar from './components/ProfileSidebar';
import Section from './components/Section';
import NewsItem from './components/NewsItem';
import PublicationItem from './components/PublicationItem';
import ThemeToggle from './components/ThemeToggle';
import TypewriterEffect from './components/TypewriterEffect';
import { PROFILE, NEWS, PUBLICATIONS, EXPERIENCE } from './constants';

const App: React.FC = () => {
  const typewriterWords = [
    { text: "Natural Language Processing", className: "text-blue-600 dark:text-blue-400" },
    { text: "RAG Systems", className: "text-violet-600 dark:text-violet-400" }, // Shortened for better mobile fit
    { text: "LLM Agents", className: "text-pink-600 dark:text-pink-400" },
    { text: "Global Reasoning", className: "text-cyan-600 dark:text-cyan-400" },
  ];

  return (
    <div className="relative min-h-screen transition-colors duration-500 overflow-x-hidden font-sans selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:text-indigo-100">
      
      {/* Dynamic Background with Noise Texture */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-slate-50 dark:bg-[#0B1120] transition-colors duration-500">
        {/* Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>

        {/* Vibrant Orbs - Slower Animation */}
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-cyan-400/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob dark:mix-blend-screen dark:bg-cyan-900/20"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-violet-400/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-2000 dark:mix-blend-screen dark:bg-violet-900/20"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40rem] h-[40rem] bg-fuchsia-400/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-4000 dark:mix-blend-screen dark:bg-fuchsia-900/20"></div>
      </div>

      {/* Mobile Header / Theme Toggle (Absolute) */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 md:px-8 py-8 lg:py-16 gap-12">
        
        {/* Left Column: Sidebar */}
        <div className="lg:w-80 flex-shrink-0 z-30 lg:h-[calc(100vh-6rem)] lg:sticky lg:top-12 perspective-1000">
          <ProfileSidebar profile={PROFILE} />
        </div>

        {/* Right Column: Main Content */}
        <main className="flex-1 min-w-0">
          
          <div className="max-w-4xl space-y-20">
            
            {/* Hero Typewriter Section */}
            <div className="pt-8 pb-4 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-slate-400 dark:bg-slate-600"></div>
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Research Focus</span>
                </div>
                
                <div className="flex flex-col">
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                      I am researching
                  </h1>
                  {/* Typewriter on its own line, fixed height to prevent shifting */}
                  <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight h-16 sm:h-20 flex items-center">
                      <TypewriterEffect 
                        words={typewriterWords} 
                        cursorClassName="bg-indigo-500 h-10 sm:h-12 md:h-14 ml-1" 
                      />
                  </div>
                </div>
            </div>

            {/* About Section */}
            <Section title="About Me" id="about">
              <div className="p-8 bg-white/60 dark:bg-slate-900/60 backdrop-blur-3xl rounded-[2rem] border border-white/50 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-black/20 transition-all hover:shadow-2xl hover:scale-[1.01]">
                <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 leading-loose max-w-none font-light">
                  <ReactMarkdown>{PROFILE.bio}</ReactMarkdown>
                </div>
              </div>
            </Section>

            {/* News Section */}
            <Section title="News" id="news">
              <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-3xl rounded-[2rem] border border-white/50 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-black/20 p-8">
                <div className="space-y-8 relative">
                  {/* Timeline Vertical Line */}
                  <div className="absolute inset-y-2 left-4 sm:left-28 w-px bg-slate-200 dark:bg-slate-800"></div>
                  
                  {NEWS.map((item) => (
                    <NewsItem key={item.id} news={item} />
                  ))}
                </div>
              </div>
            </Section>

            {/* Publications Section */}
            <Section title="Selected Publications" id="publications">
              <div className="flex flex-col gap-6">
                {PUBLICATIONS.map((pub) => (
                  <PublicationItem key={pub.id} publication={pub} />
                ))}
              </div>
            </Section>

             {/* Experience Section */}
            <Section title="Experience" id="experience">
              <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-3xl rounded-[2rem] border border-white/50 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-black/20 p-8">
                  <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 space-y-12 pl-8 py-2">
                    {EXPERIENCE.map((exp) => (
                        <div key={exp.id} className="relative group">
                            {/* Glowing Dot */}
                            <div className="absolute -left-[43px] top-1.5 flex items-center justify-center">
                                <div className="w-5 h-5 rounded-full bg-slate-50 dark:bg-slate-900 border-4 border-slate-200 dark:border-slate-700 z-10 group-hover:border-indigo-500 group-hover:scale-110 transition-all duration-300"></div>
                                <div className="absolute w-4 h-4 bg-indigo-500/50 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                            </div>
                            
                            {/* Content */}
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                <div className="flex flex-col space-y-1">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                      {exp.role}
                                    </h3>
                                    <span className="text-lg font-medium text-slate-700 dark:text-slate-300">
                                      {exp.institution}
                                    </span>
                                </div>
                                
                                {/* Date Badge - Now prevented from wrapping improperly */}
                                <div className="flex-shrink-0 self-start md:self-center">
                                  <span className="inline-flex items-center px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 rounded-full whitespace-nowrap shadow-sm">
                                      {exp.period}
                                  </span>
                                </div>
                            </div>
                            
                            {exp.description && (
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light mt-4 pl-4 border-l-2 border-indigo-100 dark:border-indigo-900/50 group-hover:border-indigo-500/30 transition-all duration-300 max-w-2xl">
                                    {exp.description}
                                </p>
                            )}
                        </div>
                    ))}
                  </div>
              </div>
            </Section>
            
            <footer className="pt-16 pb-8 border-t border-slate-200/50 dark:border-slate-800/50 text-center">
                <p className="text-slate-400 text-sm font-medium tracking-wide">&copy; {new Date().getFullYear()} {PROFILE.name}.</p>
                <p className="text-slate-300 dark:text-slate-600 text-xs mt-2">Designed with Academic Aesthetics</p>
            </footer>

          </div>
        </main>
      </div>
    </div>
  );
};

export default App;