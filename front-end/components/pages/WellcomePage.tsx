import React from 'react'
import {Text, View, BackHandler} from 'react-native';
import { styled } from 'nativewind';
import { LinearGradient } from "expo-linear-gradient";
import EnigmaMainLogo from '../logo/EnigmaMain';
const StyledView = styled(View)
const StyledText = styled(Text)
const StyledLinearGradient = styled(LinearGradient)


interface WellcomePageProps {
  navigation : any
}

interface WellcomePageInterface {
  navigation : any
}

export default class WellcomePage extends React.Component<WellcomePageProps, WellcomePageInterface>{
  constructor(props: any) {
    super(props);
    props.navigation.setOptions({
      headerShown: false,
      headerTransparent: true,
    });
  }

  componentDidMount(): void {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    return true;
  }

    render() {

      return (
        <StyledLinearGradient className="flex flex-1 w-full h-full items-center justify-center "
        colors={["#0e0f14", "#484e5e" ,"#78829e"]} start={[0.5, 0.01]}>
          <EnigmaMainLogo></EnigmaMainLogo>
          <StyledView className="flex flex-row mr-32 mt-6">
            <StyledText className="text-4xl font-thin text-white">
              <StyledText className="text-4xl font-semibold text-white">E </StyledText>
               - STANDS FOR ENCRIPTION
              </StyledText>
          </StyledView>
          <StyledView className="flex ml-20 mt-6">
            <StyledText className="text-4xl text-right font-thin text-white">
                BE SECURED WHILE CHATTING
              </StyledText>
            </StyledView>
          <StyledView className="flex flex-col  m-2 p-10 h-64 w-42">  
          <StyledText className="rounded-full border border-solid bg-[#323639] h-10 p-1 text-white text-xl font-bold text-center" onPress={()=> this.props.navigation.navigate("SingUp")}>Sign up</StyledText>
          <StyledView className="justify-center items-center text-white mt-4">  
            <StyledText className="text-lg text-white">Existing account?</StyledText>
            <StyledText className="text-lg text-white" onPress={()=> this.props.navigation.navigate("SingIn")}>Log in</StyledText>  
          </StyledView>
        </StyledView>
     </StyledLinearGradient>
      )}      
}