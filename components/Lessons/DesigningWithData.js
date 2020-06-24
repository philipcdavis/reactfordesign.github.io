import React, { useRef, useEffect, useState} from 'react'
import styled from 'styled-components'
import { color } from '../Tile'
import { hexToRGB } from '../Utils'
import { Flex, Image, Text } from 'rebass/styled-components'
import { select, scaleBand, scaleLinear } from 'd3';

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Label = styled(Text)`
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  margin: 0 auto;
`;

const BarContainer = styled.svg`
  position: absolute;
  top: 10px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  height: 100%;
  width: 100%;
`;

const Card = styled.div`
  background: ${color.gray3};
  height: 150px;
  width: 150px;
  border-radius: 24px;
  position: relative;
  text-align: center;
  top: -5px;
  z-index: 1;
  box-shadow: inset 0 0 0 3px ${color.black};
  box-sizing: content-box;
  transition: all 0.1s ease-in-out;
  font-family: menlo, monospace;
  font-weight: bold;
  line-height: 1.4;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0;
    border-radius: 24px;
    box-shadow: 0 3px 10px ${hexToRGB(color.black, 1)},
      0 10px 20px ${hexToRGB(color.black, 0.8)};
    transition: all 0.1s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    &:before {
      opacity: 1;
    }
  }
  user-select: none;
`;

const CardStatus = styled.div`
  background-color: ${props => color[props.status]};
  width: 8px;
  height: 8px;
  border-radius: 10px;
  position: absolute;
  left: 17px;
  top: 17px;
  box-shadow: 0 0 8px ${props => color[props.status]};
`;


const DesigningWithData = () => {
  const dataCount = 20;
  const [cardPosition, setCardPosition] = useState(0);
  const [data, setData] = useState(Array(dataCount).fill(""));
  const svgRef = useRef();
  
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    function handleResize() {
      width = svgRef.current ? svgRef.current.clientWidth : 300;
      const xScale = scaleLinear()
      .domain([0, 100])
      .range([width / 2,width - 20]);
      svg.selectAll("rect")
        .transition()
        .attr("width", () => xScale(Math.random() * 100));
    }

    const svg = select(svgRef.current);
    let width = svgRef.current ? svgRef.current.clientWidth : 300;
    const height = svgRef.current ? svgRef.current.clientHeight : 260;
  
    const xScale = scaleLinear()
      .domain([0, 100])
      .range([width / 2,width - 20]);

    const yScale = scaleBand()
      .domain(data.map((d,i) => i))
      .range([0,height - 15]);
  
    svg.selectAll("rect")
      .data(data)
      .join("rect")
      .attr("class", ".bar")
      .attr("fill", () => hexToRGB(color.white, 0.040))
      .attr("x", 10)
      .attr("rx", 3)
      .attr("y", (d,i) => yScale(i))
      .attr("height", 7)
      .transition()
      .attr("width", () => xScale(Math.random() * 100));
  }, [data]);
  
  const CardData = [
    {
      name: "Philip Davis",
      img:
        "https://pbs.twimg.com/profile_images/659824786260934656/syJKampr_400x400.jpg",
      location: "Waldorf, MD",
      status: "green",
    },
    {
      name: "Janine Wesley",
      img: "https://randomuser.me/api/portraits/women/83.jpg",
      location: "New York City, NY",
      status: "yellow",
    },
    {
      name: "Jaden Hendrick",
      img: "https://randomuser.me/api/portraits/men/83.jpg",
      location: "Mount St. Helens, WA",
      status: "gray1",
    },
  ];

  const handleCardClick = () => {
    setData(Array(dataCount).fill(""));
    setCardPosition(cardPosition >= 2 ? 0 : cardPosition + 1);
  }

  return (
    <Container>
      <BarContainer ref={svgRef} height={400}>
  
      </BarContainer>
      <Flex height={"100%"} justifyContent="center" alignItems="center">
        <Card onClick={() => handleCardClick()}>
          <CardStatus status={CardData[cardPosition].status} />
          <Image mt={"30px"} mb={"10px"} mx={"auto"} display={"block"} width={50} height={50} style={{borderRadius: 50}} src={CardData[cardPosition].img} />
          <Text color={color.gray0} textAlign={"center"} mt={1} fontSize={"14px"}>{CardData[cardPosition].name}</Text>
          <Label color={color.gray1} textAlign={"center"} mt={0} fontSize={"12px"}>{CardData[cardPosition].location}</Label>
        </Card>
      </Flex>
    </Container>
  )
}


export default DesigningWithData;