
import { Calendar, Trophy, Users, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ceremonies = [
  {
    title: "Annual Graduation Ceremony",
    date: "December 2024",
    description: "Celebrating our Form 4 graduates as they complete their KCSE examinations and transition to higher education.",
    image: "/lovable-uploads/9e658b6b-218d-4018-8a3d-d26cf897c288.png",
    type: "Academic"
  },
  {
    title: "Sports Day Competition",
    date: "August 2024",
    description: "Inter-house competitions showcasing athletic talents and promoting teamwork among our students.",
    image: "/lovable-uploads/cae3d06c-3f28-4f71-a26b-4f000c0d952d.png",
    type: "Sports"
  },
  {
    title: "Science Fair Excellence",
    date: "June 2024",
    description: "Students presenting innovative science projects demonstrating practical application of CBC curriculum.",
    image: "/lovable-uploads/4abd66b8-a0f5-4623-9956-18e70d31b096.png",
    type: "Academic"
  }
];

const achievements = [
  {
    icon: Trophy,
    title: "Regional Science Champions",
    description: "1st Place in Regional Science Competition 2024"
  },
  {
    icon: Award,
    title: "KCSE Excellence",
    description: "95% of students achieved C+ and above"
  },
  {
    icon: Users,
    title: "Leadership Awards",
    description: "Outstanding student leadership recognition"
  }
];

const Ceremonials = () => {
  return (
    <section id="ceremonials" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">
            🎓 School Ceremonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Celebrating Our Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the vibrant ceremonial life at Booker Academy where we celebrate 
            academic excellence, sports achievements, and student accomplishments
          </p>
        </div>

        {/* Recent Ceremonies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Recent Ceremonies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ceremonies.map((ceremony, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img 
                    src={ceremony.image} 
                    alt={ceremony.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white hover:bg-blue-600">
                      {ceremony.type}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-blue-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {ceremony.date}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {ceremony.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {ceremony.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Achievements</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Upcoming Events</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Stay tuned for our upcoming Prize Giving Day in March 2025, where we'll celebrate 
            academic excellence and recognize outstanding student achievements.
          </p>
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
            <Calendar className="h-5 w-5" />
            <span className="font-semibold">March 2025 - Prize Giving Day</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ceremonials;
