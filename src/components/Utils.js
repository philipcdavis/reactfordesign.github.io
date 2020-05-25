import { keyframes, css } from 'styled-components'
import { color } from '../Tile'

const sizes = {
  desktop: "64em",
  tablet: "52em",
  phone: "40em",
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export function colorChange(type, opacity=1) {
  return keyframes`
    0% { ${type}: ${hexToRGB(color.purple, opacity)}; }
    25%  { ${type}: ${hexToRGB(color.red, opacity)}; }
    50% { ${type}: ${hexToRGB(color.yellow, opacity)}; }
    75% { ${type}: ${hexToRGB(color.green, opacity)}; }
    100% { ${type}: ${hexToRGB(color.blue, opacity)}; }
  `
};

export function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}
