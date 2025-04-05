import { tv } from "tailwind-variants";
import styles from "./project-card.module.css"
export const teste = tv({
    slots: {
        card: "group flex flex-col-reverse mx-3 w-[200px] h-[300px] min-w-[200px] min-h-[300px] transition-all duration-180 bg-cover hover:cursor-pointer hover:scale-250 hover:z-[1000]",
        cardBlur: "relative before:content-[''] before:absolute before:inset-0 before:bg-black/30 before:backdrop-blur-sm before:opacity-0 before:transition-opacity before:duration-180 hover:before:opacity-100",
        titleClass: "mx-auto mt-auto text-white font-bold font-[family-name:var(--font-jersey-10)] text-4xl opacity-100 transition-all duration-180 group-hover:opacity-0",
        descriptionClass: "text-white opacity-0 transition-all duration-180 group-hover:opacity-100 mx-[11px] text-[12px] mt-[12px]",
        descriptionArea: "flex flex-col h-full",
        descriptionImageContainer: "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 relative w-[calc(100%*1/2*1.7777)] h-[calc(100%*1/1.5*0.5625)] m-auto mb-0 mt-[12px] rounded-md transition-all  ease-in-out overflow-hidden",
        descriptionImage: "w-[calc(100%-3px)] h-[calc(100%-3px)] object-cover rounded-md justify-center m-auto my-[1.5px]",
        borderGradient: "before:content-[''] before:absolute before:bg-amber-500 before:h-full before:w-full before:p-10 before:z-[-1] before:bg-[conic-gradient(magenta,cyan,magenta)] before:animate-custom-spin before:linear"

    }

})
const { card, cardBlur, titleClass, descriptionArea, descriptionClass, descriptionImage, borderGradient, descriptionImageContainer} = teste();
interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
}
export default function ProjectCard({ title, description, imageUrl }: ProjectCardProps) {
    return (
        <div className={`${card()} ${cardBlur()}`} style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="relative z-10 flex flex-col h-full">
                <div className={descriptionArea()}>
                    <span className={`${descriptionImageContainer()} ${borderGradient()}`}>
                    <img className={`${descriptionImage()}`} src="/assets/Astronaut.jpg" alt="" />

                    </span>
                    <span className={descriptionClass()}>{description}</span>
                    <span className={titleClass()}>{title}</span>
                </div>
            </div>
        </div>
    );
}
