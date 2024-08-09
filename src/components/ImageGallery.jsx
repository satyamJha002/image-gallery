import React, { useState } from "react";

const ImageGallery = ({ images, loading, imagesPerPage }) => {
  const [visibleImages, setVisibleImages] = useState(imagesPerPage);

  const loadMorePage = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + imagesPerPage);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-center text-2xl pt-2 pb-2 font-semibold">
        Image Gallery
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.slice(0, visibleImages).map((image, index) => (
          <div className="w-full h-64" key={index}>
            <img
              src={image.download_url}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
      {visibleImages < images.length && (
        <button
          onClick={loadMorePage}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default ImageGallery;
