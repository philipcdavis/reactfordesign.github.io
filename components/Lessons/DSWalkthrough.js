import React, { useState, useEffect, useRef } from "react";
import { Btn, color } from '../Tile'
import { Loader, CheckCircle, XCircle } from 'react-feather';
import { Flex } from "rebass/styled-components";
import styled, { keyframes } from "styled-components";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";


const buttonStates = {
  "default": {
    color: color.blue
  },
  "loading": {
    color: color.blue
  },
  "success": {
    color: color.green
  },
  "failure": {
    color: color.red
  }
}

const flash = keyframes`
  0%   { opacity: 1 }
  100% { opacity: 0.4 }
`;

const dash = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const fadeIn = keyframes`
  from {
    opacity:0;
    transform: translateY(10px)
  }
  to {
    opacity:1;
    transform: translateY(0)
  }
`;

const Container = styled(Flex)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  user-select: none;
`

const Dot = styled.div`
  border-radius: 10px;
  height: 8px;
  width: 8px;
  background-color: black;
  display: inline-block;
  margin: 0 4px;
  animation: ${flash} .4s infinite;
  animation-direction: alternate;
  animation-delay: ${props => props.index / 10}s;
`

const DotContainer = styled.div`
  position: absolute;
  top: calc(50% - 11px);
  left: calc(50% - 32px);
`

const CompletedContainer = styled.div`
  position: absolute;
  left: 0;
  top: 15px;
  width: 100%;
`

const CompletedIcon = styled.span`
  display: inline-block;
  transform: translateX(-5px);
  animation-delay: 0.3s;

  & polyline {
    stroke-dasharray: 18;
    stroke-dashoffset: 18;
    animation: ${dash} 0.5s ease forwards;
  }
`

const FailureIcon = styled.span`
  display: inline-block;
  transform: translateX(-5px) translateY(1px);
  
   & path:first-of-type {
    stroke-dasharray: 18;
    stroke-dashoffset: 18;
    animation: ${dash} 0.5s ease forwards;
  }

  & path:last-of-type {
    stroke-dasharray: 18;
    stroke-dashoffset: 18;
    animation: ${dash} 0.5s ease forwards;
    animation-delay: 0.1s;
  }
`

const CompletedText = styled.span`
  display: inline-block;
  animation: ${fadeIn} 0.5s ease-out;
`

const BtnLoading = styled(Btn)`
  background-color: ${props => buttonStates[props.status].color};
  width: 150px;
  position: relative;
  margin-bottom: 24px;
  margin-right: 0;
  margin-top: 16px;
`

const LoadingIcon = styled(Loader)`
  padding: 5px;
  border-radius: 50px;
  background-color: ${color.gray2};
  margin-right: 16px;
  margin-left: 16px;
  cursor: pointer;
  background-color: ${props => props.status === "loading" ? color.blue : color.gray2};

  &:hover {
    transform: scale(1.1);
  }
  & line {
    stroke-width: 2px;
  }
`

const CheckCircleIcon = styled(CheckCircle)`
  padding: 5px;
  border-radius: 50px;
  cursor: pointer;
  background-color: ${props => props.status === "success" ? color.green : color.gray2};

  &:hover {
    transform: scale(1.1);
  }
  & path, & polyline {
    stroke-width: 2px;
  }
`;

const XCircleIcon = styled(XCircle)`
  padding: 5px;
  border-radius: 50px;
  cursor: pointer;
  background-color: ${props => props.status === "failure" ? color.red : color.gray2};

  &:hover {
    transform: scale(1.1);
  }
  & circle, & line {
    stroke-width: 2px;
  }
`;

const Cross = function () {
  return (
    <svg width="13px" height="13px" viewBox="0 0 13 13">
      <g id="design-system" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <g id="Artboard" stroke="#000000" strokeWidth="3">
          <g id="x-(1)" transform="translate(2.000000, 2.000000)">
            <path d="M9.04959963,0 L0,9.04959963" id="Path"></path>
            <path d="M0,0 L9.04959963,9.04959963" id="Path"></path>
          </g>
        </g>
      </g>
    </svg>
  )
}

const Check = function () {
  return (
    <svg width="15px" height="12px" viewBox="0 0 15 12">
      <g id="design-system" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <g id="Artboard" transform="translate(-6.000000, -7.000000)" stroke="#000000" strokeWidth="3">
          <g id="check-(5)" transform="translate(7.500000, 9.000000)">
            <polyline id="Path" points="0.0965899058 4.75977242 3.81537656 8.47855908 11.9967072 0.29722844"></polyline>
          </g>
        </g>
      </g>
    </svg>
  )
}

const DSWalkthrough = () => {
  const [state, setState] = useState("default");
  const [isActive, setIsActive] = useState(false);
  
  let loadingTimer;
  let endTimer;

  useEffect(() => {
    if (!isActive) { return; } 
    loadingTimer = setTimeout(() => {
      Math.random() > 0.5 ? setState("failure") : setState("success")
      console.log("first state", state);
    }, 3000)
    return () => clearTimeout(loadingTimer);
  }, [isActive]);

  useEffect(() => {
    console.log("isActive", isActive)
    console.log("state", state)
    if (!isActive) { return; }
    if (state === "loading" || state === "default") { return; }

    endTimer = setTimeout(() => {
      setState("default");
      setIsActive(false)
    }, 3000)
    return () => clearTimeout(endTimer);
  }, [isActive, state]);

  const toggleState = status => {
    if (endTimer) { clearTimeout(endTimer) };
    if (loadingTimer) { clearTimeout(loadingTimer) };
    
    setIsActive(false); 
    
    if (status === state) {
      setState("default");
    } else {
      setState(status);
    }
  }
  
  const clickHandler = () => {
    if(state !== "default") { return; } 
    setState("loading");
    setIsActive(true);
  }

  return (
    <Container flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
      <BtnLoading status={state} onClick={clickHandler}>
        {state === "loading" || state === "success" || state === "failure" ? (
          <div>
            <span style={{ opacity: 0 }}>"Submit"</span>
            {state === "success" && (
              <CompletedContainer>
                <CompletedIcon>
                  <Check />
                </CompletedIcon>
                <CompletedText>
                  Done
                </CompletedText>
              </CompletedContainer>
            )}

            {state === "loading" && (
              <DotContainer>
                {[0, 1, 2, 3].map((d, i) => (
                  <Dot key={d} index={i} />
                ))}
              </DotContainer>
            )}

            {state === "failure" && (
              <CompletedContainer>
                <FailureIcon>
                  <Cross />
                </FailureIcon>
                <CompletedText>
                  Try Again
                </CompletedText>
              </CompletedContainer>
            )}
          </div>
        ) : "Submit"}
      </BtnLoading>
      <Flex>
        <XCircleIcon onClick={() => toggleState("failure")} status={state} size={33} color={state === "failure" ? color.black : color.white} />
        <LoadingIcon onClick={() => toggleState("loading")} status={state} size={33} color={state === "loading" ? color.black : color.white} />
        <CheckCircleIcon onClick={() => toggleState("success")} status={state} size={33} color={state === "success" ? color.black : color.white} />
      </Flex>
    </Container>
  );
}

export default DSWalkthrough;