import React from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

const Container = styled.SafeAreaView`
flex:1;
flexDirection:column;
justifyContent:space-around;
alignItems:center;
background-color:#FFF;
`;
const Text = styled.Text`
textAlign: center;
  fontSize:20px;
  padding: 10px
`;
const Background = styled.View`
width:90%;
alignItems:flex-start;
border-radius:15px;
background-color:#EEE;
`;

const Mydata = (props) => {
  return (
    <Container>
      <Background>
      <Text>Nome: {props.nome}</Text>
      <Text>CPF: {props.cpf}</Text>
      <Text>Data de Nascimento: {props.data}</Text>
      <Text>Telefone {props.telefone}</Text>
      <Text>Email: {props.email} </Text>
      </Background>
    </Container>
  )
}

Mydata.navigationOptions = () => {
  return {
    title: 'Meus Dados',
    headerStyle: {
      backgroundColor: '#00C2CB',
      height: 80,
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',

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

  }
}
export default connect(mapStateToProps, mapDispatchtoProps)(Mydata);