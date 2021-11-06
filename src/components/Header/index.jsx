import { Nav, List, ItemList, Logo } from '../../components/Header/styles';

import Button from '../../components/Button';

export default function Header() {
  return (
    <Nav>
      <List>
        <ItemList>
          <Logo src="https://media.giphy.com/media/gLRO6wuMJGVBDsybOw/giphy.gif" alt="Logo" />
        </ItemList>
        <ItemList>
          <Button 
            link="/login"
            fontSize="1em"
            color="#FFF"
            padding="12px 30px"
            bgcolor="#FF0000"
            bgcolorHover="#c90000"
          >
              Entrar
          </Button>
        </ItemList>
      </List>
    </Nav>    
  );
};
