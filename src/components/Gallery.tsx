
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';

const schoolImages = [
  {
    id: 1,
    src: "/lovable-uploads/bf58149f-57e9-4033-a80a-e48a7d09b3a4.png",
    title: "Student Life",
    description: "Our vibrant students enjoying their school experience"
  },
  {
    id: 2,
    src: "/lovable-uploads/403a7297-2615-47ca-b114-851383a786fb.png",
    title: "Chess Tournament",
    description: "Students participating in competitive chess matches"
  },
  {
    id: 3,
    src: "/lovable-uploads/4abd66b8-a0f5-4623-9956-18e70d31b096.png",
    title: "Innovation Summit",
    description: "Booker Academy students at Technovation World Summit"
  },
  {
    id: 4,
    src: "/lovable-uploads/c18ba440-146f-451e-9b75-a5f5f5ca6c79.png",
    title: "Graduation Day",
    description: "Celebrating our graduates' academic achievements"
  },
  {
    id: 5,
    src: "/lovable-uploads/cae3d06c-3f28-4f71-a26b-4f000c0d952d.png",
    title: "Cultural Events",
    description: "Students celebrating diverse cultures and traditions"
  },
  {
    id: 6,
    src: "/lovable-uploads/099b85fd-e880-49e9-92ee-3741c5973445.png",
    title: "Educational Trips",
    description: "Students on educational excursions and field trips"
  },
  {
    id: 7,
    src: "/lovable-uploads/9e658b6b-218d-4018-8a3d-d26cf897c288.png",
    title: "School Community",
    description: "Our dedicated teaching staff and school community"
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
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">
            📸 School Gallery
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience Booker Academy
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a glimpse into our vibrant school life, academic excellence, and the memorable moments that define our community
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
            <CarouselPrevious className="hidden md:flex -left-12 bg-white shadow-lg border-blue-200 hover:bg-blue-50" />
            <CarouselNext className="hidden md:flex -right-12 bg-white shadow-lg border-blue-200 hover:bg-blue-50" />
          </Carousel>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Students Enrolled</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
            <div className="text-gray-600">Qualified Teachers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-gray-600">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-600">KCSE Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
