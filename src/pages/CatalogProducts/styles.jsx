import styled from 'styled-components';
import { increasingSize } from '../../common/keyFrames';

export const SectionProducts = styled.section`
  padding: 80px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #000;
`;

export const Card = styled.article`
  position: relative;
  flex-basis: 16.66%;
  margin: 0 30px 30px 0;
  border-radius: 5px;
  overflow: hidden;
  &:nth-child(5n) {
    margin-right: 0;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const CardHeader = styled.header`
  display: flex;
  min-height: 100%;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  &:hover {
    cursor: pointer;
    animation: ${increasingSize} 1s forwards;
  }
`;

export const FrontCover = styled.img`
  width: 100%;
  min-height: 100%;
`;