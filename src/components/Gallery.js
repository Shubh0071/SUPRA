import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    "/images/car1.jpg",
    "/images/car2.jpg",
    "/images/car3.jpg",
    "/images/car4.jpg",
    "/images/car5.jpg",
    "/images/car6.jpg",
  ];

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`car ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
