import 'simplebar-react/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react';
import { tv } from "tailwind-variants";

export const teste = tv({
  slots: {
    card: "group flex flex-col-reverse mx-3 w-[500px] h-[750px] min-w-[500px] min-h-[300px] transition-all duration-180 bg-cover hover:cursor-pointer hover:mb-[5%] hover:z-[1000] rounded-2xl",
    cardBlur: "relative before:content-[''] before:rounded-2xl before:absolute before:inset-0 before:bg-black/70 before:backdrop-blur-sm before:opacity-0 before:transition-opacity before:duration-180 hover:before:opacity-100",
    titleClass: "absolute bottom-[8px] left-1/2 -translate-x-1/2  text-white  font-[family-name:var(--font-jersey-10)] text-6xl opacity-100 transition-all duration-180 group-hover:translate-y-[-390px]",
    descriptionClass: "text-white  indent-[30px] font-[family-name:var(--font-geist-mono)] opacity-0 transition-all duration-180  group-hover:opacity-100 mx-[auto] text-[24px]  w-[calc(100%*1/2*1.7777)] text-justify scroll-auto",
    descriptionArea: "relative flex flex-col h-full",
    descriptionImageContainer: "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 relative w-[calc(100%*1/2*1.7777)] min-h-[calc(100%*1/1.5*0.5625)] m-auto mb-0 mt-[12px] rounded-md transition-all ease-in-out overflow-hidden",
    descriptionImage: "w-[calc(100%-3px)] h-[calc(100%-3px)] object-cover rounded-md justify-center m-auto my-[1.5px]",
    borderGradient: "before:content-[''] before:absolute before:bg-amber-500 before:h-full before:w-full before:p-10 before:z-[-1] before:bg-[conic-gradient(magenta,cyan,magenta)] before:animate-custom-spin before:linear"
  }
});

const {
  card,
  cardBlur,
  titleClass,
  descriptionArea,
  descriptionClass,
  descriptionImage,
  borderGradient,
  descriptionImageContainer
} = teste();

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  cardImageUrl: string;
}

export default function ProjectCard({ title, description, imageUrl, cardImageUrl }: ProjectCardProps) {
  return (
    <div className={`${card()} ${cardBlur()}`} style={{ backgroundImage: `url(${imageUrl})` }} onClick={() => {console.log("Funciona")}}>
      <div className="relative z-10 flex flex-col h-full">
        <div className={descriptionArea()}>
          <span className={`${descriptionImageContainer()} ${borderGradient()}`}>
            <img className={`${descriptionImage()}`} src={cardImageUrl} alt="" />
          </span>

          <SimpleBar className="max-h-[350px] mt-[72px]">
            <p className={descriptionClass()}>
              {description}
            </p>
          </SimpleBar>


          <span className={titleClass()}>{title}</span>
        </div>
      </div>
    </div>
  );
}
