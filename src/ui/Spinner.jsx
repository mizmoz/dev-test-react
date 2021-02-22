import React from 'react';
import styled, { keyframes } from 'styled-components';

const load = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
`
const StyledSpinner = styled.div`
  color: red;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  transform: translateZ(0);
  animation-delay: -0.16s;

  &,
  &:before,
  &:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    animation-fill-mode: both;
    animation: ${load} 1.8s infinite ease-in-out;  
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
  }
  &:before {
    left: -3.5em;
    animation-delay: -0.32s;
  }
  &:after {
    left: 3.5em;
  }
`

const StyledDiv = styled.div`
  position: relative;
  top: -25px;
  margin: 0px 25px;
`

const Spinner = props => {
  return <StyledDiv><StyledSpinner>Loading...</StyledSpinner></StyledDiv>
}

export default Spinner