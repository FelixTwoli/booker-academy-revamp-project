
import { Badge } from '@/components/ui/badge';
import { Book, Users, Clock, CheckCircle } from 'lucide-react';

const Academics = () => {
  const subjects = [
    "Mathematics", "English", "Kiswahili", "Biology", "Chemistry", "Physics",
    "Geography", "History", "CRE/IRE", "Business Studies", "Agriculture", "Computer Studies"
  ];

  return (
    <section id="academics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">
            🎓 Academic Programs
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            CBC Curriculum Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive academic program is designed to prepare students for success 
            in KCSE examinations and beyond, following the Competency-Based Curriculum.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Academic Overview */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Grade 10 (Form 1 & 2)</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our Grade 10 program provides a solid foundation in all CBC subjects, 
                ensuring students are well-prepared for their KCSE examinations. We focus 
                on competency-based learning that develops critical thinking and practical skills.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Core Subjects</h4>
                    <p className="text-gray-600 text-sm">Mathematics, English, Kiswahili, and Sciences</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Elective Options</h4>
                    <p className="text-gray-600 text-sm">Business, Agriculture, Computer Studies</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subjects Grid */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Available Subjects</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {subjects.map((subject, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3 text-center hover:bg-blue-50 transition-colors">
                    <span className="text-gray-700 font-medium text-sm">{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats & Features */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Book className="h-8 w-8 text-blue-600 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900">Class Structure</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Class Size</span>
                  <span className="font-semibold">Max 35 students</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Teacher Ratio</span>
                  <span className="font-semibold">1:25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Academic Year</span>
                  <span className="font-semibold">3 Terms</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-indigo-600 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900">Schedule</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">School Hours</span>
                  <span className="font-semibold">8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lessons</span>
                  <span className="font-semibold">8 periods/day</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Break Time</span>
                  <span className="font-semibold">30 minutes</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-sm text-gray-600 mb-2">KCSE Success Rate</div>
                <p className="text-xs text-gray-500">
                  Students achieving C+ and above
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
