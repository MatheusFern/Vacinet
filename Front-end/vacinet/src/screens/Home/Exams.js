import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

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

const Exams = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

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
          <ContainerList>
            <Text>Data do Exame: {item.date}</Text>
            <Text>Tipo do Exame: {item.local}</Text>
            <Text>Hora do Exame: {item.hrExame}</Text>
          </ContainerList>
        )}
      />


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