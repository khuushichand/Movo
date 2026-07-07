import React from 'react';

const InsightBadge = ({ icon, label, value }) => {
  return (
    <div className="inline-flex items-center gap-2 bg-[#4A6B82]/5 border border-[#4A6B82]/10 rounded-full px-3.5 py-1.5 shadow-sm">
      <span className="text-xs">{icon}</span>
      <span className="font-sans text-[10px] uppercase tracking-wider font-semibold text-stone-500">{label}:</span>
      <span className="font-sans text-[10px] uppercase tracking-wider font-bold text-[#4A6B82]">{value}</span>
    </div>
  );
};

export default InsightBadge;
