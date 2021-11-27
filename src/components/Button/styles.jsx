import styled from 'styled-components';

import { slideUp } from '../../common/keyFrames';

import { colorDisabled, redHoverPrimary, redPrimary, textColorPrimary } from '../variables';

export const BtnHeader = styled.button`
  opacity: 0;
  border: none;
  font-weight: bold;
  border-radius: 5px;
  letter-spacing: 1px;
  transition: all .3s;
  color: ${textColorPrimary};
  box-shadow: 5px 5px 10px #000;
  background-color: ${redPrimary};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  animation: ${slideUp} 1s .7s forwards;
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.width ? props.width : ''};
  
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 5px #000;
    background-color: ${redHoverPrimary};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${colorDisabled};
  }
`;