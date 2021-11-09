import React from 'react'

import 'animate.css';

import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Header from '../../components/Header';
import ContainerPresentationLogin from '../../components/ContainerPresentationLogin';
import ContainerCentralDialog from '../../components/ContainerCentralDialog';
import PresentationPageSession from '../../components/PresentationPageSession';
import { redPrimary, redHoverPrimary } from '../../components/variables';

import { makeStyles } from '@material-ui/core/styles';
import ArrowDownward from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles({
  header: {
    fontSize: '2.8em',
    marginBottom: '20px',
  },
  body: {
    fontSize: '1.8em',
    marginBottom: '50px',
  }
});

export default function PresentationPage() {
  const classes = useStyles();

  return (
    <>
      <ContainerPresentationLogin>
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
            bgcolor={redPrimary}
            bgcolorHover={redHoverPrimary}
          >
            Vamos lá
          </Button>
        </ContainerCentralDialog>
        <div style={{ flexBasis: '100%', position: 'absolute', bottom: '30px' }}>
          <ArrowDownward fontSize="large" className="animate__animated animate__rubberBand animate__infinite" />
        </div>
      </ContainerPresentationLogin>
      <PresentationPageSession />
      <Footer />
    </>
  )
}