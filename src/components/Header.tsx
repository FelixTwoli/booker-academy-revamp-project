
import { useState } from 'react';
import { Menu, X, GraduationCap, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Booker Academy</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium transition-colors">About Us</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Academics</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Admissions</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Contact</a>
          </nav>

          {/* Search and Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search..." 
                className="pl-10 w-64 bg-gray-50 border-gray-200 focus:bg-white focus:border-red-300"
              />
            </div>
            <Button variant="ghost" size="sm" className="hover:text-red-600">
              <User className="h-4 w-4 mr-2" />
              Portal
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
              Apply Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-red-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-red-600 font-medium">About Us</a>
              <a href="#" className="text-gray-700 hover:text-red-600 font-medium">Academics</a>
              <a href="#" className="text-gray-700 hover:text-red-600 font-medium">Admissions</a>
              <a href="#" className="text-gray-700 hover:text-red-600 font-medium">Contact</a>
              <div className="pt-4 border-t border-gray-100 flex flex-col space-y-2">
                <Button variant="ghost" size="sm" className="justify-start hover:text-red-600">
                  <User className="h-4 w-4 mr-2" />
                  Student Portal
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-red-600 to-red-700">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
