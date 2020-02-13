import React from 'react'
import { Box } from 'rebass'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Logo = function(props) {
  let { width="68px", ...rest } = props;
  return (
    <Box { ...rest }>
      <LogoLink to="/">
        <svg width={width} viewBox="0 0 68 74">
          <g transform="translate(-431.000000, -144.000000)">
            <g id="logo" transform="translate(424.000000, 144.000000)">
              <ellipse fill="none" id="Oval-Copy-2" stroke="#FF0D3A" strokeWidth="3" transform="translate(41.000000, 37.000000) rotate(-240.000000) translate(-41.000000, -37.000000) " cx="41" cy="37" rx="20" ry="35"></ellipse>
              <ellipse fill="none" id="Oval-Copy" stroke="#0099FF" strokeWidth="3" transform="translate(41.000000, 37.000000) rotate(-305.000000) translate(-41.000000, -37.000000) " cx="41" cy="37" rx="20" ry="35"></ellipse>
              <ellipse fill="none" id="Oval-Copy-3" stroke="#00EF40" strokeWidth="3" cx="41" cy="37" rx="20" ry="35"></ellipse>
              <path fill="none" d="M22.4006036,72.7291081 C33.4462986,72.7291081 42.4006036,57.0590743 42.4006036,37.7291081" id="Oval-Copy-4" stroke="#0099FF" strokeWidth="3" transform="translate(32.400604, 55.229108) rotate(-305.000000) translate(-32.400604, -55.229108) "></path>
              <path fill="none" d="M59.5993964,1.27089192 C48.5537014,1.27089192 39.5993964,16.9409257 39.5993964,36.2708919" id="Oval-Copy-7" stroke="#0099FF" strokeWidth="3" transform="translate(49.599396, 18.770892) rotate(-305.000000) translate(-49.599396, -18.770892) "></path>
              <path fill="none" d="M61.1554446,71.910254 C61.1554446,52.5802878 52.2011396,36.910254 41.1554446,36.910254" id="Oval-Copy-6" stroke="#FF0D3A" strokeWidth="3" transform="translate(51.155445, 54.410254) rotate(-240.000000) translate(-51.155445, -54.410254) "></path>
              <path fill="none" d="M40.8445554,37.089746 C40.8445554,17.7597797 31.8902504,2.08974596 20.8445554,2.08974596" id="Oval-Copy-8" stroke="#FF0D3A" strokeWidth="3" transform="translate(30.844555, 19.589746) scale(-1, -1) rotate(-240.000000) translate(-30.844555, -19.589746) "></path>
              <circle fill="#FFC139" cx="41" cy="37" r="9"></circle>
            </g>
          </g>
        </svg>
      </LogoLink>
    </Box>
  );
}

const LogoLink = styled(Link)`
  svg {
    transition: 0.2s all ease;
  }

  &:hover svg {
    transform: rotate(200deg);
  }
`

export default Logo;
