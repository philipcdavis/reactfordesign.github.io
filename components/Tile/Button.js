import styled, { css } from 'styled-components';
import { isDarkBackground, color, space } from './Utils';

export const Btn = styled.button`
  color: ${(props) =>
    isDarkBackground(props.color) ? color.white : color.black};
  outline: none;
  font-family: inherit;
  backface-visibility: hidden;
  margin-right: 10px;
  border: none;
  border-radius: 6px;
  user-select: none;
  font-weight: bold;
  transition: 0.4s all cubic-bezier(0.15, 0.75, 0.45, 0.95);
  background-color: ${(props) =>
    props.color ? color[props.color] : color.blue};

  font-size: 16px;
  padding: ${space[2] + "px"} ${space[3] + "px"};

  ${(props) =>
    props.size === "lg" &&
    css`
      font-size: 18px;
      padding: ${space[2] + 4 + "px"} ${space[4] + "px"};
    `}

  ${(props) =>
    props.size === "sm" &&
    css`
      font-size: 14px;
      padding: ${space[1] + "px"} ${space[2] + "px"};
    `}

  ${props => isDarkBackground(props.color) && css`
    border: 2px solid ${color.gray2};
  `}

  &:hover {
    cursor: pointer;
    transform: translateZ(0) scale(1.1);
    border-radius: 6px;
  }
`;
