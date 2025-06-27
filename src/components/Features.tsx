
import { BookOpen, Users, Trophy, Clock, Shield, Headphones } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: "CBC Curriculum",
    description: "Comprehensive CBC secondary education program aligned with national standards",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Users,
    title: "Experienced Teachers",
    description: "Qualified and experienced teachers dedicated to student success and development",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Trophy,
    title: "Academic Excellence",
    description: "Consistent high performance in KCSE with 95% of students achieving C+ and above",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Day and boarding options available to accommodate different student needs",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Secure, nurturing environment with strict safety protocols and pastoral care",
    color: "bg-red-100 text-red-600"
  },
  {
    icon: Headphones,
    title: "Student Support",
    description: "Dedicated guidance and counseling services for academic and personal development",
    color: "bg-indigo-100 text-indigo-600"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Booker Academy High School?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide quality CBC secondary education with a focus on academic excellence, character development, and preparing students for future success
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
