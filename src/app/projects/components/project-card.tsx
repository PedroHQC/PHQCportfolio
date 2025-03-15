import { tv } from "tailwind-variants";
import styles from "./project-card.module.css"
export const teste = tv({
    slots: {
        card: "flex flex-col-reverse mx-3 w-[200px] h-[300px] min-w-[200px] min-h-[300px] transition-all duration-180 bg-cover  bg-[url('/assets/placeHolder.jpg')] hover:bg-blue-700 hover:cursor-pointer hover:scale-250 hover:z-[1000]",
        title: "mx-auto mt-auto text-white font-bold font-[family-name:var(--font-jersey-10)] text-4xl",
        description: "text-white",
        descriptionArea: "flex flex-col"
    }
    
})
const { card, title, descriptionArea, description } = teste();
interface ProjectCardProps {
    title: string;
    description: string;
}
export default function ProjectCard() {
    return (
        <div className={card()}>
            <span className={title()}>TITLE</span>
            <div className={descriptionArea()}>
                <span className={description()}>
                    asdkimaaaaaaaaaaaaaaaa
                    asdkimaaaaaaaaaaaaaaaa
                    asdkimaaaaaaaaaaaaaaaa
                    asdkimaaaaaaaaaaaaaaaa
                    asdkimaaaaaaaaaaaaaaaa
                    asdkimaaaaaaaaaaaaaaaa
                    asdkimaaaaaaaaaaaaaaaa
                    asdki
                </span>
            </div>
        </div>
    );
}