import React from 'react'

import Button from '../../components/Button';

import { SessionOffering, ArticleOffering } from './styles';
import { redPrimary, redHoverPrimary } from '../variables';

export default function Offering({ children }) {
  return (
    <SessionOffering>
      <ArticleOffering>
        { children }
      </ArticleOffering>
      <Button
        link="/login"
        width="100%"
        color="#FFF"
        fontSize="1.5em"
        bgcolor={redPrimary}
        bgcolorHover={redHoverPrimary}
      >
        Vamos lá
      </Button>
    </SessionOffering>
  );
}