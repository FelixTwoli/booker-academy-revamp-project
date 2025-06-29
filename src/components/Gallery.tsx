
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';

const schoolImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop&crop=center",
    title: "Modern Classrooms",
    description: "Well-equipped classrooms with modern learning facilities"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop&crop=center",
    title: "School Campus",
    description: "Our beautiful and spacious school compound"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=400&fit=crop&crop=center",
    title: "Academic Excellence",
    description: "Students engaged in quality learning activities"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&h=400&fit=crop&crop=center",
    title: "School Building",
    description: "Our modern and secure school infrastructure"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=600&h=400&fit=crop&crop=center",
    title: "Learning Environment",
    description: "Conducive environment for academic growth"
  }
];

const Gallery = () => {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100 mb-4">
            📸 School Gallery
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience Booker Academy
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a glimpse into our modern facilities, vibrant campus life, and dedicated learning environment
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {schoolImages.map((image) => (
                <CarouselItem key={image.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                        <p className="text-sm text-gray-200">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white shadow-lg border-red-200 hover:bg-red-50" />
            <CarouselNext className="hidden md:flex -right-12 bg-white shadow-lg border-red-200 hover:bg-red-50" />
          </Carousel>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
            <div className="text-gray-600">Students Enrolled</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">25+</div>
            <div className="text-gray-600">Qualified Teachers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">10+</div>
            <div className="text-gray-600">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">95%</div>
            <div className="text-gray-600">KCSE Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
