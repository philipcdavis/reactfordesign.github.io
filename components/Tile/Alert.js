import React from 'react';
import styled from 'styled-components';
import { color, space } from './Utils';
import Icon from './Icon';

const AlertGreenContainer = styled.div`
  color: ${color.black};
  background-color: ${color.green};
  margin: 10px 0;
  text-align: center;
  outline: none;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  transition: 0.2s all ease;
  padding: ${space[2] + 'px'} ${space[2] + 'px'};
`;

const AlertRedContainer = styled(AlertGreenContainer)`
  background-color: ${color.red};
`;

const AlertIcon = styled(Icon)`
  float: right;
  opacity: 0.4;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const AlertGreen = function(props) {
  let { onClick, children, ...rest } = props;
  return (
    <AlertGreenContainer {...rest}>
      {children}
      <AlertIcon onClick={onClick} size={18} name="remove" />
    </AlertGreenContainer>
  )
}

export const AlertRed = function(props) {
  let { onClick, children, ...rest } = props;
  return (
    <AlertRedContainer {...rest}>
      {children}
      <AlertIcon onClick={onClick} size={18} name="remove" />
    </AlertRedContainer>
  )
}
