export const opacityToHex = (i : number) =>{
  const t = Math.round(i * 100) / 100;
  var alpha = Math.round(t * 255);
  var hex = (alpha + 0x10000).toString(16).substr(-2).toUpperCase();  
  return hex;
}

