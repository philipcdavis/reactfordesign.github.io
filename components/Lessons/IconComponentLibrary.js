import React, { useRef, useEffect } from 'react'
import styled, { keyframes } from "styled-components";
import { color } from '../Tile'
import { Box, Flex } from 'rebass/styled-components'
import * as Icon from 'react-feather'
import { hexToRGB } from '../Utils'

const cursor = (cursor) => {
  return `
    cursor: url("./assets/${cursor}.png") 10 10, crosshair; .* Legacy */
    cursor: url("./assets/${cursor}.svg") 10 10, crosshair; /* FF */
    cursor: -webkit-image-set(
          url("./assets/${cursor}.png") 1x,
          url("./assets/${cursor}@2x.png") 2x
        )
        10 10,
      crosshair; /* Webkit */
  `;
}

const Container = styled(Box)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  user-select: none;
`;

const GameScreen = styled(Box)`
  position: absolute;
  top: 35px;
  bottom: 10px;
  left: 10px;
  right: 10px;
  border-radius: 8px;
  background-color: ${color.black};
  overflow: hidden;
  ${cursor("crosshair")}
`;

const GameBoard = styled(Box)`
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 10px;
  right: 10px;
  display: flex;
  flex-wrap: wrap;
`

const GameTileCell = styled.div`
  width: calc(33.333%);
  height: calc(33.333%);
  display: flex;
  justify-content: center;
  align-items: center;
`



const StartButton = styled.div`
  background-color: ${hexToRGB(color.green, 0.1)};
  color: ${color.green};
  border-radius: 4px;
  border: 2px solid ${color.green};
  text-transform: uppercase;
  font-size: 14px;
  padding: 8px 16px;
  font-weight: bold;
  transition: 0.2s all ease;

  &:hover {
    ${cursor("crosshairActive")}
    transform: scale(1.1);
    background-color: ${hexToRGB(color.green, 0.2)};
  }
`;

const PlayIcon = styled(Icon.Play)`
  position: relative;
  top: 2px;
  left: 1px;
  stroke-width: 4px;
`

const Target = styled(Icon.Target)`
  display: inline-block;
  height: auto;
  line-height: 0;
  padding: 0px;
  border-radius: 100px;
  transition: 0.2s all ease-in-out;
  ${cursor("crosshairActive")}

  & path,
  & circle {
    stroke-width: 1;
    stroke: ${color.gray1};
  }

  &:hover circle,
  &:hover path {
    stroke: ${color.blue};
  }

  &.target-hidden {
    transform: scale(0.5);
    opacity: 0;
    visibility: hidden;
  }

  &.target-missed {
    transform: scale(0.5px);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;

    & path,
    & circle {
      stroke-width: 1;
      stroke: ${color.red};
    }
  }

  &.target-placeholder {
    opacity: 0.4;
    transition: none;

    &:hover {
      opacity: 1;
    }
  }

  &.target-hit {
    transform: scale(1.2);
    opacity: 0;
    visibility: hidden;
  }
`;

const NavHealth = styled(Icon.Heart)`
  margin-left: 3px;
  margin-right: 2px;
  position: relative;
  top: -2px;

  & path {
    fill: ${color.red};
    stroke: none;
  }

  &.heart-hidden {
    display: none;
  }
`;

const NavIcon = styled.div`
  margin-right: 4px;
  position: relative;
  top: -1px;
  & circle, & polyline {
    stroke-width: 2px;
  }
`

const NavItem = styled(Box)`
  font-family: menlo, monospace;
  font-size: 14px;
  position: relative;
  top: -1px;
  left: 5px;
  width: 45px;
  color: ${color.gray1};
  display:flex;
  align-items: center;
`

let lastHole;

const randomTime = (min, max) => {
  return Math.round((Math.random() * max) + min);
}

const randomHole = (holes) => {
  let idx = Math.floor(Math.random() * holes.length);

  let hole = holes[idx];
  if (hole === lastHole) {
    return randomHole(holes)
  }
  lastHole = hole;
  return hole;
}


const IconComponentLibrary = () => {
  
  const hole1 = useRef();
  const hole2 = useRef();
  const hole3 = useRef();
  const hole4 = useRef();
  const hole5 = useRef();
  const hole6 = useRef();
  const hole7 = useRef();
  const hole8 = useRef();
  const hole9 = useRef();
  const scorecard = useRef();
  const hearts = [useRef(), useRef(), useRef()];
  const timeCounter = useRef();
  const highscore = useRef();
  const holes = [hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9];

  let timeUp = true;
  let score = 0;
  let heart = hearts.length;
  let time = 20;

  const peep = () => {
    let hole = randomHole(holes);
    let time = randomTime(400, 800);
    hole.current.classList.remove("target-hidden");
    hole.current.classList.remove("target-missed");

    setTimeout(() => {
      hole.current.classList.add("target-missed");
      hole.current.classList.add("target-hidden");
      if (timeUp) {
        endGame();
      } else {
        peep();
      }
    }, time)
  }

  const endGame = () => {
    timeUp = true;
    if (localStorage.getItem("highscore")) {
      if (Number(localStorage.getItem("highscore")) < score) {
        localStorage.setItem("highscore", score)
        highscore.current.textContent = score;
      }
    } else {
      localStorage.setItem("highscore", score)
      highscore.current.textContent = score;
    }

  }

  const startGame = () => {
    score = 0;
    heart = 7;
    scorecard.current.textContent = score;
    //heart
    timeUp = false;
    peep();

    setTimeout(() => {
      timeUp = true;
    }, time * 1000);
  }

  const bonk = (e) => {
    if (!e.isTrusted) return;
    score++;
    scorecard.current.textContent = score;
    e.target.classList.remove("hole-highlight")
    e.stopPropagation();
  }

  const miss = (e) => {
    if (!e.isTrusted) return;
    heart--;
    hearts.slice().reverse()[heart].current.classList.add("heart-hidden");
    if (heart <= 0) endGame();
  }

  return (
    <Container>
      <Flex p={"2px 10px"}>
        
        <NavItem>
          <NavIcon as={Icon.Target} color={color.green} size={16} />
          <span ref={scorecard}>0</span>
        </NavItem>

        <NavItem>
          <NavIcon as={Icon.Award} color={color.yellow} size={16} />
          <span ref={highscore}>0</span>
        </NavItem>

        <NavItem>
          <NavIcon as={Icon.Clock} color={color.gray4} size={16} />
          <span ref={timeCounter}>{time}</span>
        </NavItem>

        <Box ml={"auto"}>
          <NavHealth ref={hearts[0]} size={12} color={color.red} />
          <NavHealth ref={hearts[1]} size={12} color={color.red} />
          <NavHealth ref={hearts[2]} size={12} color={color.red} />
        </Box>
      </Flex>
      <GameScreen>
        <GameBoard>
          
          {Array(9)
            .fill("")
            .map((d, i) => {
              if(i !== 4) {
                return (
                  <GameTileCell>
                    <Target className="target-placeholder" size={44} />
                  </GameTileCell>
                );
              } else {
                return (
                  <GameTileCell>
                    <StartButton onClick={startGame}>
                      <PlayIcon size={14} />
                    </StartButton>
                  </GameTileCell>
                );
              }
              
            })}
          
        </GameBoard>
        <GameBoard style={{display: "none"}}>
          <GameTileCell>
            <Target
              ref={hole1}
              className="hole hole1 target-hidden"
              onClick={bonk}
              size={44}
            />
          </GameTileCell>
          <GameTileCell>
            <Target
              ref={hole2}
              className="hole hole2 target-hidden"
              onClick={bonk}
              size={44}
            />
          </GameTileCell>
          <GameTileCell>
            <Target
              ref={hole3}
              className="hole hole3 target-hidden"
              onClick={bonk}
              size={44}
            />
          </GameTileCell>
          <GameTileCell>
            <Target
              ref={hole4}
              className="hole hole4 target-hidden"
              onClick={bonk}
              size={44}
            />
          </GameTileCell>
          <GameTileCell>
            <Target
              ref={hole5}
              className="hole hole5 target-hidden"
              onClick={bonk}
              size={44}
            />
          </GameTileCell>
          <GameTileCell>
            <Target
              ref={hole6}
              className="hole hole6 target-hidden"
              onClick={bonk}
              size={44}
            />
          </GameTileCell>
          <GameTileCell>
            <Target
              ref={hole7}
              className="hole hole7 target-hidden"
              onClick={bonk}
              size={44}
            />
          </GameTileCell>
          <GameTileCell>
            <Target
              ref={hole8}
              className="hole hole8 target-hidden"
              onClick={bonk}
              size={44}
            />
          </GameTileCell>
          <GameTileCell>
            <Target
              ref={hole9}
              className="hole hole9 target-hidden"
              onClick={bonk}
              size={44}
            />
          </GameTileCell>
        </GameBoard>
      </GameScreen>
    </Container>
  );
}

export default IconComponentLibrary;