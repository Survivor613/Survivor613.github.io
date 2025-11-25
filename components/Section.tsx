import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  id?: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, id, className = "" }) => {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <div className="flex items-center gap-4 mb-8">
         <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight relative">
            {title}
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
         </h2>
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        {children}
      </div>
    </section>
  );
};

export default Section;