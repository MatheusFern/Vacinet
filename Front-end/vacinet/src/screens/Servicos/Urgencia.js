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

const Urgencia = () => {
  return (
    <Container>
      <Text>UPAS </Text>
      <Groupitems>
        <TextTitulo>- UPA Eduardo Campos </TextTitulo>
        <TextS>Telefone:(00) 00000-0000</TextS>
        <TextS>Local: Rua exemplo Logo Ali </TextS>

      </Groupitems>
      <TextTitulo>+ UPA IBURA </TextTitulo>
      <TextTitulo>+ UPA BARRA DE JANGADA  </TextTitulo>
    </Container>
  )
}
Urgencia.navigationOptions = () => {
  return {
    title: 'Urgência',
    headerStyle: {
      backgroundColor: '#00C2CB',
      height: 80,
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
  }
}

export default Urgencia;