import { Link } from "react-router-dom";

export default function Footer() {

  const services = [
    { path: '/services/soil', label: 'Soil Improvement' },
    { path: '/services/piling', label: 'Piling' },
    { path: '/services/shoring', label: 'Shoring' },
    { path: '/services/ndrc', label: 'NDRC/NDM' },
    { path: '/services/dewatering', label: 'Dewatering' },
    { path: '/services/logistics', label: 'Logistics' },
  ];
  const Links = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Opportunities', href: '/opportunities' },
    { name: 'Work With Us', href: '/work-with-us' },
  ];

  return (
    <footer className="bg-bp text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TerraCore</h3>
            <p className="text-gray-300">
              Full service engineering contractor specializing in comprehensive ground work solutions
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {Links.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-300 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-gray-300 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Dubai Production City , Dubai, UAE</li>
              <li>Phone: <a href='tel:+97145120777' target='_blank'>+971 4 512 0777</a></li>
              <li>Email: <a href="mailto:info@terracoreme.ae" target='_blank'>info@terracoreme.ae</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-200">
          <p>&copy; {new Date().getFullYear()} TerraCore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

