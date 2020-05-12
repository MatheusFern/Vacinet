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

const Services = (props) => {
  /*const IrIMC = () => {
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
*/
  return (
    <Container>
      <BodyHome>
        <Itens >
          <Texto>Hospitais </Texto>
        </Itens>
        <Itens >
          <Texto>Postos de saude</Texto>
        </Itens>
        <Itens >
          <Texto>Servicos de urgencia</Texto>
        </Itens>
        <Itens >
          <Texto>Farmacia popular</Texto>
        </Itens>
      </BodyHome>
    </Container>
  )

}

Services.navigationOptions = () => {
  return {
    title: 'servicos '
  }
}
export default Services;