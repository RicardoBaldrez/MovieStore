import React, { useContext } from 'react'

import 'animate.css';

import { ChangingComponentContext } from '../../common/context/ChangingComponent';

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

  const { component, setComponent } = useContext(ChangingComponentContext);

  return (
    <>
      <ContainerPresentationLogin>
        <Header />
        <ContainerCentralDialog>
          {component === 'login' ? (
            <>
              <IconButton
                color="primary"
                style={{ color: 'white' }}
                onClick={() => setComponent('presentation')}
              >
                <ArrowBack />
              </IconButton>
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