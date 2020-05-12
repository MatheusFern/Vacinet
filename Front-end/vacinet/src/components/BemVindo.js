import React from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';

const BVview = styled.SafeAreaView`
  flex:1;
  align-items:center;
  flexDirection: column;
  justifyContent:space-around;
`;
const BVtexto = styled.Text`
  textAlign: center;
  fontSize:30px;
  color:#008F95;
`;
const PerguntaTexto = styled.Text`
  textAlign: center;
  fontSize:25px;
`;
const SButon = styled.Button`
  borderRadius:50px; 
  color:white;
`;


export default () =>  {
  return (
    <BVview>
      <Image source={require('../assets/seringa.png')}
        style={{ width: 50, height: 50 }} />
      <BVtexto>Bem vindo(a)</BVtexto>
      <PerguntaTexto>Ja e cadastrado</PerguntaTexto>
      <SButon title={"Ja sou cadastrado"} />
      <SButon title={"Nao sou cadastrado"} />
    </BVview>
  )
}