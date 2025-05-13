import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center min-h-screen text-center p-6 text-white"
    >
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <p className="text-lg md:text-xl max-w-2xl mb-6">
        My name is Abhinav Chalise, I'm a senior Computer Science student at the University of Colorado Boulder. I am interested in software development, cybersecurity, and system hardware.
        I have experience in various programming languages and technologies including C, C++, SQL, Python, Javascript, React and more. I've taken courses in operating systems, software development,
        computer systems and architecture as well as data structures and algorithms.
      </p>

      <div className="flex flex-wrap justify-center gap-4 max-w-2xl">
        <span className="px-3 py-1 bg-indigo-700 text-white rounded-full">JavaScript</span>
        <span className="px-3 py-1 bg-indigo-700 text-white rounded-full">React</span>
        <span className="px-3 py-1 bg-indigo-600 text-white rounded-full">TypeScript</span>
        <span className="px-3 py-1 bg-indigo-700 text-white rounded-full">C++</span>
        <span className="px-3 py-1 bg-indigo-700 text-white rounded-full">Python</span>
        <span className="px-3 py-1 bg-indigo-700 text-white rounded-full">HTML/CSS</span>
        <span className="px-3 py-1 bg-indigo-700 text-white rounded-full">SQL</span>
        <span className="px-3 py-1 bg-indigo-700 text-white rounded-full">C</span>
        <span className="px-3 py-1 bg-indigo-700 text-white rounded-full">Java</span>
        <span className="px-3 py-1 bg-indigo-700 text-white rounded-full">Assembly</span>
        <span className="px-3 py-1 bg-indigo-800 text-white rounded-full">Docker</span>
        <span className="px-3 py-1 bg-indigo-800 text-white rounded-full">VS Code</span>
        <span className="px-3 py-1 bg-indigo-800 text-white rounded-full">MongoDB</span>
      </div>
    </section>
  );
};

export default AboutSection;
