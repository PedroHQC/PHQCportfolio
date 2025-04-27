"use client";
import { ReactNode } from "react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Dialog({ isOpen, onClose, children }: DialogProps) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
        <div 
          className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-[90%] h-[calc(100%-64px)]  my-[32px]"
          onClick={(e) => e.stopPropagation()}  // <<<< ADICIONA ISSO
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
          {children}
        </div>
      </div>
    );
  }