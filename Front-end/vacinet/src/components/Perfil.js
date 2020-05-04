import React from 'react';
import styled from 'styled-components/native';

import { Image } from 'react-native';

const ViewPerfil = styled.SafeAreaView`
flex:1;
flexDirection:column;
justifyContent:space-between;
alignItems:center;
`;

const Text = styled.Text`
textAlign: center;
  fontSize:20px;
  padding: 10px
`;
const GroupText = styled.View`
padding: 25px;
alignItems:center;
`;
const ImageProfile = styled.Image`
width: 120px; 
height: 120px ;
borderRadius:500px; 
borderWidth: 1px ;

`;
const TextPerfil = styled.Text`
fontSize:25px;
color:#00C2CB;
font-weight:bold;
`;

export default () => {
  return (
    <ViewPerfil>
      <Image source={require('../assets/seringa.png')}
        style={{ width: 55, height: 55 }}
        resizeMode="center"
        
      />
      <ImageProfile source={require('../assets/perfil.jpg')}
        
        resizeMode="center"
      />
      <TextPerfil>[usario]</TextPerfil>
      <GroupText>
        <Text>Meus Dados</Text>
        <Text>Mensagens</Text>
        <Text>Ouvidoria</Text>
        <Text>Sobre</Text>
        <Text>Sair</Text>
      </GroupText>

    </ViewPerfil>
  )
}