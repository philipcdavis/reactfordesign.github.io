import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { color } from '../Tile'
import { Box, Flex } from 'rebass/styled-components'
import * as Icon from 'react-feather'
// import Crosshair from '../../../public/assets/crosshair.svg'
// import CrosshairActive from '../../../public/assets/crosshairActive.svg'

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
  // cursor: url(${Crosshair}), crosshair;
`

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


const Target = styled(Icon.Target)`
  display: inline-block;
  height: auto;
  line-height: 0;
  padding: 0px;
  border-radius: 100px;
  // cursor: url(${CrosshairActive}), crosshair;

  & path, & circle {
    stroke-width: 1;
    stroke: ${color.gray1};
  }

  &:hover circle, &:hover path {
    stroke: ${color.blue};
  }
`

const NavHealth = styled(Icon.Heart)`
  margin-left: 3px;
  margin-right: 2px;
  position: relative;
  top: -2px;

  & path {
    fill: ${color.red};
    stroke: none;
  }
`

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
  const health = useRef();
  const highscore = useRef();
  const holes = [hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9];

  let timeUp = true;
  let score = 0;
  let heart = 7;

  const peep = () => {
    let hole = randomHole(holes);
    console.log('random holes', randomHole(holes))
    let time = randomTime(400, 800);
    hole.current.classList.add("hole-highlight")

    setTimeout(() => {
      hole.current.classList.remove("hole-highlight");
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
    health.current.textContent = heart;
    timeUp = false;
    peep();

    setTimeout(() => timeUp = true, 20000)
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
    health.current.textContent = heart;
    if (heart <= 0) endGame();
  }

  return (
    <Container>
      <Flex p={"2px 10px"}>
        <button onClick={startGame}>Start</button>
        <NavItem>
          <NavIcon as={Icon.Target} color={color.green} size={16} />
          <span>0</span>
        </NavItem>

        <NavItem>
          <NavIcon as={Icon.Award} color={color.yellow} size={16} />
          <span>0</span>
        </NavItem>

        <NavItem>
          <NavIcon as={Icon.Clock} color={color.gray4} size={16} />
          <span>0</span>
        </NavItem>

        <Box ml={"auto"}>
          <NavHealth size={12} color={color.red} />
          <NavHealth size={12} color={color.red} />
          <NavHealth size={12} color={color.red} />
          <span>5</span>
        </Box>
      </Flex>
      <GameScreen>
        <GameBoard onClick={miss}>
          <GameTileCell>
            <Target className="hole hole1" onClick={bonk} size={44} />
          </GameTileCell> 
          <GameTileCell>
            <Target className="hole hole2" onClick={bonk} size={44} />
          </GameTileCell> 
          <GameTileCell>
            <Target className="hole hole3" onClick={bonk} size={44} />
          </GameTileCell> 
          <GameTileCell>
            <Target className="hole hole4" onClick={bonk} size={44} />
          </GameTileCell> 
          <GameTileCell>
            <Target className="hole hole5" onClick={bonk} size={44} />
          </GameTileCell> 
          <GameTileCell>
            <Target className="hole hole6" onClick={bonk} size={44} />
          </GameTileCell> 
          <GameTileCell>
            <Target className="hole hole7" onClick={bonk} size={44} />
          </GameTileCell> 
          <GameTileCell>
            <Target className="hole hole8" onClick={bonk} size={44} />
          </GameTileCell> 
          <GameTileCell>
            <Target className="hole hole9" onClick={bonk} size={44} />
          </GameTileCell> 
        </GameBoard>
      </GameScreen>
    </Container>
  )
}

export default IconComponentLibrary;