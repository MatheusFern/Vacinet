import React from 'react';
import styled from 'styled-components/native';

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
const Saude = () =>{
  return (
    <Cadastro>
      <Scroll>
        <TituloText>Minha Saude</TituloText>

        <Text>Problemas de Saude</Text>
        <InputT
          placeholder="Informe se possui problema de saude"
        />

        <Text>Alergias e reacoes </Text>
        <InputT
          placeholder="Informe se possui alergia "
        />

        <Text>Grupo Sanguineo</Text>
        <InputT
          placeholder="Qual o seu tipo Sanguineo"
        />
        <Text>Peso em Kg</Text>
        <InputT
          placeholder="Informe seu Peso em Kilogrmas"
        />
        <Text>Altura em CM</Text>
        <InputT
          placeholder="Informe sua Altura"
        />
        <Text>Contatos de Emergencia</Text>
       
      </Scroll>
    </Cadastro>
  )
}

Saude.navigationOptions = () =>{
  return{
    title:'Minha Saude'

  }
};

export default Saude;