
import React from 'react';
import { BLOG_POSTS, HUMAN_TAGLINES } from '../constants';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 sm:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 sm:mb-20 text-center slide-up">
          <div className="text-indigo-600 font-bold tracking-[0.2em] text-[10px] uppercase mb-4">Thought Leadership</div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Growth Insights</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            {HUMAN_TAGLINES.blog}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {BLOG_POSTS.map((post, idx) => (
            <article 
              key={post.id} 
              className="p-8 sm:p-10 rounded-[32px] sm:rounded-[40px] bg-[#FCFCFD] border border-slate-100 hover:border-indigo-100 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] transition-premium cursor-pointer group slide-up flex flex-col hover-lift"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center space-x-4 text-[10px] font-bold text-slate-400 mb-8 uppercase tracking-widest">
                <span className="text-indigo-600">{post.date}</span>
                <span className="opacity-30">•</span>
                <span>{post.readTime}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-indigo-600 transition-premium leading-tight">
                {post.title}
              </h3>
              
              <p className="text-slate-500 mb-10 leading-relaxed font-light text-base flex-grow">
                {post.excerpt}
              </p>
              
              <div className="flex items-center text-slate-900 font-bold text-xs sm:text-sm pt-6 border-t border-slate-50 group-hover:text-indigo-600 transition-premium">
                Read Deep Dive
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-premium" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;