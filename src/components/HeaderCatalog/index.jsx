import React, { useContext } from 'react'

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {
  Logo,
  List,
  NavHeader,
  ItemList,
  LinkItem,
  HeaderMovies,
  InfoUser
 } from './styles';

 import { UserContext } from '../../common/context/UserContext';

export default function HeaderCatalog() {
  const { name, balance } = useContext(UserContext);

  return(
    <HeaderMovies>
      <List>
        <ItemList>
          <Logo>MedMax</Logo>
        </ItemList>
        <NavHeader>
          <ItemList>
            <LinkItem>Filmes <KeyboardArrowDownIcon fontSize="small" /></LinkItem>
          </ItemList>
          <ItemList>
            <LinkItem>Séries <KeyboardArrowDownIcon fontSize="small" /></LinkItem>
          </ItemList>
        </NavHeader>
      </List>
      <List>
        <ItemList>
          <InfoUser>{name}</InfoUser>
        </ItemList>
        <ItemList>
          <InfoUser>R${Number(balance).toFixed(2)}</InfoUser>
        </ItemList>
      </List>
    </HeaderMovies>
  );
}