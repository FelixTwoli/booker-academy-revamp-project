
import { BookOpen, Users, Trophy, Clock, Shield, Headphones } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: "Expert-Led Courses",
    description: "Learn from industry professionals with years of real-world experience",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Users,
    title: "Interactive Community",
    description: "Connect with fellow students and mentors in our vibrant learning community",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Trophy,
    title: "Certified Completion",
    description: "Earn industry-recognized certificates upon successful course completion",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Clock,
    title: "Learn at Your Pace",
    description: "Access courses 24/7 and learn according to your schedule and preferences",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "30-day money-back guarantee if you're not satisfied with your learning experience",
    color: "bg-red-100 text-red-600"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Get help whenever you need it with our dedicated student support team",
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
            Why Choose Booker Academy?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best online learning experience with features designed for your success
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
