import React, { useState } from 'react';
import styled from 'styled-components/native';
import ListaD from '../Donate/ListaD';
import DonateList from './DonateList';
import DonateAdd from './DonateAdd';
import uuid from 'uuid/v4';



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

const DonateP =  (props) => {
  const [items, setItems] = useState(ListaD);
  
  const IrDonates = () => {
    props.navigation.navigate('DonateL');
  }
  

  return (
    <ViewCentral>
      
      <Grupo1>
        <TextT>Minhas doacoes</TextT>

        <ListaDonate
          data={items}
          renderItem={({ item }) => <DonateList data={item} />}
          keyExtractor={(item) => item.id}
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
    title: 'Exames'
  }
}

export default DonateP;
/*
<DonateAdd items={items} setItems={setItems} />
*/