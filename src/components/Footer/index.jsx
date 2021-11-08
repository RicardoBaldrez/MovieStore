import React from 'react'

import { Section, Article, Header, Title, List, ListItem, ContainerItem } from './styles';

export default function Footer() {
  return (
    <Section>
      <Article>
        <Header>
          <Title>Dúvidas? Ligue 0800-761-4631</Title>
        </Header>
        <List>
          <ContainerItem>
            <ListItem>Perguntas frequentes</ListItem>
            <ListItem>Relações com investidores</ListItem>
            <ListItem>Formas de assistir</ListItem>
            <ListItem>Informações corporativas</ListItem>
          </ContainerItem>
          <ContainerItem>
            <ListItem>Centro de ajuda</ListItem>
            <ListItem>Carreiras</ListItem>
            <ListItem>Termos de uso</ListItem>
            <ListItem>Entre em contato</ListItem>
          </ContainerItem>
          <ContainerItem>
            <ListItem>Conta</ListItem>
            <ListItem>Resgatar cartão pré-pago</ListItem>
            <ListItem>Privacidade</ListItem>
            <ListItem>Teste de velocidade</ListItem>
          </ContainerItem>
          <ContainerItem>
            <ListItem>Imprensa</ListItem>
            <ListItem>Comprar cartão pré-pago</ListItem>
            <ListItem>Preferências de cookies</ListItem>
            <ListItem>Avisos legais</ListItem>
          </ContainerItem>
        </List>
      </Article>
    </Section>
  );
}
