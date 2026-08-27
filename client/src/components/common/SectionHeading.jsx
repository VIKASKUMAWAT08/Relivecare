import React from 'react';

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  dark = false,
}) {
  return (
    <div className={`max-w-3xl mb-12 ${centered ? 'mx-auto text-center' : 'text-left'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-3.5 shadow-xs border ${
          dark
            ? 'bg-teal-950/80 text-teal-300 border-teal-800/60'
            : 'bg-teal-50 text-teal-800 border-teal-200'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
          {badge}
        </div>
      )}

      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 ${
        dark ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
