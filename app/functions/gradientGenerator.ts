
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
            #d16ba5${hex}, #c777b9${hex}, #ba83ca${hex}, #aa8fd8${hex}, #9a9ae1${hex}, #8aa7ec${hex},
            #79b3f4${hex}, #69bff8${hex}, #52cffe${hex}, #41dfff${hex}, #46eefa${hex}, #5ffbf1${hex})`);
}