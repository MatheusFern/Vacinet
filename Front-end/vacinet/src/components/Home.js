import React from 'react';
import styled from 'styled-components/native';

const BodyHome = styled.View`
height: 500px;
width: 100%;
justifyContent:space-around;
flexDirection: column;
flexWrap:wrap;

`;
const Itens = styled.View`
height: 170px;
width: 170px;
margin: 18px;
justifyContent:center;
background-color:#008F95;
border-radius:25px;

`;
const Texto = styled.Text`
textAlign: center;
  fontSize:25px;
  color:white;
`;

export default () => {
  return (
    <BodyHome>
      <Itens>
        <Texto>calculo de IMC </Texto>
      </Itens>
      <Itens>
        <Texto>Doacao de Sangue</Texto>
      </Itens>
      <Itens>
        <Texto>Exames</Texto>
      </Itens>
      <Itens>
        <Texto>Transplante</Texto>
      </Itens>
    </BodyHome>
  )

}