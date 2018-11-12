import styled from 'styled-components';
import { color, space, fontSize } from './Utils';

export const InputLight = styled.input`
  background-color: white;
  font-family: inherit;
  padding: ${space[1] + 5 + 'px'};
  font-size: ${fontSize[1]};
  border-radius: 4px;
  border: none;
  outline: none;
  color: ${color.gray2};
  margin-right: 10px;
  transition: 0.2s opacity ease;
  opacity: 0.9;

  &:hover, &:focus {
    opacity: 1;
  }

  &::-webkit-input-placeholder {
    color: ${color.gray1};
  }
`

export const InputDark = styled(InputLight)`
  background-color: ${color.gray2}
  color: ${color.white};
`;
