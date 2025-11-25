import React from 'react';
import { Publication } from '../types';
import { FileText, Github, Globe, ArrowUpRight } from 'lucide-react';

interface PublicationItemProps {
  publication: Publication;
}

const PublicationItem: React.FC<PublicationItemProps> = ({ publication }) => {
  return (
    <div className="group relative bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl rounded-3xl border border-white/40 dark:border-white/5 p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-black/30 hover:-translate-y-1.5 hover:bg-white/60 dark:hover:bg-slate-900/60 hover:border-primary/20 dark:hover:border-primary/20">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Thumbnail */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-black/40 group-hover:shadow-xl transition-all duration-500">
             {publication.thumbnail ? (
               <>
                <img 
                  src={publication.thumbnail} 
                  alt={publication.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               </>
             ) : (
               <div className="w-full h-full bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center text-slate-300">
                 <FileText size={48} strokeWidth={1} />
               </div>
             )}
             
             {publication.highlight && (
                 <div className="absolute top-3 left-3 px-2.5 py-1 bg-red-500/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-lg border border-white/10">
                     Highlight
                 </div>
             )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
            <div className="flex justify-between items-start gap-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-3 group-hover:text-primary transition-colors duration-300">
                    {publication.title}
                </h3>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                {publication.authors.map((author, idx) => (
                    <span key={idx} className={author.includes("Tingshuo Fan") || author.includes("Fan") ? "font-bold text-slate-900 dark:text-white underline decoration-slate-300 dark:decoration-slate-600 underline-offset-4" : ""}>
                        {author}{idx < publication.authors.length - 1 ? ", " : ""}
                    </span>
                ))}
            </p>

            <div className="flex items-center gap-3 mb-5">
                <span className={`px-3 py-1 text-xs font-bold rounded-lg border shadow-sm ${
                    publication.highlight 
                    ? 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800/30' 
                    : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800/50 dark:text-slate-400 dark:border-slate-700'
                }`}>
                    {publication.venue}
                </span>
                <span className="text-sm text-slate-400 font-mono font-medium">{publication.year}</span>
            </div>
            
            {publication.abstract && (
                <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mb-6 leading-relaxed">
                    {publication.abstract}
                </p>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-2.5 mt-auto pt-2">
                {publication.links.map((link, idx) => (
                    <a 
                        key={idx} 
                        href={link.url}
                        className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800/50 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 rounded-full transition-all duration-300 border border-slate-200 dark:border-slate-700 group/link shadow-sm hover:shadow-md hover:-translate-y-0.5"
                    >
                        {link.name === 'Code' ? <Github size={14} /> : 
                         link.name === 'Project Page' ? <Globe size={14} /> : 
                         <FileText size={14} />}
                        {link.name}
                        <ArrowUpRight size={12} className="opacity-0 -ml-1 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-300" />
                    </a>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationItem;