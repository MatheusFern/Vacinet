import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';

const ViewLogin = styled.SafeAreaView`
flex:1;
flex-direction:column;
justifyContent:center;
align-items:center;
margin:20px;
`;

const BVtexto = styled.Text`
  textAlign: center;
  fontSize:30px;
  color:#008F95;
`;
const TextLogin = styled.Text`
  padding-top:5px;  
  fontSize:15px;
  font-weight:bold;
  textAlign: left;
`;
const InputEmail = styled.TextInput`
width:90%;
height:40px;
font-size: 18px;
background-color:#EEE;
margin-top:20px;
border-radius:10px;
padding:10px;
`;
const InputSenha = styled.TextInput`
width:90%;
height:40px;
font-size: 18px;
background-color:#EEE;
margin-top:20px;
border-radius:10px;
padding:10px;
`;
const TextSenhaE = styled.Text`
font-size: 20px;
color:#00C2CB;`;

const ButtonView = styled.View`
padding-top:10px;
`;
const InputB = styled.Button`


`;
const Buttao = styled.TouchableOpacity`
padding:10px;

`;


const SenhaLost = (props) => {
  const [email, setEmail] = useState('');


  const IrHome = () => {
    props.navigation.navigate('Welcome');
  }

  return (
    <ViewLogin>
      <Image source={require('../assets/seringa.png')}
        style={{ width: 50, height: 50 }} />
      <BVtexto>Informe seu Email</BVtexto>
      <TextSenhaE>Enviaremos um link para recuperar a sua senha</TextSenhaE>
      <TextLogin>E-mail</TextLogin>
      <InputEmail
        value={email} onChangeText={e => setEmail(e)}
        placeholder="usario@gmail.con"
      />



      <ButtonView>
        <InputB
          onPress={IrHome}
          title={"Retornar"}
          color="#00C2CB"

        />

      </ButtonView>
    </ViewLogin>

  )
}

SenhaLost.navigationOptions = () => {
  return {
    title: 'senha'
  }
}
export default SenhaLost;
