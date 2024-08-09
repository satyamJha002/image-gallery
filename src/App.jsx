import React, { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery";
import axios from "axios";
import Navbar from "./components/Navbar";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://picsum.photos/v2/list?page=2&limit=100"
        );
        const data = await response.data;

        console.log(data);
        setImages(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImages();
  }, []);

  return (
    <div>
      <Navbar />
      <ImageGallery images={images} loading={loading} imagesPerPage={6} />
    </div>
  );
};

export default App;
