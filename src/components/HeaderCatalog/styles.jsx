import styled from "styled-components";

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
  padding: 5px;
  display: flex;
  align-items: center;
`;

export const LinkItem = styled.a`
  display: flex;
  align-items: center;
  color: gray;
  padding: 7px 10px;
  font-weight: bold;
  transition: all .3s;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
    color: ${textColorPrimary};
    background-color: #6a6a6a;
  }
`;

export const InfoUser = styled.span`
  color: #FFF;
  padding: 5px;
  text-shadow: 2px 2px 2px #000;
  font-size: 1.2em;
  font-weight: bold;
`;