import React from "react";
import { Target, Heart, Zap, Shield } from "lucide-react";
import Image from "next/image";

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-2xl p-7 ">
      <div className="w-14 h-14 bg-[#f1ece8] rounded-2xl flex items-center justify-center mb-6">
        <Icon className="w-[24px] h-[24px] text-[#b66a3c]" strokeWidth={1.5} />
      </div>
      <h3 className="text-[20px] font-normal font-cormorant leading-[30px]  mb-4">
        {title}
      </h3>
      <p className="text-[#ababab] font-montserrat leading-[22.8px] font-normal text-[14px] ">
        {description}
      </p>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ value, label }) => {
  return (
    <div className="border border-[#b66b3c21] rounded-[10px] p-8 text-center px-[17px] pt-[17px] pb-[1px]  border-opacity-50">
      <div className="text-[32px] font-cormorant text-[#b66a3c] leading-[48px] ">
        {value}
      </div>
      <div className="text-[12px] font-normal font-montserrat text-[#ababab] tracking-[0.6px] ">
        {label}
      </div>
    </div>
  );
};

// Main Component
const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Bold & Strategic",
      description:
        "We back founders who challenge conventions and think in decades, not quarters.",
    },
    {
      icon: Heart,
      title: "Trust-First",
      description:
        "Long-term relationships built on mutual respect and transparent communication.",
    },
    {
      icon: Zap,
      title: "Action-Oriented",
      description:
        "From capital to hands-on support, we accelerate execution without compromising vision.",
    },
    {
      icon: Shield,
      title: "Resilient",
      description:
        "We stand by our partners through challenges, providing stability when it matters most.",
    },
  ];

  const stats = [
    { value: "7+", label: "YEARS" },
    { value: "€50M+", label: "AUM" },
    { value: "85%", label: "SUCCESS" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen border-b border-[#b66a3c] bg-[#F1ECE8] md:py-20 md:px-8 px-4 py-12 "
    >
      <div className="max-w-[1232px]  mx-auto">
        <div className="grid lg:grid-cols-2  gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="max-w-xl">
            <div className="flex items-center gap-2  text-xs uppercase tracking-wider mb-8 font-medium">
              <Image src="/goingup.png" alt="Icon" width={20} height={20} />
              <h2 className=" text-[#B66A3C] font-montserrat text-[14px] leading-[21px] tracking-[0.7px] font-normal ">
                ABOUT CORE INVESTMENTS
              </h2>
            </div>

            <h1 className="font-cormorant text-[31px]  md:text-[58px] md:leading-[61.6px]   ">
              Where vision meets execution
            </h1>

            <p className=" mt-[32px] font-montserrat text-[18px] leading-[29.3px] font-normal  text-[#ababab] ">
              Core Investments is an independent, founder-focused investment
              firm and growth accelerator.
            </p>

            <p className="font-montserrat text-[18px] leading-[29.3px] font-normal  text-[#ababab] mt-[24px] ">
              Founded as the structured complement to Christophe Core's dynamic
              action-driven ethos, we bridge visionary genius and grounded
              execution. We support bold ventures with a trusted ecosystem of
              capital, structure, and people you can count on.
            </p>

            <div className="border-l-[4px] border-[#b66a3c] mt-[24px]  mb-16  ">
              <p className=" italic font-cormorant text-[22px] leading-[39px] text-[#1e1e1e]  pl-[28px]  ">
                We're here for those who want to move further, faster, and not
                alone.
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <StatCard key={index} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>

          {/* Right Column - Feature Cards in 2x2 Grid */}
          <div className="grid  mt-10 md:grid-cols-2 gap-6 ">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
