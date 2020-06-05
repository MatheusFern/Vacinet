import React from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';


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
height: 175px;
width: 175px;
margin: 15px;
justifyContent:center;
background-color:#00C2CB;
border-radius:25px;

`;
const Texto = styled.Text`
textAlign: center;
  fontSize:20px;
  color:white;
`;
const ImageButton = styled.Image`
alignItems:stretch;
align-self:center;
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
          <ImageButton source={require('../assets/icons/I.png')}
            style={{ width: 120, height: 120 }}
            
          />
          <Texto>IMC</Texto>
        </Itens>
        <Itens onPress={IrDonate}>
        <ImageButton source={require('../assets/icons/D.png')}
            style={{ width: 120, height: 120 }}
            
          />
          <Texto>Doação de Sangue</Texto>
        </Itens>
        <Itens onPress={IrExamns}>
        <ImageButton source={require('../assets/icons/E.png')}
            style={{ width: 120, height: 120 }}
            
          />
          <Texto>Exames</Texto>
        </Itens>
        <Itens onPress={IrTransplant}>
        <ImageButton source={require('../assets/icons/T.png')}
            style={{ width: 120, height: 120 }}
            
          />
          <Texto>Transplante</Texto>
        </Itens>
      </BodyHome>
    </Container>
  )

}

Home.navigationOptions = () => {
  return {
    title: 'Olá [usuario]',

    headerStyle: {
      backgroundColor: '#00C2CB',
      height: 80,
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
  }
}
export default Home;