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
font-size:35px;
padding: 15px;
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
height:40px;
font-size: 18px;
background-color:#EEE;
margin-top:20px;
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
  align-self:center;
  margin-top:15px;
`;


const CadastroSub = (props) => {


  const Cadastro2 = () => {
    props.navigation.navigate('Home');
  }

  return (
    <Cadastro>
      
      <Scroll>
        <TituloText>Cadastro Ficha medica</TituloText>

        <Text>Tipo sanguineo</Text>
        <InputT
          placeholder="Informe seu tipo sanguineo"
          value={props.SaudeGS} onChangeText={e => props.setSaudeGS(e)}
        />

        <Text>Restricao Alergica</Text>
        <InputT
          placeholder="Informe se possui restricao alergica"
          value={props.SaudeAR} onChangeText={e => props.setSaudeAR(e)}
        />

        <Text>Medicamentos</Text>
        <InputT
          placeholder="Informe se toma algum medicamento"
          value={props.SaudeMED} onChangeText={e => props.setSaudeMED(e)}
        />
        <Text>Problemas de Saude</Text>
        <InputT
          placeholder="Informe se possui problema de saude"
          value={props.saudeP} onChangeText={e => props.setSaudeP(e)}

        />

        <BtnView onPress={Cadastro2}>
          <CadastrarBTN>Cadastrar</CadastrarBTN>
        </BtnView>
      </Scroll>
    </Cadastro>
  )
}

CadastroSub.navigationOptions = () => {
  return {
    title: 'Cadastro2'

  }
};

const mapStateToProps = (state) => {
  return {
    saudeP:state.healthReducer.saudeP,
    SaudeAR:state.healthReducer.SaudeAR,
    SaudeGS:state.healthReducer.SaudeGS,
    SaudeMED:state.healthReducer.SaudeMED

  };
}

const mapDispatchtoProps = (dispatch) => {
  return {
    setSaudeP: (saudeP) => dispatch({ type: 'SET_SAUDEP', payload: { saudeP: saudeP } }),
    setSaudeAR: (SaudeAR) => dispatch({ type: 'SET_SAUDEAR', payload: { SaudeAR: SaudeAR } }),
    setSaudeGS: (SaudeGS) => dispatch({ type: 'SET_SAUDEGS', payload: { SaudeGS: SaudeGS } }),
    setSaudeMED: (SaudeMED) => dispatch({ type: 'SET_SAUDEMED', payload: { SaudeMED: SaudeMED } })


  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(CadastroSub);