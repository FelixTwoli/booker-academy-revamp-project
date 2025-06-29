
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">
            📚 About Booker Academy
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shaping Future Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established as a premier secondary school, Booker Academy is dedicated to providing 
            quality CBC education that prepares students for success in higher learning and beyond.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              Booker Academy was founded with a vision to transform secondary education in Kenya. 
              We are committed to implementing the Competency-Based Curriculum (CBC) effectively, 
              ensuring our students develop both academic excellence and practical life skills.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our approach combines traditional values with modern teaching methods, creating an 
              environment where students thrive academically, socially, and morally. We believe 
              in nurturing well-rounded individuals who will contribute positively to society.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600">2015</div>
                <div className="text-sm text-gray-600">Established</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-indigo-600">500+</div>
                <div className="text-sm text-gray-600">Graduates</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="/lovable-uploads/bf58149f-57e9-4033-a80a-e48a7d09b3a4.png" 
              alt="Booker Academy students"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Academic Excellence</h4>
            <p className="text-gray-600 text-sm">
              Committed to delivering quality CBC education with outstanding KCSE results.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-indigo-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Character Building</h4>
            <p className="text-gray-600 text-sm">
              Fostering moral values, leadership skills, and social responsibility.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h4>
            <p className="text-gray-600 text-sm">
              Embracing modern teaching methods and technology in education.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Target className="h-8 w-8 text-indigo-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Future Ready</h4>
            <p className="text-gray-600 text-sm">
              Preparing students for success in higher education and career paths.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
