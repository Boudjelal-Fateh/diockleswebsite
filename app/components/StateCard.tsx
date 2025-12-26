import React from "react";
import goingup from "../../public/goingup.png";
import people from "../../public/people.png";
import target from "../../public/target.png";
import Image from "next/image";

const data = [
  {
    icon: goingup,
    value: "12+",
    label: "Active investments",
  },

  {
    icon: target,
    value: "2",
    label: "successful exits",
  },
  {
    icon: people,
    value: "50+",
    label: "Network Partners",
  },
];

function StateCard() {
  return (
    <div className="md:mt-48 mt-20 grid gap-6 md:grid-cols-3">
      {data.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center justify-center rounded-2xl border border-[#B66A3C]  px-8 py-10 backdrop-blur"
        >
          <Image src={stat.icon} alt={stat.label} width={32} height={32} />
          <div className=" mt-4 font-serif text-[42px] font-cormorant text-(--color-foreground) ">
            {stat.value}
          </div>
          <div className="mt-2 text-xs font-montserrat uppercase font-normal tracking-wider text-(--color-foreground)">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default StateCard;
