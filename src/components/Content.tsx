import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, ThumbsUp, Eye, Pause } from 'lucide-react';
import Draggable from 'react-draggable'; // Import Draggable

const Content = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [isPlaying, setIsPlaying] = useState<number | null>(null); // Track the playing video

  const videos = [
    {
      title: "PC building",
      views: "1.2M",
      likes: "250K",
      thumbnail: "https://images.unsplash.com/photo-1612287230517-fc951ff7151f?auto=format&fit=crop&q=100",
      duration: "18:24",
      videoSrc: "https://www.youtube.com/embed/pMmxJtkFMgQ?autoplay=1"
    },
    {
      title: "Euro Truck Simulator 2 | TMP |",
      views: "800K",
      likes: "150K",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=100",
      duration: "12:45",
      videoSrc: "https://www.youtube.com/embed/0a9WLXWkzhU?autoplay=1"
    },
    {
      title: "GTA V",
      views: "2.1M",
      likes: "425K",
      thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=100",
      duration: "21:30",
      videoSrc: "https://www.youtube.com/embed/cU-W8yykZcI?autoplay=1"
    }
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const handlePlayPauseClick = (index: number) => {
    if (isPlaying === index) {
      setIsPlaying(null); // Pause the video by setting state to null
    } else {
      setIsPlaying(index); // Play the video by setting state to the index of the selected video
    }
  };

  return (
    <section id="content" className="py-20 bg-black/50 relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=100')] bg-cover bg-fixed"
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-8 neon-text glitch"
          >
            Latest Content
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Check out my latest gaming videos, tutorials, and epic moments
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(147, 51, 234, 0.3)"
              }}
              className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg overflow-hidden transform transition-all duration-300"
            >
              <div className="relative group">
                {isPlaying === index ? (
                  // Wrap iframe with Draggable to make it draggable
                  <Draggable>
                    <iframe
                      width="100%"
                      height="315"
                      src={video.videoSrc}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full aspect-video object-cover"
                    />
                  </Draggable>
                ) : (
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full aspect-video object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                )}

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/50 flex items-center justify-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer"
                    onClick={() => handlePlayPauseClick(index)}
                  >
                    {isPlaying === index ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white" />
                    )}
                  </motion.div>
                </motion.div>
                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6"
              >
                <h3 className="text-xl font-bold mb-4">{video.title}</h3>
                <div className="flex justify-between text-gray-400">
                  <motion.span
                    whileHover={{ scale: 1.1, color: "#fff" }}
                    className="flex items-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    {video.views}
                  </motion.span>
                  <motion.span
                    whileHover={{ scale: 1.1, color: "#fff" }}
                    className="flex items-center gap-2"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    {video.likes}
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Content;
