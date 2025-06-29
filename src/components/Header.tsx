
import { useState } from 'react';
import { Menu, X, GraduationCap, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Booker Academy</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('academics')} 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Academics
            </button>
            <button 
              onClick={() => scrollToSection('admissions')} 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Admissions
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hover:text-blue-600">
              <User className="h-4 w-4 mr-2" />
              Portal
            </Button>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800"
              onClick={() => scrollToSection('admissions')}
            >
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
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-gray-700 hover:text-blue-600 font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-700 hover:text-blue-600 font-medium text-left"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('academics')} 
                className="text-gray-700 hover:text-blue-600 font-medium text-left"
              >
                Academics
              </button>
              <button 
                onClick={() => scrollToSection('admissions')} 
                className="text-gray-700 hover:text-blue-600 font-medium text-left"
              >
                Admissions
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-700 hover:text-blue-600 font-medium text-left"
              >
                Contact
              </button>
              <div className="pt-4 border-t border-gray-100 flex flex-col space-y-2">
                <Button variant="ghost" size="sm" className="justify-start hover:text-blue-600">
                  <User className="h-4 w-4 mr-2" />
                  Student Portal
                </Button>
                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-700"
                  onClick={() => scrollToSection('admissions')}
                >
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
