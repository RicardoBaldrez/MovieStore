import React from 'react'

import { SessionOffering, ArticleOffering } from './styles';

export default function Offering({ children }) {
  return (
    <SessionOffering>
      <ArticleOffering>
        { children }
      </ArticleOffering>
    </SessionOffering>
  );
}