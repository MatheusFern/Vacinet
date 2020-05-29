import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Modal } from 'react-native';
import axios from 'axios';
import ListaD from '../Donate/ListaD';
import DonateList from './DonateList';
import DonateAdd from './DonateAdd';


const ViewCentral = styled.SafeAreaView`
  flex:1;
  flex-direction:column;
  padding:13px;
  
`;
const ListaDonate = styled.FlatList``;


const Grupo1 = styled.View`
flex:1;
  flex-direction:column;`;

const TextT = styled.Text`
  textAlign: left;
  fontSize:20px;
  font-weight:bold;
  padding:13px;
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
const TextButton = styled.TouchableOpacity`
`;
const RegrasText = styled.Text`
fontSize:20px;
padding-top:22px;
padding-right:5px;
`;
const Grupo2 = styled.View`
flex-direction:row;
justifyContent:space-between;

`;
const Grupo3 = styled.TouchableOpacity`
background-color:#00C2CB;
flex:1;
border-radius:15px;
margin:10px;
`;
const Text = styled.Text`
color:#FFF;
fontSize:20px;
padding:5px;
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



const DonateP = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false)

  const mostrar = () => {

    setModalVisible(true)
  }
  
  const Deletar = (id) => {
     
    axios.delete('http://192.168.25.2:3333/doacoes/delete/${id}' + id)
   .then(res => console.log(res.data))

  }

  
  useEffect(() => {
    fetch('http://192.168.25.2:3333/doacoes')
      .then((response) => response.json())
      .then((json) => setData(json.doacao))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));

  }, []);




  const IrDonates = () => {
    props.navigation.navigate('DonateL');
  }
  const IrRegras = () => {
    props.navigation.navigate('DonateR');
  }




  return (
    <ViewCentral>

      <Grupo1>
        <Grupo2>
          <TextT>Minhas doacoes</TextT>
          <TextButton onPress={IrRegras}>
            <RegrasText>Regras</RegrasText>
          </TextButton>
        </Grupo2>
        <ListaDonate
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Grupo3 onPress={mostrar}>
              <Text>Data da doacao:{item.date}</Text>
              <Text>Local:{item.local}</Text>
              <Text>Quantide de bolsas doadas:{item.qntBolsas}</Text>

            </Grupo3>


          )}
        />
        <Modal
          visible={modalVisible}
          animationType="fade"
          transparent={true}
        >
          <Box>
            <BoxBody>
              <TextoTitulo>Deletar doacao?</TextoTitulo>
              <ButtonBack2 onPress={Deletar}>
                <Text>DELETAR</Text>
              </ButtonBack2>

              <ButtonBack onPress={() => setModalVisible(false)}>
                <Text>VOLTAR</Text>
              </ButtonBack>

            </BoxBody>
          </Box>
        </Modal>

        <TextT>Registrar Doacao de sangue</TextT>
        <Add onPress={IrDonates}>
          <Plus>+</Plus>
        </Add>
      </Grupo1>
    </ViewCentral>
  )

}
DonateP.navigationOptions = () => {
  return {
    title: 'Doacao de Sangue',
    headerStyle: {
      backgroundColor: '#00C2CB',
      height: 80,
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
  }
}

export default DonateP;
