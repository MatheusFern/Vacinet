import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
flex:1;
flex-direction:column;

`;
const TextRegistro = styled.Text`
textAlign: left;
  fontSize:25px;
  font-weight:bold;
  padding:13px;
`;
const TextTitulo = styled.Text`
textAlign: center;
fontSize:30px;
font-weight:bold;
padding:13px;
color:#FFF;
`;
const ListaCartao = styled.FlatList``;

const Text = styled.Text`
color:#FFF;
fontSize:20px;
padding:5px;
`;
const ContainerList = styled.View`
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


const Cartao = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('http://192.168.25.2:3333/cartaoVacina')
      .then((response) => response.json())
      .then((json) => setData(json.cartaoVacina))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));

  }, []);
  const Ircadastrar = () =>{
    props.navigation.navigate('AddVacina')
  }


  return (
    <Container>
      <TextRegistro >Ultimas Vacinas</TextRegistro>
      <ListaCartao
      data={data}
      keyExtractor={({ id }, index) => id}
      renderItem = {({item})=>(
        <ContainerList>
          <TextTitulo>{item.nomeVacina}</TextTitulo>
          <Text>Data da Vacina: {item.dataVacinacao}</Text>
          <Text>Lote da Vacina: {item.lote}</Text>
          <Text>Validade da Vacina: {item.validade}</Text>
          <Text>Aplicador: {item.aplicador}</Text>

        </ContainerList>

      )}
      />
      <Add onPress={Ircadastrar} >
        <Plus>+</Plus>
      </Add>
      
      
    </Container>
  )
}



Cartao.navigationOptions = () =>{
  return{
    title:'Ultimas vacinas',
    headerStyle: {
      backgroundColor: '#00C2CB',
      height: 80,
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',

  }
};
export default Cartao;
