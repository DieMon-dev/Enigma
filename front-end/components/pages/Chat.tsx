import React from 'react'
import {Text, View, TextInput, ScrollView} from 'react-native';
import { styled } from 'nativewind';
import { LinearGradient } from "expo-linear-gradient";

import EnigmaAPI from '../../api/SignInUpAPI';
import EnigmaTopLogo from '../logo/EnigmaTop';
import EnigmaButtonLogo from '../logo/EnigmaButtonLogo';
import Message from '../msg/Message';

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledTextInput = styled(TextInput)
const StyledLinearGradient = styled(LinearGradient)
const StyledScrollView = styled(ScrollView)

interface LoginPageProps {
  navigation : any
}

interface LoginPageInterface {
  navigation : any,
  message: string
}

export default class ChatPage extends React.Component<LoginPageProps, LoginPageInterface> {
  constructor(props: any) {
    super(props);
    this.state = {
      message: "Write your message...",
      navigation: []
    };
    props.navigation.setOptions({
      headerShown: false,
      headerTransparent: true,
    });
  }




  render(){  
    return (
      <StyledLinearGradient className="flex flex-1 w-full h-full items-center justify-center "
      colors={["#20242c", "#6e7d98" ,"#9ea6b8"]} start={[0.5, 0.01]}>
        <StyledText className='relative bottom-[98.5px]'><EnigmaTopLogo> </EnigmaTopLogo></StyledText>
        <StyledScrollView className="w-full h-5/6 p-2 bottom-2 inline">
           <Message message='hi' user={true}/>
           <Message message='lorem is hghg' user={false}/>
           <Message message='t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as'
            user={true}
           />
           <Message message='t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as'
           user={false}
           />
        </StyledScrollView>  
        <StyledView className="flex flex-row w-full p-2 gap-x-4 justify-center items-center">
            <StyledTextInput
              maxLength={500}
              value={this.state.message}
              className=" border-solid rounded-lg h-10 w-56 bg-slate-600 text-white text-center"
            /> 
            <StyledText className="text-center" onPress={()=>{console.log("writed")}}><EnigmaButtonLogo></EnigmaButtonLogo></StyledText>
        </StyledView>
      </StyledLinearGradient>
    );
  }
}