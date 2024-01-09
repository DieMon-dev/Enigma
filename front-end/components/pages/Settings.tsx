import React from 'react'
import {Text, View, TextInput} from 'react-native';
import { styled } from 'nativewind';
import { LinearGradient } from "expo-linear-gradient";
import EnigmaAPI from '../../api/SignInUpAPI';
import EnigmaTopLogo from '../logo/EnigmaTop';

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledTextInput = styled(TextInput)
const StyledLinearGradient = styled(LinearGradient)
interface SettingsProps {
  navigation : any
}

interface SettingsInterface {
  navigation : any,
  password: string,
  number: string,
  nickName: string,
  newPassword: string,
      newPassword1: string,
}

export default class SettingsPage extends React.Component<SettingsProps, SettingsInterface> {
  constructor(props: any) {
    super(props);
    this.state = {
      password: "",
      number: "",
      nickName: "",
      newPassword: "",
      newPassword1: "",
      navigation: []
    };
    props.navigation.setOptions({
      headerShown: false,
      headerTransparent: true,
    });
  }


  handleLogin = (number: string) => {
    this.setState({number: number})
  }

  handleNickName = (nickName: string) => {
    this.setState({nickName: nickName})
  }

  handlePassword = (password: string) => {
    this.setState({password: password})
  }

  async register(){
    console.log("RegisterClicked")
    const element = new EnigmaAPI()
    await element.Login_RegisterCheck(this.state.number).then(response =>{
      if(response === true){
        alert("This user is already exist, please login")
        this.props.navigation.navigate("SingIn")
      }else{
        let response = element.Register(this.state.number, this.state.password, this.state.nickName)
        this.props.navigation.navigate("UserPageLayout")
        console.log("Response in RegisterPage", response)
      }
  
    })}

  render(){  
    return (
      <StyledLinearGradient className="flex flex-1 w-full h-full items-center justify-center "
      colors={["#20242c", "#6e7d98" ,"#9ea6b8"]} start={[0.5, 0.01]}>
        <StyledView className="relative bottom-28">
            <EnigmaTopLogo></EnigmaTopLogo>
        </StyledView>
        <StyledText className=" relative bottom-16 h-10  w-60 p-1 text-white text-xl font-bold text-center">
            Update your profile info:
        </StyledText>
        <StyledView className="relative bottom-24 flex-col w-full gap-y-2 m-4 p-10  w-72">
          <StyledView className="items-center justify-center">
            <StyledText className="text-white">Username</StyledText>
            <StyledTextInput
              maxLength={12}
              onChangeText={this.handleNickName}
              value={this.state.nickName}
              className="border-b-2 border-solid h-8 w-56 bg-slate-500 text-white text-center"
            />
          </StyledView>
          <StyledView className="items-center justify-center">
            <StyledText className="text-white">Phone number</StyledText>
            <StyledTextInput
              maxLength={9}
              onChangeText={this.handleLogin}
              value={this.state.number}
              keyboardType="number-pad"
              className="border-b-2 border-solid h-8 w-56 bg-slate-500 text-white text-center"
              />
          </StyledView>
          <StyledView className="items-center justify-center">
            <StyledText className="text-white">Old Password</StyledText>
            <StyledTextInput
              maxLength={20}
              onChangeText={this.handlePassword}
              value={this.state.password}
              secureTextEntry={true}
              className="border-b-2 border-solid h-8 w-56 bg-slate-500 text-white"
            />
          </StyledView>
          <StyledView className="items-center justify-center">
            <StyledText className="text-white">New Password</StyledText>
            <StyledTextInput
              maxLength={20}
              onChangeText={this.handlePassword}
              value={this.state.password}
              className="border-b-2 border-solid h-8 w-56 bg-slate-500 text-white"
            />
          </StyledView>
          <StyledView className="items-center justify-center">
            <StyledText className="text-white">Repeat New Password</StyledText>
            <StyledTextInput
              maxLength={20}
              onChangeText={this.handlePassword}
              value={this.state.password}
              className="border-b-2 border-solid h-8 w-56 bg-slate-500 text-white"
            />
          </StyledView>
        </StyledView>
        <StyledText className=" relative bottom-20 rounded-full bg-[#20242cc7] h-10  w-60 p-1 text-white text-xl font-bold text-center" onPress={()=> alert("Saved")}>Save</StyledText>
      </StyledLinearGradient>
    );
  }
}
  

  