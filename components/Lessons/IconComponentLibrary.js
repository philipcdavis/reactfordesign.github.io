import React, { useRef, useEffect } from 'react'
import styled from "styled-components";
import { color } from '../Tile'
import { Box, Flex, Text } from 'rebass/styled-components'
import * as Icon from 'react-feather'
import { hexToRGB } from '../Utils'

const ResultsRow = styled(Flex)`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  font-family: menlo, monospace;
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
  padding: ${props => props.small ? "4px 12px" : "8px 16px"};
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
  opacity: 1;

  & path {
    fill: ${color.red};
    stroke: none;
  }

  &.heart-hidden {
    opacity: 0;
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
  margin-right: 15px;
  left: 5px;
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
  useEffect(() => {
    highscore.current.textContent = localStorage.getItem("highscore") ? localStorage.getItem("highscore") : 0;
  });

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
  const healthCountLabel = useRef();
  const scoreCountLabel = useRef();

  let timeUp = true;
  let gameTimer;
  let gameClockTimer;
  let peepTimer;
  let time;
  let score;
  let health;

  const peep = () => {
    let rHole = randomHole(holes);
    let rTime = randomTime(800, 1200);
    rHole.current.classList.add("target-show");
    rHole.current.classList.remove("target-missed");
    rHole.current.classList.remove("target-hit");


    peepTimer = setTimeout(() => {
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
    clearTimeout(gameTimer);
    clearTimeout(gameClockTimer);
    clearTimeout(peepTimer);
    holes.forEach(hole => hole.current.classList.remove("target-show"))
    inGameView.current.classList.add("view-hidden");
    endView.current.classList.remove("view-hidden");
    scoreLabel.current.textContent = score * targetValue;
    healthLabel.current.textContent = health * heartValue;
    totalLabel.current.textContent = finalScore(health, score);

    scoreCountLabel.current.textContent = "x" + score;
    healthCountLabel.current.textContent = "x" + health;

    timeUp = true;
    if (localStorage.getItem("highscore")) {
      if (Number(localStorage.getItem("highscore")) < finalScore(health, score)) {
        localStorage.setItem("highscore", finalScore(health, score))
        highscore.current.textContent = finalScore(health, score);
      }
    } else {
      localStorage.setItem("highscore", finalScore(health, score))
      highscore.current.textContent = finalScore(health, score);
    }

  }

  const startGame = () => {
    if (!timeUp) return;
    timeUp = false;
    score = 0;
    health = hearts.length;
    time = 15;

    startView.current.classList.add("page");
    inGameView.current.classList.remove("view-hidden");
    endView.current.classList.add("view-hidden");
    scorecard.current.textContent = score;
    timeCounter.current.textContent = time;
    hearts.forEach(heart => heart.current.classList.remove("heart-hidden"));
    gameClock();
    peep();

    gameTimer = setTimeout(() => {
      timeUp = true;
    }, time * 1000);
  }

  const gameClock = () => {
    if (timeUp) {
      return;
    } 

    gameClockTimer = setTimeout(() => {
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
    e.stopPropagation();
  }

  const pew = (e) => {
    if (!e.isTrusted) return;
    e.target.classList.add("target-hit");
  }

  const miss = (e) => {
    if (!e.isTrusted) return;
    health--;
    hearts.slice().reverse()[health].current.classList.add("heart-hidden");
    if (health <= 0) endGame();
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

        <GameBoard onClick={miss} ref={inGameView} className="view-hidden" name="In Game View">
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
          
            <ResultsRow mt={3}>
              <Box><Icon.Heart style={{fill: color.red}} size={15} color={color.red}/></Box>
              <Text opacity={0.5} ml={1} fontSize={14} ref={healthCountLabel}>000</Text>
              <Text ml="auto" fontSize={18} ref={healthLabel}>000</Text>
            </ResultsRow>

            <ResultsRow pb={1} mb={1} style={{borderBottom: `2px solid ${color.gray2}`}}>
              <Box><Icon.Target size={17} color={color.green} /></Box>
              <Text opacity={0.5} ml={1} fontSize={14} ref={scoreCountLabel}>000</Text>
              <Text ml="auto" fontSize={18} ref={scoreLabel}>000</Text>
            </ResultsRow>

            <ResultsRow>
              <Text opacity={0.5} fontSize={14}>Total</Text>
              <Text ml="auto" fontSize={18} ref={totalLabel}>000</Text>
            </ResultsRow>
          <Flex mt={3} alignItems="center" justifyContent="center">
              <GameTileCell>
                <StartButton small onClick={startGame}>
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