import React from "react";
import GradientButton from "./GradientButton";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section>
     <div className="container mx-auto px-4">
  <h1 className="text-[32px] sm:text-[48px] md:text-[64px] font-bold text-center mt-6 md:mt-10 leading-tight sm:leading-normal md:leading-loose lg:leading-relaxed">
    The everything app for work
  </h1>
  <p className="text-center text-[18px] sm:text-[20px] md:text-[22px] max-w-lg sm:max-w-xl md:max-w-2xl mx-auto mt-3">
    <strong>Now with Chat, powered by AI.</strong> One place for teams of all sizes to communicate and get work done.
  </p>
  <div className="mx-auto w-full flex justify-center mt-4 sm:mt-6">
    <GradientButton />
  </div>
  <h3 className="text-center text-[#8b91a7] font-semibold mt-3 sm:mt-4">
    Free Forever. No Credit Card.
  </h3>
</div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-16 mt-6 md:mt-12">
        <div className="flex flex-col items-center cursor-pointer">
          <div className="bg-slate-50 p-2 rounded-xl">
            <img
              src="images/dashboard-icon.png"
              alt="dashboardIcon"
              className="w-8 md:w-10"
            />
          </div>
          <h3 className="text-xs md:text-sm text-gray-800 opacity-75 mt-2">
            Dashboards
          </h3>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <div className="bg-slate-50 p-2 rounded-xl">
            <img
              src="images/sprint-icon.png"
              alt="sprintIcon"
              className="w-7 md:w-9"
            />
          </div>
          <h3 className="text-xs md:text-sm text-gray-800 opacity-75 mt-2">
            Sprints
          </h3>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <div className="bg-slate-50 p-2 rounded-xl">
            <img
              src="images/white-board.png"
              alt="WhiteboardsIcon"
              className="w-7 md:w-9"
            />
          </div>
          <h3 className="text-xs md:text-sm text-gray-800 opacity-75 mt-2">
            Whiteboards
          </h3>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <div className="bg-slate-50 p-2 rounded-xl">
            <img
              src="images/projects-icon.png"
              alt="ProjectsIcon"
              className="w-8 md:w-10"
            />
          </div>
          <h3 className="text-xs md:text-sm text-gray-800 opacity-75 mt-2">
            Projects
          </h3>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <div className="bg-slate-950 p-2 rounded-xl">
            <img
              src="images/hash-icon.png"
              alt="dashboardIcon"
              className="w-8 md:w-10"
            />
          </div>
          <h3 className="text-xs md:text-sm text-gray-800 opacity-75 mt-2">
            Chat
          </h3>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <div className="bg-slate-50 p-2 rounded-xl">
            <img
              src="images/form-icon.png"
              alt="dashboardIcon"
              className="w-8 md:w-10"
            />
          </div>
          <h3 className="text-xs md:text-sm text-gray-800 opacity-75 mt-2">
            Forms
          </h3>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <div className="bg-slate-50 p-2 rounded-xl">
            <img
              src="images/automation-icon.png"
              alt="sprintIcon"
              className="w-7 md:w-9"
            />
          </div>
          <h3 className="text-xs md:text-sm text-gray-800 opacity-75 mt-2">
            Automations
          </h3>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <div className="bg-slate-50 p-2 rounded-xl">
            <img
              src="images/goal-icon.png"
              alt="WhiteboardsIcon"
              className="w-7 md:w-9"
            />
          </div>
          <h3 className="text-xs md:text-sm text-gray-800 opacity-75 mt-2">
            Goals
          </h3>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <div className="bg-slate-50 p-2 rounded-xl">
            <img
              src="images/star-icon.png"
              alt="ProjectsIcon"
              className="w-8 md:w-10"
            />
          </div>
          <h3 className="text-xs md:text-sm text-gray-800 opacity-75 mt-2">
            AI
          </h3>
        </div>
      </div>

      <div className="relative max-w-screen-lg mx-auto p-4 mt-6">
        <Image
          src="/images/home-chat-desktop.png"
          alt="Chat UI Design"
          layout="responsive"
          width={1224}
          height={762}
          className="rounded-lg shadow-lg"
        />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/70 to-transparent rounded-lg"></div>
      </div>

      {/* <div className="relative w-full h-full max-w-screen-lg mx-auto p-4 mt-6">
  <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(255,255,0,0.7)_0%,_rgba(255,0,198,0.7)_50%,_rgba(135,206,250,0.7)_100%)] z-0 w-full h-full filter blur-md" />
  <div className="relative z-10">
    <Image
      src="/images/home-chat-desktop.png"
      alt="Chat UI Design"
      layout="responsive"
      width={1224}
      height={762}
      className="rounded-lg shadow-lg"
    />
  </div>
</div> */}

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
