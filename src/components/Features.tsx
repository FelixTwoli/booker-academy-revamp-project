
import { BookOpen, Users, Award, Globe, Heart, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    icon: BookOpen,
    title: "CBC Curriculum Excellence",
    description: "Comprehensive Competency-Based Curriculum aligned with Kenya's education standards, preparing students for higher learning.",
    color: "text-blue-600"
  },
  {
    icon: Users,
    title: "Expert Teaching Staff",
    description: "Qualified and experienced teachers committed to nurturing academic excellence and character development in every student.",
    color: "text-indigo-600"
  },
  {
    icon: Award,
    title: "Academic Achievement",
    description: "Consistent high performance in KCSE examinations with 95% success rate and university placement assistance.",
    color: "text-blue-600"
  },
  {
    icon: Globe,
    title: "Global Perspectives",
    description: "International exposure through exchange programs, competitions, and partnerships with global educational institutions.",
    color: "text-indigo-600"
  },
  {
    icon: Heart,
    title: "Character Development",
    description: "Holistic education focusing on moral values, leadership skills, and social responsibility alongside academic excellence.",
    color: "text-blue-600"
  },
  {
    icon: Zap,
    title: "Modern Facilities",
    description: "State-of-the-art laboratories, libraries, sports facilities, and technology infrastructure supporting quality education.",
    color: "text-indigo-600"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">
            ✨ Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Excellence in Every Aspect
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes Booker Academy the premier choice for your child's secondary education journey
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 transition-colors">
                    <Icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Community?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Applications for Grade 10 admission are now open. Secure your child's future with quality CBC education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-colors">
                Apply Now
              </button>
              <button className="border border-blue-200 text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Schedule Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
