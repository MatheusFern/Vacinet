import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Modal } from 'react-native';
import axios from 'axios';

const Container = styled.SafeAreaView`
flex:1;
flexDirection: column;
padding:13px;
`;
const Text = styled.Text`
color:#FFF;
fontSize:20px;
padding:5px;
`;
const TextTitulo = styled.Text`
textAlign: center;
fontSize:30px;
font-weight:bold;
padding:13px;
`;
const ListaExame = styled.FlatList``;
const ContainerList = styled.TouchableOpacity`
background-color:#00C2CB;
flex:1;
border-radius:15px;
margin:10px;
`;
const Add = styled.TouchableOpacity`
height: 45px;
width: 45px;
background-color:#00C2CB;
border-radius:15px;
margin-left:15px;
`;
const Plus = styled.Text`
  textAlign: center;
  fontSize:25px;
  color:white;
  font-weight:bold;
  padding-top:2px;
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
  margin-top:5px;
`;
const ButtonBack2 = styled.TouchableOpacity`
backgroundColor:#FF0800;
  width: 200px;
  alignItems:center;
  height: 45px;
  borderRadius:35px;
  margin-top:5px;
`;
const TextoTitulo = styled.Text`
  textAlign: left;
  fontSize:25px;
  font-weight:bold;
  padding:13px;
`;

const Exams = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false)
  const [item, setItem] = useState({})

  const Deletar = async () => {
    const response = await axios.delete(`http://192.168.25.2:3333/exame/delete/${item._id}`)
    console.log(item.id, 'id')
    console.log(response, 'response')
  }

  const mostrar = (item) => {
    setItem(item)
    console.log(item,"item")
    setModalVisible(true)
  }


  useEffect(() => {
    fetch('http://192.168.25.2:3333/exame')
      .then((response) => response.json())
      .then((json) => setData(json.exame))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));

  }, []);




const IrAddExames =() => {
  props.navigation.navigate('AddExame')
}





  return (
    <Container>
      <TextTitulo>Meus Exames</TextTitulo>
      <ListaExame
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <ContainerList onPress={() => mostrar(item)} >
            <Text>Data do Exame: {item.date}</Text>
            <Text>Tipo do Exame: {item.local}</Text>
            <Text>Hora do Exame: {item.hrExame}</Text>
          </ContainerList>
        )}
      />
        <Modal
          visible={modalVisible}
          animationType="fade"
          transparent={true}
        >
          <Box>
            <BoxBody>
              <TextoTitulo>Deletar Exame?</TextoTitulo>
              <ButtonBack2 onPress={Deletar}>
                <Text>DELETAR</Text>
              </ButtonBack2>

              <ButtonBack onPress={() => setModalVisible(false)}>
                <Text>VOLTAR</Text>
              </ButtonBack>

            </BoxBody>
          </Box>
        </Modal>




      <Add onPress={IrAddExames} >
        <Plus>+</Plus>
      </Add>

    </Container>
  )

}
Exams.navigationOptions = () => {
  return {
    title: 'Exames',
    headerStyle: {
      backgroundColor: '#00C2CB',
      height: 80,
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
  }
}
export default Exams;