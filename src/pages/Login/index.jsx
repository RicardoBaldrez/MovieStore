import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';

import { UserContext } from '../../common/context/UserContext';

import { 
  SectionLogin,
  HeaderSectionLogin,
  TitleHeaderSectionLogin,
} from './styles';

import HeaderPresentation from '../../components/HeaderPresentation';
import Button from '../../components/Button';
import ContainerCentralDialog from '../../components/ContainerCentralDialog';
import ContainerPresentation from '../../components/ContainerPresentation';
import { redPrimary, redHoverPrimary } from '../../components/variables';

import ArrowBack from '@material-ui/icons/ArrowBack';
import { makeStyles, TextField, IconButton } from '@material-ui/core';

const useStyles = makeStyles({
  iconButton: {
    opacity: 0,
    color: 'white',
    display: 'flex',
    animation: '$slideUp 1.2s forwards'
  },
  input: {
    borderRadius: '5px',
    marginBottom: '15px',
    backgroundColor: '#FFF',
  },
  '@keyframes slideUp': {
    '0%': {
      opacity: 0,
      transform: 'translateY(200%)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    }
  },
});


export default function Login() {
  const classes = useStyles();
  const history = useHistory();

  const { name, setName, setBalance } = useContext(UserContext);

  const onHandleEnter = (keyCode) =>  {
    if(keyCode === 13) {
      history.push('/catalog');
    }
  }

  return(
    <>
      <ContainerPresentation>
        <HeaderPresentation />
        <ContainerCentralDialog>
          <IconButton
            className={classes.iconButton}
            onClick={() => history.push('/')}
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
              onKeyUp={(e) => onHandleEnter(e.keyCode)}
              onChange={(e) => setBalance(e.target.value)}
            />
            <div style={{ overflowY: 'hidden' }}>
              <Button
                link="/catalog"
                width="100%"
                color="#FFF"
                fontSize="1em"
                padding="15px 0"
                bgcolor={redPrimary}
                disabled={name.length < 4}
                bgcolorHover={redHoverPrimary}
              >
                Avançar
              </Button>
            </div>
          </SectionLogin>
        </ContainerCentralDialog>
      </ContainerPresentation>
    </>
  );
}