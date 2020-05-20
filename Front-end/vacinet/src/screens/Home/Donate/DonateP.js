import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import ListaD from '../Donate/ListaD';
import DonateList from './DonateList';
import DonateAdd from './DonateAdd';
import uuid from 'uuid/v4';
import { ActivityIndicator } from 'react-native';


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
  fontSize:25px;
  font-weight:bold;
  padding:13px;
`;
const Add = styled.TouchableOpacity`
height: 45px;
width: 45px;
background-color:#008F95;
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
const Grupo3 = styled.View`
background-color:#008F95;
flex:1;

`;
const Text = styled.Text`
fontSize:20px;`;


const DonateP = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.25.2:3000/doacoes')
      .then((response) => response.json())
      .then((json) => setData(json.date))
      
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
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.date}, {item.local}</Text>
          )}
        />


        

        <TextT>Doacoes:</TextT>
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
/*
<ListaDonate2
          data={doacoes}
          keyExtractor={doacoes => String(doacoes.id)}
          renderItem={({ item: doacoes }) => (
            <Grupo3>
              <RegrasText >{doacoes.data.date}</RegrasText>
              <RegrasText>{doacoes.data.local}</RegrasText>
              <RegrasText>{doacoes.data.qntBolsas}</RegrasText>
            </Grupo3>


          )}
        />

*/