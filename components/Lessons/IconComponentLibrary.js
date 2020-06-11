import React, { useRef } from 'react'
import styled from "styled-components";
import { color } from '../Tile'
import { Box, Flex, Text } from 'rebass/styled-components'
import * as Icon from 'react-feather'
import { hexToRGB } from '../Utils'

const ResultsRow = styled(Flex)`
  width: 60%;
  margin: 0 auto;
  border-bottom: 2px solid ${color.gray2};
  height: 30px;
`;

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
  visibility: visible;
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
  background-color: ${color.black};
  &.view-hidden {
    visibility: hidden;
  }
`;

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
  visibility: hidden;
  transform: scale(0.5);
  opacity: 0;
  height: auto;
  line-height: 0;
  padding: 0px;
  border-radius: 100px;
  transition: 0.2s all ease-in-out;
  ${cursor("crosshairActive")}

  & path,
  & circle {
    pointer-events: none;
    stroke-width: 1;
    stroke: ${color.gray1};
  }

  &:hover circle,
  &:hover path {
    stroke: ${color.gray0};
  }

  &.target-show {
    transform: scale(1);
    opacity: 1;
    visibility: visible;
  }

  &.target-missed {
    transform: scale(0.5px);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }

  &.target-hit {
    transform: scale(1.2);
    opacity: 0;
    visibility: hidden;

    &:hover circle,
    &:hover path {
      stroke: ${color.green};
    }
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
let heartValue = 20;
let targetValue = 10;

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

const finalScore = (hearts, score) => {
  return ((hearts * heartValue) + (score * targetValue));
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
  const startView = useRef();
  const inGameView = useRef();
  const endView = useRef();
  const healthLabel = useRef();
  const scoreLabel = useRef();
  const totalLabel = useRef();

  let timeUp = true;
  let score;
  let health;
  let time;

  const peep = () => {
    let rHole = randomHole(holes);
    let rTime = randomTime(600, 1200);
    rHole.current.classList.add("target-show");
    rHole.current.classList.remove("target-missed");
    rHole.current.classList.remove("target-hit");


    setTimeout(() => {
      rHole.current.classList.add("target-missed");
      rHole.current.classList.remove("target-show");

      if (timeUp) {
        endGame();
      } else {
        peep();
      }
    }, rTime);
  }

  const endGame = () => {
    inGameView.current.classList.add("view-hidden");
    endView.current.classList.remove("view-hidden");
    scoreLabel.current.textContent = score;
    healthLabel.current.textContent = health;

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
    if (!timeUp) return;
    startView.current.classList.add("page");
    inGameView.current.classList.remove("view-hidden");
    endView.current.classList.add("view-hidden");
    timeUp = false;
    score = 0;
    health = hearts.length;
    time = 5;
    scorecard.current.textContent = score;
    timeCounter.current.textContent = time;

    gameClock();
    peep();

    setTimeout(() => {
      timeUp = true;
    }, time * 1000);
  }

  const gameClock = () => {
    if (timeUp) {
      return;
    } 

    setTimeout(() => {
      time--;
      timeCounter.current.textContent = time;
      return gameClock();
    }, 1000)
  }

  const bonk = (e) => {
    if (!e.isTrusted) return;
    score++;
    scorecard.current.textContent = score;
    e.target.classList.add("target-hit");
  }

  const pew = (e) => {
    if (!e.isTrusted) return;
    console.log("pew")
    e.target.classList.add("target-hit");
  }

  const miss = (e) => {
    if (!e.isTrusted) return;
    health--;
    hearts.slice().reverse()[health].current.classList.add("heart-hidden");
    if (heart <= 0) endGame();
  }

  return (
    <Container>
      <Flex p={"2px 10px"}>
        <NavItem>
          <NavIcon as={Icon.Target} color={color.green} size={16} />
          <div ref={scorecard}>0</div>
        </NavItem>

        <NavItem>
          <NavIcon as={Icon.Award} color={color.yellow} size={16} />
          <div ref={highscore}>0</div>
        </NavItem>

        <NavItem>
          <NavIcon as={Icon.Clock} color={color.gray4} size={16} />
          <div ref={timeCounter}>0</div>
        </NavItem>

        <Box ml={"auto"}>
          <NavHealth ref={hearts[0]} size={12} color={color.red} />
          <NavHealth ref={hearts[1]} size={12} color={color.red} />
          <NavHealth ref={hearts[2]} size={12} color={color.red} />
        </Box>
      </Flex>
      <GameScreen>
        <GameBoard ref={startView} name="Start View">
          {Array(9)
            .fill("")
            .map((d, i) => {
              if (i !== 4) {
                return (
                  <GameTileCell key={i}>
                    <Target
                      onClick={pew}
                      className="target-show"
                      size={44}
                    />
                  </GameTileCell>
                );
              } else {
                return (
                  <GameTileCell key={i}>
                    <StartButton onClick={startGame}>
                      <PlayIcon size={14} />
                    </StartButton>
                  </GameTileCell>
                );
              }
            })}
        </GameBoard>

        <GameBoard ref={inGameView} className="view-hidden" name="In Game View">
          <GameTileCell>
            <Target
              onClick={bonk}
              ref={hole1}
              className="hole hole1"
              size={44}
            />
          </GameTileCell>
          <GameTileCell>
            <Target
              onClick={bonk}
              ref={hole2}
              className="hole hole2"
              size={44}
            />
          </GameTileCell>
          <GameTileCell>
            <Target
              onClick={bonk}
              ref={hole3}
              className="hole hole3"
              size={44}
            />
          </GameTileCell>
          <GameTileCell>
            <Target
              onClick={bonk}
              ref={hole4}
              className="hole hole4"
              size={44}
            />
          </GameTileCell>
          <GameTileCell>
            <Target
              onClick={bonk}
              ref={hole5}
              className="hole hole5"
              size={44}
            />
          </GameTileCell>
          <GameTileCell>
            <Target
              onClick={bonk}
              ref={hole6}
              className="hole hole6"
              size={44}
            />
          </GameTileCell>
          <GameTileCell>
            <Target
              onClick={bonk}
              ref={hole7}
              className="hole hole7"
              size={44}
            />
          </GameTileCell>
          <GameTileCell>
            <Target
              onClick={bonk}
              ref={hole8}
              className="hole hole8"
              size={44}
            />
          </GameTileCell>
          <GameTileCell>
            <Target
              onClick={bonk}
              ref={hole9}
              className="hole hole9"
              size={44}
            />
          </GameTileCell>
        </GameBoard>

        <GameBoard flexDirection={"column"} alignContent={"center"} className="view-hidden" ref={endView} name="End View">
         
            <ResultsRow>
              <Box><Icon.Heart size={17} color={color.red}/></Box>
              <Text fontSize={16} ref={healthLabel}>0</Text>
            </ResultsRow>

            <ResultsRow>
            <Box><Icon.Target size={17} color={color.green} /></Box>
              <Box ref={scoreLabel}>0</Box>
            </ResultsRow>

            <ResultsRow>
              <Box>Total</Box>
              <Box ref={totalLabel}>0</Box>
            </ResultsRow>
            <Flex alignItems="center" justifyContent="center">
              <GameTileCell>
                <StartButton onClick={startGame}>
                  <PlayIcon size={14} />
                </StartButton>
              </GameTileCell>
            </Flex>
          
        
         
        </GameBoard>
      </GameScreen>
    </Container>
  );
}

export default IconComponentLibrary;