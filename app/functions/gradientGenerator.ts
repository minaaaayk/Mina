
import { opacityToHex } from ".";

type direction = "top"| "bottom" | "left"| "right";

type secondaryDirection<T> = 
    T extends "left"| "right" ? "top"| "bottom" : never;

interface IGradientGenerator<T> {
    first : T,
    second?: secondaryDirection<T>,
    opacity: number
}

   
export const gradientGenerator = ({first, second, opacity}:IGradientGenerator<direction>) => {
    const hex = opacity ? `${opacityToHex(opacity)}` : '';
    return (
        `linear-gradient(to ${first} ${second||""},
            #FFB3C6${hex} , #5ffbf1${hex})`);
}