import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';

import { UserContext } from '../../common/context/UserContext';

import { 
  SectionLogin,
  HeaderSectionLogin,
  TitleHeaderSectionLogin,
} from './styles';

import Header from '../../components/Header';
import Button from '../../components/Button';
import ContainerCentralDialog from '../../components/ContainerCentralDialog';
import ContainerPresentation from '../../components/ContainerPresentation';
import { redPrimary, redHoverPrimary } from '../../components/variables';

import ArrowBack from '@material-ui/icons/ArrowBack';
import { makeStyles, TextField, IconButton } from '@material-ui/core';

const useStyles = makeStyles({
  iconButton: {
    color: 'white',
    display: 'flex',
  },
  input: {
    borderRadius: '5px',
    marginBottom: '15px',
    backgroundColor: '#FFF',
  },
});


export default function Login() {
  const classes = useStyles();
  const history = useHistory();

  const { name, setName, setBalance } = useContext(UserContext);

  return(
    <>
      <ContainerPresentation>
        <Header />
        <ContainerCentralDialog>
          <IconButton
            className={classes.iconButton}
            onClick={() => history.goBack()}
          >
            <ArrowBack />
          </IconButton>
          <SectionLogin>
            <HeaderSectionLogin>
              <TitleHeaderSectionLogin>Insira Nome e Saldo</TitleHeaderSectionLogin>
            </HeaderSectionLogin>
              <TextField 
                id="filled-basic"
                label="Nome"
                variant="filled"
                className={classes.input}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id="filled-basic"
                label="Saldo"
                variant="filled"
                className={classes.input}
                onChange={(e) => setBalance(e.target.value)}
              />
            <Button
              link="/catalog"
              width="100%"
              color="#FFF"
              fontSize="1em"
              padding="15px 0"
              margin="40px 0 0"
              bgcolor={redPrimary}
              disabled={name.length < 4}
              bgcolorHover={redHoverPrimary}
            >
              Avançar
            </Button>
          </SectionLogin>
        </ContainerCentralDialog>
      </ContainerPresentation>
    </>
  );
}