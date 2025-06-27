
import { ArrowRight, Play, Star, Users, BookOpen, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AdmissionForm from './AdmissionForm';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                🎓 Now Accepting Grade 10 Applications
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Excellence in 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> CBC Secondary</span> Education
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join Booker Academy High School for quality CBC education. We're now accepting applications 
                for Grade 10 students ready to excel in their secondary education journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <AdmissionForm />
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                <Play className="mr-2 h-5 w-5" />
                School Tour
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-2 mx-auto">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-2 mx-auto">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">CBC Subjects</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-xl mb-2 mx-auto">
                  <Trophy className="h-6 w-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">KCSE Success</div>
              </div>
            </div>
          </div>

          {/* Right Content - Subject Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Subject Card 1 */}
              <div className="bg-white rounded-2xl shadow-lg p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl mb-4"></div>
                <h3 className="font-semibold text-gray-900 mb-2">Mathematics</h3>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">4.9</span>
                </div>
                <p className="text-sm text-gray-600">Core Subject • Grade 9-12</p>
              </div>

              {/* Subject Card 2 */}
              <div className="bg-white rounded-2xl shadow-lg p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-300 mt-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl mb-4"></div>
                <h3 className="font-semibold text-gray-900 mb-2">Sciences</h3>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">4.8</span>
                </div>
                <p className="text-sm text-gray-600">Physics, Chemistry, Biology</p>
              </div>

              {/* Subject Card 3 */}
              <div className="bg-white rounded-2xl shadow-lg p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl mb-4"></div>
                <h3 className="font-semibold text-gray-900 mb-2">Languages</h3>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">4.7</span>
                </div>
                <p className="text-sm text-gray-600">English, Kiswahili, French</p>
              </div>

              {/* Subject Card 4 */}
              <div className="bg-white rounded-2xl shadow-lg p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl mb-4"></div>
                <h3 className="font-semibold text-gray-900 mb-2">Social Studies</h3>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">4.9</span>
                </div>
                <p className="text-sm text-gray-600">History, Geography, CRE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
