'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real application, this would be an API call to Formspree or similar service
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen w-full py-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-mono text-black mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? Reach out to me!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-100 rounded-2xl p-8 border border-gray-300 h-full">
                <h2 className="text-2xl font-bold font-mono text-gray-800 mb-8">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start p-4 rounded-lg hover:bg-gray-200 transition-colors">
                    <div className="i-lucide-mail text-2xl text-black mr-4 mt-1" />
                    <div>
                      <h3 className="font-mono text-sm opacity-70 mb-1">EMAIL</h3>
                      <a
                        href="mailto:syahrulkustiawanalzayyan@gmail.com"
                        className="text-gray-700 hover:text-black transition-colors text-lg"
                      >
                        syahrulkustiawanalzayyan@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start p-4 rounded-lg hover:bg-gray-200 transition-colors">
                    <div className="i-lucide-phone text-2xl text-black mr-4 mt-1" />
                    <div>
                      <h3 className="font-mono text-sm opacity-70 mb-1">PHONE</h3>
                      <a
                        href="tel:+6281224912822"
                        className="text-gray-700 hover:text-black transition-colors text-lg"
                      >
                        +62 812-2491-2822
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start p-4 rounded-lg hover:bg-gray-200 transition-colors">
                    <div className="i-lucide-map-pin text-2xl text-black mr-4 mt-1" />
                    <div>
                      <h3 className="font-mono text-sm opacity-70 mb-1">LOCATION</h3>
                      <p className="text-gray-700 text-lg">Garut, Jawa Barat</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 rounded-lg hover:bg-gray-200 transition-colors">
                    <div className="i-lucide-globe text-2xl text-black mr-4 mt-1" />
                    <div>
                      <h3 className="font-mono text-sm opacity-70 mb-4">SOCIAL</h3>
                      <div className="flex space-x-6">
                        <a
                          href="https://www.linkedin.com/in/syahrul-al-zayyan"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-800 transition-colors flex flex-col items-center"
                          aria-label="LinkedIn"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-1">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                            <rect width="4" height="12" x="2" y="9"/>
                            <circle cx="4" cy="4" r="2"/>
                          </svg>
                          <span className="text-xs font-mono">LinkedIn</span>
                        </a>
                        <a
                          href="https://github.com/syahrul-kustiawan-alzayyan"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-800 transition-colors flex flex-col items-center"
                          aria-label="GitHub"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-1">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                            <path d="M9 18c-4.51 2-5-2-7-2"/>
                          </svg>
                          <span className="text-xs font-mono">GitHub</span>
                        </a>
                        {/* Additional social links can be added here as needed */}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-gray-100 rounded-2xl p-8 border border-gray-300">
                <h2 className="text-2xl font-bold font-mono text-gray-800 mb-8">Send a Message</h2>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-mono mb-2 text-sm opacity-70">NAME</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent transition-all"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-mono mb-2 text-sm opacity-70">EMAIL</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 font-mono mb-2 text-sm opacity-70">SUBJECT</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent transition-all"
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-mono mb-2 text-sm opacity-70">MESSAGE</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent transition-all"
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className={`w-full py-4 rounded-lg font-mono flex items-center justify-center transition-all ${
                      isSubmitting
                        ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                        : 'bg-gradient-to-r from-black to-gray-600 text-white hover:opacity-90 hover:shadow-lg hover:shadow-black/30'
                    }`}
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="i-lucide-loader-2 text-xl animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>

                  {/* Status messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      className="mt-4 p-4 rounded-lg bg-emerald-900/30 border border-emerald-500/30 flex items-center"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="i-lucide-check-circle-2 text-emerald-400 text-xl mr-2" />
                      <span className="text-emerald-400">Message sent successfully! I'll get back to you soon.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      className="mt-4 p-4 rounded-lg bg-rose-900/30 border border-rose-500/30 flex items-center"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="i-lucide-alert-circle text-rose-400 text-xl mr-2" />
                      <span className="text-rose-400">There was an error sending your message. Please try again.</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;