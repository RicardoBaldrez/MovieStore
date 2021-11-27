import styled from 'styled-components';

import { bgcolorTranslucentDefault } from '../variables'

export const ContainerMain = styled.div`
  height: 100vh;
  display: flex;
  color: #FFF;
  flex-wrap: wrap;
  background-size: cover;
  justify-content: center;
  background-position: center;
  background-attachment: fixed;
  background-image: url('https://files.nsctotal.com.br/s3fs-public/graphql-upload-files/Filmes%20de%20Comedia%20Netflix_1.jpg?nIYgI6qz.3bwtQBkiGY7jhODLiwqgfQb');
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${ bgcolorTranslucentDefault };
  }
`;