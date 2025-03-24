import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, Users, Star } from 'lucide-react';

const Stream = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const nextStream = {
    date: "March 15, 2024",
    time: "8:00 PM EST",
    game: "Cyberpunk 2077",
    event: "Special Community Event"
  };

  return (
    <section id="stream" className="py-20 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 neon-text glitch" data-text="Live Stream">
            Live Stream
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join me live for epic gaming sessions, community events, and exclusive content
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-lg backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-6">Next Stream</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Calendar className="w-6 h-6 text-purple-500" />
                <span>{nextStream.date}</span>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="w-6 h-6 text-purple-500" />
                <span>{nextStream.time}</span>
              </div>
              <div className="flex items-center gap-4">
                <Star className="w-6 h-6 text-purple-500" />
                <span>{nextStream.game}</span>
              </div>
              <div className="flex items-center gap-4">
                <Users className="w-6 h-6 text-purple-500" />
                <span>{nextStream.event}</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition-colors"
            >
              Set Reminder
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
            <img
              src="https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80"
              alt="Stream Preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center cursor-pointer"
              >
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-2" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stream;