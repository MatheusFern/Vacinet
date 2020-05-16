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

const Farmacias = () => {
  return (
    <Container>
      <Text>Farmacias</Text>
      <TextTitulo>+ Avenida Barreto de Menezes, Cajueiro Seco </TextTitulo>
      <TextTitulo>+ Avenida Barao de Lucena, Jaboatao Centro </TextTitulo>
      <TextTitulo>+ Avenida Dois Rios, Ibura</TextTitulo>
      <TextTitulo>+ Rua Pontegy. Ipsep - Recife </TextTitulo>
    </Container>
  )
}
Farmacias.navigationOptions = () => {
  return {
    title: 'Farmacias',
    headerStyle: {
      backgroundColor: '#00C2CB',
      height: 80,
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
  }
}

export default Farmacias;