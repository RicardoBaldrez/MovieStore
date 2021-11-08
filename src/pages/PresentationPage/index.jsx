import React from 'react'

import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Header from '../../components/Header';
import ContainerCentralDialog from '../../components/ContainerCentralDialog';
import PresentationPageSession from '../../components/PresentationPageSession';

import { ContainerMain } from './styles';
import { redPrimary, redHoverPrimary } from '../../components/variables';


export default function PresentationPage() {
  return (
    <>
      <ContainerMain>
        <Header />
        <ContainerCentralDialog>
          <header className="header">
            <h1>Filmes, séries e muito mais. <br />Sem limites ...</h1>
          </header>
          <p className="body">Assista onde quiser. Cancele quando quiser.</p>
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
      </ContainerMain>
      <PresentationPageSession />
      <Footer />
    </>
  )
}
