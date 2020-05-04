import React from 'react';
import styled from 'styled-components/native';
import { Button } from 'native-base';

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


export default () => {
  return (
    <Cadastro>
      <Scroll>
        <TituloText>Cadastro</TituloText>

        <Text>Nome</Text>
        <InputT
          placeholder="Informe seu nome"
        />

        <Text>Cpf</Text>
        <InputT
          placeholder="Informe seu cpf"
        />

        <Text>Data de Nascimento</Text>
        <InputT
          placeholder="Informe sua data de nascimento"
        />
        <Text>Telefone</Text>
        <InputT
          placeholder="Informe seu telefone"
        />
        <Text>E-mail</Text>
        <InputT
          placeholder="Informe seu e-mail"
        />
        <Text>Confirmar E-mail</Text>
        <InputT
          placeholder="Confimer seu e-mail"
        />
        <Text>Senha</Text>
        <InputT
          placeholder="Senha"
        />
        <Text>Confirmar Senha</Text>
        <InputT
          placeholder="Confirmar Senha"
        />

        <CadastrarBTN title={"Cadastrar"} />
      </Scroll>
    </Cadastro>
  )
}