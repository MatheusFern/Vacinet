import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Text, View, Button } from 'react-native';

const Page = styled.SafeAreaView`
  flex:1;
  align-items:center;
  
`;

const TituloText = styled.Text`
font-size:25px;
padding: 15px;
`;
const InputP = styled.TextInput`
width:90%;
height:40px;
font-size: 18px;
background-color:#EEE;
margin-top:20px;
border-radius:10px;
padding:10px;
`;
const InputA = styled.TextInput`
width:90%;
height:40px;
font-size: 18px;
background-color:#EEE;
margin-top:20px;
border-radius:10px;
padding:10px;
`;
const ResultArea = styled.View`
width:100%;
margin-top:30px;
background-color:#EEE;
padding:20px;
justify-content:center;
align-items:center;

`;
const ResultItemTittle = styled.Text`
font-size:18px;
font-weight:bold;
`;

const ResultItem = styled.Text`
font-size:15px;
margin-bottom:30px;
`;

const CalcularB = styled.TouchableOpacity`
backgroundColor:#00C2CB;
  width: 200px;
  alignItems:center;
  height: 45px;
  borderRadius:35px;
  align-self:center;
  margin-top:15px;
`;
const TextB = styled.Text`
padding-top:10px;
fontSize:15px;
color:#FFF;`;
const IMC = () => {

  //pega os valores
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [imc, setImc] = useState(0);

  const calc = () => {
    let nPeso = parseFloat(peso);
    let nAltura = parseFloat(altura);

    if (nPeso, nAltura) {
      setImc(nPeso / (nAltura * nAltura));
    }

  }


  return (
    <Page>
      <TituloText> Calcular meu IMC </TituloText>

      <InputP
        placeholder="Qual é o seu peso ?"
        keyboardType="numeric"
        value={peso}
        onChangeText={p => setPeso(p)}
      />

      <InputA
        placeholder="Qual é a sua altura ?"
        keyboardType="numeric"
        value={altura}
        onChangeText={a => setAltura(a)}
      />


      <CalcularB onPress={calc}>
        <TextB>Calcular</TextB>
      </CalcularB>
      {imc > 0 &&
        <ResultArea>
          <ResultItemTittle>Seu IMC</ResultItemTittle>
          <ResultItem>{parseFloat(imc).toFixed(2)}</ResultItem>
        </ResultArea>
      }
    </Page>
  )
}
IMC.navigationOptions = () => {
  return {
    title: 'Calculo de IMC',
    headerStyle: {
      backgroundColor: '#00C2CB',
      height: 80,
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
  }
}

export default IMC;