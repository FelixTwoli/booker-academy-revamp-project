
import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      src: '/lovable-uploads/bf58149f-57e9-4033-a80a-e48a7d09b3a4.png',
      alt: 'Booker Academy students in classroom',
      title: 'Modern Learning Environment'
    },
    {
      src: '/lovable-uploads/403a7297-2615-47ca-b114-851383a786fb.png',
      alt: 'School facilities and grounds',
      title: 'State-of-the-Art Facilities'
    },
    {
      src: '/lovable-uploads/4abd66b8-a0f5-4623-9956-18e70d31b096.png',
      alt: 'Students in laboratory',
      title: 'Science Laboratory'
    },
    {
      src: '/lovable-uploads/c18ba440-146f-451e-9b75-a5f5f5ca6c79.png',
      alt: 'School library',
      title: 'Well-Equipped Library'
    },
    {
      src: '/lovable-uploads/cae3d06c-3f28-4f71-a26b-4f000c0d952d.png',
      alt: 'Sports activities',
      title: 'Sports & Recreation'
    },
    {
      src: '/lovable-uploads/099b85fd-e880-49e9-92ee-3741c5973445.png',
      alt: 'School assembly',
      title: 'School Community'
    },
    {
      src: '/lovable-uploads/9e658b6b-218d-4018-8a3d-d26cf897c288.png',
      alt: 'Graduation ceremony',
      title: 'Academic Achievement'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">
            📸 School Gallery
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Life at Booker Academy
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a virtual tour through our campus and see the vibrant learning environment 
            where students thrive and achieve their academic goals.
          </p>
        </div>

        {/* Main Gallery */}
        <div className="relative">
          <div className="relative h-96 md:h-[32rem] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover transition-all duration-500"
            />
            
            {/* Overlay with title */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                {images[currentIndex].title}
              </h3>
              <p className="text-gray-200">
                {images[currentIndex].alt}
              </p>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-8 space-x-2 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex 
                    ? 'border-blue-500 scale-110' 
                    : 'border-gray-300 hover:border-blue-300'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-blue-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Gallery Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
            <div className="text-gray-600">Classrooms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">3</div>
            <div className="text-gray-600">Science Labs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
            <div className="text-gray-600">Library</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">2</div>
            <div className="text-gray-600">Sports Fields</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
