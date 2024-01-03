import React from 'react'
import {Text, View, TextInput} from 'react-native';
import { styled } from 'nativewind';
import { LinearGradient } from "expo-linear-gradient";
import EnigmaMainLogo from '../logo/EnigmaMain';
import EnigmaSignInUpAPI from '../../api/SignInUpAPI';

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledTextInput = styled(TextInput)
const StyledLinearGradient = styled(LinearGradient)
export default class LoginPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      password: String,
      number: String,
    };
    props.navigation.setOptions({
      headerShown: false,
      headerTransparent: true,
    });
  }


  handleLogin = (number: string) => {
    this.setState({number: number.toString()})
 }

  handlePassword = (password: string) => {
    this.setState({password: password})
  }

  async loginCheckOut(){
    const element = new EnigmaSignInUpAPI()
    await element.Login(this.state.number, this.state.password).then(response =>{
      if(response === true){
        alert("Thank you for login in")
      }else{
        alert("No user found. Please register. Try again!")
      }
    })
  }



  render(){  
    return (
      <StyledLinearGradient className="flex flex-1 w-full h-full items-center justify-center "
      colors={["#20242c", "#6e7d98" ,"#9ea6b8"]} start={[0.5, 0.01]}>
        <StyledView className="flex items-start justify-start mr-80 mt-12 h-10"><StyledText className="text-3xl text-white" onPress={()=> this.props.navigation.navigate("Home")}>←</StyledText></StyledView>
        <EnigmaMainLogo></EnigmaMainLogo>
        <StyledView className="flex flex-col w-full gap-y-2 m-4 p-10  w-72">
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
              className="border-b-2 border-solid h-8 w-56 bg-slate-500 text-white text-center"
            />
          </StyledView>
        </StyledView>
        <StyledText className="rounded-full bg-[#20242cc7] h-10 w-56 p-1 mb-32 text-white text-xl font-bold text-center" onPress={()=> this.loginCheckOut()}>Log in</StyledText>
      </StyledLinearGradient>
    );
  }
}