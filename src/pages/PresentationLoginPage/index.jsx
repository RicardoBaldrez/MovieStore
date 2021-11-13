import React, { useContext } from 'react'

import { ChangingComponentContext } from '../../common/context/ChangingComponent';
import { UserContext } from '../../common/context/UserContext';

import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Header from '../../components/Header';
import ContainerPresentationLogin from '../../components/ContainerPresentationLogin';
import ContainerCentralDialog from '../../components/ContainerCentralDialog';
import PresentationPageSession from '../../components/PresentationPageSession';
import { redPrimary, redHoverPrimary } from '../../components/variables';

import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ArrowBack from '@material-ui/icons/ArrowBack';
import TextField from '@material-ui/core/TextField';

import { 
  SectionLogin,
  HeaderSectionLogin,
  TitleHeaderSectionLogin,
} from './styles';

import 'animate.css';

const useStyles = makeStyles({
  header: {
    fontSize: '2.8em',
    marginBottom: '20px',
  },
  body: {
    fontSize: '1.8em',
    marginBottom: '50px',
  },
  input: {
    borderRadius: '5px',
    marginBottom: '15px',
    backgroundColor: '#FFF',
  },
});

export default function PresentationPage() {
  const classes = useStyles();

  const { component, setComponent } = useContext(ChangingComponentContext);
  const { setName, setBalance } = useContext(UserContext);

  return (
    <>
      <ContainerPresentationLogin>
        <Header />
        <ContainerCentralDialog>
          {component === 'login' ? (
            <>
              <IconButton
                style={{ color: 'white', display: 'flex' }}
                onClick={() => setComponent('presentation')}
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
                  bgcolorHover={redHoverPrimary}
                >
                  Avançar
                </Button>
              </SectionLogin>
            </>
          ) : (
           <>
              <header className={classes.header}>
                <h1>Filmes, séries e muito mais. <br />Sem limites ...</h1>
              </header>
              <p className={classes.body}>Assista onde quiser. Quando quiser.</p>
              <Button
                link=""
                width="100%"
                color="#FFF"
                fontSize="1.5em"
                padding="15px 0"
                bgcolor={redPrimary}
                bgcolorHover={redHoverPrimary}
              >
                Vamos lá
              </Button>
           </>
          )}
        </ContainerCentralDialog>
        {component === 'presentation' && (
          <div style={{ flexBasis: '100%', position: 'absolute', bottom: '30px' }}>
            <ArrowDownward fontSize="large" className="animate__animated animate__rubberBand animate__infinite" />
          </div>
        )}
        </ContainerPresentationLogin>
      {component === 'presentation' && (
        <>
          <PresentationPageSession />
          <Footer />
        </>
      )}
    </>
  )
}