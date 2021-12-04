import styled from 'styled-components';

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
  border: 2px solid blue;
  &:after {
    content: "🦄";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 5px solid green;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const CardHeader = styled.header`
  display: flex;
  min-height: 100%;
  border: 2px solid yellow;
`;

export const FrontCover = styled.img`
  width: 100%;
  min-height: 100%;
`;