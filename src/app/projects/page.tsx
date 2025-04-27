'use client'
import { useEffect, useState, useRef } from 'react';
import { getScaleFactor } from '../../../public/utils/utils';
import ProjectCard from "./components/project-card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useRouter } from 'next/navigation';


export default function Projects() {
    const router = useRouter();
    const containerRef = useRef(null);
    const cardWidth = 500;
    const gap = 24;

    const [scale, setScale] = useState(1); // Você pode ajustar esse valor dinamicamente
    useEffect(() => {
        const updateScale = () => setScale(getScaleFactor());
        updateScale();

        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);
    const scroll = (direction: string) => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: direction === 'right' ? cardWidth + gap : -(cardWidth + gap),
                behavior: 'smooth'
            });
        }
    };
    return (
        <div className="relative w-full h-full overflow-hidden">
            <div
                className="absolute top-0 left-0 origin-top-left"
                style={{
                    transform: `scale(${scale})`,
                    width: `${100 / scale}%`,
                    height: `${100 / scale}%`
                }}
            >
                <div className="flex flex-col w-full h-full">
                    <div className="flex justify-between mt-0 mb-0 h-18 w-full bg-gradient-to-b from-[#D2D3D7] to-[#CCCCCC]">
                        <span className="ml-5 h-auto text-3xl text-[#396291] flex items-center gap-4 w-full">
                            <div className="w-16 h-16 border-[#396291] border-4 rounded-4xl overflow-hidden hover:cursor-pointer hover:border-[#497299]" onClick={() => router.back()}>
                                <FiChevronLeft className="w-13 h-13 text-[#396291]" />
                            </div>
                            <span className="w-[calc(100%-64px)] border-b-2 text-[clamp(22px,2vw,2rem)] font-[family-name:var(--font-geist-mono)]">
                                HOME
                            </span>
                        </span>
                        {/* <button className="mr-40 text-white cursor-pointer w-[150px] hover:bg-[#2c4e75] transition transform active:bg-white">Contact</button> */}
                    </div>


                    <div className="w-full h-full flex items-center gap-6 p-10 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory" ref={containerRef}>
                        <ProjectCard title="Afonse" description="Afonse is an immersive adventure that puts you in control of the Afonsos — the last survivors of a post-apocalyptic world abandoned amidst nature and concrete." imageUrl="/assets/AfonseMain.png" cardImageUrl="/assets/AfonseFalling.png" />
                        {/* <ProjectCard title="Afonse" description="The first boss AI was built using a state machine to manage movement, detection, and attacks on Afonse. This design allowed easy improvements to the boss's behavior, including animation control and damage timing." imageUrl="/assets/AfonseMushBoss.png" cardImageUrl="/assets/AfonseVsBoss.png" />
                        <ProjectCard title="Afonse" description="I developed a simple AI using a state machine for the spiders, enabling random and threatening behaviors. Raycasts were used to detect viable locations for movement. Additionally, I implemented an Inverse Kinematics (IK) system for the spider animations, automatically adjusting leg positions for more realistic movements." imageUrl="/assets/AfonseAranha.png" cardImageUrl="/assets/AfonseSpiderEnemies.png" /> */}
                        <ProjectCard title="Teste" description="teste" imageUrl="/assets/placeHolder.jpg" cardImageUrl="/assets/AfonseVsBoss.png" />
                        <ProjectCard title="Teste" description="teste" imageUrl="/assets/placeHolder.jpg" cardImageUrl="/assets/AfonseVsBoss.png" />
                        <ProjectCard title="Teste" description="teste" imageUrl="/assets/placeHolder.jpg" cardImageUrl="/assets/AfonseVsBoss.png" />
                        <ProjectCard title="Teste" description="teste" imageUrl="/assets/placeHolder.jpg" cardImageUrl="/assets/AfonseVsBoss.png" />
                        <ProjectCard title="Teste" description="teste" imageUrl="/assets/placeHolder.jpg" cardImageUrl="/assets/AfonseVsBoss.png" />
                        <ProjectCard title="Teste" description="teste" imageUrl="/assets/placeHolder.jpg" cardImageUrl="/assets/AfonseVsBoss.png" />
                        <ProjectCard title="Teste" description="teste" imageUrl="/assets/placeHolder.jpg" cardImageUrl="/assets/AfonseVsBoss.png" />
                        <ProjectCard title="Teste" description="teste" imageUrl="/assets/placeHolder.jpg" cardImageUrl="/assets/AfonseVsBoss.png" />
                    </div>
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 z-[1001]"
                    >
                        <FiChevronLeft />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 z-[1001]"
                    >
                        <FiChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
}
