'use client'
import { useEffect, useState, useRef } from 'react';
import { getScaleFactor } from '../../../public/utils/utils';
import ProjectCard from "./components/project-card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useRouter } from 'next/navigation';
import { DialogData } from './utilsClasses';


export default function Projects() {
    const router = useRouter();
    const containerRef= useRef(null);
    const cardWidth = 500;
    const gap = 24;
    const afonseDialogData = [
        new DialogData("./assets/AfonseLab.png", "./assets/AfonseScreenJump.png", "./assets/Afonse.png", "./videos/AfonseStatesShowcase.mp4", 
            "In this project I developed a state machine system to manage character and enemy behaviors, enabling smooth transitions between actions like movement, jumping, and attacking.", "For the player, the system ensured responsive gameplay, while for enemies, it allowed random, threatening actions with raycast-based navigation for more dynamic movement.", 
            "The same system was applied to control the first boss, organizing its attack patterns in a way that made it both challenging and predictable, enhancing the overall gameplay experience."
        ),
        // new DialogData("./assets/AfonseGarden.png", "./assets/AfonseAranha.png", "./assets/AfonseAranha.png", "./videos/afonseBoss.mp4", "Afonse is an immersive adventure that puts you in control of the Afonsos — the last survivors of a post-apocalyptic world abandoned amidst nature and concrete.", "Afonse is an immersive adventure that puts you in control of the Afonsos — the last survivors of a post-apocalyptic world abandoned amidst nature and concrete.", "Afonse is an immersive adventure that puts you in control of the Afonsos — the last survivors of a post-apocalyptic world abandoned amidst nature and concrete."),
    ]

    const botVinnikDialogData = [
        new DialogData("./assets/BotVinnikOverview.png", "./assets/BotVinnikTeaching.png", "./assets/BotVinnikBoard.png", "./videos/BotVinnikShowCase.MP4",
            "In collaboration with DeepGreen Studios, I contributed to the development of BotVinnik Chess Masteries Academy, an educational chess platform focused on advanced mastery techniques.",
            "I was responsible for implementing scene communication and smooth transitions, ensuring a cohesive and responsive flow between them I also designed a save system to track and restore user progress.",
            "I also refined gameplay by integrating animations that improved visual feedback and level clarity. Unity coroutines were used to handle asynchronous tasks, enhancing both performance and user experience."),
    ]
    const wonderWallaceDialogData = [
        new DialogData("./assets/WonderWallaceOverview.png", "./assets/WonderWallaceFood.png", "./assets/WonderWallaceFishing.png", "./videos/WonderWallaceShowCase.MP4",
            "In this project the game mechanics are simple yet engaging, with Wallace racing against the clock to reel in the fish, offering a fun and challenging experience.",
            "I developed the fishing mechanics for the game, from the throw to the catch, incorporating a timer that challenges the player to catch fish that are randomly selected.",
            "Additionally, I implemented a camera transition system using Cinemachine, creating cinematic moments throughout the game. "
        ),
    ]
    const [scale, setScale] = useState(1); // Você pode ajustar esse valor dinamicamente
    useEffect(() => {
        const updateScale = () => setScale(getScaleFactor());
        updateScale();

        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);
    const scroll = (direction: string) => {
        if (containerRef.current) {
            //@ts-expect-error null inexistent
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
                            <div className="w-15 h-15 border-[#396291] border-4 rounded-4xl overflow-hidden hover:cursor-pointer hover:border-[#497299]" onClick={() => router.back()}>
                                <FiChevronLeft className="w-13 h-13 text-[#396291]" />
                            </div>
                            <span className="w-[calc(100%-64px)] border-b-2 text-[clamp(22px,2vw,2rem)] font-[family-name:var(--font-geist-mono)]">
                                HOME
                            </span>
                        </span>
                        {/* <button className="mr-40 text-white cursor-pointer w-[150px] hover:bg-[#2c4e75] transition transform active:bg-white">Contact</button> */}
                    </div>


                    <div className="w-full h-full flex items-center justify-around gap-6 p-10 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory" ref={containerRef}>
                        <ProjectCard title="Afonse" description="Afonse is an immersive adventure that puts you in control of the Afonsos — the last survivors of a post-apocalyptic world abandoned amidst nature and concrete." imageUrl="./assets/AfonseMain.png" cardImageUrl="/assets/AfonseCardImage.png" dialogData={afonseDialogData} />
                        {/* <ProjectCard title="Afonse" description="The first boss AI was built using a state machine to manage movement, detection, and attacks on Afonse. This design allowed easy improvements to the boss's behavior, including animation control and damage timing." imageUrl="./assets/AfonseMushBoss.png" cardImageUrl="./assets/AfonseVsBoss.png" />
                        <ProjectCard title="Afonse" description="I developed a simple AI using a state machine for the spiders, enabling random and threatening behaviors. Raycasts were used to detect viable locations for movement. Additionally, I implemented an Inverse Kinematics (IK) system for the spider animations, automatically adjusting leg positions for more realistic movements." imageUrl="./assets/AfonseAranha.png" cardImageUrl="./assets/AfonseSpiderEnemies.png" /> */}
                        <ProjectCard title="Bot Vinnik" description="From Deep Green Games studio, Engage with BOT.vinnik, a witty Soviet AI chess instructor! His sharp humor and rigorous challenges will mold you into a pro." imageUrl="./assets/BotVinnikCard.png" cardImageUrl="/assets/BotVinnikCardImage.png" dialogData={botVinnikDialogData} />
                        <ProjectCard title="Wonder Wallace" description="Wonder Wallace is a fast-paced fishing game where you play as Wallace, a bear on a mission to catch lunch. Tasked with reeling in three delicious fish, Wallace must race against the clock to complete his goal." imageUrl="./assets/WonderWallaceCard.png" cardImageUrl="/assets/WonderWallaceKitchen.png" dialogData={wonderWallaceDialogData} />
                        {/* <ProjectCard title="Teste" description="teste" imageUrl="./assets/placeHolder.jpg" cardImageUrl="./assets/AfonseVsBoss.png" dialogData={afonseDialogData} /> */}
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
