import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Modal } from 'react-native';

const Container = styled.SafeAreaView`
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
const TextB = styled.Text`
padding-top:10px;
fontSize:15px;
color:#FFF;
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

const AddExame =  () => {
  const [data,setData] = useState('');
  const [local,setLocal] = useState('');
  const [hrExame, sethrExame] = useState('');
  const [modalVisible, setModalVisible] = useState(false)

const registrar = () =>{
  fetch('http://192.168.25.2:3333/exame/post', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        date: data,
        local: local,
        hrExame: hrExame
      })
    });
    setModalVisible(true)
}
  
  
  return(
  
  <Container>
    <TextoTitulo>Data do Exame</TextoTitulo>
    <Input
      placeholder="Insira a data do exame"
      value={data}
      onChangeText={e => setData(e)}
    />
    <TextoTitulo>Tipo do Exame</TextoTitulo>
    <Input
      placeholder="Insira o tipo do exame"
      value={local}
      onChangeText={l => setLocal(l)}
    />
    <TextoTitulo>Hora do Exame</TextoTitulo>
    <Input
      placeholder="Insira a hora do exame"
      value={hrExame}
      onChangeText={h => sethrExame(h)}
    />
    <Button onPress={registrar}>
      <TextB>Registrar</TextB>
    </Button>
    
    <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
      >
        <Box>
          <BoxBody>
            <TextoTitulo>Exame Registrado</TextoTitulo>
            <ButtonBack onPress={()=>setModalVisible(false)}>
              <Text>Voltar</Text>
            </ButtonBack>

          </BoxBody>
        </Box>
      </Modal>


  </Container>
  )
}
AddExame.navigationOptions = () => {
  return {
    title: 'Registrar Exame',
    headerStyle: {
      backgroundColor: '#00C2CB',
      height: 80,
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
  }
}
export default AddExame;