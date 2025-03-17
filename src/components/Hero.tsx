import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/home-1.webp",
      title: "Building Trust\nStrengthening Foundations",
      button: "Know us more",
      link: "/about",
    },
    {
      image: "/home-2.webp",
      title: "Let us do the work for you",
      button: "Consult with us",
      link: "/work-with-us",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`
          }}
        />
      </AnimatePresence>

      <div className="relative h-full flex items-center justify-center">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-full w-full p-20 bg-gray-900/30 flex flex-col items-center justify-center text-center rounded-lg"
        >
          <h1 className="text-4xl md:text-5xl mb-6 text-white whitespace-pre-line">
            {slides[currentSlide].title}
          </h1>
          <Link to={slides[currentSlide].link} className="bg-bp text-white py-3 px-8 rounded-md hover:bg-blue-700 transition min-w-40 text-center">
            {slides[currentSlide].button}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
