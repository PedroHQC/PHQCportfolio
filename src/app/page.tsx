"use client";

import { Code, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import ProfileImage from "../../public/assets/Astronaut.jpg"
import ProImage from "../../public/assets/ProImageSmiling.jpg"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    
    <div className="flex flex-col h-full">
      <div className="flex justify-between mt-0 mb-0 !h-[7.5%] w-full bg-gradient-to-b from-[#D2D3D7] to-[#CCCCCC]">
        <span className="ml-5 h-[auto] text-3xl text-[#396291] flex items-center gap-4 w-full">
          <div className="h-[89.54%] w-[3.36%] border-white border-2 rounded-[50%] overflow-hidden">
            <Image alt="" src={ProfileImage} width={0} height={0} className="relative bottom-2.5 !w-[100%]"></Image>
          </div>
          <span className="w-[calc(100%-64px)] border-b-2 text[20%]">
            PEDRO HQC_
          </span>
        </span>
      </div>
      <div className="flex flex-row gap-[250px] main-page-class overflow-hidden">
        {/* <div className="main-page-image-class overflow-hidden relative !h-[100%] !w-[510px] ml-[100px]"> </div> */}
        <Image alt="" src={ProImage} width={0} height={0} className="max-h-[100%] !w-[31.25%] relative ml-[100px]" ></Image>
        <div className="flex flex-col !h-[400px] !w-[600px] ">
          <span className="text-4xl">Hi! I'm Pedro Coelho</span>
          <span className="text-6xl"><span className="text-8xl font-[family-name:var(--font-jersey-10)]">Game</span> developer</span>
          Passionate and skilled C# developer with extensive experience in advanced game
          development, specializing in both 2D and 3D projects. Proficient in implementing
          design patterns to create efficient, scalable, and maintainable code. Adept at
          identifying and delivering practical solutions to enhance project outcomes and
          optimize workflows.
          <div className="flex gap-20  mt-10">
            <button onClick={() => router.push("projects")} className="transform active:scale-90 flex items-center justify-center gap-3 w-60 px-4 py-2 bg-[#396291] text-white rounded-lg hover:bg-[#2c4e75] transition cursor-pointer">
              Projects <Code className=" text-gray-200" />
            </button>
            <button className="transform active:scale-90 flex items-center justify-center gap-3 w-60 px-4 py-2 border-4 border-[#396291] text-[#396291  ] rounded-lg hover:border-[#2c4e75] hover:bg-[#2c4e75] hover:text-white transition cursor-pointer">
              Hire-me <SquareArrowOutUpRight />
            </button>
          </div>

        </div>
      </div>


    </div>
  );
}
