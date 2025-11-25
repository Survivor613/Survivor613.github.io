import React from 'react';
import ReactMarkdown from 'react-markdown';
import { News } from '../types';

interface NewsItemProps {
  news: News;
}

const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
  return (
    <div className="relative pl-10 sm:pl-36 py-2 group">
      {/* Date Line (Desktop) */}
      <div className="hidden sm:flex flex-col items-end absolute left-0 top-1 w-24 pr-6">
        <span className="text-sm font-bold text-slate-400 group-hover:text-primary transition-colors text-right font-mono tracking-tight">{news.date}</span>
      </div>

      {/* Timeline Dot */}
      <div className="absolute left-4 sm:left-28 top-2.5 z-10 -translate-x-1/2">
        <div className="w-3 h-3 bg-slate-200 dark:bg-slate-700 rounded-full border-2 border-white dark:border-slate-900 group-hover:bg-primary group-hover:scale-125 transition-all duration-300 shadow-sm"></div>
        <div className="absolute inset-0 w-3 h-3 bg-primary rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 animate-ping"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col sm:hidden mb-1">
         <span className="text-xs font-bold text-slate-400 font-mono">{news.date}</span>
      </div>
      
      <div className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed prose dark:prose-invert max-w-none group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors duration-300">
        <ReactMarkdown 
            components={{
                a: ({node, ...props}) => <a {...props} className="text-primary hover:text-primary-600 hover:underline font-semibold decoration-primary/30 underline-offset-2 transition-all" />
            }}
        >
            {news.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default NewsItem;