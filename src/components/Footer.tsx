import { Link } from "react-router-dom";

export default function Footer() {

  const services = [
    {
      title: 'Piling Works',
      link: '#services-1',
    },
    {
      title: 'Soil Improvement Works',
      link: '#services-2',
    },
    {
      title: 'Shoring Works',
      link: '#services-3',
    },
    {
      title: 'Dewatering Works',
      link: '#services-4',
    },
    {
      title: 'NDRC Works',
      link: '#services-5',
    },
    {
      title: 'Logistics Solutions',
      link: '#services-6',
    }
  ];
  const Links = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Opportunities', href: '/opportunities' },
    { name: 'Work With Us', href: '/work-with-us' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TerraCore</h3>
            <p className="text-gray-400">
              Leading piling and foundation specialists in the UAE with 40 years of excellence.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {Links.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-white">
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
                <li key={link.title}>
                  <Link to={"/services" + link.link} className="text-gray-400 hover:text-white">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Dubai Production City , Dubai, UAE</li>
              <li>Phone: +971 4 512 0777</li>
              <li>Email: info@terracoreme.ae</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TerraCore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

