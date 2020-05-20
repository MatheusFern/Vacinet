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

const CalcularB = styled.Button`
padding-top: 25px;
`;

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
      <TituloText> Calculo de IMC </TituloText>

      <InputP
        placeholder="Qual e o seu peso"
        keyboardType="numeric"
        value={peso}
        onChangeText={p => setPeso(p)}
      />

      <InputA
        placeholder="Qual a sua altura"
        keyboardType="numeric"
        value={altura}
        onChangeText={a => setAltura(a)}
      />


      <CalcularB title={"Calcular"} onPress={calc} />
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
    title: 'calculo de IMC',
    headerStyle: {
      backgroundColor: '#00C2CB',
      height: 80,
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
  }
}

export default IMC;