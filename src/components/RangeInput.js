import React, { useState } from "react";
import styled from "styled-components";

const RangeInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  background: transparent;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none;
  }

  &::-ms-track {
    width: 100%;
    cursor: pointer;

    /* Hides the slider so custom styles can be added */
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  max-width: 200px;

  &[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    margin: 5.8px 0;
  }
  &[type="range"]:focus {
    outline: none;
  }
  &[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 0px 0px 0.2px #000000, 0px 0px 0px #0d0d0d;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    border: 0.2px solid #010101;
  }
  &[type="range"]::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    height: 20px;
    width: 20px;
    border-radius: 46px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -6px;
  }
  &[type="range"]:focus::-webkit-slider-runnable-track {
    background: rgba(255, 255, 255, 0.1);
  }
  &[type="range"]::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 0px 0px 0.2px #000000, 0px 0px 0px #0d0d0d;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    border: 0.2px solid #010101;
  }
  &[type="range"]::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    height: 20px;
    width: 20px;
    border-radius: 46px;
    background: #ffffff;
    cursor: pointer;
  }
  &[type="range"]::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  &[type="range"]::-ms-fill-lower {
    background: rgba(242, 242, 242, 0.1);
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 0px 0px 0.2px #000000, 0px 0px 0px #0d0d0d;
  }
  &[type="range"]::-ms-fill-upper {
    background: rgba(255, 255, 255, 0.1);
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 0px 0px 0.2px #000000, 0px 0px 0px #0d0d0d;
  }
  &[type="range"]::-ms-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    height: 20px;
    width: 20px;
    border-radius: 46px;
    background: #ffffff;
    cursor: pointer;
    height: 8.4px;
  }
  &[type="range"]:focus::-ms-fill-lower {
    background: rgba(255, 255, 255, 0.1);
  }
  &[type="range"]:focus::-ms-fill-upper {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export default RangeInput;