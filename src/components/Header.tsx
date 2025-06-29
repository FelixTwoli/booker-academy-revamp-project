import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, GraduationCap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Academics', id: 'academics' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Ceremonials', id: 'ceremonials' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-600 mr-2" />
              <span className="font-bold text-xl text-gray-900">Booker Academy</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-600 hover:bg-blue-100 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center ml-2">
              <GraduationCap className="h-8 w-8 text-blue-600 mr-2" />
              <span className="font-bold text-xl text-gray-900">Booker Academy</span>
            </a>
            <button
              onClick={() => setIsMenuOpen(false)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="sr-only">Close main menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-600 hover:bg-blue-100 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
