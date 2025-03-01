import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import CropedLogo from '../assets/logo-c.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/about',
      label: 'About Us +',
      subLinks: [
        { path: '/mission-and-vision', label: 'Mission and Vision' },
        { path: '/hse-and-quality', label: 'HSE and Quality' },
        { path: '/certification', label: 'Certification' },
        { path: '/news', label: 'News' }
      ]
    },
    {
      path: '/services',
      label: 'Services',
    },
    {
      path: '/opportunities',
      label: 'Opportunities ',
    },
    {
      path: '/work-with-us',
      label: 'Work With Us',
    },
    {
      path: '/contact',
      label: 'Contact',
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-white/70'} shadow-lg fixed w-full z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <Link to="/" className="flex items-center">
            <img src={CropedLogo} className="h-20" alt="TerraCore Logo" />
            <div className="hidden md:flex flex-col items-start pl-6">
              <span className="text-2xl font-bold text-gray-900">
                TerraCore
              </span>
              <span className="text-md text-gray-800">
                Piling and Foundation
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const hasSubLinks = item.subLinks && item.subLinks.length > 0;

                return (
                  <li key={item.path} className="relative group">
                    <Link
                      to={item.path}
                      className={`text-gray-700 hover:text-blue-600 ${isActive ? 'text-blue-600' : ''
                        }`}
                    >
                      {item.label}
                    </Link>
                    {hasSubLinks && (
                      <div
                        className="
                          hidden 
                          group-hover:flex
                          absolute
                        rounded-md
                          left-0 
                          top-full 
                          w-[calc(40vw)]
                          bg-white/80
                          shadow-lg
                          justify-center
                          z-10
                        "
                      >
                        <ul className="flex space-x-8 py-3">
                          {item.subLinks.map((sub) => (
                            <li key={sub.path}>
                              <Link
                                to={sub.path}
                                className="text-gray-700 hover:text-blue-600 px-4"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-gray-900 hover:text-blue-600 ${isActive ? 'text-blue-600' : ''
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
