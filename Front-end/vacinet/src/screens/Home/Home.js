import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
flex:1;
flexDirection: column;
align-items:center;
justifyContent:center;

`;
const BodyHome = styled.View`
height: 500px;
width: 100%;
justifyContent:space-around;
flexDirection: column;
flexWrap:wrap;

`;
const Itens = styled.TouchableOpacity`
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

const Home = (props) => {
  const IrIMC = () => {
    props.navigation.navigate('IMC');
  }

  const IrDonate = () => {
    props.navigation.navigate('Donate');
  }
  const IrTransplant = () => {
    props.navigation.navigate('Transplant');
  }
  const IrExamns = () => {
    props.navigation.navigate('Exams')
  }

  return (
    <Container>
      <BodyHome>
        <Itens onPress={IrIMC}>
          <Texto>calculo de IMC </Texto>
        </Itens>
        <Itens onPress={IrDonate}>
          <Texto>Doacao de Sangue</Texto>
        </Itens>
        <Itens onPress={IrExamns}>
          <Texto>Exames</Texto>
        </Itens>
        <Itens onPress={IrTransplant}>
          <Texto>Transplante</Texto>
        </Itens>
      </BodyHome>
    </Container>
  )

}

Home.navigationOptions = () => {
  return {
    title: 'Tela principal'
  }
}
export default Home;