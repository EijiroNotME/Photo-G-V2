import { useState, useEffect } from 'react';
import axios from 'axios';

interface UnsplashImage {
  urls: {
    regular: string;
  };
}

function LandingPageBg() {
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string>('');

  const fetchAPI = async () => {
    try {
      const response = await axios.get<UnsplashImage[]>(
        'https://api.unsplash.com/photos/?client_id=U3zvVhwskdi0u8_Z-S9bm4tyJ7BOVuVLNy0jZWGhSsU&per_page=30'
      );
      const data = response.data;

      if (data && data.length > 0) {
        setImages(data.map((img: UnsplashImage) => img.urls.regular));
      }
    } catch (error) {
      setError('Failed to fetch images');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="mt-[-20px] columns-3 gap-2 lg:gap-4 sm:columns-4 md:columns-5 lg:columns-6 xl:columns-7 [&>img:not(:first-child)]:mt-2 lg:[&>img:not(:first-child)]:mt-4">

        {images.length > 0 ? (
          images.map((url, index) => (
            <img 
              key={index} 
              src={url} 
              alt={`Unsplash image ${index + 1}`} 
              className="w-full h-auto object-cover rounded-2xl opacity-85"
            />
          ))
        ) : (
          <p className="col-span-5 text-center text-gray-500 "></p>
        )}
        {error && (
          <p className="col-span-5 text-center text-red-500 mt-4">{error}</p>
        )}
      </div>
    </div>
  );
}

export default LandingPageBg;
