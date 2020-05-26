import styled from 'styled-components';
import { color, space, fontSize } from './Utils';

export const TooltipLight = styled.div`
  background-color: white;
  padding: ${space[1] + 'px ' + space[2] + 'px'};
  font-size: ${fontSize[0]};
  font-weight: bold;
  border-radius: 4px;
  border: none;
  outline: none;
  color: ${color.gray2};
  margin-right: 10px;
  display: inline-block;
  position: relative;

  &::after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-top: 10px solid white;
    left: calc(50% - 10px);
    bottom: -7px;
  }
`

export const TooltipDark = styled(TooltipLight)`
  background-color: ${color.gray2}
  color: ${color.white};

  &::after {
    border-top: 10px solid ${color.gray2};
  }
`;
