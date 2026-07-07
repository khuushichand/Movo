import React from 'react';

const BudgetBreakdown = ({ items = [] }) => {
  const total = items.reduce((sum, item) => sum + item.cost, 0);
  return (
    <div className="bg-stone-50/50 border border-stone-150 rounded-[20px] p-5 flex flex-col gap-3 shadow-sm">
      <span className="text-[10px] uppercase tracking-wider font-bold text-stone-400 block mb-1">
        Estimated Budget Breakdown
      </span>
      <div className="flex flex-col gap-2">
        {items.map((item, idx) => (
          <div key={idx} className="flex justify-between text-xs text-stone-600 font-light">
            <span>{item.label}</span>
            <span className="font-semibold text-stone-850">₹{item.cost}</span>
          </div>
        ))}
        <div className="h-[1px] bg-stone-200/60 my-1" />
        <div className="flex justify-between text-sm font-semibold text-stone-900">
          <span>Total pp</span>
          <span className="text-[#4A6B82]">₹{total}</span>
        </div>
      </div>
    </div>
  );
};

export default BudgetBreakdown;
