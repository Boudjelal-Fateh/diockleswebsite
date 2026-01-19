import React from "react";
import { Network, Users, Lightbulb, Shield, Eye, Zap } from "lucide-react";
import Image from "next/image";

const EcosystemSection = () => {
  const features = [
    {
      icon: Network,
      title: "Strategic Network",
      description: "50+ trusted partners across industries",
      isLarge: true,
    },
    {
      icon: "/people-dark.png",
      title: "Expert Team",
      description: "Seasoned operators and advisors",
    },
    {
      icon: "/bulb-dark.png",
      title: "Innovation Focus",
      description: "Backing cutting-edge solutions",
    },
    {
      icon: "/shield-dark.png",
      title: "Risk Management",
      description: "Structured approach to growth",
    },
    {
      icon: "/target-dark.png",
      title: "Clear Vision",
      description: "Long-term value creation",
    },
    {
      icon: Zap,
      title: "Rapid Execution",
      description: "Speed when it matters",
    },
  ];
  const boxItems = [
    "Strategy & Fundraising",
    "Product, Technology & Software Development",
    "Sales, Branding & Marketing",
    "Operations & Customer Support",
    "Logistics & Supply Chain",
    "Corporate (Legal, Finance, HR & Compliance)",
  ];
  const partners = ["M3", "YSEND", "DELICITY", "COSMIC DATA", "TRUSTPLACE"];

  return (
    <section
      id="ecosystem"
      className="bg-[#d9c3b2] text-[#1e1e1e] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <p className="text-xs sm:text-sm font-montserrat uppercase tracking-[0.7px] md:text-[14px] text-[#1f2a44] leading-[21px] mb-4 sm:mb-6 flex items-center gap-2">
            <Image
              src="/globe.png"
              alt="Ecosystem Icon"
              width={16}
              height={16}
            />
            Our Ecosystem
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-[56px]   font-cormorant font-bold md:leading-[61.6px] text-[#1f2a44] mb-6 sm:mb-8">
            It takes a network to build what <br className=" md:block hidden" />{" "}
            matters
          </h2>

          <p className="text-sm md:text-[18px]  md:max-w-[768px]  font-montserrat sm:text-base text-[#1f2a44] leading-[29.3px] max-w-2xl">
            We believe in the power of the right people, aligned around the
            right intentions. Our ecosystem is small, selective, dynamic, and
            built on long-term trust.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-8 mb-12 xl:mb-16 md:max-w-[1232px] ">
          {/* Large Feature Card - Strategic Network */}
          <div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 h-full flex flex-col">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#f5ede5] mb-6">
                <Network size={24} className="text-[#b66a3c]" />
              </div>

              <h3 className="text-xl sm:text-2xl md:text-[32px]  text-[#1f2a44] leading-[48px] font-normal font-cormorant  mb-3 sm:mb-4">
                Strategic Network
              </h3>

              <p className="text-xs sm:text-sm font-montserrat md:text-[16px] leading-[26px] text-[#1f2a44] mb-8 flex-1">
                50+ trusted partners across industries
              </p>

              {/* Network Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                {boxItems.map((item, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-[#b66a3c]/10 rounded-lg flex items-center justify-center p-2"
                  >
                    <p className="text-[10px] sm:text-xs font-montserrat text-[#1f2a44] text-center leading-">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature Cards Grid - Right Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-8 auto-rows-max">
            {features.slice(1, 5).map((feature, index) => (
              <div
                key={index}
                className="bg-[#ffffff] md:w-[280px] md:h-[306px] rounded-2xl p-6 sm:p-7 flex flex-col"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#f1ece8] mb-4">
                  <Image
                    src={feature.icon}
                    width={24}
                    height={24}
                    className="text-[#1f2a44]"
                    alt="Feature Icon"
                  />
                </div>

                <h3 className="text-base md:text-[20px] leading-[30px] text-[#1f2a44] sm:text-lg font-cormorant  mb-2">
                  {feature.title}
                </h3>

                <p className="text-xs sm:text-sm font-montserrat text-[#1f2a44] md:text-[14px] leading-[22.8px] ">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - CTA and Last Feature */}
        <div className="flex flex-col md:flex-row gap-6 xl:gap-8 mb-12 xl:mb-16">
          {/* Last Feature Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 w-full md:w-[296px] md:h-[200px]">
            <div className="flex items-center justify-center w-10 h-10  rounded-lg bg-[#f1ece8] mb-4">
              <Image
                src="/spark-dark.png"
                width={24}
                height={24}
                alt="Spark Icon"
              />
            </div>

            <h3 className="text-base md:text-[20px] leading-[30px] text-[#1f2a44] sm:text-lg font-cormorant  mb-2">
              Rapid Execution
            </h3>

            <p className="text-xs sm:text-sm font-montserrat text-[#1f2a44] md:text-[14px] leading-[22.8px] ">
              Speed when it matters
            </p>
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-b from-[#1F2A44] to-[#1E1E1E] text-[#f1ece8] rounded-2xl p-6 sm:p-8 w-full md:w-[608px] md:h-[200px] flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
              {/* Title and Paragraph */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <Image
                    src="/award.png"
                    width={32}
                    height={32}
                    alt="Award Icon"
                  />
                  <h3 className="text-lg sm:text-xl font-cormorant lg:text-[28px] md:text-[20px]  leading-[48px] font-normal  text-[#f1ece8] ">
                    Join Our Ecosystem
                  </h3>
                </div>

                <p className="text-sm   md:text-[13px] lg:text-[16.5px] font-montserrat text-[#f1ece8] leading-[24px]  ">
                  We're always looking for exceptional founders, strategic
                  partners, and industry experts to join our growing network.
                </p>
              </div>

              {/* Button */}
              <div className="flex items-center justify-start sm:justify-center">
                <a href="#contact ">
                  <button className="bg-[#b66a3c] mx-auto cursor-pointer hover:bg-[#a85a2c] md:w-[138px] md:h-[48px] text-white font-montserrat font-medium py-2.5 sm:py-3 px-6 rounded-[10px] transition-colors duration-200 inline-flex items-center gap-2 text-sm whitespace-nowrap">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className=" pt-12 sm:pt-16 lg:pt-20">
          <p className="text-xs sm:text-sm font-montserrat md:text-[14px] uppercase tracking-[0.7px] leading-[21px] text-[#1f2a44]/60 text-center mb-8 sm:mb-10">
            Trusted by industry leaders
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-[#ffffff]/50 md:px-[25px] md:pt-[15px] pb-[1px] rounded-[10px] px-4 sm:px-6 py-2 sm:py-2.5"
              >
                <span className="text-xs sm:text-sm font-cormorant font-normal text-[#1f2a44]/70 leading-[27px] md:text-[18px] ">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
