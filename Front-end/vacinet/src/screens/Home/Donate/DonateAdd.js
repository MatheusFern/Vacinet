import React, { useState } from 'react';
import styled from 'styled-components/native';
import uuid from 'uuid/v4';
import { Modal } from 'react-native';

import ListaD from './ListaD';
import axios from 'axios';

const ViewCentral = styled.SafeAreaView`
  flex:1;
  flexDirection: column;
  align-items:center;
  justifyContent:center;
`;
const TextoTitulo = styled.Text`
  textAlign: left;
  fontSize:25px;
  font-weight:bold;
  padding:13px;
`;
const Input = styled.TextInput`
width:90%;
height:40px;
font-size: 18px;
background-color:#EEE;
margin-top:20px;
border-radius:10px;
padding:10px;
`;
const Button = styled.TouchableOpacity`
backgroundColor:#00C2CB;
  width: 200px;
  alignItems:center;
  height: 45px;
  borderRadius:35px;
  align-self:center;
  margin-top:15px;
`;

const ViewButton = styled.View`
margin-top:10px;
`;
const Box = styled.View`
width:100%;
height:100%;
background-color:rgba(0,0,0,0.5);
justify-content:center;
align-items:center;
`;
const BoxBody = styled.View`
width:350px;
height:250px;
background-color:#fff;
border-radius:25px;
align-items:center;
justify-content:center;
`;
const ButtonBack = styled.TouchableOpacity`
backgroundColor:#00C2CB;
  width: 200px;
  alignItems:center;
  height: 45px;
  borderRadius:35px;
`;
const Text = styled.Text`
padding-top:10px;
fontSize:15px;
color:#FFF;
`;
const TextB = styled.Text`
padding-top:10px;
fontSize:15px;
color:#FFF;
`;

export default (props) => {
  const [dia, setDatas] = useState('');
  const [local, setLocal] = useState('');
  const [bolsas, setBolsas] = useState('');
  const [modalVisible, setModalVisible] = useState(false)



  const cadastrar = () => {
    

    
    fetch('http://192.168.25.2:3333/doacoes/post', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        date: dia,
        local: local,
        qntBolsas: bolsas
      })
    });
    /* if ( dia, local, bolsas){
       setItemsL();
   }
   */

    
    setModalVisible(true)
  }

  return (
    <ViewCentral>
      <TextoTitulo>Data:</TextoTitulo>
      <Input
        placeholder="Insira a data da doação"
        value={dia}
        onChangeText={e => setDatas(e)}


      />
      <TextoTitulo>Local:</TextoTitulo>
      <Input
        placeholder="Insira o local da doação"
        onChangeText={f => setLocal(f)}
        value={local}
      />

      <TextoTitulo>Quantas Bolsas:</TextoTitulo>
      <Input
        placeholder="Insira quantas bolsas foram doadas"
        onChangeText={b => setBolsas(b)}
        value={bolsas}
      />

       
       
        
      <Button onPress={cadastrar}>
        <TextB>Registrar</TextB>
      </Button>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
      >
        <Box>
          <BoxBody>
            <TextoTitulo>Doação Registrada</TextoTitulo>
            <ButtonBack onPress={()=>setModalVisible(false)}>
              <Text>Voltar</Text>
            </ButtonBack>

          </BoxBody>
        </Box>
      </Modal>
    </ViewCentral>
  )

}

