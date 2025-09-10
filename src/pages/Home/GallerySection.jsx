import React from 'react';

const GallerySection = () => {
  const images = [
    {
      id: 1,
      src: "/images/img_rectangle_3390.png",
      alt: "Construction project 1"
    },
    {
      id: 2,
      src: "/images/img_rectangle_3389_304x480.png",
      alt: "Construction project 2"
    },
    {
      id: 3,
      src: "/images/img_rectangle_3391.png",
      alt: "Construction project 3"
    }
  ];

  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[24px]">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8">
          {images?.map((image) => (
            <div key={image?.id} className="w-full lg:w-[32%] overflow-hidden rounded-md hover-lift">
              <img 
                src={image?.src} 
                alt={image?.alt}
                className="w-full h-[200px] sm:h-[250px] lg:h-[304px] object-cover img-zoom"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;