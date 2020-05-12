import React from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';

const BVview = styled.SafeAreaView`
  flex:1;
  align-items:center;
  flexDirection: column;
  justifyContent:space-around;
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
const SButon = styled.Button`
  
`;


const Screen = (props) =>  {
  
  const IrLogin = () => {
    props.navigation.navigate('Login');
  }
  const IrCadastro = () => {
    props.navigation.navigate('Cadastro');
  }
  
  return (
    <BVview>
      <Image source={require('../assets/seringa.png')}
        style={{ width: 50, height: 50 }} />
      <BVtexto>Bem vindo(a)</BVtexto>
      <PerguntaTexto>Ja e cadastrado</PerguntaTexto>
      <SButon title={"Ja sou cadastrado"} 
      color='#00C2CB'
      onPress={IrLogin}
      />
      <SButon title={"Nao sou cadastrado"}
      color='#00C2CB' 
      onPress={IrCadastro}
      />
    </BVview>
  )
}

Screen.navigationOptions = () =>{
  return{
    title:''

  }
};

export default Screen;