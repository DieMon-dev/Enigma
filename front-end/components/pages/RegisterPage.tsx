import React from 'react'
import {Text, View, TextInput} from 'react-native';
import { styled } from 'nativewind';
import { LinearGradient } from "expo-linear-gradient";
import EnigmaMainLogo from '../logo/EnigmaMain';

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledTextInput = styled(TextInput)
const StyledLinearGradient = styled(LinearGradient)

export default class RegisterPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      password: String,
      number: String,
      nickName: String
    };
    props.navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
    });
  }


  handleLogin = (number: string) => {
    let new_number = parseInt(number)
    this.setState({number: new_number})
    console.log(this.state.number)
  }

  handleNickName = (nickName: string) => {
    this.setState({nickName: nickName})
    console.log(this.state.nickName)
  }

  handlePassword = (password: string) => {
    this.setState({password: password})
    console.log(this.state.password)
  }

  render(){  
    return (
      <StyledLinearGradient className="flex flex-1 w-full h-full items-center justify-center "
      colors={["#20242c", "#6e7d98" ,"#9ea6b8"]} start={[0.5, 0.01]}>
        <EnigmaMainLogo></EnigmaMainLogo>
        <StyledView className="flex flex-col w-full gap-y-2 m-4 p-10  w-72">
          <StyledView className="items-center justify-center">
            <StyledText className="text-white">Your name</StyledText>
            <StyledTextInput
              maxLength={12}
              onChangeText={this.handleNickName}
              value={this.state.nickName}
              className="border-b-2 border-solid h-8 w-56 bg-slate-500 text-white text-center"
            />
          </StyledView>
          <StyledView className="items-center justify-center">
            <StyledText className="text-white">Your phone number</StyledText>
            <StyledTextInput
              maxLength={9}
              onChangeText={this.handleLogin}
              value={this.state.number}
              keyboardType="number-pad"
              className="border-b-2 border-solid h-8 w-56 bg-slate-500 text-white text-center"
              />
          </StyledView>
          <StyledView className="items-center justify-center">
            <StyledText className="text-white">Your password</StyledText>
            <StyledTextInput
              maxLength={20}
              onChangeText={this.handlePassword}
              value={this.state.password}
              secureTextEntry={true}
              className="border-b-2 border-solid h-8 w-56 bg-slate-500 text-white"
            />
          </StyledView>
        </StyledView>
        <StyledText className="rounded-full bg-[#20242cc7] h-10 w-56 p-1 mb-32 text-white text-xl font-bold text-center" onPress={()=> this.props.navigation.navigate("SingUp")}>Create an account</StyledText>
      </StyledLinearGradient>
    );
  }
}
  

  