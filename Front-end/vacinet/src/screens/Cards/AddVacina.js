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
  padding:5px;
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
const TextB = styled.Text`
padding-top:10px;
fontSize:15px;
color:#FFF;
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

const AddVacina = () => {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [lote, setLote] = useState('');
  const [validade, setVaidade] = useState('');
  const [aplicador, setAplicador] = useState('');

  const [modalVisible, setModalVisible] = useState(false)
 
  const registrar = () =>{
    fetch('http://192.168.25.2:3333/cartaoVacina/post', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nomeVacina:nome ,
        dataVacinacao:data,
        lote:lote ,
        validade:validade,
        aplicador:aplicador
      })
    });

    setModalVisible(true)
  }

  
  return (
    <Container>
      <TextoTitulo>Nome da Vacina</TextoTitulo>
      <Input
        placeholder="Insira o nome da Vacina"
        value={nome}
        onChangeText={e => setNome(e)}
      />
      <TextoTitulo>Data da Vacina</TextoTitulo>
      <Input
        placeholder="Insira a data da Vacina"
        value={data}
        onChangeText={e => setData(e)}
      />
      <TextoTitulo>Lote da Vacina</TextoTitulo>
      <Input
        placeholder="Insira o lote da Vacina"
        value={lote}
        onChangeText={e => setLote(e)}
      />
      <TextoTitulo>Validade da Vacina</TextoTitulo>
      <Input
        placeholder="Insira a validade da Vacina"
        value={validade}
        onChangeText={e => setVaidade(e)}
      />
      <TextoTitulo>Aplicador</TextoTitulo>
      <Input
        placeholder="Insira quem aplicou a Vacina"
        value={aplicador}
        onChangeText={e => setAplicador(e)}
      />
      <Button onPress={registrar} >
        <TextB>registrar</TextB>
      </Button>

      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
      >
        <Box>
          <BoxBody>
            <TextoTitulo>Vacina Registrada</TextoTitulo>
            <ButtonBack onPress={()=>setModalVisible(false)}>
              <Text>VOLTAR</Text>
            </ButtonBack>

          </BoxBody>
        </Box>
      </Modal>

    </Container>

  )

}
AddVacina.navigationOptions = () => {
  return {
    title: 'Registrar Vacina',
    headerStyle: {
      backgroundColor: '#00C2CB',
      height: 80,
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
  }
}

export default AddVacina;