import { Code, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import ProfileImage from "../assets/Astronaut.jpg"

export default function Home() {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between mt-0 mb-0 h-18 w-full bg-gradient-to-b from-[#D2D3D7] to-[#CCCCCC]">
        <span className="ml-5 h-[auto] text-3xl text-[#396291] flex items-center gap-4">
          <div className="h-16 w-16 border-white border-2 rounded-4xl overflow-hidden">
            <Image alt="" src={ProfileImage} width={64} height={64} className="relative bottom-2.5"></Image>
          </div>
          <span className="w-[calc(100%-64px)] border-b-2">
            PEDRO HQC_
          </span>
        </span>
        {/* <button className="mr-40 text-white cursor-pointer w-[150px] hover:bg-[#2c4e75] transition transform active:bg-white">Contact</button> */}
      </div>
      <div className="flex flex-row gap-[250px] main-page-class ">
        <div className="main-page-image-class overflow-hidden relative !h-[100%] !w-[510px] ml-[100px]"></div>
        <div className="flex flex-col !h-[400px] !w-[600px] ">
          <span className="text-4xl">Hi! I'm Pedro Coelho</span>
          <span className="text-6xl"><span className="text-8xl font-[family-name:var(--font-jersey-10)]">Game</span> developer</span>
          Passionate and skilled C# developer with extensive experience in advanced game
          development, specializing in both 2D and 3D projects. Proficient in implementing
          design patterns to create efficient, scalable, and maintainable code. Adept at
          identifying and delivering practical solutions to enhance project outcomes and
          optimize workflows.
          <div className="flex gap-20  mt-10">
            <button className="transform active:scale-90 flex items-center justify-center gap-3 w-60 px-4 py-2 bg-[#396291] text-white rounded-lg hover:bg-[#2c4e75] transition cursor-pointer">
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
