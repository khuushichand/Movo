import React from 'react';

const FriendAvatar = ({ name, image, size = "w-9 h-9" }) => {
  const initial = name ? name[0].toUpperCase() : "?";
  
  return (
    <div className={`${size} rounded-full overflow-hidden bg-white border border-stone-200 flex items-center justify-center font-sans text-xs font-bold text-stone-700 shadow-sm shrink-0`}>
      {image ? (
        <img src={image} alt={name} className="w-full h-full object-cover" />
      ) : (
        <span>{initial}</span>
      )}
    </div>
  );
};

export default FriendAvatar;
