import ProjectCard from "./components/project-card";

export default function Projects() {
    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex justify-between mt-0 mb-0 h-18 w-full bg-gradient-to-b from-[#D2D3D7] to-[#CCCCCC]">
                <span className="ml-5 h-[auto] text-3xl text-[#396291] flex items-center gap-4">
                    <div className="h-16 w-16 border-white border-2 rounded-4xl overflow-hidden">
                    </div>
                    <span className="w-[calc(100%-64px)] border-b-2">
                        PEDRO HQC_
                    </span>
                </span>
                {/* <button className="mr-40 text-white cursor-pointer w-[150px] hover:bg-[#2c4e75] transition transform active:bg-white">Contact</button> */}
            </div>
            <div className="w-full h-full flex items-center justify-center">
                <ProjectCard title="Teste" description="Afonse é uma aventura imersiva que coloca você no controle dos Afonsos, os últimos sobreviventes de um mundo pós-apocalíptico abandonado em meio a natureza e concreto." imageUrl="/assets/placeHolder.jpg"></ProjectCard>
                <ProjectCard title="Teste" description="teste" imageUrl="/assets/placeHolder.jpg"></ProjectCard>
                <ProjectCard title="Teste" description="teste" imageUrl="/assets/placeHolder.jpg"></ProjectCard>
                <ProjectCard title="Teste" description="teste" imageUrl="/assets/placeHolder.jpg"></ProjectCard>
                <ProjectCard title="Teste" description="teste" imageUrl="/assets/placeHolder.jpg"></ProjectCard>
                <ProjectCard title="Teste" description="teste" imageUrl="/assets/placeHolder.jpg"></ProjectCard>
                

            </div>
        </div>
    );
}