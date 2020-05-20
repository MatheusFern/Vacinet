import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';
import { connect } from 'react-redux';


const ViewLogin = styled.SafeAreaView`
flex:1;
flex-direction:column;
justifyContent:center;
align-items:center;
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


const Screen = (props) => {

  const [senha, setSenha] = useState('');

  const IrHome = () => {
    props.navigation.navigate('Home');
  }
  const IrSenha = () => {
    props.navigation.navigate('SenhaLost');
  }

  return (
    <ViewLogin>
      <Image source={require('../assets/seringa.png')}
        style={{ width: 130, height: 130 }} />
      <BVtexto>Bem vindo de volta!</BVtexto>

      <TextLogin>E-mail</TextLogin>
      <InputEmail
        value={props.email} onChangeText={e => props.setEmail(e)}
        placeholder="usario@gmail.con"
      />
      <TextLogin>Senha</TextLogin>
      <InputSenha
        value={props.senha} onChangeText={e => props.setSenha(e)}
        placeholder="******"
      />

      <Buttao onPress={IrSenha}>
        <TextSenhaE>Esqueceu sua senha?</TextSenhaE>
      </Buttao>

      <ButtonView>
        <InputB
          onPress={IrHome}
          title={"login"}
          color="#00C2CB"

        />

      </ButtonView>

    </ViewLogin>

  )
}

Screen.navigationOptions = () => {
  return {
    title: 'login'
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.userReducer.email,
    senha: state.userReducer.senha
  };
}

const mapDispatchtoProps = (dispatch) => {
  return {
    setEmail: (email) => dispatch({ type: 'SET_EMAIL', payload: { email: email } }),
    setSenha: (senha) => dispatch({ type: 'SET_SENHA', payload: { senha: senha } })
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Screen);
