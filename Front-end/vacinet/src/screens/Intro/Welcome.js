import React from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';

const BVview = styled.SafeAreaView`
  flex:1;
  align-items:center;
  flexDirection: column;
  justifyContent:space-evenly;
`;
const BVtexto = styled.Text`
  textAlign: center;
  fontSize:30px;
  color:#008F95
  font-weight:bold;
`;
const PerguntaTexto = styled.Text`
  textAlign: center;
  fontSize:25px;
`;
const Text = styled.Text`
padding-top:10px;
fontSize:15px;
color:#FFF;

`;
const SButon = styled.TouchableOpacity`
  backgroundColor:#00C2CB;
  width: 200px;
  alignItems:center;
  height: 45px;
  borderRadius:35px;
`;


const Screen = (props) => {

  const IrLogin = () => {
    props.navigation.navigate('Login');
  }
  const IrCadastro = () => {
    props.navigation.navigate('Cadastro');
  }

  return (
    <BVview>
      <Image source={require('../assets/seringa.png')}
        style={{ width: 150, height: 150 }} />
      <BVtexto>Bem vindo(a)</BVtexto>
      <PerguntaTexto>Ja é cadastrado ?</PerguntaTexto>
      <SButon onPress={IrLogin}
      >
        <Text>Ja sou cadastrado</Text>

      </SButon>

      <SButon onPress={IrCadastro}>
        <Text>Não sou cadastrado</Text>
      </SButon>

    </BVview>
  )
}

Screen.navigationOptions = () => {
  return {
    title: ''

  }
};

export default Screen;