import styled, { keyframes } from "styled-components";

import { bgcolorTranslucentDefault, textColorPrimary } from '../variables.jsx';

export const HeaderMovies = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 80px;
  background-color: ${bgcolorTranslucentDefault};
`;

export const NavHeader = styled.nav`
  display: flex;
`;

export const Logo = styled.h1`
  display: flex;
  text-shadow: 3px 3px 2px black;
  align-items: center;
  margin-right: 30px;
  font-size: 2em;
  letter-spacing: 3px;
  color: ${textColorPrimary};
`;

export const List = styled.ul`
  display: flex;
`;

export const ItemList = styled.li`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const increasingEdge = keyframes`
  from {
    width: 0;
  } 
  to {
    width: 100%;
  }
`;
const decreasingEdge = keyframes`
  from {
    width: 100%;
  } 
  to {
    width: 0;
    opacity: 0;
  }
`;

export const LinkItem = styled.a`
  display: flex;
  position: relative;
  align-items: center;
  color: gray;
  padding: 5px 8px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
  &:before {
    content: '';
    border: 1px solid red;
    position: absolute;
    left: 0;
    bottom: 0;
    animation: ${decreasingEdge} .5s both;
  }
  &:hover::before {
    opacity: 1;
    animation: ${increasingEdge} .5s both;
  }
`;

export const InfoUser = styled.span`
  color: #FFF;
  padding: 5px;
  text-shadow: 2px 2px 2px #000;
  font-size: 1.2em;
  font-weight: bold;
`;
