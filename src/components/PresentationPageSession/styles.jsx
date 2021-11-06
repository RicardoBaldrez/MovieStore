import styled from 'styled-components';

export const Session = styled.section`
  height: 50vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #000;
  border-top: 8px solid #222;
  `;

export const CentralContainer = styled.div`
  display: flex;
  padding: 40px;
  flex-basis: 80%;
  align-items: center;
  background-color: #000;
  justify-content: space-around;
`;

export const Article = styled.article`
  color: #FFF;
  flex-basis: 45%;
  text-align: ${(props) => props.alignContent};

  header {
    font-size: 3em;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.6em;
  }
`;