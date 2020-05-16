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

  const IrHospital = () => {
    props.navigation.navigate('Hospital');
  }


  const IrPostos = () => {
    props.navigation.navigate('Postos');
  }


  const IrUrgencia = () => {
    props.navigation.navigate('Urgencia');
  }
  
   const IrFarmacias = () => {
     props.navigation.navigate('Farmacias')
   }
 
  return (
    <Container>
      <BodyHome>
        <Itens onPress={IrHospital}>
          <Texto>Hospitais </Texto>
        </Itens>
        <Itens onPress={IrPostos}>
          <Texto>Postos de saude</Texto>
        </Itens>
        <Itens onPress={IrUrgencia}>
          <Texto>Servicos de urgencia</Texto>
        </Itens>
        <Itens onPress={IrFarmacias} >
          <Texto>Farmacia popular</Texto>
        </Itens>
      </BodyHome>
    </Container>
  )

}

Services.navigationOptions = () => {
  return {
    title: 'servicos ',
    headerStyle: {
      backgroundColor: '#00C2CB',
      height: 80,
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
  }
}
export default Services;