import React from 'react'
import {View} from 'react-native';
import { styled } from 'nativewind';
import { LinearGradient } from "expo-linear-gradient";
import EnigmaMainLogo from '../logo/EnigmaMain';


const StyledLinearGradient = styled(LinearGradient)
const StyledView = styled(View)

interface StarterPageProps {
  navigation : any
}

interface StarterPageInterface {
  navigation : any
}

export default class StarterPage extends React.Component<StarterPageProps, StarterPageInterface>{
  constructor(props: any) {
    super(props);
    props.navigation.setOptions({
        headerShown: true,
        headerTransparent: true,
      });
  }

  componentDidMount(): void {
    setTimeout(() => {
      this.props.navigation.navigate("Home")
    }, 650);
  }

    render() {
      return (
        <StyledLinearGradient className="flex flex-1 w-full h-full items-center justify-center "
        colors={["#000000", "#6e7d98" ,"#9ea6b8"]}>
        <StyledView className="w-full mb-32">
          <EnigmaMainLogo></EnigmaMainLogo>
        </StyledView>
     </StyledLinearGradient>
      )}      
}