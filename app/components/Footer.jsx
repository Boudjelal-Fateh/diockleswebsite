"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Mail, Linkedin, Twitter, X } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isNewsletterSubscribed, setIsNewsletterSubscribed] = useState(false);
  const [newsletterError, setNewsletterError] = useState("");
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(newsletterEmail.trim())) {
      setIsNewsletterSubscribed(true);
      setNewsletterEmail("");
      setNewsletterError("");
      setTimeout(() => {
        setIsNewsletterSubscribed(false);
      }, 5000);
    } else {
      setNewsletterError("Please enter a valid email");
    }
  };

  const companyLinks = [
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Ecosystem", href: "#ecosystem" },
    { label: "Contact", href: "#contact" },
  ];

  const resourceLinks = [
    { label: "Insights", href: "#insights" },
    { label: "Our Approach", href: "#about" },
    { label: "Investment Criteria", href: "#insights " },
    { label: "Partner Network", href: "#ecosystem" },
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
            {isNewsletterSubscribed ? (
              <div className="p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm font-montserrat">
                ✓ You subscribed to our newsletter!
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={newsletterEmail}
                  onChange={(e) => {
                    setNewsletterEmail(e.target.value);
                    setNewsletterError("");
                  }}
                  onKeyPress={(e) =>
                    e.key === "Enter" && handleNewsletterSubscribe()
                  }
                  className={`flex-1 px-4 py-2 rounded-[10px] bg-[#f1ece8]/10 text-white text-sm focus:outline-none ${
                    newsletterError ? "border border-red-500" : ""
                  }`}
                />
                {newsletterError && (
                  <p className="text-red-400 text-xs font-montserrat">
                    {newsletterError}
                  </p>
                )}
                <button
                  onClick={handleNewsletterSubscribe}
                  className="px-6 py-2 bg-[#b66a3c] hover:bg-[#a85a2c] text-white rounded-lg font-medium text-sm transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </div>
            )}
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
              {isNewsletterSubscribed ? (
                <div className="p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm font-montserrat">
                  ✓ You subscribed to our newsletter!
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={newsletterEmail}
                      onChange={(e) => {
                        setNewsletterEmail(e.target.value);
                        setNewsletterError("");
                      }}
                      onKeyPress={(e) =>
                        e.key === "Enter" && handleNewsletterSubscribe()
                      }
                      className={`w-[312px] h-[42px] px-4 py-2 rounded-[10px] bg-[#f1ece8]/10 text-white text-sm focus:outline-none ${
                        newsletterError ? "border border-red-500" : ""
                      }`}
                    />
                    <button
                      onClick={handleNewsletterSubscribe}
                      className="px-6 py-2 bg-[#b66a3c] cursor-pointer hover:bg-[#a85a2c] text-white font-montserrat text-[16px] leading-[24px] rounded-lg text-sm transition-colors"
                    >
                      Subscribe
                    </button>
                  </div>
                  {newsletterError && (
                    <p className="text-red-400 text-xs font-montserrat">
                      {newsletterError}
                    </p>
                  )}
                </div>
              )}
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
                href="mailto:contact@core.investments"
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
            <button
              onClick={() => setIsPrivacyModalOpen(true)}
              className=" transition-colors text-xs md:text-[14px] leading-[21px] font-montserrat text-[#f1ece8]/50 hover:text-[#b66a3c]"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className=" transition-colors text-xs md:text-[14px] leading-[21px] font-montserrat text-[#f1ece8]/50 hover:text-[#b66a3c]"
            >
              Terms of Service
            </button>
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
            <button
              onClick={() => setIsPrivacyModalOpen(true)}
              className=" cursor-pointer transition-colors text-xs md:text-[14px] leading-[21px] hover:text-[#b66a3c]  font-montserrat text-[#f1ece8]/50"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className=" cursor-pointer transition-colors text-xs md:text-[14px] leading-[21px] hover:text-[#b66a3c] font-montserrat text-[#f1ece8]/50"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Terms of Service Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <style>{`
            .terms-modal-content::-webkit-scrollbar {
              width: 8px;
            }
            .terms-modal-content::-webkit-scrollbar-track {
              background: transparent;
            }
            .terms-modal-content::-webkit-scrollbar-thumb {
              background: #b66a3c;
              border-radius: 4px;
            }
            .terms-modal-content::-webkit-scrollbar-thumb:hover {
              background: #a85a2c;
            }
          `}</style>
          <div className="bg-[#1e1e1e] rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-[#f1ece8]/10 terms-modal-content">
            {/* Modal Header */}
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-[#f1ece8]/10 bg-[#1e1e1e]">
              <h2 className="text-2xl   font-cormorant text-[#f1ece8]">
                Terms of Service
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-[#f1ece8]/70 hover:text-[#f1ece8] transition-colors"
              >
                <X size={24} className=" cursor-pointer" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6 text-[#f1ece8]/80 text-sm font-montserrat">
              <section>
                <h3 className="text-lg font-cormorant text-[#b66a3c] mb-3">
                  1. Purpose
                </h3>
                <p className="leading-relaxed mb-2">
                  These Terms of Service (hereinafter <strong>Terms</strong>)
                  define the terms and conditions of use of the website
                  https://core.investments/ (hereinafter the{" "}
                  <strong>Website</strong>) published by{" "}
                  <strong>CORE INVESTMENTS</strong>.
                </p>
                <p className="leading-relaxed">
                  By accessing and using the Website, you accept these Terms
                  without reservation. If you do not accept these conditions,
                  please do not use the Website.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-cormorant text-[#b66a3c] mb-3">
                  2. Legal Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-[#f1ece8] mb-2">
                      2.1 Website Publisher
                    </h4>
                    <p className="leading-relaxed">
                      <strong>CORE INVESTMENTS</strong>
                      <br />
                      Société par Actions Simplifiée (SAS)
                      <br />
                      RCS Grasse: 901 989 368
                      <br />
                      Registered office: 230 Route Des Dolines, FLEXO SOPHIA
                      ANTIPOLIS CENTRIUM, 06560 Valbonne, France
                      <br />
                      <strong>Contact:</strong> contact@core.investments
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f1ece8] mb-2">
                      2.2 Hosting Provider
                    </h4>
                    <p className="leading-relaxed">
                      IONOS SARL
                      <br />
                      7, place de la Gare
                      <br />
                      BP 70109
                      <br />
                      57201 Sarreguemines Cedex
                      <br />
                      SIRET 431 303 775 000 16 - APE 642 B - R.C.S Sarreguemines
                      B 431 303 775
                      <br />
                      support@ionos.fr
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f1ece8] mb-2">
                      2.3 Publication Director
                    </h4>
                    <p className="leading-relaxed">
                      Christophe CORE, in his capacity as President of CORE
                      INVESTMENTS.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-cormorant text-[#b66a3c] mb-3">
                  3. Description of Services
                </h3>
                <p className="leading-relaxed mb-2">
                  CORE INVESTMENTS is an independent investment firm and growth
                  accelerator. The Website presents:
                </p>
                <ul className="list-disc list-inside space-y-1 leading-relaxed mb-2">
                  <li>
                    CORE Investments' activities and investment philosophy
                  </li>
                  <li>Investment portfolio</li>
                  <li>Partner ecosystem</li>
                  <li>Contact and collaboration opportunities</li>
                </ul>
                <p className="leading-relaxed">
                  The Website is intended for informational and networking
                  purposes. It does not constitute an offer of investment
                  services within the meaning of applicable financial
                  regulations.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-cormorant text-[#b66a3c] mb-3">
                  4. Access to the Website
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-[#f1ece8] mb-1">
                      4.1 Availability
                    </h4>
                    <p className="leading-relaxed">
                      The Website is freely accessible to any user with Internet
                      access. CORE INVESTMENTS strives to ensure the
                      accessibility of the Website 24/7, but cannot guarantee
                      permanent availability.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f1ece8] mb-1">
                      4.2 Interruptions
                    </h4>
                    <p className="leading-relaxed">
                      CORE INVESTMENTS reserves the right to interrupt, suspend
                      or limit access to all or part of the Website,
                      particularly for maintenance, updates or any other reason,
                      without notice or compensation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f1ece8] mb-1">
                      4.3 Technical Requirements
                    </h4>
                    <p className="leading-relaxed">
                      The user is responsible for their computer equipment,
                      Internet connection and the compatibility of their
                      equipment with the Website.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-cormorant text-[#b66a3c] mb-3">
                  5. Intellectual Property
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-[#f1ece8] mb-1">
                      5.1 Website Content
                    </h4>
                    <p className="leading-relaxed">
                      All elements comprising the Website (texts, graphics,
                      logos, images, videos, icons, software, databases, etc.)
                      are protected by French and international intellectual
                      property laws.
                      <br />
                      These elements are the exclusive property of CORE
                      INVESTMENTS or its partners and are protected by
                      copyright, trademark law and any other applicable
                      intellectual property rights.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f1ece8] mb-1">
                      5.2 Authorized Use
                    </h4>
                    <p className="leading-relaxed">
                      Any reproduction, representation, modification,
                      publication, transmission or distortion, in whole or in
                      part, of the Website or its content, by any means
                      whatsoever and on any medium whatsoever, is prohibited
                      without the prior written authorization of CORE
                      INVESTMENTS.
                      <br />
                      Use of the Website for personal and non-commercial
                      purposes is authorized, subject to compliance with these
                      Terms.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f1ece8] mb-1">
                      5.3 Trademarks
                    </h4>
                    <p className="leading-relaxed">
                      The trademarks, logos and distinctive signs present on the
                      Website are the property of CORE INVESTMENTS or third
                      parties who have authorized their use. Any unauthorized
                      use constitutes infringement.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-cormorant text-[#b66a3c] mb-3">
                  6. Liability
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-[#f1ece8] mb-1">
                      6.1 CORE INVESTMENTS Liability
                    </h4>
                    <p className="leading-relaxed mb-2">
                      CORE INVESTMENTS strives to provide accurate and
                      up-to-date information on the Website. However, we cannot
                      guarantee the accuracy, completeness or timeliness of the
                      information published.
                    </p>
                    <p className="font-bold text-[#f1ece8] mb-1">
                      CORE INVESTMENTS shall not be held liable for:
                    </p>
                    <ul className="list-disc list-inside space-y-1 leading-relaxed">
                      <li>
                        Errors, omissions or inaccuracies in the Website content
                      </li>
                      <li>
                        Direct or indirect damages resulting from access to or
                        use of the Website
                      </li>
                      <li>Interruptions or malfunctions of the Website</li>
                      <li>The presence of viruses or other harmful elements</li>
                      <li>
                        The content of third-party websites to which hyperlinks
                        may refer
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f1ece8] mb-1">
                      6.2 Investment Warning
                    </h4>
                    <p className="leading-relaxed mb-2">
                      The information presented on the Website regarding CORE
                      INVESTMENTS' investment activities is provided for
                      informational purposes only. It does not constitute:
                    </p>
                    <ul className="list-disc list-inside space-y-1 leading-relaxed mb-2">
                      <li>Investment advice</li>
                      <li>
                        A solicitation or offer to buy or sell financial
                        securities
                      </li>
                      <li>A personalized recommendation</li>
                    </ul>
                    <p className="leading-relaxed font-bold text-[#b66a3c]">
                      All investments involve risks, including the risk of
                      capital loss. Past performance is not indicative of future
                      results.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f1ece8] mb-1">
                      6.3 User Liability
                    </h4>
                    <p className="font-bold text-[#f1ece8] mb-1">
                      The user agrees to:
                    </p>
                    <ul className="list-disc list-inside space-y-1 leading-relaxed">
                      <li>
                        Use the Website in accordance with its intended purpose
                        and these Terms
                      </li>
                      <li>
                        Not compromise the security or integrity of the Website
                      </li>
                      <li>Not collect information about other users</li>
                      <li>
                        Not use the Website for unlawful or fraudulent purposes
                      </li>
                      <li>
                        Respect the intellectual property rights of CORE
                        INVESTMENTS and third parties
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-cormorant text-[#b66a3c] mb-3">
                  7. Hyperlinks
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-[#f1ece8] mb-1">
                      7.1 Outgoing Links
                    </h4>
                    <p className="leading-relaxed">
                      The Website may contain links to third-party websites.
                      These links are provided for informational purposes. CORE
                      INVESTMENTS has no control over these websites and
                      disclaims any responsibility for their content, operation
                      or privacy policy.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f1ece8] mb-1">
                      7.2 Incoming Links
                    </h4>
                    <p className="leading-relaxed">
                      Any link to the Website must be subject to prior
                      authorization from CORE INVESTMENTS. In any case,
                      unauthorized links must be removed upon request.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-cormorant text-[#b66a3c] mb-3">
                  8. Personal Data
                </h3>
                <p className="leading-relaxed mb-2">
                  The processing of personal data collected via the Website is
                  governed by our Privacy Policy, available at: [link to Privacy
                  Policy]
                </p>
                <p className="leading-relaxed">
                  For any questions regarding your personal data, you may
                  contact us at: contact@core.investments
                </p>
              </section>

              <section>
                <h3 className="text-lg font-cormorant text-[#b66a3c] mb-3">
                  9. Cookies
                </h3>
                <p className="leading-relaxed">
                  The Website uses cookies in accordance with our Cookie Policy
                  integrated into our Privacy Policy. You can manage your cookie
                  preferences via your browser settings.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-cormorant text-[#b66a3c] mb-3">
                  10. Modification of Terms
                </h3>
                <p className="leading-relaxed mb-2">
                  CORE INVESTMENTS reserves the right to modify these Terms at
                  any time. Modifications take effect upon their publication on
                  the Website.
                </p>
                <p className="leading-relaxed">
                  Users are advised to regularly consult the Terms. Continued
                  use of the Website after modification constitutes acceptance
                  of the new conditions.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-cormorant text-[#b66a3c] mb-3">
                  11. Applicable Law and Jurisdiction
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-[#f1ece8] mb-1">
                      11.1 Applicable Law
                    </h4>
                    <p className="leading-relaxed">
                      These Terms are governed by French law.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f1ece8] mb-1">
                      11.2 Dispute Resolution
                    </h4>
                    <p className="leading-relaxed mb-2">
                      In the event of a dispute relating to the interpretation
                      or performance of these Terms, the parties shall endeavor
                      to find an amicable solution.
                    </p>
                    <p className="leading-relaxed">
                      In accordance with the provisions of the French Consumer
                      Code concerning the amicable settlement of disputes,
                      consumers may use the mediation service offered by CORE
                      INVESTMENTS free of charge. The mediator can be contacted
                      via: [mediator contact details to be completed]
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f1ece8] mb-1">
                      11.3 Competent Jurisdiction
                    </h4>
                    <p className="leading-relaxed">
                      In the absence of an amicable resolution, any dispute
                      shall be submitted to the competent courts within the
                      jurisdiction of the Court of Appeal of Aix-en-Provence,
                      France, unless otherwise required by mandatory legal
                      provisions.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-cormorant text-[#b66a3c] mb-3">
                  12. Miscellaneous Provisions
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-[#f1ece8] mb-1">
                      12.1 Partial Invalidity
                    </h4>
                    <p className="leading-relaxed">
                      If any clause of these Terms is declared null or
                      unenforceable, the other clauses shall remain in full
                      force and effect.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f1ece8] mb-1">
                      12.2 Non-Waiver
                    </h4>
                    <p className="leading-relaxed">
                      The failure of CORE INVESTMENTS to enforce any breach by
                      the user of any obligation under these Terms shall not be
                      interpreted as a waiver of the obligation in question.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f1ece8] mb-1">
                      12.3 Entirety
                    </h4>
                    <p className="leading-relaxed">
                      These Terms constitute the entire agreement between the
                      user and CORE INVESTMENTS regarding the use of the
                      Website.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-cormorant text-[#b66a3c] mb-3">
                  13. Contact
                </h3>
                <p className="leading-relaxed">
                  For any questions regarding these Terms, you may contact us:
                </p>
                <p className="leading-relaxed mt-2">
                  <strong>Email:</strong> contact@core.investments
                  <br />
                  <strong>Address:</strong> CORE INVESTMENTS, 230 Route Des
                  Dolines, 06560 Valbonne, France
                  <br />
                  <strong>Response time:</strong> 48 hours
                </p>
              </section>

              <section className="text-center pt-4 border-t border-[#f1ece8]/10 mt-6">
                <p className="text-xs text-[#f1ece8]/60">
                  © 2026 CORE Investments. All rights reserved.
                </p>
              </section>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 p-6 border-t border-[#f1ece8]/10 bg-[#1e1e1e] flex gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 cursor-pointer px-6 py-2.5 bg-[#b66a3c] hover:bg-[#a85a2c] text-white font-montserrat font-medium rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {isPrivacyModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <style>{`
            .privacy-modal-content::-webkit-scrollbar {
              width: 8px;
            }
            .privacy-modal-content::-webkit-scrollbar-track {
              background: transparent;
            }
            .privacy-modal-content::-webkit-scrollbar-thumb {
              background: #b66a3c;
              border-radius: 4px;
            }
            .privacy-modal-content::-webkit-scrollbar-thumb:hover {
              background: #a85a2c;
            }
          `}</style>
          <div className="bg-[#1e1e1e] rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-[#f1ece8]/10 privacy-modal-content">
            {/* Modal Header */}
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-[#f1ece8]/10 bg-[#1e1e1e]">
              <h2 className="text-2xl font-cormorant text-[#f1ece8]">
                Privacy Policy
              </h2>
              <button
                onClick={() => setIsPrivacyModalOpen(false)}
                className="text-[#f1ece8]/70 hover:text-[#f1ece8] transition-colors"
              >
                <X size={24} className="cursor-pointer" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6 text-[#f1ece8]/80 text-sm font-montserrat">
              <section>
                <h3 className="text-lg font-cormorant text-[#b66a3c] mb-3">
                  1. Introduction
                </h3>
                <p className="leading-relaxed mb-2">
                  This Privacy Policy describes how{" "}
                  <strong>CORE INVESTMENTS</strong>, a Société par Actions
                  Simplifiée (simplified joint-stock company) registered with
                  the Grasse Trade and Companies Register under number 901 989
                  368, with its registered office at 230 Route Des Dolines,
                  06560 Valbonne, France (hereinafter{" "}
                  <strong>CORE Investments</strong>, <strong>we</strong>,{" "}
                  <strong>our</strong> or <strong>us</strong>), collects, uses,
                  stores and protects your personal data.
                </p>
                <p className="leading-relaxed mb-2">
                  This policy applies to all users of our website
                  https://core.investments/ and to anyone interacting with our
                  investment and startup support services.
                </p>
                <p className="leading-relaxed">
                  CORE Investments is committed to respecting the privacy of its
                  users in accordance with the General Data Protection
                  Regulation (GDPR) - Regulation (EU) 2016/679 and the French
                  Data Protection Act (Loi Informatique et Libertés).
                </p>
              </section>

              <section>
                <h3 className="text-lg font-cormorant text-[#b66a3c] mb-3">
                  2. Data Controller
                </h3>
                <p className="leading-relaxed mb-2">
                  The data controller for personal data is:
                </p>
                <p className="leading-relaxed">
                  <strong>CORE INVESTMENTS</strong>
                  <br />
                  230 Route Des Dolines
                  <br />
                  FLEXO SOPHIA ANTIPOLIS CENTRIUM
                  <br />
                  06560 Valbonne, France
                  <br />
                  RCS Grasse: 901 989 368
                  <br />
                  <br />
                  <strong>GDPR Contact:</strong> contact@core.investments
                </p>
              </section>

              <section>
                <h3 className="text-lg font-cormorant text-[#b66a3c] mb-3">
                  3. Personal Data Collected
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-[#f1ece8] mb-2">
                      3.1 Data you provide directly
                    </h4>
                    <ul className="list-disc list-inside space-y-1 leading-relaxed">
                      <li>
                        <strong>Identification data:</strong> name, surname,
                        email address, phone number
                      </li>
                      <li>
                        <strong>Professional data:</strong> company name,
                        position, industry sector
                      </li>
                      <li>
                        <strong>Communication data:</strong> content of messages
                        exchanged via our contact forms
                      </li>
                      <li>
                        <strong>Investment data:</strong> information relating
                        to investment projects, financial documents (for project
                        holders and investors)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f1ece8] mb-2">
                      3.2 Data collected automatically
                    </h4>
                    <ul className="list-disc list-inside space-y-1 leading-relaxed">
                      <li>
                        <strong>Connection data:</strong> IP address, browser
                        type, operating system
                      </li>
                      <li>
                        <strong>Browsing data:</strong> pages viewed, visit
                        duration, navigation path
                      </li>
                      <li>
                        <strong>Cookies and similar technologies:</strong>{" "}
                        session identifiers, user preferences
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-cormorant text-[#b66a3c] mb-3">
                  4. Purposes and Legal Bases for Processing
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-[#f1ece8]/20">
                        <th className="text-left py-2 px-2 font-bold text-[#f1ece8]">
                          Purpose
                        </th>
                        <th className="text-left py-2 px-2 font-bold text-[#f1ece8]">
                          Legal Basis (GDPR)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#f1ece8]/10">
                        <td className="py-2 px-2">
                          Responding to your contact requests
                        </td>
                        <td className="py-2 px-2">
                          Legitimate interest (Art. 6.1.f)
                        </td>
                      </tr>
                      <tr className="border-b border-[#f1ece8]/10">
                        <td className="py-2 px-2">
                          Evaluation of investment opportunities
                        </td>
                        <td className="py-2 px-2">
                          Performance of pre-contractual measures (Art. 6.1.b)
                        </td>
                      </tr>
                      <tr className="border-b border-[#f1ece8]/10">
                        <td className="py-2 px-2">
                          Management of investor/partner relationships
                        </td>
                        <td className="py-2 px-2">
                          Performance of contract (Art. 6.1.b)
                        </td>
                      </tr>
                      <tr className="border-b border-[#f1ece8]/10">
                        <td className="py-2 px-2">
                          Sending information about our activities
                        </td>
                        <td className="py-2 px-2">Consent (Art. 6.1.a)</td>
                      </tr>
                      <tr className="border-b border-[#f1ece8]/10">
                        <td className="py-2 px-2">
                          Improvement of our services and website
                        </td>
                        <td className="py-2 px-2">
                          Legitimate interest (Art. 6.1.f)
                        </td>
                      </tr>
                      <tr className="border-b border-[#f1ece8]/10">
                        <td className="py-2 px-2">
                          Compliance with legal and regulatory obligations
                        </td>
                        <td className="py-2 px-2">
                          Legal obligation (Art. 6.1.c)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2">
                          Fraud prevention and security
                        </td>
                        <td className="py-2 px-2">
                          Legitimate interest (Art. 6.1.f)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-cormorant text-[#b66a3c] mb-3">
                  5. Data Recipients
                </h3>
                <p className="leading-relaxed mb-2">
                  Your personal data may be shared with:
                </p>
                <ul className="list-disc list-inside space-y-1 leading-relaxed mb-2">
                  <li>
                    <strong>Our internal teams:</strong> for processing your
                    requests and managing our activities
                  </li>
                  <li>
                    <strong>Our ecosystem partners:</strong> as part of
                    co-investments or introductions (only with your consent)
                  </li>
                  <li>
                    <strong>Our technical service providers:</strong> hosting,
                    maintenance, communication tools (under GDPR-compliant data
                    processing agreements)
                  </li>
                  <li>
                    <strong>Competent authorities:</strong> when required by law
                  </li>
                </ul>
                <p className="leading-relaxed font-bold text-[#b66a3c]">
                  We never sell your personal data to third parties.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-cormorant text-[#b66a3c] mb-3">
                  6. International Transfers
                </h3>
                <p className="leading-relaxed mb-2">
                  As part of our activities, your data may be transferred to
                  countries outside the European Union. Where applicable, we
                  ensure that such transfers are governed by:
                </p>
                <ul className="list-disc list-inside space-y-1 leading-relaxed">
                  <li>Adequacy decisions of the European Commission</li>
                  <li>
                    Standard contractual clauses approved by the European
                    Commission
                  </li>
                  <li>Any other transfer mechanism compliant with the GDPR</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-cormorant text-[#b66a3c] mb-3">
                  7. Data Retention Period
                </h3>
                <p className="leading-relaxed mb-3">
                  We retain your personal data only for the period necessary for
                  the purposes for which it was collected:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-[#f1ece8]/20">
                        <th className="text-left py-2 px-2 font-bold text-[#f1ece8]">
                          Type of Data
                        </th>
                        <th className="text-left py-2 px-2 font-bold text-[#f1ece8]">
                          Retention Period
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#f1ece8]/10">
                        <td className="py-2 px-2">
                          Commercial prospecting data
                        </td>
                        <td className="py-2 px-2">3 years from last contact</td>
                      </tr>
                      <tr className="border-b border-[#f1ece8]/10">
                        <td className="py-2 px-2">Contractual data</td>
                        <td className="py-2 px-2">
                          Duration of contract + 5 years
                        </td>
                      </tr>
                      <tr className="border-b border-[#f1ece8]/10">
                        <td className="py-2 px-2">Browsing data and cookies</td>
                        <td className="py-2 px-2">Maximum 13 months</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2">
                          Accounting and financial documents
                        </td>
                        <td className="py-2 px-2">
                          10 years (legal requirement)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-cormorant text-[#b66a3c] mb-3">
                  8. Your Rights (GDPR)
                </h3>
                <p className="leading-relaxed mb-3 font-bold text-[#f1ece8]">
                  In accordance with the GDPR, you have the following rights:
                </p>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-bold text-[#f1ece8]">
                      8.1 Right of Access (Article 15)
                    </h4>
                    <p className="leading-relaxed">
                      You may obtain confirmation that your data is being
                      processed and request a copy of it.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f1ece8]">
                      8.2 Right to Rectification (Article 16)
                    </h4>
                    <p className="leading-relaxed">
                      You may request the correction of inaccurate or incomplete
                      data.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f1ece8]">
                      8.3 Right to Erasure (Article 17)
                    </h4>
                    <p className="leading-relaxed">
                      You may request the deletion of your data under certain
                      conditions (&quot;right to be forgotten&quot;).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f1ece8]">
                      8.4 Right to Restriction of Processing (Article 18)
                    </h4>
                    <p className="leading-relaxed">
                      You may request the temporary suspension of the processing
                      of your data.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f1ece8]">
                      8.5 Right to Data Portability (Article 20)
                    </h4>
                    <p className="leading-relaxed">
                      You may receive your data in a structured format and
                      transmit it to another data controller.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f1ece8]">
                      8.6 Right to Object (Article 21)
                    </h4>
                    <p className="leading-relaxed">
                      You may object to the processing of your data on
                      legitimate grounds, particularly for direct marketing
                      purposes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f1ece8]">
                      8.7 Right to Withdraw Consent
                    </h4>
                    <p className="leading-relaxed">
                      Where processing is based on your consent, you may
                      withdraw it at any time.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f1ece8]">
                      8.8 Right to Lodge a Complaint
                    </h4>
                    <p className="leading-relaxed">
                      You may lodge a complaint with the CNIL (French Data
                      Protection Authority): CNIL - 3 Place de Fontenoy, TSA
                      80715, 75334 Paris Cedex 07 - www.cnil.fr
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-cormorant text-[#b66a3c] mb-3">
                  9. Exercising Your Rights
                </h3>
                <p className="leading-relaxed mb-2">
                  To exercise your rights or for any questions regarding the
                  protection of your personal data, you may contact us:
                </p>
                <p className="leading-relaxed mb-2">
                  <strong>By email:</strong> contact@core.investments
                </p>
                <p className="leading-relaxed">
                  <strong>By post:</strong>
                  <br />
                  CORE INVESTMENTS
                  <br />
                  Attn: GDPR Officer
                  <br />
                  230 Route Des Dolines
                  <br />
                  06560 Valbonne, France
                  <br />
                  <br />
                  We undertake to respond to your request within a maximum of{" "}
                  <strong>30 days</strong> from receipt. Proof of identity may
                  be requested to verify your identity.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-cormorant text-[#b66a3c] mb-3">
                  10. Cookies
                </h3>
                <p className="leading-relaxed mb-3">
                  Our website uses cookies to improve your browsing experience.
                </p>
                <div className="overflow-x-auto mb-3">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-[#f1ece8]/20">
                        <th className="text-left py-2 px-2 font-bold text-[#f1ece8]">
                          Type
                        </th>
                        <th className="text-left py-2 px-2 font-bold text-[#f1ece8]">
                          Purpose
                        </th>
                        <th className="text-left py-2 px-2 font-bold text-[#f1ece8]">
                          Duration
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#f1ece8]/10">
                        <td className="py-2 px-2">Essential cookies</td>
                        <td className="py-2 px-2">Website functionality</td>
                        <td className="py-2 px-2">Session</td>
                      </tr>
                      <tr className="border-b border-[#f1ece8]/10">
                        <td className="py-2 px-2">Analytics cookies</td>
                        <td className="py-2 px-2">Audience measurement</td>
                        <td className="py-2 px-2">13 months</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2">Preference cookies</td>
                        <td className="py-2 px-2">Remembering your choices</td>
                        <td className="py-2 px-2">12 months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed">
                  You can manage your cookie preferences via your browser
                  settings or via our cookie banner on your first visit.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-cormorant text-[#b66a3c] mb-3">
                  11. Data Security
                </h3>
                <p className="leading-relaxed mb-2">
                  We implement appropriate technical and organizational measures
                  to protect your personal data against unauthorized access,
                  modification, disclosure or destruction, including:
                </p>
                <ul className="list-disc list-inside space-y-1 leading-relaxed">
                  <li>Encryption of sensitive data</li>
                  <li>Access controls and secure authentication</li>
                  <li>Regular backups</li>
                  <li>Training of our staff on data protection</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-cormorant text-[#b66a3c] mb-3">
                  12. Policy Amendments
                </h3>
                <p className="leading-relaxed">
                  We reserve the right to modify this Privacy Policy at any
                  time. In the event of a substantial change, we will inform you
                  by any appropriate means (notification on the website, email).
                  The date of the last update is indicated at the top of this
                  document.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-cormorant text-[#b66a3c] mb-3">
                  13. Contact
                </h3>
                <p className="leading-relaxed">
                  For any questions regarding this Privacy Policy or the
                  processing of your personal data:
                </p>
                <p className="leading-relaxed mt-2">
                  <strong>Email:</strong> contact@core.investments
                  <br />
                  <strong>Address:</strong> CORE INVESTMENTS, 230 Route Des
                  Dolines, 06560 Valbonne, France
                </p>
              </section>

              <section className="text-center pt-4 border-t border-[#f1ece8]/10 mt-6">
                <p className="text-xs text-[#f1ece8]/60">
                  © 2026 CORE Investments. All rights reserved.
                </p>
              </section>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 p-6 border-t border-[#f1ece8]/10 bg-[#1e1e1e] flex gap-4">
              <button
                onClick={() => setIsPrivacyModalOpen(false)}
                className="flex-1 cursor-pointer px-6 py-2.5 bg-[#b66a3c] hover:bg-[#a85a2c] text-white font-montserrat font-medium rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
