export const color = {
  blue: '#0099FF',
  purple: '#F04DFF',
  red: '#FF4D4D',
  green: '#6AED76',
  yellow: '#FFC54D',
  white: '#ffffff',
  gray0: '#AAAAAA',
  gray1: '#606060',
  gray2: '#313131',
  gray3: '#181818',
  black: '#000000',
}

export const space = [
  0,
  8,
  16,
  32,
  64,
  128,
  256,
  512
];

export const fontSize = [
  "14px",
  "16px",
  "20px",
  "24px",
  "32px",
  "64px",
];

export const isDarkBackground = function(color) {
  if (color) {
    if (color.includes("black") || color.includes("gray2") || color.includes("gray3")) {
      return true;
    } else {
      return false;
    }
  }
}
