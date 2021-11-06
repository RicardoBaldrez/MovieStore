import styled from 'styled-components';

export const BtnHeader = styled.button`
  border: none;
  font-weight: bold;
  border-radius: 5px;
  letter-spacing: 1px;
  transition: all .3s;
  box-shadow: 5px 5px 10px #000;
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.bgcolor};
  width: ${(props) => props.width ? props.width : ''};
  
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 5px #000;
    background-color: ${(props) => props.bgcolorHover};
  }
`;