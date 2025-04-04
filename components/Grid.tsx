"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "./ui/GlowingEffect";
import { gridItems } from "@/data";

export function Grid() {
  return (
    <section id="about">
      <h1 className="heading">
        About Me
      </h1>

      <ul className="pt-10 grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-4 lg:gap-4">
        {gridItems.map((item, i) => (
          <GridItem
            id={item.id}
            key={i}
            area={item.area}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
}

interface GridItemProps {
  id: number;
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ id, area, icon, title, description }: GridItemProps) => {
  return (
    <li id={`${id}`} className={`min-h-[14rem] wlist-none bg-gradient-to-r from-emerald-400/0 via-emerald-900/90 to-emerald-400/0 transition-opacity duration-500 ${area}`}>
      <div className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2 ">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-black dark:text-neutral-400"
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
