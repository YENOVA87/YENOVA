import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/80 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 mb-8"
          >
            <Gamepad2 className="w-8 h-8 text-purple-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              YENOVA
            </span>
          </motion.div>

          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-6">
              {['Home', 'About', 'Content', 'Stream', 'Contact'].map((item) => (
                <motion.li key={item} whileHover={{ scale: 1.1 }}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="text-center text-gray-400">
            <p className="flex items-center justify-center gap-2 mb-4">
              Made with <Heart className="w-4 h-4 text-red-500" /> by YENOVA Gaming
            </p>
            <p>© {currentYear} YENOVA Gaming. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;