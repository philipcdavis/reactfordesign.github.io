import { keyframes } from 'styled-components'
import { color } from '../Tile'

export function colorChange(type, opacity=1) {
  return keyframes`
    0% { ${type}: ${hexToRGB(color.purple, opacity)}; }
    25%  { ${type}: ${hexToRGB(color.red, opacity)}; }
    50% { ${type}: ${hexToRGB(color.yellow, opacity)}; }
    75% { ${type}: ${hexToRGB(color.green, opacity)}; }
    100% { ${type}: ${hexToRGB(color.blue, opacity)}; }
  `
};

function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}
