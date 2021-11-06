import styled from 'styled-components';

import { bgcolorTranslucentDefault } from '../variables'

export const Nav = styled.nav`
  min-width: 100%;
  padding: 10px;
  position: absolute;
  background-color: ${bgcolorTranslucentDefault};
`;

export const List = styled.ul`
  max-width: 80%;
  margin: 0 auto;
  display: flex;
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

