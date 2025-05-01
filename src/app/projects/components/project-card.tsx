import 'simplebar-react/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react';
import { tv } from "tailwind-variants";
import { useState } from 'react';
import Dialog from './dialog';
import Image from "next/image";
import ProfileImage from "../../../../public/assets/Astronaut.jpg"
import { DialogData } from '../utilsClasses';


export const teste = tv({
  slots: {
    card: "group flex flex-col-reverse mx-3 w-[500px] h-[750px] min-w-[500px] min-h-[300px] transition-all duration-180 bg-cover hover:cursor-pointer hover:h-[800px] hover:z-[1000] rounded-2xl bg-no-repeat bg-center",
    cardBlur: "relative before:content-[''] before:rounded-2xl before:absolute before:inset-0 before:bg-black/70 before:backdrop-blur-sm before:opacity-0 before:transition-opacity before:duration-180 hover:before:opacity-100",
    titleClass: "absolute w-full text-center bottom-[8px] left-1/2 -translate-x-1/2  text-white  font-[family-name:var(--font-jersey-10)] text-6xl opacity-100 transition-all duration-180 group-hover:translate-y-[-400px]",
    dialogTitleClass: "mx-auto font-[family-name:var(--font-jersey-10)] text-7xl mt-[75px] text-white",
    descriptionClass: "text-white  indent-[30px] font-[family-name:var(--font-geist-mono)] opacity-0 transition-all duration-180  group-hover:opacity-100 mx-[auto] mt-[22px] text-[20px]  w-[calc(100%*1/2*1.7777)] text-justify scroll-auto",
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
  dialogTitleClass,
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
  dialogData: DialogData[];
}

export default function ProjectCard({ title, description, imageUrl, cardImageUrl, dialogData }: ProjectCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div className={`${card()} ${cardBlur()}`} style={{ backgroundImage: `url(${imageUrl})` }} onClick={() => { setIsDialogOpen(true); }}>
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
      <Dialog isOpen={isDialogOpen} onClose={() => { setIsDialogOpen(false) }} bgImage={imageUrl}>
        <div className="flex flex-col w-full h-full overflow-y-scroll overflow-x-hidden " >
          {dialogData.map((item, index) => (
            <div key={index} className='flex w-full !min-h-full h-full z-10'>
              <span className='w-[33%] h-full flex ml-[8%]'>
                <span className='w-[100%] bg-black/40 flex flex-col gap-4	'>
                  <span className={dialogTitleClass()}>{title}</span>
                  <span className=' font-[family-name:var(--font-geist-mono)] text-[22px] text-white px-[22px] text-justify'>
                    <div className='indent-[30px] '>{item.firstText}</div>
                    <br/>
                    <div className='indent-[30px]'>{item.secondText}</div>
                    <br/>
                    <div className='indent-[30px]'>{item.thirdText}</div>
                  </span>
                </span>
              </span>
              <span className='flex flex-col gap-4 w-[67%] h-full justify-center items-center'>
                <span className='grid grid-cols-[615px_288px] gap-4 h-[345px] overflow-hidden'>
                  <Image  alt="" src={item.mainImage} width={1920} height={1080} className="relative rounded-md shadow-lg  !h-[345px] object-cover" />
                  <Image alt="" src={item.upperMinorImage} width={1920} height={1080} className="relative rounded-md shadow-lg bottom-2.5 !w-[full]" />
                </span>
                <span className='grid grid-cols-[288px_615px] gap-4 h-[345px] overflow-hidden'>
                  <Image alt="" src={item.bottomMinorImage} width={1920} height={1080} className="relative rounded-md shadow-lg bottom-2.5 !w-full " />
                  <video src={item.videoSrc}
                    autoPlay
                    loop
                    width="0"
                    height="0"
                    className="rounded-md shadow-lg w-full"></video>
                </span>
              </span>
            </div>
          ))}



        </div>



      </Dialog>
    </div>
  );
}
