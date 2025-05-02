"use client";
import { useEffect, useState } from 'react';
import { getScaleFactor } from '../../public/utils/utils';
import { Code, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import ProfileImage from "../../public/assets/Astronaut.jpg"
import ProImage from "../../public/assets/ProImageSmiling.jpg"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => setScale(getScaleFactor());
    updateScale();

    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);
  const handleButtonClick = () => {
    window.open('https://www.linkedin.com/in/pedro-henrique-queiroz-50301b221/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Wrapper fixo, escala a partir do topo/esquerda */}
      <div
        className="absolute top-0 left-0 origin-top-left"
        style={{
          transform: `scale(${scale})`,
          width: `${100 / scale}%`,
          height: `${100 / scale}%`
        }}
      >
        <div className="flex flex-col h-full w-full">
          <div className="flex justify-between mt-0 mb-0 xl:h-22 h-[250px] w-full bg-gradient-to-b from-[#D2D3D7] to-[#CCCCCC]">
            <span className="ml-5 h-auto text-3xl text-[#396291] flex items-center gap-4 w-full">
              <div className="xl:h-15 xl:w-15 h-[180px] w-[180px] border-white border-8 xl:border-2 rounded-[50%] overflow-hidden">
                <Image alt="" src={ProfileImage} width={0} height={0} className="relative bottom-2.5 !w-full" />
              </div>
              <span className="w-[calc(100%-64px)] border-b-8 text-7xl xl:text-3xl xl:border-b-2 font-[family-name:var(--font-geist-mono)]">
                PEDRO HQC_
              </span>
            </span>
          </div>
          <div className="flex xl:!flex-row flex-col xl:gap-[250px] h-full overflow-hidden items-center">
            <div className='h-full xl:max-w-[50%] xl:overflow-auto xl:ml-[100px] overflow-hidden'>
              <Image alt="" src={ProImage} width={0} height={0} className="xl:h-[100%] xl:w-[calc(100%*1.5)] relative" />
            </div>
            <div className="flex flex-col xl:!h-[400px] xl:p-0 p-[100px] h-full xl:!w-[600px] w-full xl:!text-lg text-6xl font-[family-name:var(--font-geist-mono)] text-justify ">
              <span className="xl:!text-4xl text-6xl">Hi! I&apos;m Pedro Coelho</span>
              <span className="xl:!text-6xl text-[200px]">
                <span className="xl:!text-7xl text-[256px] font-[family-name:var(--font-jersey-10)]">Game</span> developer
              </span>
              Passionate and skilled C# developer with extensive experience in advanced game
              development, specializing in both 2D and 3D projects. Proficient in implementing
              design patterns to create efficient, scalable, and maintainable code. Adept at
              identifying and delivering practical solutions to enhance project outcomes and
              optimize workflows.
              <div className="flex xl:gap-20 gap-0 xl:justify-center justify-between xl:mt-10 mt-[200px] xl:h-auto h-[150px]">
                <button onClick={() => router.push("projects")} className="transform active:scale-90 flex items-center justify-center xl:gap-3 gap-8 xl:w-60 w-[650px] px-4 py-2 bg-[#396291] text-white xl:rounded-lg rounded-[24px] hover:bg-[#2c4e75] transition cursor-pointer xl:text-xl text-5xl">
                  Projects <Code className=" text-gray-200 xl:w-[22px] xl:h-[22px] h-[70px] w-[80px]" />
                </button>
                <button className="transform active:scale-90 flex items-center justify-center xl:gap-3 gap-8 xl:w-60 w-[650px] px-4 py-2 xl:border-4 border-8 border-[#396291] text-[#396291] xl:rounded-lg rounded-[24px] hover:border-[#2c4e75] hover:bg-[#2c4e75] hover:text-white transition cursor-pointer xl:text-xl text-5xl font-bold" onClick={() => handleButtonClick()}>
                  Hire-me <SquareArrowOutUpRight className="xl:w-[22px] xl:h-[22px] h-[70px] w-[70px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}
