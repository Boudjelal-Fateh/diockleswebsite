import React from "react";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      {/* Base background */}
      <div className="absolute inset-0 bg-[#0e0e0e]" />

      {/* Warm glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(182,106,60,0.25),_transparent_60%)]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(0,0,0,0.9)_100%)]" />

      <div className="relative  z-10 mx-auto max-w-6xl px-6 text-center">
        {/* Headline */}
        <h1 className=" font-cormorant text-(--color-foreground) text-4xl leading-tight md:text-6xl lg:text-7xl">
          We accelerate bold ideas by surrounding them with{" "}
          <span className=" text-(--color-primary)">loyal people</span>,{" "}
          <span className=" text-(--color-primary)">solid structure</span>, and{" "}
          <span className="  text-(--color-primary)">trusted capital</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl font-sans text-sm  text-(--color-foreground) font-montserrat  md:text-[24px] ">
          We believe the fastest route to scale is{" "}
          <span className="italic text-(--color-primary)">trust</span>, not
          speed.
        </p>

        {/* Stats cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <StatCard value="12+" label="Active investments" />
          <StatCard value="2" label="Successful exits" />
          <StatCard value="50+" label="Network partners" />
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 text-xs tracking-widest text-neutral-500">
          SCROLL
          <div className="mt-2 text-primary">↓</div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 px-8 py-10 backdrop-blur">
      <div className="font-serif text-3xl">{value}</div>
      <div className="mt-2 text-xs uppercase tracking-wider text-neutral-400">
        {label}
      </div>
    </div>
  );
}

export default Hero;
