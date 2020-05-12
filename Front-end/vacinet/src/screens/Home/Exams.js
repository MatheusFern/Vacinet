import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
flex:1;
flexDirection: column;
align-items:flex-start;
justifyContent:center;
`;
const Text = styled.Text`

  fontSize:25px;
  font-weight:bold;
`;


const Exams = () =>{
return(
 <Container>
   <Text>+ PapaNicolau</Text>
   <Text>+ Mamas</Text>
   <Text>+ Desintometria Ossea</Text>
   <Text>+ Outros...</Text>
 </Container>
)

}
Exams.navigationOptions = () => {
  return {
    title: 'Exames'
  }
}
export default Exams;