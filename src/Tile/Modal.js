import React from 'react';
import styled from 'styled-components';
import { color, space, fontSize } from './Utils';
import Icon from './Icon';

const ModalOverlay = styled.div`
  background-color: ${color.gray3};
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
`;

const ModalContainer = styled.div`
  background-color: ${color.gray2};
  margin: 0 auto;
  position: absolute;
  top: 75px;
  bottom: 75px;
  left: 0;
  right: 0;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  overflow: auto;
`;

const ModalHeader = styled.div`
  border-bottom: 1px solid ${color.gray1};
  padding: ${space[2] + 'px'}
  font-weight: bold;
  font-size:${fontSize[1]};
`

const ModalBody = styled.div`
  padding: ${space[2] + 'px'}
`

const ModalDismissIcon = styled(Icon)`
  float: right;
  transition: 0.2s opacity ease;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`

export const Modal = function(props) {
  return (
      <ModalContainer>
        <ModalHeader>
          <span>
            { props.header }
          </span>
          <ModalDismissIcon onClick={ props.onDismiss } name="remove" size={20} fill={color.white} />
        </ModalHeader>
        <ModalBody>
          { props.children }
        </ModalBody>
      </ModalContainer>
  )
};

export const ModalWithOverlay = function(props) {
  return (
    <ModalOverlay>
      <Modal {...props} />
    </ModalOverlay>
  )
};
