import React, { useState } from 'react';

const ImageGallery = ({ images = [] }) => {
  const [activeIdx, setActiveIdx] = useState(null);

  if (!images || images.length === 0) return null;

  const openLightbox = (index) => {
    setActiveIdx(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveIdx(null);
    document.body.style.overflow = 'unset';
  };

  const nextImg = (e) => {
    e.stopPropagation();
    if (activeIdx < images.length - 1) {
      setActiveIdx(activeIdx + 1);
    }
  };

  const prevImg = (e) => {
    e.stopPropagation();
    if (activeIdx > 0) {
      setActiveIdx(activeIdx - 1);
    }
  };

  const mainImage = images[0];
  const supportingImages = images.slice(1, 4);

  return (
    <div className="w-full">
      {/* Editorial Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Main Large Image */}
        {mainImage && (
          <div 
            onClick={() => openLightbox(0)}
            className="md:col-span-2 aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group shadow-sm border border-stone-200/40 bg-stone-100"
          >
            <img 
              src={mainImage} 
              alt="Featured experience view" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
            />
          </div>
        )}

        {/* Supporting Column (Max 3 Images) */}
        <div className="flex flex-col gap-6">
          {supportingImages.map((img, idx) => (
            <div 
              key={idx}
              onClick={() => openLightbox(idx + 1)}
              className="flex-grow aspect-[16/10] md:aspect-auto rounded-2xl overflow-hidden cursor-pointer group shadow-sm border border-stone-200/40 bg-stone-100"
            >
              <img 
                src={img} 
                alt={`Experience detail view ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-6 transition-opacity duration-300 animate-fade-in"
        >
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-stone-300 hover:text-white transition-colors duration-300 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left Arrow Button */}
          <button 
            onClick={prevImg}
            disabled={activeIdx === 0}
            className="absolute left-6 text-stone-300 hover:text-white disabled:opacity-20 disabled:hover:text-stone-300 transition-all duration-300 cursor-pointer p-2"
            aria-label="Previous Image"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.8} 
              stroke="currentColor" 
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Image Container with Smooth Fade Transition */}
          <div className="max-w-4xl max-h-[80vh] flex items-center justify-center select-none">
            <img 
              src={images[activeIdx]} 
              alt={`Gallery detail view ${activeIdx}`} 
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl transition-all duration-300"
            />
          </div>

          {/* Right Arrow Button */}
          <button 
            onClick={nextImg}
            disabled={activeIdx === images.length - 1}
            className="absolute right-6 text-stone-300 hover:text-white disabled:opacity-20 disabled:hover:text-stone-300 transition-all duration-300 cursor-pointer p-2"
            aria-label="Next Image"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.8} 
              stroke="currentColor" 
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
