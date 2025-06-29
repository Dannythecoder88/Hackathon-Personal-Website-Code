'use client';

import { useState, useEffect } from 'react';

const SITE_URL = typeof window !== 'undefined' ? window.location.origin : '';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValid, setFormValid] = useState(false);

  // Check if form is valid
  useEffect(() => {
    const isValid = formData.name.trim() && formData.subject.trim() && formData.message.trim();
    setFormValid(!!isValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = async (data) => {
    try {
      setIsSubmitting(true);
      setStatus('sending');
      
      const emailData = {
        to: 'daniel.joseph666666@gmail.com',
        from: 'onboarding@resend.dev',
        subject: `New Contact Form: ${data.subject}`,
        text: `Name: ${data.name}\n\nMessage:\n${data.message}`
      };

      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }
      
      // Clear form on success
      setFormData({ name: '', subject: '', message: '' });
      setStatus('success');
      
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus(`error: ${error.message || 'Failed to send message'}`);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formValid || isSubmitting) return;
    await sendEmail(formData);
  };

  return (
    <div className="bg-white dark:bg-gray-800 w-full">
      <div className="w-full max-w-4xl mx-auto p-2">
        <div className="text-center">
          <h1 className="text-lg font-bold bg-gradient-to-b from-pink-500 to-blue-600 bg-clip-text text-transparent">Get In Touch</h1>
          <p className="text-gray-600 dark:text-gray-300 text-xs">Have a question or want to work together?</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div>
            <h2 className="text-base font-semibold bg-gradient-to-b from-pink-500 to-blue-600 bg-clip-text text-transparent">Contact Information</h2>
            
            <div className="space-y-0">
              <div className="flex items-start py-1">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                  <a
                    href="mailto:daniel.joseph666666@gmail.com"
                    className="inline-block bg-gradient-to-r from-blue-600 to-pink-500 text-white text-sm font-semibold py-2 px-4 rounded-lg mt-3 hover:opacity-90 transition-all duration-200"
                  >
                    Send Email
                  </a>
                </div>
              </div>
              
              <div className="flex items-start py-1">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">New York, USA</p>
                </div>
              </div>
              
              <div className="flex items-start py-1">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Working Hours</h3>
                  <p className="text-gray-600 dark:text-gray-300">Monday - Friday: 9am - 5pm</p>
                  <p className="text-gray-600 dark:text-gray-300">Weekend: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Connect With Me</h3>
              <div className="flex space-x-3">
                {[
                  { 
                    name: 'GitHub', 
                    icon: 'github', 
                    url: 'https://github.com/Dannythecoder88',
                    color: 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700',
                    iconColor: 'text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white',
                    hoverScale: 'hover:scale-110',
                    hoverShadow: 'hover:shadow-lg'
                  },
                  { 
                    name: 'LinkedIn', 
                    icon: 'linkedin', 
                    url: 'https://www.linkedin.com/in/daniel-joseph-b99242372/',
                    color: 'bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800',
                    iconColor: 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-white',
                    hoverScale: 'hover:scale-110',
                    hoverShadow: 'hover:shadow-lg'
                  },
                  { 
                    name: 'Facebook', 
                    icon: 'facebook', 
                    url: 'https://www.facebook.com/profile.php?id=100092183645171',
                    color: 'bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800',
                    iconColor: 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-white',
                    hoverScale: 'hover:scale-110',
                    hoverShadow: 'hover:shadow-lg'
                  },
                  { 
                    name: 'Instagram', 
                    icon: 'instagram', 
                    url: 'https://www.instagram.com/danielj_60/',
                    color: 'bg-pink-100 hover:bg-pink-200 dark:bg-pink-900 dark:hover:bg-pink-800',
                    iconColor: 'text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-white',
                    hoverScale: 'hover:scale-110',
                    hoverShadow: 'hover:shadow-lg'
                  }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-md transition-all duration-300 transform ${social.color} ${social.iconColor} ${social.hoverScale} ${social.hoverShadow}`}
                    aria-label={social.name}
                  >
                    <i className={`fab fa-${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold bg-gradient-to-b from-pink-500 to-blue-600 bg-clip-text text-transparent mb-6">Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={!formValid || isSubmitting}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-pink-500 hover:from-blue-700 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
);
}
