import React from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';


const Cadastro = styled.SafeAreaView`
flex:1;
flex-direction:column;
margin:20px;
justifyContent:center;
`;

const Scroll = styled.ScrollView`
flex:1;
`;

const TituloText = styled.Text`
font-size:40px;
padding: 15px;
textAlign:center;
color:#FFF;
font-weight:bold;
`;

const Text = styled.Text`
font-size:25px;
font-weight:bold;
padding-top:5px;
color:#FFF;
padding-left:10px;
`;

const InputT = styled.TextInput`
width:100%;
height:40px;
font-size: 18px;
background-color:#EEE;
margin-top:20px;
border-radius:10px;
padding:10px;
padding-bottom:10px;
`;



const CadastrarBTN = styled.Button`
border-radius:25px;
padding-top:25px;
`;

const Container = styled.View`
border-radius:15px;
background-color:#00C2CB;


`;
const Saude = (props) => {
  return (
    <Cadastro>
      <Container>
      
        <TituloText>Minha Saúde</TituloText>

        <Text>Problemas de Saúde: {props.saudeP}</Text>


        <Text>Alergias e reações: {props.SaudeAR} </Text>


        <Text>Grupo Sanguíneo: {props.SaudeGS}</Text>

        <Text>Medicamentos: {props.SaudeMED}</Text>

        

        <Text>Contatos de Emergência</Text>
        <Text>NANDO VIANA</Text>
        <Text>FABIANO COMBOTA</Text>
      
      </Container>
    </Cadastro>
  )
}

Saude.navigationOptions = () => {
  return {
    title: 'Minha Saúde',
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
    saudeP: state.healthReducer.saudeP,
    SaudeAR: state.healthReducer.SaudeAR,
    SaudeGS: state.healthReducer.SaudeGS,
    Saudepeso: state.healthReducer.Saudepeso,
    SaudeMED: state.healthReducer.SaudeMED

  };
}

const mapDispatchtoProps = (dispatch) => {
  return {


  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Saude);