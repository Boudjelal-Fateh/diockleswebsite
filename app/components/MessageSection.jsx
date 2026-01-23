import React from "react";
import Image from "next/image";

const MessageSection = () => {
  const stats = [
    { label: "Years Experience", value: "20+" },
    { label: "Active Ventures", value: "12+" },
    { label: "Deployed Capital", value: "€50M+" },
    { label: "Successful Exits", value: "2" },
  ];

  return (
    <section
      id="insights"
      className="bg-[#1e1e1e]  text-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      <div className="max-w-[1104px]  mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl  md:text-[56px] text-[#f1ece8] font-cormorant font-bold text-center mb-12 sm:mb-16 lg:mb-20">
          Message from Christophe
        </h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12 lg:mb-20 items-start">
          {/* Left Card */}
          <div className=" relative lg:col-span-1 flex flex-col items-start h-[346px]">
            <div className="w-[64px] h-[64px] bg-[#b66a3c]/10 rounded-full absolute -top-[24px] -left-[24px] flex items-center justify-center z-10">
              <Image
                src="/quotes.png"
                alt="Quotes Icon"
                width={32}
                height={32}
                className="rounded-2xl"
              />
            </div>

            <div className="relative rounded-2xl p-8 sm:p-10 w-full flex-1 overflow-hidden">
              <Image
                src="/bg1.png"
                alt="Background"
                fill
                className="absolute inset-0 object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2">
            {/* Quote */}
            <p className="text-lg sm:text-xl md:text-[32px] leading-[52px]  font-cormorant italic text-[#b66a3c] mb-6 sm:mb-8">
              "Genius Dreams Heroes Grind."
            </p>

            {/* Message Text */}
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
              <p className="text-sm sm:text-base text-[f1ece8]/90 leading-[29.3px] md:text-[18px] font-montserrat">
                I’ve spent my life walking the edge between vision and
                execution: launching companies, advising founders, navigating
                reinventions. I’ve made bold moves. I’ve made mistakes. I’ve
                trusted the wrong people. And I’ve also experienced what happens
                when trust, talent, and timing align.
              </p>

              <p className="text-sm sm:text-base text-[f1ece8]/90 leading-[29.3px] md:text-[18px] font-montserrat">
                Core Investments is born from that experience. This is not a
                fund. It’s not just a firm. It’s a growth accelerator. A launch
                platform. A structure for loyalty to scale. I built it to back
                the people and projects that might otherwise fall through the
                cracks, too human, too weird, too early, or too real for
                traditional capital.
              </p>

              <p className="text-sm sm:text-base text-[f1ece8]/90 leading-[29.3px] md:text-[18px] font-montserrat">
                I serve founders with insane clarity and the courage to chase
                it. People who don’t need help dreaming bigger. They need
                someone who can build alongside, stay the course, and bring
                grounded momentum to the madness.
              </p>
              <p className="text-sm sm:text-base text-[f1ece8]/90 leading-[29.3px] md:text-[18px] font-montserrat">
                I’m not here to manage your money. I’m here to amplify your
                mission. With structure. With stamina. With skin in the game.
                When we partner, I show up fully. As a challenger. As an
                enabler. As someone who doesn’t flinch when it gets hard.
              </p>
            </div>

            {/* Signature */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between border-t border-[#b66a3c]/20 pt-6 sm:pt-8">
              <div>
                <h4 className="text-base md:text-[24px] leading-[36px] text-[#f1ece8] sm:text-lg font-cormorant font-bold mb-1">
                  Christophe Core
                </h4>
                <p className="text-xs sm:text-sm text-[#f1ece8]/60 leading-[21px] md:text-[14px] font-montserrat">
                  Founder & Managing Partner
                </p>
              </div>
              <p className="text-sm sm:text-base md:text-[20px] flex flex-col leading-[30px] font-cormorant italic text-[#b66a3c] mt-4 sm:mt-0">
                “Making madness work.” That’s what I live for.{" "}
                <span>If that’s where you live too, we should talk.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8  pt-12 sm:pt-16 lg:pt-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center border px-[25px] pt-[25px] pb-[25px] rounded-[14px] border-[#b66a3c]/20"
            >
              <p className="text-2xl sm:text-3xl md:text-[32px] leading-[48px]  font-cormorant font-bold text-[#b66a3c] mb-2">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm md:text-[12px] font-montserrat uppercase leading-[18px] tracking-[0.6px] text-[#f1ece8]/60 ">
                {stat.label}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default MessageSection;
