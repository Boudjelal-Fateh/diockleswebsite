import React from "react";
import StateCard from "./StateCard";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#1e1e1e] pt-20 ">
      {/* Background gradient */}
      {/* Base background */}
      <div className="absolute inset-0  bg-brand-gradient  " />

      {/* Warm glow */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(182,106,60,0.25),_transparent_60%)]" /> */}

      {/* Vignette */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(0,0,0,0.9)_100%)]" /> */}

      <div className="relative  z-10 mx-auto max-w-6xl px-4 lg:px-0  text-start md:text-center ">
        {/* Headline */}
        <h1 className=" font-cormorant text-[#f1ece8] text-[31px] mt-10  leading-[40px]  lg:mt-20  md:text-6xl lg:text-[80px] md:leading-[80px] ">
          We accelerate bold ideas by surrounding them with{" "}
          <span className=" text-(--color-primary)">loyal people</span>,{" "}
          <span className=" text-(--color-primary)">solid structure</span>, and{" "}
          <span className="  text-(--color-primary)">trusted capital</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl font-sans text-sm  text-(--color-foreground) font-montserrat md:leading-[36px]  md:text-[24px] ">
          We believe the fastest route to scale is{" "}
          <span className="italic text-(--color-primary)">trust</span>, not
          speed.
        </p>

        {/* Stats cards */}
        <StateCard />

        {/* Scroll indicator */}
        <div className="md:mt-32 mt-20 flex flex-col items-center   gap-2 mb-4 ">
          <span className=" text-[12px] font-montserrat text-(--color-foreground)">
            SCROLL
          </span>
          <div className=" text-(--color-foreground)">
            <Image
              src="/downarrow.png"
              alt="Scroll down"
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// function StatCard({ value, label }: { value: string; label: string }) {
//   return (
//     <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 px-8 py-10 backdrop-blur">
//       <div className="font-serif text-3xl">{value}</div>
//       <div className="mt-2 text-xs uppercase tracking-wider text-neutral-400">
//         {label}
//       </div>
//     </div>
//   );
// }

export default Hero;
