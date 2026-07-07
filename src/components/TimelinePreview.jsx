import React from 'react';

const TimelinePreview = ({ events = [] }) => {
  return (
    <div className="flex flex-col gap-6 relative pl-6 before:absolute before:left-[11px] before:top-3 before:bottom-3 before:w-[1px] before:bg-stone-200">
      {events.map((event, idx) => (
        <div key={idx} className="relative flex items-start gap-4 animate-fade-in">
          {/* Timeline Dot */}
          <div className="absolute -left-8 top-1.5 w-6 h-6 rounded-full bg-white border border-[#4A6B82] flex items-center justify-center text-xs shadow-sm z-10">
            {event.icon}
          </div>
          <div>
            <span className="font-sans text-[10px] uppercase tracking-wider font-bold text-[#4A6B82] block mb-0.5">
              {event.time}
            </span>
            <h4 className="font-serif text-base font-light text-stone-900 leading-snug">
              {event.title}
            </h4>
            <p className="font-sans text-xs text-stone-400 font-light mt-0.5">
              {event.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelinePreview;
