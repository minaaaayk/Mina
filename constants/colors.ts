export enum Color {
    gradientGreen1 = "#5ffbf1",
    gradientGreen2 = "#46eefa",

    gradientBlue1 = "#41dfff",
    gradientBlue2 = "#52cffe",
    gradientBlue3 = "#69bff8",

    gradientPurple1 = "#79b3f4",
    gradientPurple2 = "#8aa7ec",
    gradientPurple3 = "#9a9ae1",
    gradientPurple4 = "#aa8fd8",


    gradientPink1 = "#ba83ca",
    gradientPink2 = "#c777b9",
    gradientPink3 = "#d16ba5",



    mainGreen = "#5FFBF1", 
    mainPurple = "#86A8E7",
    mainPink = "#D16BA5",
    gradient= ""
};

const opacityToHex = (i : number) =>{
  const t = Math.round(i * 100) / 100;
  var alpha = Math.round(t * 255);
  var hex = (alpha + 0x10000).toString(16).substr(-2).toUpperCase();  
  return hex;
}

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