import React from 'react';
import { motion } from 'framer-motion';
import { Twitch, Youtube, ChevronDown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import logo from '../logo.jpg'; // Import your logo image here

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const letterAnimation = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    })
  };

  const youtubeLink = "https://www.youtube.com/@YENOVAGAMING-z4x";  // Replace with your YouTube channel URL

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-800 to-blue-800">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30" />
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-[1px] bg-purple-500/30"
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ top: `${(i + 1) * 5}%` }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full"
            animate={{
              x: [0, Math.random() * 400 - 200],
              y: [0, Math.random() * 400 - 200],
              scale: [1, Math.random() * 3],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div ref={ref} className="relative z-20 text-center px-4">
        {/* Circular Logo with up and down back-and-forth animation */}
        <motion.img
          src={logo}
          alt="YENOVA GAMING Logo"
          className="mx-auto mb-8 w-96 h-96 rounded-full object-cover"  // Increased size of the logo
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          animate={{
            y: [0, -40, 0],  // Increased back-and-forth movement (negative value for the upward motion)
            opacity: [0.8, 1, 0.8],  // Add subtle fade-in and fade-out effect
          }}
          transition={{
            duration: 3,   // Slower movement for smoothness
            repeat: Infinity, // Loop the animation infinitely
            ease: "easeInOut"
          }}
          style={{
            boxShadow: '0 0 25px 10px rgba(128, 0, 128, 0.7), 0 0 25px 10px rgba(0, 0, 255, 0.7)',  // Neon purple and blue shadow
          }}
        />

        {/* Animated Name (YENOVA GAMING with flex layout) */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row justify-center items-center">
            {/* YENOVA word */}
            <motion.div
              className="text-6xl md:text-8xl font-bold text-transparent glitch mb-2 md:mb-0"
              variants={letterAnimation}
              custom={0}
              style={{
                background: 'linear-gradient(90deg, #A5D8FF, #3B82F6, #9B4D96)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                animation: 'gradientMove 3s ease infinite',
              }}
              whileHover={{
                scale: 1.2,
                textShadow: '0 0 8px rgb(168, 85, 247)',
                transition: { duration: 0.2 },
              }}
            >
              YENOVA
            </motion.div>

            {/* GAMING word */}
            <motion.div
              className="text-6xl md:text-8xl font-bold text-transparent glitch"
              variants={letterAnimation}
              custom={1}
              style={{
                background: 'linear-gradient(90deg, #A5D8FF, #3B82F6, #9B4D96)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                animation: 'gradientMove 3s ease infinite',
              }}
              whileHover={{
                scale: 1.2,
                textShadow: '0 0 8px rgb(168, 85, 247)',
                transition: { duration: 0.2 },
              }}
            >
              GAMING
            </motion.div>
          </div>
        </motion.div>

        {/* Links to YouTube */}
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <a
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-purple-600 rounded-lg overflow-hidden hover:bg-purple-700 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-2 text-lg text-white">
              <Twitch className="w-6 h-6" />
              Watch Live
            </span>
            <motion.div
              className="absolute inset-0 border-2 border-purple-500 rounded-lg"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </a>

          <a
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-red-600 rounded-lg overflow-hidden hover:bg-red-700 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-2 text-lg text-white">
              <Youtube className="w-6 h-6" />
              Latest Videos
            </span>
            <motion.div
              className="absolute inset-0 border-2 border-red-500 rounded-lg"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </a>
        </motion.div>

        {/* Down Arrow */}
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        >
          <ChevronDown className="w-8 h-8 text-purple-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
