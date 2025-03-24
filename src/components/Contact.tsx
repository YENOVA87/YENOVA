import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Disc as Discord, Instagram } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa'; // Make sure this import is correct

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const socialLinks = [
    { icon: Discord, color: 'bg-[#7289DA]', label: 'Discord', link: 'https://discord.com/invite/YOUR_DISCORD_CHANNEL' },
    { icon: Instagram, color: 'bg-[#E4405F]', label: 'Instagram', link: 'https://www.instagram.com/YOUR_INSTAGRAM_HANDLE' },
    { icon: FaYoutube, color: 'bg-[#FF0000]', label: 'YouTube', link: 'https://www.youtube.com/@YENOVAGAMING-z4x' },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 neon-text glitch" data-text="Get In Touch">
            Get In Touch
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions or want to collaborate? Drop me a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-6">
              <div>
                <label className="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Message</label>
                <textarea
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Join the Community</h3>
              <p className="text-gray-400 mb-6">
                Connect with fellow gamers and stay updated with the latest news and events.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${social.color} p-4 rounded-lg flex items-center justify-center gap-2`}
                  >
                    <social.icon className="w-5 h-5" />
                    {social.label}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Business Inquiries</h3>
              <p className="text-gray-400">
                For business collaborations and sponsorship opportunities, please email:
                <br />
                <a href="mailto:yenovagaming@gmail.com" className="text-purple-500 hover:text-purple-400">
                  yenovagaming@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
