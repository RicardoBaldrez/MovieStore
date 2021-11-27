import styled from 'styled-components';

import { slideUp } from '../../common/keyFrames';

export const SectionLogin = styled.section`
opacity: 0;
  width: 400px;
  margin-top: 25px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  animation: ${slideUp} 1s .2s forwards;
`;

export const HeaderSectionLogin = styled.header`
  flex-basis: 60%;
  margin-bottom: 30px;
  animation: ${slideUp} 1s .4s forwards;
`;

export const TitleHeaderSectionLogin = styled.h1`
  color: #FFF;
  font-size: 2em;
  text-align: start;
`;
