import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
flex:1;
flexDirection: column;
align-items:center;
justifyContent:center;
`;

const Button = styled.TouchableOpacity`
height: 200px;
width: 90%;
background-color:#008F95;
border-radius:25px;
justifyContent:center;
margin:15px;
`;

const Text = styled.Text`
textAlign: center;
  fontSize:25px;
  color:white;
`;

const Cards = (props) => {
  const IrCartao = () => {
    props.navigation.navigate('Cartao');
  }
  
  
  return (
    <Container>
      <Button onPress={IrCartao}>
        <Text>crianca</Text>
      </Button>
      <Button onPress={IrCartao}>
        <Text>adulto</Text>

      </Button>
      <Button onPress={IrCartao}>
        <Text>idoso</Text>

      </Button>
    </Container>
  )
}
Cards.navigationOptions = () =>{
  return{
    title:'Cartao',
    headerStyle: {
      backgroundColor: '#00C2CB',
      height: 80,
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',

  }
};

export default Cards;