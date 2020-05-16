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
font-size:35px;
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
        />

        <Text>Restricao Alergica</Text>
        <InputT
          placeholder="Informe se possui restricao alergica"
        />

        <Text>Medicamentos</Text>
        <InputT
          placeholder="Informe se toma algum medicamento"
        />
        <Text>Problemas de Saude</Text>
        <InputT
          placeholder="Informe se possui problema de saude"
        />
        
        <BtnView>
        <CadastrarBTN title={"Cadastrar"} 
        onPress={Cadastro2}
        color='#00C2CB'
        />
        </BtnView>
      </Scroll>
    </Cadastro>
  )
}

CadastroSub.navigationOptions = () =>{
  return{
    title:'Cadastro2'

  }
};

export default CadastroSub;