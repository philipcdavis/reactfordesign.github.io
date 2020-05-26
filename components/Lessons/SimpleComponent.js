import React from 'react'
import styled, { keyframes } from 'styled-components'
import { color } from '../Tile'

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
`;

const TerminalContainer = styled.div`
  position: absolute;
  top: 30px;
  bottom: -20px;
  left: 30px;
  border-radius: 16px;
  right: -20px;
  border: 2px solid ${color.gray2};
`;

const TerminalDot = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 30px;
    background-color: ${color.gray2};
    position: absolute;
    top: 20px;
    left: ${props => props.i * 25 + 20}px;
`;

const TerminalPlaceholder = styled.div`
    font-family: Menlo, monospace;
    font-size: 22px;
    position: absolute;
    top: 50px;
    left: 20px;
    opacity: 0.4;
`;

const blink = keyframes`
    0%{  opacity: 0; }
    49%{ opacity: 0; }
    60%{ opacity: 1; }
    99%{ opacity: 1; }
    100%{ opacity: 0; }
`;

const TerminalBlinker = styled.div`
    width: 14px;
    height: 24px;
    background-color: ${color.yellow};
    position: absolute;
    top: 55px;
    left: 40px;
    animation: ${blink} 1.2s linear infinite;
`;

const SimpleComponent = () => (
    <Container>
        <TerminalContainer>
            <TerminalDot i={0} />
            <TerminalDot i={1} />
            <TerminalDot i={2} />

            <TerminalPlaceholder>$</TerminalPlaceholder>
            <TerminalBlinker />
        </TerminalContainer>
    </Container>
)


export default SimpleComponent;