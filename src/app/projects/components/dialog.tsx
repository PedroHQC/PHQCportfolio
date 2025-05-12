"use client";
import { ReactNode } from "react";
import { FiX } from "react-icons/fi";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  bgImage: string;
}

export default function Dialog({ isOpen, onClose, children, bgImage }: DialogProps) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex justify-center items-center z-50 cursor-auto backdrop-blur-[20px]" onClick={onClose}>
        
        
        <div 
          className="flex  rounded-lg shadow-lg relative w-full max-w-[90%] h-[calc(100%-64px)]  my-[32px] bg-no-repeat bg-cover bg-center"
          style={{backgroundImage: `url(${bgImage})`}}
          onClick={(e) => e.stopPropagation()}  // <<<< ADICIONA ISSO
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          <button
            onClick={onClose}
            className="absolute xl:-top-2 top-2 right-0 xl:-right-20 m-6 xl:text-lg text-9xl text-white hover:text-gray-700 z-1000 hover:cursor-pointer"
          >
            <FiX className=" xl:h-6 xl:w-6 h-20 w-20" />
          </button>
          {children}
        </div>
      </div>
    );
  }