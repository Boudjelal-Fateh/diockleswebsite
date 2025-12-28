import React from "react";

const MessageSection = () => {
  const stats = [
    { label: "Years Experience", value: "20+" },
    { label: "Active Ventures", value: "12+" },
    { label: "Deployed Capital", value: "€50M+" },
    { label: "Successful Exits", value: "2" },
  ];

  return (
    <section className="bg-[#1e1e1e] text-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cormorant font-bold text-center mb-12 sm:mb-16 lg:mb-20">
          Message from Christophe
        </h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12 lg:mb-20">
          {/* Left Card */}
          <div className="lg:col-span-1 flex flex-col items-start">
            <div className="text-[#b66a3c] text-lg sm:text-xl font-cormorant font-bold mb-6">
              99
            </div>

            <div className="bg-gradient-to-br from-[#2a2416] to-[#1a1410] rounded-2xl p-8 sm:p-10 w-full flex flex-col items-center mb-6">
              {/* Avatar */}
              <div className="w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-gradient-to-br from-[#b66a3c] to-[#8b4d28] flex items-center justify-center mb-6">
                <span className="text-3xl sm:text-4xl font-cormorant font-bold text-white">
                  CC
                </span>
              </div>

              {/* Name and Title */}
              <h3 className="text-lg sm:text-xl font-cormorant font-bold text-center mb-2">
                Christophe Core
              </h3>
              <p className="text-xs sm:text-sm text-[#b66a3c] font-montserrat text-center">
                Founder & Managing Partner
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2">
            {/* Quote */}
            <p className="text-lg sm:text-xl font-cormorant italic text-[#b66a3c] mb-6 sm:mb-8">
              "Genius Dreams Heroes Grind."
            </p>

            {/* Message Text */}
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-montserrat">
                I've spent my life walking the edge between vision and
                execution—launching, advising, rebuilding. Core Investments is
                born from that experience: not a fund, but a growth accelerator.
                A structure for loyalty to scale.
              </p>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-montserrat">
                I back founders with clarity, courage, and skin in the game.
                Those who understand that building something meaningful requires
                more than capital—it requires conviction, resilience, and a
                network you can truly count on.
              </p>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-montserrat">
                We don't chase trends. We identify potential, commit deeply, and
                stand by our partners through every challenge. That's the Core
                way.
              </p>
            </div>

            {/* Signature */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between border-t border-gray-700 pt-6 sm:pt-8">
              <div>
                <h4 className="text-base sm:text-lg font-cormorant font-bold mb-1">
                  Christophe Core
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 font-montserrat">
                  Founder & Managing Partner
                </p>
              </div>
              <p className="text-sm sm:text-base font-cormorant italic text-[#b66a3c] mt-4 sm:mt-0">
                "Making madness work."
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 border-t border-gray-700 pt-12 sm:pt-16 lg:pt-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-cormorant font-bold text-[#b66a3c] mb-2">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-montserrat uppercase tracking-wider text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
