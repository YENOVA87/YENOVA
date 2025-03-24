import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Gamepad2 } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Check for active section
      const sections = ['home', 'about', 'content', 'stream', 'contact'];
      let currentSection = '';
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= window.innerHeight / 2) {
          currentSection = section;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'About', 'Content', 'Stream', 'Contact'];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 100,
      },
    }),
  };

  const logoVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const handleScrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-lg py-4 shadow-lg shadow-purple-500/20'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo with Animation */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            whileHover="hover"
            className="flex items-center gap-2 cursor-pointer"
          >
            <Gamepad2 className="w-8 h-8 text-purple-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              YENOVA
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div className="hidden md:flex space-x-8">
            {menuItems.map((item, i) => (
              <motion.a
                key={item}
                custom={i}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 1.1,
                  textShadow: '0 0 10px rgb(168, 85, 247)',
                  transition: { duration: 0.2 },
                }}
                onClick={() => handleScrollToSection(item.toLowerCase())}
                className={`text-gray-300 hover:text-white transition-colors relative group cursor-pointer neon-text glitch ${
                  activeSection === item.toLowerCase() ? 'text-purple-500' : ''
                }`}
                data-text={item}
              >
                {item}
                {/* Underline effect on hover */}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMobileMenuOpen ? 'close' : 'menu'}
                initial={{ rotate: 0 }}
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                exit={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-purple-500/20"
            >
              <div className="flex flex-col space-y-4 p-4">
                {menuItems.map((item, i) => (
                  <motion.a
                    key={item}
                    custom={i}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{
                      x: 10,
                      textShadow: '0 0 10px rgb(168, 85, 247)',
                    }}
                    onClick={() => handleScrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-white transition-colors py-2 cursor-pointer neon-text glitch"
                    data-text={item}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
