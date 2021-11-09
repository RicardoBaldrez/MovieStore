import React, { useContext } from 'react'

import { Nav, List, ItemList, Logo } from '../../components/Header/styles';

import Button from '../../components/Button';

import { ChangingComponentContext } from '../../common/context/ChangingComponent';

export default function Header() {
  const { component } = useContext(ChangingComponentContext);

  return (
    <Nav>
      <List>
        <ItemList>
          <Logo 
            alt="Logo"
            className="animate__animated animate__zoomIn"
            src="https://media.giphy.com/media/gLRO6wuMJGVBDsybOw/giphy.gif"
          />
        </ItemList>
        {component === 'presentation' && (
          <ItemList>
            <Button 
              link=""
              fontSize="1em"
              color="#FFF"
              padding="12px 30px"
              bgcolor="#FF0000"
              bgcolorHover="#c90000"
            >
                Entrar
            </Button>
          </ItemList>
        )}
      </List>
    </Nav>    
  );
};
