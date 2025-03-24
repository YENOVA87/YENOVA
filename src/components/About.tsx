import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Users, Clock, Gamepad, Award } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const stats = [
    { icon: Clock, label: 'Hours Streamed', value: '150+' },
    { icon: Gamepad, label: 'Games Mastered', value: '10+' },
    { icon: Users, label: 'Subscribers', value: '200+' },
    { icon: Trophy, label: 'Achievements', value: '50+' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=100')] bg-cover bg-fixed"
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-8 neon-text glitch"
          >
            About YENOVA
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Welcome to the world of elite gaming. As a professional gamer and content creator,
            I bring you the most intense gameplay, expert strategies, and unforgettable moments
            across multiple gaming universes. Join me on this epic journey as we push the
            boundaries of what's possible in competitive gaming.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)"
              }}
              className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-6 rounded-lg backdrop-blur-sm transform transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.8, type: "spring" }}
                >
                  <stat.icon className="w-12 h-12 text-purple-500 mb-4" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  className="text-3xl font-bold text-white mb-2"
                >
                  {stat.value}
                </motion.h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Removed the Gaming Setup Image Section */}
        {/* This section has been removed as per your request */}
      </div>
    </section>
  );
};

export default About;
