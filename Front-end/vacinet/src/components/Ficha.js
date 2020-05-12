import React from 'react';
import styled from 'styled-components/native';
import CheckBox from '@react-native-community/checkbox';

const View = styled.SafeAreaView`
flex:1;
flexDirection: column;
justifyContent:space-around;
margin:10px;

`;
const TextoTitulo = styled.Text`
  textAlign: center;
  fontSize:30px;
  color:#008F95;
  font-weight:bold;
`;
const GroupText = styled.View`
justifyContent:center;`;

const TextoItem = styled.Text`
  fontSize:25px;
`;
const InputT = styled.TextInput`
width:90%;
height:40px;
font-size: 18px;
background-color:#EEE;
margin-top:20px;
border-radius:10px;
padding:10px;
padding-bottom:10px;
`;
const BtnCadastrar = styled.Button``;

export default () => {
  return (
    <View>
      <TextoTitulo>Ficha Medica</TextoTitulo>
      <GroupText>
        <TextoItem>Tipo Sanguineo</TextoItem>
        <InputT
          placeholder="Informe qual o seu tipo sanguineo"
        />
        <TextoItem>Restricao Alergica</TextoItem>
        <InputT
          placeholder="Informe se possui restricao alergica"
        />
        <TextoItem>Medicamentos</TextoItem>
        <InputT
          placeholder="Informe se toma algum tipo de medicamento"
        />
        <TextoItem>Problemas de Saude</TextoItem>
        <InputT
          placeholder="Informe se possui problema de saude"
        />
      </GroupText>
      
      
      <BtnCadastrar
        title={'Cadastrar'}
        color='#00C2CB'
      />
    </View>
  )
}
/*
<CheckBox
        value={true}
        disabled={false}
      />
*/