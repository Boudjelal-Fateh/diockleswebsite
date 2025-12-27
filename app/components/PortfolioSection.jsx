import React from "react";
import { Briefcase } from "lucide-react";
import Image from "next/image";

// Portfolio Card Component
const PortfolioCard = ({
  title,
  category,
  description,
  field,
  status,
  statusText,
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm relative">
      {/* Icon and Status Badge */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 bg-[#f1ece8] rounded-xl flex items-center justify-center">
          <Image src="/stars.png" alt="Briefcase" width={24} height={24} />
        </div>
        {statusText && (
          <span
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
              status === "active"
                ? "bg-[#d0fae5] text-[#00bc7d]  "
                : " text-[#1e1e1e] "
            }`}
          >
            {status === "active" && (
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            )}
            <span className=" font-montserrat text-[12px] leading-[16px] ">
              {statusText}
            </span>
          </span>
        )}
      </div>

      {/* Content */}
      <h3 className="text-xl md:text-[24px] leading-[36px] font-normal font-cormorant text-[#1e1e1e] mb-2">
        {title}
      </h3>
      <p className="text-[#b66a3c] text-xs  font-montserrat  uppercase leading-[18px] tracking-[0.6px] mb-2 font-medium">
        {category}
      </p>
      <p className="font-montserrat  text-[14px] leading-[22.8px] text-[#ababab] ">
        {description}
      </p>
      <p className="font-montserrat  text-[14px] leading-[22.8px] text-[#1e1e1e] ">
        {field}
      </p>
    </div>
  );
};

// Main Portfolio Section Component
const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "M3",
      category: "TECHNOLOGY",
      description: "Technical precision solutions",
      status: "active",
      statusText: "Active",
      field: "Hands-On Investments",
    },
    {
      title: "AI & Robotics",
      category: "DEEP TECH",
      description: "Cutting-edge automation",
      status: "active",
      statusText: "Active",
      field: "Hands-On Investments",
    },
    {
      title: "3CM Real Estate",
      category: "REAL ESTATE",
      description: "Strategic property investments",
      status: "active",
      statusText: "Active",
      field: "Hands-On Investments",
    },
    {
      title: "3CM Property Development",
      category: "REAL ESTATE",
      description: "Development projects",
      status: "active",
      statusText: "Active",
      field: "Hands-On Investments",
    },
    {
      title: "Delicity",
      category: "FOOD TECH",
      description: "Modern food solutions",
      status: "active",
      statusText: "Active",
      field: "Hands-On Investments",
    },
    {
      title: "DEKI",
      category: "SAAS",
      description: "Enterprise software",
      status: "active",
      statusText: "Active",
    },
    {
      title: "LivMeds",
      category: "HEALTHTECH",
      description: "Medical technology",
      status: "active",
      statusText: "Active",
    },
    {
      title: "Pess Energy",
      category: "CLEANTECH",
      description: "Renewable energy",
      status: "active",
      statusText: "Active",
    },
    {
      title: "Seedy",
      category: "FINTECH",
      description: "Financial services",
      status: "active",
      statusText: "Active",
    },
    {
      title: "Trustplace",
      category: "PROPTECH",
      description: "Real estate platform",
      status: "active",
      statusText: "Active",
    },
    {
      title: "Cosmic Data",
      category: "DATA",
      description: "Data analytics",
      status: "active",
      statusText: "Active",
    },
    {
      title: "Groupe YSEND",
      category: "LOGISTICS",
      description: "Co-founder, shares sold",
      status: "exited",
      statusText: "Exited 2023",
    },
    {
      title: "DFC Building & MPS Industry",
      category: "INDUSTRIAL",
      description: "Advisory role, shares sold",
      status: "exited",
      statusText: "Exited 2022",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F1ECE8] py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-[1232px] mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-2  text-xs uppercase tracking-wider mb-8 font-medium">
            <Image src="/briefcase.png" alt="Icon" width={20} height={20} />
            <h2 className=" text-[#B66A3C] font-montserrat text-[14px] leading-[21px] tracking-[0.7px] font-normal ">
              Our Portfolio
            </h2>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-cormorant text-[#1e1e1e] leading-[61.6px] max-w-2xl">
            Building the future,
            <br />
            one venture at a time
          </h1>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={index}
              title={item.title}
              category={item.category}
              description={item.description}
              status={item.status}
              statusText={item.statusText}
              field={item.field}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-[#ababab] font-montserrat leading-[27px] mb-6 text-sm md:text-[18px] ">
            Looking to partner with Core Investments?
          </p>
          <button className="bg-[#1e1e1e] text-white px-8 py-3 rounded-[8px] font-montserrat leading-[20px] hover:bg-[#b66a3c] md:w-[154px] md:h-[48px] transition-colors  md:text-[14px] font-medium">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
