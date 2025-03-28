import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import CropedLogo from '../assets/logo-c.webp';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  type NavItem = {
    path: string;
    label: string;
    subLinkStyle?: string;
    subLinks?: {
      path: string;
      label: string;
    }[];
  };

  const navItems: NavItem[] = [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/about',
      label: 'About Us',
      subLinkStyle: '-ml-20',
      subLinks: [
        { path: '/about/mission-and-vision', label: 'Mission and Vision' },
        { path: '/about/hse-and-quality', label: 'HSE' },
        { path: '/about/certification', label: 'Certification' },
        { path: '/news', label: 'News' }
      ]
    },
    {
      path: '/services',
      label: 'Services',
      subLinkStyle: '-ml-40',
      subLinks: [
        { path: '/services#services-2', label: 'Soil Improvement' },
        { path: '/services#services-3', label: 'Shoring' },
        { path: '/services#services-4', label: 'Dewatering' },
        { path: '/services#services-1', label: 'Piling' },
        { path: '/services#services-5', label: 'NDRC/NDM' },
        { path: '/services#services-6', label: 'Logistics' },
      ]
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
    <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-white/70'} shadow-lg fixed w-full z-50 ${isSubMenuOpen ? "pb-6" : ""
      }`}>
      <div className="mx-4 md:mx-8 xl:mx-20 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <Link to="/" className="flex items-center">
            <img src={CropedLogo} className="h-20" alt="TerraCore Logo" />
            <div className="flex flex-col items-start pl-6">
              <span className="text-2xl font-bold text-gray-900">
                TerraCore
              </span>
              <span className="text-md text-gray-800">
                Ground Engineering Solutions
              </span>
            </div>
          </Link>
          <div className="hidden md:flex items-center">
            <ul className="flex items-center space-x-12">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const hasSubLinks = item.subLinks && item.subLinks.length > 0;
                return (
                  <li
                    key={item.path}
                    className="relative group"
                    onMouseEnter={() => hasSubLinks && setIsSubMenuOpen(true)}
                    onMouseLeave={() => hasSubLinks && setIsSubMenuOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={`${isActive ? "text-[#42b7ed]" : "text-gray-700"
                        } hover:text-[#42b7ed] relative pb-1 transition-colors duration-200`}
                    >
                      {item.label}
                      {hasSubLinks && <span className="ml-1 text-sm">+</span>}
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#42b7ed] transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    {item.subLinks && item.subLinks.length > 0 && (
                      <div className={`${item.subLinkStyle} invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 right-0 top-full w-full z-10 transition-all duration-300`}>
                        <div className="py-4">
                          <div className="flex gap-6">
                            {item.subLinks.map((sub) => (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                className="text-gray-700 hover:text-[#42b7ed] py-2 transition-colors duration-200 whitespace-nowrap"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="md:hidden flex items-center justify-between">
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
                <div key={item.path}>
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 text-gray-900 hover:text-blue-600 ${isActive ? 'text-blue-600' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.subLinks && item.subLinks.length > 0 && (
                    <div className="pl-4">
                      {item.subLinks.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
