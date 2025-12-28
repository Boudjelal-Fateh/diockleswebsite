import React from "react";
import Image from "next/image";
import { Mail, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Ecosystem", href: "/ecosystem" },
    { label: "Contact", href: "/contact" },
  ];

  const resourceLinks = [
    { label: "Insights", href: "/insights" },
    { label: "Our Approach", href: "/about" },
    { label: "Investment Criteria", href: "#" },
    { label: "Partner Network", href: "#" },
  ];

  return (
    <footer className="bg-[#1e1e1e] text-white px-4 py-12 md:px-8 md:py-20">
      <div className="max-w-[1280px] mx-auto pt-[80px] px-[24px]">
        {/* Mobile & Tablet Layout */}
        <div className="space-y-8 md:hidden">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-cormorant font-bold">
              Core Investments
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              We accelerate bold ideas by surrounding them with loyal people,
              solid structure, and trusted capital.
            </p>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <p className="text-xs text-gray-400 uppercase tracking-wider">
              Stay updated with our latest insights
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none"
              />
              <button className="px-6 py-2 bg-[#b66a3c] hover:bg-[#a85a2c] text-white rounded-lg font-medium text-sm transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4 border-t border-gray-700">
            <a
              href="#"
              className="text-gray-400 hover:text-[#b66a3c] transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#b66a3c] transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#b66a3c] transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Links Sections */}
          <div className="space-y-6 pt-4">
            {/* Company */}
            <div>
              <h3 className="text-sm font-montserrat font-bold text-[#b66a3c] uppercase mb-3 tracking-wider">
                Company
              </h3>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-montserrat font-bold text-[#b66a3c] uppercase mb-3 tracking-wider">
                Resources
              </h3>
              <ul className="space-y-2">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex gap-8 mb-12">
          {/* Logo & Description - 892x215 */}
          <div className="w-[892px] h-[215px] space-y-4">
            <h2 className="text-2xl font-cormorant font-bold">
              Core Investments
            </h2>
            <p className="w-[448px] h-[52px] text-sm text-gray-400 leading-relaxed">
              We accelerate bold ideas by surrounding them with loyal people,
              solid structure, and trusted capital.
            </p>

            {/* Newsletter */}
            <div className="space-y-3 pt-4">
              <p className="text-xs text-gray-400 uppercase tracking-wider">
                Stay updated with our latest insights
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-[312px] h-[42px] px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none"
                />
                <button className="px-6 py-2 bg-[#b66a3c] hover:bg-[#a85a2c] text-white rounded-lg font-medium text-sm transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#b66a3c] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#b66a3c] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#b66a3c] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Company Links - 272x215 */}
          <div className="w-[272px] h-[215px]">
            <h3 className="text-sm font-montserrat font-bold text-[#b66a3c] uppercase mb-6 tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links - 272x215 */}
          <div className="w-[272px] h-[215px]">
            <h3 className="text-sm font-montserrat font-bold text-[#b66a3c] uppercase mb-6 tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Section - Full Width */}
        </div>

        {/* Bottom Section - Mobile */}
        <div className="md:hidden border-t border-gray-700 pt-8 flex flex-col justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} Core Investments. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Bottom Section */}
      </div>
    </footer>
  );
};

export default Footer;
