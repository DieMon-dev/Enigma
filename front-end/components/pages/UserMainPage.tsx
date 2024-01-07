import React from 'react'
import {Text, View, TextInput} from 'react-native';
import { styled } from 'nativewind';
import { LinearGradient } from "expo-linear-gradient";
import EnigmaPageLogo from '../logo/EnigmaPage';

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledLinearGradient = styled(LinearGradient)

interface UserMainPageProps {
    navigation : any
  }
  
  interface UserMainPAgeInterface {
    navigation : any
}

export default class UserMainPage extends React.Component<UserMainPageProps, UserMainPAgeInterface> {
  constructor(props: any) {
    super(props);
    
    props.navigation.setOptions({
      headerShown: false,
      headerTransparent: true,
    });
  }




  render(){  
    return (
      <StyledLinearGradient className="flex flex-1 w-full h-full items-center justify-center "
      colors={["#20242c", "#6e7d98" ,"#9ea6b8"]} start={[0.5, 0.01]}>
        <EnigmaPageLogo></EnigmaPageLogo>
      </StyledLinearGradient>
    );
  }
}