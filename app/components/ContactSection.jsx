"use client";
import React, { useState } from "react";
import { Mail, BookmarkIcon } from "lucide-react";
import Image from "next/image";

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
      icon: "/notification.png",
      title: "Founders",
      description: "Looking for strategic investment and hands-on support",
    },
    {
      icon: "/letter.png",
      title: "Co-Investors",
      description: "Interested in partnering on ventures",
    },
    {
      icon: "/notification.png",
      title: "Partners",
      description: "Want to join our trusted ecosystem",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-[#1f2a44] text-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      <div className="max-w-[1232px] mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Left Content */}
          <div className="flex flex-col justify-start">
            <div className="inline-flex items-center gap-2 mb-6">
              <Mail size={20} className="text-[#b66a3c]" />
              <span className="text-xs sm:text-sm font-montserrat uppercase tracking-[0.7px] md:text-[14px] leading-[21px] text-[#b66a3c]">
                Get in touch
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-[56px] leading-[61.6px] font-cormorant   text-[#f1ece8] mb-6 lg:mb-8">
              Let's build something remarkable together
            </h1>

            <p className="text-sm sm:text-base text-[#f1ece8]/70 md:text-[18px] leading-[29.3px]  mb-8 lg:mb-12 max-w-[530px] ">
              Whether you're a founder with a bold vision, an investor looking
              for strategic partnerships, or an expert wanting to join our
              ecosystem, we'd love to hear from you.
            </p>

            {/* Contact Options */}
            <div className="space-y-4 lg:space-y-6 mb-8 lg:mb-0">
              {contactOptions.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border py-4 px-4 border-[#f1ece8]/10 rounded-[10px] "
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-[10px]  bg-[#b66a3c]/10  text-[#b66a3c]">
                      <Image
                        src={option.icon}
                        alt={option.title}
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base font-cormorant md:text-[18px] text-[#f1ece8] leading-[27px]  mb-1">
                      {option.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#f1ece8]/60  md:text-[14px] font-montserrat">
                      {option.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Contact */}
            <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-gray-700">
              <p className="text-xs sm:text-sm text-[#f1ece8]/60 font-montserrat md:text-[14px] leading-[21px]  mb-2">
                Or reach us directly:
              </p>
              <a
                href="mailto:contact@coreinvestments.com"
                className="text-sm sm:text-base text-[#b66a3c]  md:text-[18px] leading-[27px]  font-normal font-montserrat"
              >
                contact@coreinvestments.com
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="flex  items-start justify-center lg:justify-end">
            <form
              onSubmit={handleSubmit}
              className="bg-[#f1ece8] rounded-[16px] px-8 pt-8 w-full lg:w-[584px] h-[514px] flex flex-col"
            >
              {/* Name Field */}
              <div className="mb-4">
                <label className="block  font-montserrat  text-[14px] text-[#ababab] leading-[21px] mb-1.5">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-3 py-2 border font-montserrat border-[#ababab] bg-[#ffffff] rounded-lg text-gray-900 placeholder-[#717182] focus:outline-none focus:ring-2 focus:ring-[#b66a3c] focus:border-transparent text-xs"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label className="block  font-montserrat  text-[14px] text-[#ababab] leading-[21px] mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-3 py-2 border font-montserrat border-[#ababab] bg-[#ffffff] rounded-lg text-gray-900 placeholder-[#717182] focus:outline-none focus:ring-2 focus:ring-[#b66a3c] focus:border-transparent text-xs"
                  required
                />
              </div>

              {/* Company Field */}
              <div className="mb-4">
                <label className="block  font-montserrat  text-[14px] text-[#ababab] leading-[21px] mb-1.5">
                  Company *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company"
                  className="w-full px-3 py-2 border font-montserrat border-[#ababab] bg-[#ffffff] rounded-lg text-gray-900 placeholder-[#717182] focus:outline-none focus:ring-2 focus:ring-[#b66a3c] focus:border-transparent text-xs"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="mb-4 ">
                <label className="block  font-montserrat  text-[14px] text-[#ababab] leading-[21px] mb-1.5">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry..."
                  rows="3"
                  className="w-full px-3 py-2 border font-montserrat border-[#ababab] bg-[#ffffff] rounded-lg text-gray-900 placeholder-[#717182] focus:outline-none focus:ring-2 focus:ring-[#b66a3c] focus:border-transparent text-xs"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-[48px]    cursor-pointer md:text-[14px] leading-[20px] space-y-[16px] bg-[#b66a3c] hover:bg-[#a85a2c] text-white font-montserrat font-medium py-2 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-xs mb-2"
              >
                Send Message
                <Image
                  src="/arrowwhite.png"
                  alt="Arrow Right Icon"
                  width={16}
                  height={16}
                />
              </button>

              {/* Response Time */}
              <p className="text-center text-xs md:text-[12px] leading-[18px] mt-4 font-montserrat text-[#ababab] ">
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
