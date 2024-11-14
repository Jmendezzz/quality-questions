import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Color } from "../models/Color";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getColorClass(color: Color | undefined){
  switch (color) {
    case Color.BLUE:
      return "text-blue-500";
    case Color.RED:
      return "text-red-500";
    case Color.GREEN:
      return "text-green-500";
    case Color.YELLOW:
      return "text-yellow-500";
    default:
      return "text-white";
  }
};

export function getBgColorClass(color: Color | undefined){
  switch (color) {
    case Color.BLUE:
      return "bg-blue-500";
    case Color.RED:
      return "bg-red-500";
    case Color.GREEN:
      return "bg-green-500";
    case Color.YELLOW:
      return "bg-yellow-500";
    default:
      return "bg-white";
  }
}