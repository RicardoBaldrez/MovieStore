import React, { useRef } from 'react'

import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Header from '../../components/Header';
import ContainerPresentation from '../../components/ContainerPresentation';
import ContainerCentralDialog from '../../components/ContainerCentralDialog';
import PresentationPageSession from '../../components/PresentationPageSession';
import { redPrimary, redHoverPrimary } from '../../components/variables';

import { makeStyles } from '@material-ui/core/styles';

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
  containerArrowDownward: {
    bottom: '30px',
    flexBasis: '100%',
    position: 'absolute',
    '&:hover': {
      cursor: 'pointer'
    }
  }
});

export default function PresentationPage() {
  const classes = useStyles();
  
  const presentationSession = useRef(null);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  return (
    <>
      <ContainerPresentation>
        <Header />
        <ContainerCentralDialog>
          <header className={classes.header}>
            <h1>Filmes, séries e muito mais. <br />Sem limites ...</h1>
          </header>
          <p className={classes.body}>Assista onde quiser. Quando quiser.</p>
          <Button
            link="/login"
            width="100%"
            color="#FFF"
            fontSize="1.5em"
            padding="15px 0"
            disabled={false}
            bgcolor={redPrimary}
            bgcolorHover={redHoverPrimary}
          >
            Vamos lá
          </Button>
        </ContainerCentralDialog>
        <div className={classes.containerArrowDownward} onClick={() => scrollToRef(presentationSession)}>
          <img src="https://media.giphy.com/media/UrzWDQ3VTiDU84R5dx/giphy.gif" width="80" height="50" alt="" />
        </div>
      </ContainerPresentation>
      <span ref={presentationSession}></span>
      <PresentationPageSession />
      <Footer />
    </>
  )
}