import React from "react";
import Image from "next/image";
import { Mail, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Ecosystem", href: "#ecosystem" },
    { label: "Contact", href: "#contact" },
  ];

  const resourceLinks = [
    { label: "Insights", href: "#insights" },
    { label: "Our Approach", href: "#about" },
    { label: "Investment Criteria", href: "#" },
    { label: "Partner Network", href: "#" },
  ];

  return (
    <footer className="bg-[#1e1e1e] text-white px-4 lg:py-12 md:px-8 md:py-20 lg:px-0">
      <div className="max-w-[1280px] mx-auto pt-[80px] px-[24px]">
        {/* Mobile & Tablet Layout */}
        <div className="space-y-8 md:hidden">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h2 className="text-[32px] font-cormorant leading-[48px] text-[#f1ece8]  ">
              Core Investments
            </h2>
            <p className="text-sm  text-[16px] font-montserrat text-[#f1ece8]/70 leading-[26px]">
              We accelerate bold ideas by surrounding them with loyal people,
              solid structure, and trusted capital.
            </p>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <p className="text-xs  font-montserrat text-[#f1ece8]/80 leading-[21px] ">
              Stay updated with our latest insights
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 rounded-[10px] bg-[#f1ece8]/10 text-white  text-sm focus:outline-none"
              />
              <button className="px-6 py-2 bg-[#b66a3c] hover:bg-[#a85a2c] text-white rounded-lg font-medium text-sm transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4 border-t border-gray-700  justify-center">
            <Link
              href="#"
              className=" w-[40px] h-[40px]  border-[#f1ece8]/20   transition-colors border px-2 py-2 rounded-full"
            >
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href="#"
              className=" w-[40px] h-[40px]  border-[#f1ece8]/20   transition-colors border px-2 py-2 rounded-full"
            >
              <Image src="/twitter.png" alt="LinkedIn" width={20} height={20} />
            </Link>
            <Link
              href="#"
              className=" w-[40px] h-[40px]  border-[#f1ece8]/20   transition-colors border px-2 py-2 rounded-full"
            >
              <Image src="/letter2.png" alt="LinkedIn" width={20} height={20} />
            </Link>
          </div>

          {/* Links Sections */}
          <div className="space-y-6 pt-4  mb-8 ">
            {/* Company */}
            <div>
              <h3 className="text-[14px] font-montserrat  leading-[21px]  text-[#b66a3c] uppercase mb-6 tracking-[0.7px]">
                Company
              </h3>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[16px] text-[#f1ece8]/70 hover:text-[#b66a3c] leading-[24px] transition-colors font-montserrat"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-[14px] font-montserrat  leading-[21px]  text-[#b66a3c] uppercase mb-6 tracking-[0.7px]">
                Resources
              </h3>
              <ul className="space-y-2">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[16px] text-[#f1ece8]/70 hover:text-[#b66a3c] leading-[24px] transition-colors font-montserrat"
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
            <h2 className="text-[32px] font-cormorant leading-[48px] text-[#f1ece8] ">
              Core Investments
            </h2>
            <p className="w-[415px] h-[52px] text-[16px] font-montserrat text-[#f1ece8]/70 leading-[26px] ">
              We accelerate bold ideas by surrounding them with loyal people,
              solid structure, and trusted capital.
            </p>

            {/* Newsletter */}
            <div className="space-y-3 pt-4">
              <p className="text-[14px] font-montserrat text-[#f1ece8]/80 leading-[21px]    ">
                Stay updated with our latest insights
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-[312px] h-[42px] px-4 py-2 rounded-[10px] bg-[#f1ece8]/10 text-white  text-sm focus:outline-none"
                />
                <button className="px-6 py-2 bg-[#b66a3c] cursor-pointer hover:bg-[#a85a2c] text-white font-montserrat text-[16px] leading-[24px] rounded-lg text-sm transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex  gap-4 pt-4">
              <Link
                href="#"
                className=" w-[40px] h-[40px]  border-[#f1ece8]/20  hover:border-[#b66a3c]    transition-colors border px-2 py-2 rounded-full"
              >
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </Link>
              <Link
                href="#"
                className=" w-[40px] h-[40px]  border-[#f1ece8]/20  hover:border-[#b66a3c]    transition-colors border px-2 py-2 rounded-full"
              >
                <Image
                  src="/twitter.png"
                  alt="Twitter"
                  width={20}
                  height={20}
                />
              </Link>
              <Link
                href="#"
                className=" w-[40px] h-[40px]  border-[#f1ece8]/20 hover:border-[#b66a3c]   transition-colors border px-2 py-2 rounded-full"
              >
                <Image src="/letter2.png" alt="Letter" width={20} height={20} />
              </Link>
            </div>
          </div>

          {/* Company Links - 272x215 */}
          <div className="w-[272px] h-[215px]">
            <h3 className="text-[14px] font-montserrat  leading-[21px]  text-[#b66a3c] uppercase mb-6 tracking-[0.7px] ">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[16px] text-[#f1ece8]/70 hover:text-[#b66a3c] leading-[24px] transition-colors font-montserrat"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links - 272x215 */}
          <div className="w-[272px] h-[215px]">
            <h3 className="text-[14px] font-montserrat  leading-[21px]  text-[#b66a3c] uppercase mb-6 tracking-[0.7px] ">
              Resources
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[16px] text-[#f1ece8]/70 hover:text-[#b66a3c] leading-[24px] transition-colors font-montserrat"
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
        <div className=" md:hidden  border-t border-gray-700 pt-8 flex flex-col justify-between items-center gap-4 text-xs text-gray-500">
          <p className="  text-xs md:text-[14px] leading-[21px] font-montserrat text-[#f1ece8]/50 ">
            © {currentYear} Core Investments. All rights reserved.
          </p>
          <div className="flex gap-6 ">
            <a
              href="#"
              className=" transition-colors text-xs md:text-[14px] leading-[21px] font-montserrat text-[#f1ece8]/50"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className=" transition-colors text-xs md:text-[14px] leading-[21px] font-montserrat text-[#f1ece8]/50 "
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Bottom Section */}
      </div>

      <div className=" hidden md:block w-full mt-50  border-[#f1ece8]/10  border-t  ">
        <div className=" flex  justify-between  max-w-[1232px] mx-auto mt-[25px] ">
          <p className="  text-xs md:text-[14px] leading-[21px] font-montserrat text-[#f1ece8]/50 ">
            © {currentYear} Core Investments. All rights reserved.
          </p>
          <div className="flex gap-6 ">
            <a
              href="#"
              className=" transition-colors text-xs md:text-[14px] leading-[21px] hover:text-[#b66a3c]  font-montserrat text-[#f1ece8]/50"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className=" transition-colors text-xs md:text-[14px] leading-[21px] hover:text-[#b66a3c] font-montserrat text-[#f1ece8]/50 "
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
