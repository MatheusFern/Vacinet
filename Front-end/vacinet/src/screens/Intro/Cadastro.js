import React from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';


const Cadastro = styled.SafeAreaView`
flex:1;
flex-direction:column;
justifyContent:center;
padding-left:10px;

`;
const Container = styled.View`

`;
const Scroll = styled.ScrollView`
flex:1;

`;

const TituloText = styled.Text`
font-size:40px;
padding-top: 15px;
textAlign:center;
color:#008F95
font-weight:bold;
`;

const Text = styled.Text`
font-size:18px;
font-weight:bold;
padding-top:5px;
`;

const InputT = styled.TextInput`
width:100%;

font-size: 18px;
background-color:#ddd;
margin-top:5px;
border-radius:10px;
padding:10px;
padding-bottom:10px;
`;



const CadastrarBTN = styled.Text`
padding-top:10px;
fontSize:15px;
color:#FFF;
`;

const BtnView = styled.TouchableOpacity`
  backgroundColor:#00C2CB;
  width: 200px;
  alignItems:center;
  height: 45px;
  borderRadius:35px;
`;


const Screen = (props) => {
  const Cadastro2 = () => {
    props.navigation.navigate('CadastroSub');
  }

  return (
    <Cadastro>

      <Scroll>
        <TituloText>Cadastro</TituloText>
        <Container>
          <Text>Nome</Text>
          <InputT
            placeholder="Informe seu nome"
            value={props.nome} onChangeText={e => props.setNome(e)}
          />

          <Text>Cpf</Text>
          <InputT
            placeholder="Informe seu cpf"
            value={props.cpf} onChangeText={e => props.setCpf(e)}
          />

          <Text>Data de Nascimento</Text>
          <InputT
            placeholder="Informe sua data de nascimento"
            value={props.data} onChangeText={e => props.setData(e)}
          />
          <Text>Telefone</Text>
          <InputT
            placeholder="Informe seu telefone"
            value={props.telefone} onChangeText={e => props.setTelefone(e)}
          />
          <Text>E-mail</Text>
          <InputT
            placeholder="Informe seu e-mail"
            value={props.email} onChangeText={e => props.setEmail(e)}
          />
          <Text>Confirmar E-mail</Text>
          <InputT
            placeholder="Confimer seu e-mail"
          />
          <Text>Senha</Text>
          <InputT
            placeholder="Senha"
            value={props.senha} onChangeText={e => props.setSenha(e)}
          />
          <Text>Confirmar Senha</Text>

          <InputT
            placeholder="Confirmar Senha"
          />


          <BtnView onPress={Cadastro2}>
            <CadastrarBTN>Cadastrar</CadastrarBTN>
          </BtnView>
        </Container>
      </Scroll>


    </Cadastro>
  )
}

Screen.navigationOptions = () => {
  return {
    title: 'Cadastro'

  }
};

const mapStateToProps = (state) => {
  return {
    nome: state.cadastroReducer.nome,
    cpf: state.cadastroReducer.cpf,
    data: state.cadastroReducer.data,
    telefone: state.cadastroReducer.telefone,
    email: state.cadastroReducer.email,
    senha: state.cadastroReducer.senha
  };
}

const mapDispatchtoProps = (dispatch) => {
  return {
    setNome: (nome) => dispatch({ type: 'SET_NOME', payload: { nome: nome } }),
    setCpf: (cpf) => dispatch({ type: 'SET_CPF', payload: { cpf: cpf } }),
    setData: (data) => dispatch({ type: 'SET_DATA', payload: { data: data } }),
    setTelefone: (telefone) => dispatch({ type: 'SET_TELEFONE', payload: { telefone: telefone } }),
    setEmail: (email) => dispatch({ type: 'SET_EMAIL', payload: { email: email } }),
    setSenha: (senha) => dispatch({ type: 'SET_SENHA', payload: { senha: senha } })
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Screen);