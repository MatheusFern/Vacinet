import React, {useState} from 'react';
import styled from 'styled-components/native';
import uuid from 'uuid/v4';
import ListaD from './ListaD';

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
const Button = styled.Button``;

const ViewButton = styled.View`
margin-top:10px;
`;

export default (props) => {
  const [ dia , setDatas] = useState('');
  const [ local,setLocal] = useState('');
  const [ bolsas,setBolsas] = useState('');
  
  


  const cadastrar = () => {
    let items = [...props.items];
    items.push({
      id:uuid(),
      Data:dia,
      Local:local,
      Bolsas:bolsas

    })

   /* if ( dia, local, bolsas){
      setItemsL();
  }
  */
  props.setItems(items)
  }
  
  return (
    <ViewCentral>
      <TextoTitulo>Data:</TextoTitulo>
      <Input 
      placeholder="Insira a data da doacao"
      value={dia}
      onChangeText={e=>setDatas(e)}
      

      />
      <TextoTitulo>Local:</TextoTitulo>
      <Input 
      placeholder="Insira o local da doacao"
      onChangeText={f=>setLocal(f)}
      value={local}
      />

      <TextoTitulo>Quantas Bolsas:</TextoTitulo>
      <Input 
      placeholder="Insira quantas bolsas foram doadas"
      onChangeText={b=>setBolsas(b)}
      value={bolsas}
      />
    
    
    <Button title="registrar"
    color='#00C2CB'
    returnKeyType="send"
    onPress={cadastrar}
    
    />
    
    </ViewCentral>
  )

}