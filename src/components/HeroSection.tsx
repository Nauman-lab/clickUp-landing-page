"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { RxDashboard } from "react-icons/rx";
import { GiSprint } from "react-icons/gi";
import { TfiBlackboard } from "react-icons/tfi";
import { TiTickOutline } from "react-icons/ti";
import { FiHash } from "react-icons/fi";
import { FaWpforms } from "react-icons/fa";
import { TbSettingsAutomation } from "react-icons/tb";
import { GoGoal } from "react-icons/go";
import { IoIosStarOutline } from "react-icons/io";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabItems = [
    {
      id: 0,
      label: "Dashboards",
      icon: <RxDashboard size="30px" />,
      img: "/images/dashboards-desktop.png",
    },
    {
      id: 1,
      label: "Sprints",
      icon: <GiSprint size="30px" />,
      img: "/images/sprints-desktop.png",
    },
    {
      id: 2,
      label: "Whiteboards",
      icon: <TfiBlackboard size="30px" />,
      img: "/images/whiteboards-desktop.png",
    },
    {
      id: 3,
      label: "Projects",
      icon: <TiTickOutline size="30px" />,
      img: "/images/projects-desktop.png",
    },
    {
      id: 4,
      label: "Chat",
      icon: <FiHash size="30px" />,
      img: "/images/chat-desktop.png",
    },
    {
      id: 5,
      label: "Forms",
      icon: <FaWpforms size="28px" />,
      img: "/images/forms-desktop.png",
    },
    {
      id: 6,
      label: "Automations",
      icon: <TbSettingsAutomation size="30px" />,
      img: "/images/automations-desktop.png",
    },
    {
      id: 7,
      label: "Goals",
      icon: <GoGoal size="30px" />,
      img: "/images/goals-desktop.png",
    },
    {
      id: 8,
      label: "AI",
      icon: <IoIosStarOutline size="30px" />,
      img: "/images/ai-desktop.png",
    },
  ];

  return (
    <section>
      <div className="container mx-auto px-4">
        <h1 className="text-[32px] sm:text-[48px] md:text-[64px] font-[800] text-center mt-6 md:mt-10 leading-tight sm:leading-normal md:leading-loose lg:leading-relaxed">
          The everything app for work
        </h1>
      </div>
      <div className="bg-custom-bg bg-cover bg-center h-auto w-full font-[500]">
        <p className="text-center text-[18px] sm:text-[20px] md:text-[22px] max-w-lg sm:max-w-xl md:max-w-2xl mx-auto mt-3">
          <strong>Now with Chat, powered by AI.</strong> One place for teams of
          all sizes to communicate and get work done.
        </p>
        <div className="mx-auto w-full flex justify-center mt-4 sm:mt-6">
          <Button className="bg-custom-gradient text-white font-[700] text-[16px] md:text-[23px] px-10 md:px-16 py-8 rounded-lg shadow-md flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300">
            Get Started. It’s FREE
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
        <h3 className="text-center text-[#8b91a7] font-[500] mt-2 sm:mt-3">
          Free Forever. No Credit Card.
        </h3>

        {/* Slider Tabs */}
        <div className="flex overflow-x-auto justify-center gap-6 md:gap-12 lg:gap-16 mt-4 md:mt-10">
          {tabItems.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                activeTab === item.id ? "opacity-100" : "opacity-50"
              } hover:-translate-y-1 pt-2`}
              onClick={() => setActiveTab(item.id)}
            >
              <div
                className={`${
                  activeTab === item.id ? "bg-slate-900" : "bg-slate-50"
                } ${
                  activeTab === item.id ? "text-gray-200" : "text-gray-950"
                } p-2.5 rounded-xl`}
              >
                {item.icon}
              </div>
              <h3 className="text-xs md:text-sm text-gray-800 opacity-75 mt-2">
                {item.label}
              </h3>
            </div>
          ))}
        </div>

        {/* Image that changes based on active tab */}
        <div className="relative max-w-screen-lg mx-auto p-4 mt-6">
          <Image
            src={tabItems[activeTab].img}
            alt={`${tabItems[activeTab].label} Image`}
            layout="responsive"
            width={1224}
            height={762}
            className="rounded-lg shadow-lg"
          />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/70 to-transparent rounded-lg"></div>
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto p-4">
        <Image
          src="/images/transition-lines.svg"
          alt="transition-lines"
          layout="responsive"
          width={1224}
          height={762}
        />
      </div>
    </section>
  );
}
