import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open mail client with form data
    const mailtoLink = `mailto:${form.email}?subject=Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
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
        {submitted ? (
          <div className="text-center">
            <p className="text-white text-lg mb-4">Thanks for reaching out! I'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
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
