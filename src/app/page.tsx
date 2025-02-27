import { Code } from "lucide-react";



export default function Home() {
  return (
    <div className="flex flex-col ">
      <div className="flex mt-0 mb-0 h-18 w-full bg-[linear-gradient(to_top,#CCCCCC,#D2D3D7)]">
        <span className="ml-[150px] h-[auto] mt-6">
          PEDRO HQC
        </span>
      </div>
      <div className="flex flex-row gap-[150px] main-page-class ">
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
            <button className="flex items-center justify-center gap-3 w-60 px-4 py-2 bg-[#396291] text-white rounded-lg hover:bg-[#2c4e75] transition cursor-pointer">
              Projects <Code className=" text-gray-200" />
            </button>
            <button className="w-60 px-4 py-2 border-4 border-[#396291] text-black rounded-lg hover:border-[#2c4e75] hover:bg-[#2c4e75] hover:text-white transition cursor-pointer">
              Clique Aqui
            </button>
          </div>

        </div>
      </div>


    </div>
  );
}
