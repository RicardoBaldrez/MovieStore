import styled from 'styled-components';

import { bgcolorTranslucentDefault } from '../variables'

export const Nav = styled.nav`
  height: 100vh;
  min-width: 100%;
  position: absolute;
  background-color: ${bgcolorTranslucentDefault};
`;

export const List = styled.ul`
  display: flex;
  max-width: 70%;
  margin: 20px auto;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

export const ItemList = styled.li`
  list-style: none;
`;

