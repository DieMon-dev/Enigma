import React from 'react'
import {View} from 'react-native';
import { styled } from 'nativewind';
import { LinearGradient } from "expo-linear-gradient";
import Trudno from '../logo/Trudno';



const StyledLinearGradient = styled(LinearGradient)
const StyledView = styled(View)

interface StarterPageProps {
  navigation : any
}

interface StarterPageInterface {
  navigation : any
}

export default class TrudnoPage extends React.Component<StarterPageProps, StarterPageInterface>{
  constructor(props: any) {
    super(props);
    props.navigation.setOptions({
        headerShown: true,
        headerTransparent: true,
      });
  }

    render() {
      return (
        <StyledLinearGradient className="flex flex-1 w-full h-full items-center justify-center "
        colors={["#000000", "#6e7d98" ,"#9ea6b8"]}  onTouchStart={()=>  this.props.navigation.navigate("Home")}>
        <StyledView className="w-full mb-32">
          <Trudno></Trudno>
        </StyledView>
     </StyledLinearGradient>
      )}      
}