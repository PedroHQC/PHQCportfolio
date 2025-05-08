import 'simplebar-react/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react';
import { tv } from "tailwind-variants";
import { useState } from 'react';
import Dialog from './dialog';
import Image from "next/image";
import { DialogData } from '../utilsClasses';


export const teste = tv({
  slots: {
    card: "group flex flex-col-reverse mx-3 xl:w-[500px] w-[1500px] xl:h-[750px] h-[2250px] xl:min-w-[500px] xl:min-h-[300px] min-w-[1500px] min-h-[2250px] transition-all duration-180 bg-cover xl:hover:cursor-pointer xl:hover:h-[800px] xl:hover:z-[1000] rounded-2xl bg-no-repeat bg-center",
    cardBlur: "relative before:content-[''] before:rounded-2xl before:absolute before:inset-0 before:bg-black/70 before:backdrop-blur-sm before:opacity-0 before:transition-opacity before:duration-180 xl:hover:before:opacity-100",
    titleClass: "absolute w-full text-center bottom-[8px] left-1/2 -translate-x-1/2  text-white  font-[family-name:var(--font-jersey-10)] xl:text-6xl text-9xl  opacity-100 transition-all duration-180 xl:group-hover:translate-y-[-400px]",
    dialogTitleClass: "mx-auto font-[family-name:var(--font-jersey-10)] xl:text-7xl text-9xl mt-[75px] text-white",
    descriptionClass: "text-white  indent-[30px] font-[family-name:var(--font-geist-mono)] opacity-0 transition-all duration-180  xl:group-hover:opacity-100 mx-[auto] mt-[22px] text-[20px]  w-[calc(100%*1/2*1.7777)] text-justify scroll-auto",
    descriptionArea: "relative flex flex-col h-full",
    descriptionImageContainer: "opacity-0 scale-0 xl:group-hover:opacity-100 xl:group-hover:scale-100 relative w-[calc(100%*1/2*1.7777)] min-h-[calc(100%*1/1.5*0.5625)] m-auto mb-0 mt-[12px] rounded-md transition-all ease-in-out overflow-hidden",
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
            <Image className={`${descriptionImage()}`} src={cardImageUrl} alt="" width={1920} height={1080}/>
          </span>
          <SimpleBar className="max-h-[350px] mt-[72px]">
            <p className={descriptionClass()}>{description}</p>
          </SimpleBar>
          <span className={titleClass()}>{title}</span>
        </div>
      </div>
      <Dialog isOpen={isDialogOpen} onClose={() => { setIsDialogOpen(false) }} bgImage={imageUrl}>
        <div className="flex flex-col w-full h-full overflow-y-scroll overflow-x-hidden " >
          {dialogData.map((item, index) => (
            <div key={index} className='flex xl:flex-row flex-col xl:items-start items-center w-full !min-h-full h-full z-10'>
              <span className='xl:inline relative xl:w-[33%] w-[90%] xl:h-full h-[calc(100%-1300px)] flex xl:ml-[8%]'>
                <span className='w-[100%] absolute top-0 xl:bottom-[0] bottom-[-1300px] bg-black/40 flex flex-col gap-4	z-[-1]'>
                  <span className={dialogTitleClass()}>{item.titleText}</span>
                  <span className=' font-[family-name:var(--font-geist-mono)] xl:text-[20px] text-[66px] text-white px-[22px] text-justify'>
                    <div className='indent-[30px] '>{item.firstText}</div>
                    <br/>
                    <div className='indent-[30px]'>{item.secondText}</div>
                    <br/>
                    <div className='indent-[30px]'>{item.thirdText}</div>
                  </span>
                </span>
              </span>
              <span className='flex flex-col gap-4 xl:w-[67%] w-full xl:h-full h-[1120px] justify-center items-center'>
                <span className='grid xl:grid-cols-[615px_288px] grid-cols-[984px_461px] rounded-md gap-4 xl:h-[345px] h-[552] overflow-hidden'>
                  <Image  alt="" src={item.mainImage} width={1920} height={1080} className="relative rounded-md shadow-lg  xl:!h-[345px] !h-[552] object-cover" />
                  <Image alt="" src={item.upperMinorImage} width={1920} height={1080} className="relative rounded-md shadow-lg  !w-full" />
                </span>
                <span className='grid xl:grid-cols-[288px_615px] grid-cols-[461px_984px] rounded-md gap-4 xl:h-[345px] h-[552] overflow-hidden'>
                  <Image alt="" src={item.bottomMinorImage} width={1920} height={1080} className="relative rounded-md shadow-lg !w-full " />
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
