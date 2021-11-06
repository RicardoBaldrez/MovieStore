import React from 'react'

import Header from '../../components/Header';
import ContainerContralDialog from '../../components/ContainerContralDialog';
import { Container } from './styles';

export default function PresentationPage() {
  return (
    <Container>
      <Header />
      <ContainerContralDialog>
        <header className="header">
          <h1>Filmes, séries e muito mais. <br />Sem limites ...</h1>
        </header>
        <p className="body">Assista onde quiser. Cancele quando quiser.</p>
      </ContainerContralDialog>
    </Container>
  )
}
