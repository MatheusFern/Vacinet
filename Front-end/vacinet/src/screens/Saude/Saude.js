import React from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';


const Cadastro = styled.SafeAreaView`
flex:1;
flex-direction:column;
margin:20px;
`;

const Scroll = styled.ScrollView`
flex:1;
`;

const TituloText = styled.Text`
font-size:40px;
padding: 15px;
textAlign:center;
`;

const Text = styled.Text`
font-size:18px;
font-weight:bold;
padding-top:5px;
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

const BtnView = styled.View`
`;
const Saude = (props) => {
  return (
    <Cadastro>
      <Scroll>
        <TituloText>Minha Saude</TituloText>

        <Text>Problemas de Saude {props.saudeP}</Text>


        <Text>Alergias e reacoes{props.SaudeAR} </Text>


        <Text>Grupo Sanguineo {props.SaudeGS}</Text>

        <Text>medicamentos {props.SaudeMED}</Text>

        

        <Text>Contatos de Emergencia</Text>

      </Scroll>
    </Cadastro>
  )
}

Saude.navigationOptions = () => {
  return {
    title: 'Minha Saude',
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