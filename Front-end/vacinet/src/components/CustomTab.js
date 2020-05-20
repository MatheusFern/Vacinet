import React from 'react';
import styled from 'styled-components/native';



const CustomTabBar = styled.SafeAreaView`
width:100%;
height:100px;
background-color:#00C2CB;
flex-direction:row;
`;

const CustomTabBarButton = styled.TouchableOpacity`
flex:1;
justify-content:center;
padding-left:15px;
`;

const CustomTabBarText= styled.Text`
color:#FFF;
font-size:15px;
`;


export default (props) => {
  return(
  <CustomTabBar>
    {props.items.map((item, index)=>{
      return(
        <CustomTabBarButton key={index} onPress={()=>props.navigation.navigate(item.route)}>
          <CustomTabBarText>{item.text}</CustomTabBarText>
        </CustomTabBarButton>
      )
    })}
  </CustomTabBar>
  );
}