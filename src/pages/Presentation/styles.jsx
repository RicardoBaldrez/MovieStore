import styled from 'styled-components';

import { slideUp } from '../../common/keyFrames';

export const Header = styled.header`
  opacity: 0;
  font-size: 2.8em;
  margin-bottom: 20px;
  animation: ${slideUp} 1s forwards;
`;

export const Paragraph = styled.p`
  opacity: 0;
  font-size: 1.8em;
  margin-bottom: 50px;
  animation: ${slideUp} 1s .6s forwards;
`;