"use client";
import React, { useState } from "react";
import { Mail, BookmarkIcon } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactOptions = [
    {
      icon: "briefcase",
      title: "Founders",
      description: "Looking for strategic investment and hands-on support",
    },
    {
      icon: "mail",
      title: "Co-Investors",
      description: "Interested in partnering on ventures",
    },
    {
      icon: "briefcase",
      title: "Partners",
      description: "Want to join our trusted ecosystem",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#1a2847] to-[#0f1e35] text-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="max-[1232] mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Left Content */}
          <div className="flex flex-col justify-start">
            <div className="inline-flex items-center gap-2 mb-6">
              <Mail size={16} className="text-[#b66a3c]" />
              <span className="text-xs sm:text-sm font-montserrat uppercase tracking-wider text-[#b66a3c]">
                Get in touch
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-cormorant font-bold leading-tight mb-6 lg:mb-8">
              Let's build something remarkable together
            </h1>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8 lg:mb-12 max-w-md">
              Whether you're a founder with a bold vision, an investor looking
              for strategic partnerships, or an expert wanting to join our
              ecosystem, we'd love to hear from you.
            </p>

            {/* Contact Options */}
            <div className="space-y-4 lg:space-y-6 mb-8 lg:mb-0">
              {contactOptions.map((option, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-lg border border-[#b66a3c] text-[#b66a3c]">
                      <BookmarkIcon size={16} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base font-montserrat font-bold text-white mb-1">
                      {option.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {option.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Contact */}
            <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-gray-700">
              <p className="text-xs sm:text-sm text-gray-400 mb-2">
                Or reach us directly:
              </p>
              <a
                href="mailto:contact@coreinvestments.com"
                className="text-sm sm:text-base text-[#b66a3c] hover:text-[#d4824f] transition-colors font-medium"
              >
                contact@coreinvestments.com
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="flex items-start justify-center lg:justify-end">
            <form
              onSubmit={handleSubmit}
              className="bg-[#f1ece8] rounded-2xl p-6 sm:p-8 w-full lg:w-[584px]"
            >
              {/* Name Field */}
              <div className="mb-5">
                <label className="block text-xs sm:text-sm font-montserrat font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#b66a3c] focus:border-transparent text-sm"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="mb-5">
                <label className="block text-xs sm:text-sm font-montserrat font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#b66a3c] focus:border-transparent text-sm"
                  required
                />
              </div>

              {/* Company Field */}
              <div className="mb-5">
                <label className="block text-xs sm:text-sm font-montserrat font-medium text-gray-700 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company"
                  className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#b66a3c] focus:border-transparent text-sm"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label className="block text-xs sm:text-sm font-montserrat font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry..."
                  rows="4"
                  className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#b66a3c] focus:border-transparent text-sm resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#b66a3c] hover:bg-[#a85a2c] text-white font-montserrat font-medium py-3 sm:py-3.5 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
              >
                Send Message
                <span>→</span>
              </button>

              {/* Response Time */}
              <p className="text-center text-xs text-gray-500 mt-4">
                We typically respond within 48 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
