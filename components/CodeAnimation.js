import React, { Component } from 'react'
import styled from "styled-components"
import { timer, range, select, scaleLinear, scaleQuantize} from "d3"

const CanvasContainer = styled.div`
  & canvas {
    width: 100%;
    height: 150px;
    position: absolute;
    background-color: transparent;
    z-index: 0;
  }
`

class CodeAnimation extends Component {
   render() {
    return <CanvasContainer ref={node => this.node = node} />
   }

   componentDidMount() {
     const node = this.node;
     var width = window.innerWidth * 2,
       height = 150 * 2;

     var x = scaleLinear()
       .domain([0, 100])
       .range([20, 2000]);

     var y = scaleLinear()
       .domain([0, 100])
       .range([20, height -20]);

     var colors = this.props.colors;
     var colorScale = scaleQuantize().domain([0,1]).range(colors);

     var data = [];
     var screenWidth = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

      var xpoints = 100;
      if (screenWidth && screenWidth > 2000) {
        xpoints = 300
      }

     range(xpoints).forEach(function(i) {
       range(4).forEach(function(j) {
         var dataObject =  {
           x: (i * 2),
           y: (j * 10),
           sizeV: Math.random() / 15,
           growing: Math.random() > 0.5 ? true: false,
           size: (Math.random() * 7 + 2),
           color: colorChooser(i,j)
         };
          data.push(dataObject);
       });
     });

     function colorChooser(x,y) {
       if (y === 3 && Math.random() > 0.5) {
         return "transparent"
       } else {
         return colorScale(Math.random());
       }
     }

     var canvas = select(node).append("canvas")
       .attr("width", width)
       .attr("height", height)
       .attr("id", "canvas");

     // node returns first dom element in a selection
     var context = canvas.node().getContext("2d");

     select(window).on('resize', function(){
       var htmlCanvas = document.getElementById('canvas');
       width = window.innerWidth * 2;
       htmlCanvas.width = width;
     });


     // the timer method calls a function repeatedly
     timer(function() {
       context.clearRect(0, 0, width, height);

       data.forEach(function(d) {

          if(d.growing === true && d.size <= 9) {
            d.size += d.sizeV;
          } else if (d.growing === true && d.size > 9) {
            d.growing = false;
          } else if (d.growing === false && d.size < 2) {
            d.growing = true;
          } else if (d.growing === false && d.size >= 2) {
            d.size -= d.sizeV;
          }



          context.fillStyle = d.color;
          context.beginPath();
          context.arc(x(d.x), y(d.y), d.size, 0, 2 * Math.PI);

          context.fill();
        });
     });
   }

}

CodeAnimation.defaultProps = {
  colors: ["#0099FF", "#DD3DEC", "#FF4D4D", "#FFC54D", "#6AED76", "#222", "#222", "#222"],
};

export default CodeAnimation;
