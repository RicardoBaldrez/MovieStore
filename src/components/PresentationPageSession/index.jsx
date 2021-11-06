import React from 'react'

import { Session, CentralContainer, Article } from './styles';

export default function PresentatoinPageSession() {
  return (
    <>
      <Session>
        <CentralContainer>
          <Article>
            <header>
              <h1>Aproveite na TV.</h1>
            </header>
            <p>Assista em Smart TVs, Playstation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</p>
          </Article>
          <img width="550" height="350" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
        </CentralContainer>
      </Session>
      <Session>
        <CentralContainer>
          <img width="550" height="350" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
          <Article>
            <header>
              <h1>Baixe séries para assistir offline.</h1>
            </header>
            <p>Salve seus títulos favoritos e sempre tenha algo para assistir.</p>
          </Article>
        </CentralContainer>
      </Session>
      <Session>
        <CentralContainer>
          <Article>
            <header>
              <h1>Assista quando quiser.</h1>
            </header>
            <p>Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.</p>
          </Article>
          <img width="550" height="350" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="" />
        </CentralContainer>
      </Session>
    </>
   );
}
