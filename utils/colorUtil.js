export default (r, g, b) => {
  let r1 = r / 255;
  let g1 = g / 255;
  let b1 = b / 255;

  let maxColor = Math.max(r1, g1, b1);
  let minColor = Math.min(r1, g1, b1);
  //Calculate L:
  let L = (maxColor + minColor) / 2;
  let S = 0;
  let H = 0;
  if (maxColor !== minColor) {
    //Calculate S:
    if (L < 0.5) {
      S = (maxColor - minColor) / (maxColor + minColor);
    } else {
      S = (maxColor - minColor) / (2.0 - maxColor - minColor);
    }
    //Calculate H:
    if (r1 === maxColor) {
      H = (g1 - b1) / (maxColor - minColor);
    } else if (g1 === maxColor) {
      H = 2.0 + (b1 - r1) / (maxColor - minColor);
    } else {
      H = 4.0 + (r1 - g1) / (maxColor - minColor);
    }
  }

  L = Math.floor(L * 100);
  S = Math.floor(S * 100);
  H = Math.floor(H * 60);
  if (H < 0) {
    H += 360;
  }
  let result = [H, S, L];
  return `hsl(${result[0]}, ${result[1]}%, ${result[2]}%)`;
};
