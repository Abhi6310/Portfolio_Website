import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from '../hoc';

const Contact = () => {
  const formRef   = useRef();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        () => setSent(true),
        (err) => alert('Oops, something went wrong: ' + err.text)
      );
  };

  return (
    <section id="contact" className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <p className="text-lg text-gray-400">Get in Touch</p>
        <h2 className="text-4xl font-bold text-white">Contact Me</h2>
      </motion.div>

      <div className="max-w-xl mx-auto">
        {sent ? (
          <p className="text-white text-center">Thanks! I’ll be in touch soon.</p>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, 'contact');
