import React from 'react';
import { Mail, MapPin, ExternalLink, Github, Linkedin, Twitter, GraduationCap, Globe } from 'lucide-react';
import { Profile } from '../types';

interface ProfileSidebarProps {
  profile: Profile;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ profile }) => {
  // Extract Lab Homepage to display it prominently
  const labLink = profile.socialLinks.find(link => link.name === "Lab Homepage");
  // Filter out Lab Homepage from the regular social icons to avoid duplication
  const socialIcons = profile.socialLinks.filter(link => link.name !== "Lab Homepage");

  const getIcon = (name: string) => {
    switch (name) {
      case 'GitHub': return <Github size={20} />;
      case 'Twitter': return <Twitter size={20} />;
      case 'LinkedIn': return <Linkedin size={20} />;
      case 'Google Scholar': return <GraduationCap size={20} />;
      default: return <ExternalLink size={20} />;
    }
  };

  return (
    <div className="h-full flex flex-col group/sidebar">
        <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl rounded-[2.5rem] p-8 border border-white/40 dark:border-white/5 shadow-2xl dark:shadow-black/50 transition-all duration-500 hover:shadow-3xl hover:bg-white/70 dark:hover:bg-slate-900/70 hover:-translate-y-2">
          
          <div className="flex flex-col items-center text-center">
            {/* Avatar Container */}
            <div className="relative w-48 h-48 mb-8 group-hover/sidebar:scale-105 transition-transform duration-500 ease-out">
                {/* Pulsing Glows */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-fuchsia-500 rounded-full blur-2xl opacity-20 group-hover/sidebar:opacity-40 animate-pulse transition-opacity duration-500"></div>
                
                <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white dark:ring-slate-800 shadow-xl">
                    <img 
                        src={profile.avatarUrl} 
                        alt={profile.name} 
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Status Dot */}
                <div className="absolute bottom-4 right-4 w-5 h-5 bg-green-500 border-4 border-white dark:border-slate-900 rounded-full z-10">
                    <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
                </div>
            </div>
            
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-400 mb-3 tracking-tight">
                {profile.name}
            </h1>
            <p className="text-primary font-bold tracking-wider uppercase text-xs mb-1.5">{profile.title}</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{profile.institution}</p>
            
            {/* Prominent Lab Link Button */}
            {labLink && (
               <a 
                 href={labLink.url}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="mt-4 inline-flex items-center gap-2 px-5 py-2 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 rounded-full text-xs font-bold uppercase tracking-wider border border-indigo-200 dark:border-indigo-500/30 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 hover:scale-105 hover:shadow-md transition-all duration-300 group/lab"
               >
                 <Globe size={14} className="group-hover/lab:animate-spin-slow" />
                 FNLP Lab (OpenMOSS)
               </a>
            )}
          </div>

          <div className="mt-10 space-y-4">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 group shadow-sm hover:shadow-md hover:scale-[1.02]">
              <div className="p-2.5 bg-white dark:bg-slate-900 rounded-full shadow-sm text-slate-400 group-hover:text-primary transition-colors">
                  <Mail size={18} />
              </div>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300 group-hover:text-primary truncate">{profile.email}</span>
            </a>
            
            <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 shadow-sm">
              <div className="p-2.5 bg-white dark:bg-slate-900 rounded-full shadow-sm text-slate-400">
                  <MapPin size={18} />
              </div>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{profile.location}</span>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-5 text-center">Connect</h3>
            <div className="flex justify-center gap-4">
              {socialIcons.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  aria-label={link.name}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3.5 bg-white dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 rounded-2xl shadow-sm hover:bg-gradient-to-br hover:from-primary hover:to-blue-600 hover:text-white dark:hover:text-white transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/25"
                >
                  {getIcon(link.name)}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-200/60 dark:border-white/5">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Focus Areas</h3>
            <div className="flex flex-wrap gap-2.5">
              {profile.interests.map((interest, idx) => (
                <span 
                  key={idx} 
                  className="px-3.5 py-1.5 text-xs font-semibold bg-white/50 dark:bg-slate-800/40 text-slate-600 dark:text-slate-300 rounded-lg border border-slate-200/60 dark:border-white/5 hover:border-primary/30 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
};

export default ProfileSidebar;