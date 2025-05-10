import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi, I&apos;m Abhinav Chalise
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Software Developer | Student @ CU Boulder
      </motion.p>

      <div className="flex space-x-4">
        <a href="https://github.com/Abhi6310" target="_blank" className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
          <Github className="mr-2" /> GitHub
        </a>

        <a href="https://www.linkedin.com/in/abhinav-chalise-6bb31920b/" target="_blank" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
          <Linkedin className="mr-2" /> LinkedIn
        </a>

        <a href="https://abhi6310.github.io/abhinavchalise.github.io" target="_blank" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500">
          View Resume
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
