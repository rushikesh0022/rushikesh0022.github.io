"use client";

import { MdCoffee, MdSend } from "react-icons/md";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import Link from "next/link";
import { useState } from "react";

// Note: Since this is a client component, we'll handle metadata differently
// export const metadata: Metadata = {
//   title: "Contact Me - Let's Grab Coffee!",
//   description: "Get in touch with Rushikesh for collaborations, projects, or just a friendly chat over coffee.",
// };

export default function CoffeePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Log the contact form submission
      console.log('Contact Form Submission:', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toISOString(),
        url: window.location.href
      });

      // For production, you could integrate with:
      // - Formspree: https://formspree.io/
      // - Netlify Forms: https://www.netlify.com/products/forms/
      // - EmailJS: https://www.emailjs.com/
      // - Or any other form handling service

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      console.log('Contact form submitted successfully!');
      console.log('Note: This is a static site - no actual email sent. Check console for form data.');
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen max-w-6xl mx-auto p-8">
      <div className="flex flex-col lg:flex-row gap-12 w-full">
        
        {/* Left Side - Contact Info */}
        <div className="flex flex-col items-center lg:items-start gap-8 text-center lg:text-left lg:w-1/2">
          {/* Header */}
          <div className="flex items-center gap-4">
            <MdCoffee className="text-6xl text-amber-600" />
            <h1 className="text-4xl font-bold text-white">Let&apos;s Grab Coffee!</h1>
            <MdCoffee className="text-6xl text-amber-600" />
          </div>

          {/* Description */}
          <div className="max-w-2xl space-y-4">
            <p className="text-xl text-gray-300">
              I&apos;m always excited to connect with fellow developers, discuss new projects, 
              or just have a friendly chat about technology and coding.
            </p>
            <p className="text-gray-400">
              Whether you have a project idea, want to collaborate, or simply want to say hi - 
              feel free to reach out!
            </p>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg">
            {/* LinkedIn */}
            <Link 
              href="https://www.linkedin.com/in/rushikesh-reddy-153103293/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg p-4 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3">
                <BiLogoLinkedin className="text-2xl text-blue-500" />
                <div className="text-left">
                  <h3 className="text-sm font-semibold text-white">LinkedIn</h3>
                  <p className="text-xs text-gray-400">Professional networking</p>
                </div>
              </div>
            </Link>

            {/* GitHub */}
            <Link 
              href="https://github.com/rushikesh0022"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg p-4 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3">
                <BiLogoGithub className="text-2xl text-gray-300" />
                <div className="text-left">
                  <h3 className="text-sm font-semibold text-white">GitHub</h3>
                  <p className="text-xs text-gray-400">Check out my projects</p>
                </div>
              </div>
            </Link>
          </div>

        </div>

        {/* Right Side - Contact Form */}
        <div className="lg:w-1/2">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <MdSend className="text-2xl text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Send me a message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project, ideas, or just say hello!"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 disabled:from-gray-600 disabled:to-gray-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <MdSend className="text-lg" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-4">
                  <p className="text-green-300 text-sm">
                    ✅ Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                  <p className="text-green-400 text-xs mt-1">
                    💡 Form data logged to console (static site)
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-4">
                  <p className="text-red-300 text-sm">
                    ❌ Failed to send message. Please try again or contact me directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Back to Home - Fixed Position */}
      <Link 
        href="/"
        className="fixed bottom-8 left-8 text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
