import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
flex:1;
flexDirection: column;
justifyContent:flex-start;
`;
const Text = styled.Text`
fontSize:20px;
padding:15px;
`;
const Groupitems = styled.View`
margin-left:15px;
width:90%;
background-color:#DDD;
padding :13px;
border-radius:15px;
`;
const TextTitulo = styled.Text`
fontSize:20px;
font-weight:bold;
padding:15px;
`;
const TextS = styled.Text`
fontSize:20px;
padding:20px;

`;

const Postos = () => {
  return (
    <Container>
      <Text>Postos de Saúde</Text>
      <Groupitems>
        <TextTitulo>- USF ODORICO MELO </TextTitulo>
        <TextS>Telefone:(00) 00000-0000</TextS>
        <TextS>Local: Lorem ipsum dolor sit amet, consectetur adipiscing elit </TextS>

      </Groupitems>
      <TextTitulo>+ USF Comportas </TextTitulo>
      <TextTitulo>+ USF Inaldo Alves de Franca  </TextTitulo>
    </Container>
  )
}
Postos.navigationOptions = () => {
  return {
    title: 'Postos de Saúde',
    headerStyle: {
      backgroundColor: '#00C2CB',
      height: 80,
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
  }
}

export default Postos;