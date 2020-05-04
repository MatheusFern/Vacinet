import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';

const Header = styled.View`

flexDirection: row;

height: 90px;
width: 100%;
background-color:#00C2CB;
justifyContent:center;
padding: 15px;



`;

const Texto = styled.Text`
  textAlign: center;
  fontSize:30px;
  color:white;
  padding-top: 15px;
`;


export default () =>  {
  return (
    <Header>
      
      <Image source={require('../assets/seringa.png')}
      style={{width: 50, height:50}}
      />
      <Texto>Ola [usuario] </Texto>
      
    </Header>
  )
}