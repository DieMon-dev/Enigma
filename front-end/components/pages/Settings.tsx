import React from 'react'
import {Text, View, TextInput, Alert} from 'react-native';
import { styled } from 'nativewind';
import { LinearGradient } from "expo-linear-gradient";
import EnigmaAPI from '../../api/SignInUpAPI';
import userStore from '../../stores/user_store';
import remoteUserStore from '../../stores/Remote_User_Store';
import EnigmaTopLogo from '../logo/EnigmaTop';
import { observer } from 'mobx-react';
import { StackActions } from '@react-navigation/native';
import chatStore from '../../stores/Chat_Store';

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

@observer
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
  }

  private element = new EnigmaAPI()

  componentDidMount() {
    let userName = userStore.getUser().userName
    let userPhone = userStore.getUser().userLogin
    this.setState({nickName: userName})
    this.setState({number: userPhone})
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

  handleNewPassword = (newPassword: string) =>{
    this.setState({newPassword: newPassword})
  }

  handleNewPassword1 = (newPassword1: string) => {
    this.setState({newPassword1: newPassword1})
  }

  logOut = () => {
    Alert.alert('Log Out', 'You will leave your account soon. You sure you want to leave', [
        {
          text: 'Sure',
          onPress: () => {
            remoteUserStore.setRemoteUser("", "", "")
            userStore.setUser("","","")
            userStore.setLogOut(false)
            chatStore.setChatId("")
            chatStore.setMessageHistory([])
            this.props.navigation.dispatch(StackActions.popToTop())
          }
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ]);
  }

  async save(){
        if(this.state.newPassword === this.state.newPassword1 && await this.element.CheckPassword(userStore.getUser().userId, this.state.password)){
            userStore.setUser(userStore.getUser().userId, this.state.number, this.state.nickName)
            userStore.setUserPassword(this.state.newPassword1)
            await this.element.UpdateProfile(userStore.getUser()).then(response =>{
                if(response){
                    alert("Updates saved")
                }else{
                    alert("Error")
                }})
        }else{
            alert("Wrong password or new passwords dont match")
        }
        userStore.setUserPassword("")
    }

  render(){  
    return (
      <StyledLinearGradient className="flex flex-1 w-full h-full items-center justify-center "
                            colors={["#1e2024", "#4d5264" ,"#6e7791"]} start={[0.5, 0.01]}>
        <EnigmaTopLogo></EnigmaTopLogo>
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
              className="border-b-2 border-solid h-8 w-56 bg-[#3e4250] opacity-75 text-white text-center"
            />
          </StyledView>
          <StyledView className="items-center justify-center">
            <StyledText className="text-white">Phone number</StyledText>
            <StyledTextInput
              maxLength={9}
              onChangeText={this.handleLogin}
              value={this.state.number}
              keyboardType="number-pad"
              className="border-b-2 border-solid h-8 w-56 bg-[#3e4250] opacity-75 text-white text-center"
              />
          </StyledView>
          <StyledView className="items-center justify-center">
            <StyledText className="text-white">Old Password</StyledText>
            <StyledTextInput
              maxLength={20}
              onChangeText={this.handlePassword}
              value={this.state.password}
              secureTextEntry={true}
              className="border-b-2 border-solid h-8 w-56 bg-[#3e4250] opacity-75 text-white"
            />
          </StyledView>
          <StyledView className="items-center justify-center">
            <StyledText className="text-white">New Password</StyledText>
            <StyledTextInput
              maxLength={20}
              onChangeText={this.handleNewPassword}
              value={this.state.newPassword}
              className="border-b-2 border-solid h-8 w-56 bg-[#3e4250] opacity-75 text-white"
            />
          </StyledView>
          <StyledView className="items-center justify-center">
            <StyledText className="text-white">Repeat New Password</StyledText>
            <StyledTextInput
              maxLength={20}
              onChangeText={this.handleNewPassword1}
              value={this.state.newPassword1}
              className="border-b-2 border-solid h-8 w-56 bg-[#3e4250] opacity-75 text-white"
            />
          </StyledView>
        </StyledView>
        <StyledText className=" relative bottom-32 rounded-full border border-solid bg-[#323639] w-60 p-1 text-white text-xl font-bold text-center" onPress={()=> this.save()}>Save</StyledText>
        <StyledText className=" relative bottom-24 rounded-full border border-solid bg-[#323639] h-10  w-60 p-1 text-red-600 text-xl font-bold text-center" onPress={()=> this.logOut()}>Log out</StyledText>
      </StyledLinearGradient>
    );
  }
}
  

  