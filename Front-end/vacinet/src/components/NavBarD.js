import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

const Barra = styled.View`
height: 80px;
width: 100%;
background-color:#00C2CB;
flex-direction:row;
justifyContent:space-between;

`;
const Itens = styled.View`
height: 55px;
width: 55px;
margin: 15px;
justifyContent:center;


`;
const Texto = styled.Text`
  textAlign: center;
  fontSize:12px;
  color:white;
  font-weight:bold;
`;


export default () => {
  return (
    <Barra>
      <Itens>
        <Image source={require('../assets/home.png')}
         style={{width:55, height:55}}
         resizeMode="center"
        />
      </Itens>
      <Itens>
        <Texto>Minha Saude</Texto>
      </Itens>
      <Itens>
        <Texto>Cartao</Texto>
      </Itens>
      <Itens>
        <Texto>Servicos</Texto>
      </Itens>
      <Itens>
        <Texto>...</Texto>
      </Itens>
    </Barra>
  )
}