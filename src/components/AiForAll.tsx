import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const AiForAll = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-20 md:block hidden">
        <div className="p-[1px] bg-gradient-to-r from-gray-300 to-pink-500 rounded-2xl">
          <div className="bg-ai-for-all-bg bg-cover bg-center h-[500px] w-full flex flex-col items-start justify-center p-20 bg-white rounded-2xl">
            <div className="max-w-[340px] flex flex-col gap-4">
              <div className="relative w-[160px] h-[26px]">
                <Image
                  src="/images/clickup-brain.svg"
                  alt="transition-lines"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-4xl font-[900] text-black">
                <span style={{ color: "#fa12e3" }}>One AI</span> for <br /> all
                your work
              </h1>
              <p className="text-[16px] font-[500]">
                Add to any paid plan for $7/user/mo
              </p>
              <p className="text-[16px] font-[500]">
                <strong>Instantly power up company-wide AI </strong>
                that connects every aspect of your work, across all your apps.
              </p>
              <div className="flex gap-3">
                <Button className="bg-pink-50 hover:bg-pink-700 text-pink-500 hover:text-white">
                  Try for free
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button className="bg-slate-300 hover:bg-slate-500 text-gray-600 hover:text-white">
                  learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-[1px] rounded-2xl mt-10 block md:hidden">
        <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl">
          <div className="flex flex-col gap-4">
            <div className="relative w-[160px] h-[26px]">
              <Image
                src="/images/clickup-brain.svg"
                alt="transition-lines"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-4xl font-[900] text-black">
              <span style={{ color: "#fa12e3" }}>One AI</span> for <br /> all
              your work
            </h1>
            <p className="text-[16px] font-[500]">
              Add to any paid plan for $7/user/mo
            </p>
            <p className="text-[16px] font-[500]">
              <strong>Instantly power up company-wide AI </strong>
              that connects every aspect of your work, across all your apps.
            </p>
            <div className="flex gap-3">
              <Button className="bg-pink-50 hover:bg-pink-700 text-pink-500 hover:text-white">
                Try for free
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button className="bg-slate-300 hover:bg-slate-500 text-gray-600 hover:text-white">
                Learn more
              </Button>
            </div>
          </div>
        </div>
        {/* Centering the image */}
        <div className="flex justify-center items-center relative w-full h-[350px] mt-7">
          <Image
            src="/images/ai-module-mobile.png"
            alt="transition-lines"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </>
  );
};

export default AiForAll;
