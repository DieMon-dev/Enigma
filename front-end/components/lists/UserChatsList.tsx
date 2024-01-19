import React from 'react'
import {Text, View, Image, ScrollView} from 'react-native';
import { styled } from 'nativewind';
import EnigmaAPI from '../../api/SignInUpAPI';
import ChatLayout from '../layout/ChatLayout';

const StyledText = styled(Text)
const StyledView = styled(View)
const StyledImage = styled(Image)
const StyledScrollView = styled(ScrollView)

interface UserChatsListProps {
  navigation : any,
}

interface UserChatsListInterface {
    navigation : any,
    optionList: Array<any>[any]
}

export default class UserChatsList extends React.Component<UserChatsListProps, UserChatsListInterface> {
  constructor(props: any) {
    super(props);
    this.state = {
      navigation : [],
        optionList: [
            { value: 'Ola', label: "assets/1.jpg" },
            { value: 'Kristina', label: '../../assets/2.jpg' },
            { value: 'Mateusz', label: '../../assets/3.jpg' },
            { value: 'Bartek', label: '../../assets/4.jpg' },
            { value: 'Bartek', label: '../../assets/4.jpg' },
            { value: 'Bartek', label: '../../assets/4.jpg' },
            { value: 'Bartek', label: '../../assets/4.jpg' },
            { value: 'Bartek', label: '../../assets/4.jpg' },
            { value: 'Bartek', label: '../../assets/4.jpg' },
            { value: 'Mateusz', label: '../../assets/3.jpg' },
            { value: 'Bartek', label: '../../assets/4.jpg' },
            { value: 'Bartek', label: '../../assets/4.jpg' },
            { value: 'Bartek', label: '../../assets/4.jpg' },
            { value: 'Bartek', label: '../../assets/4.jpg' },
            { value: 'Bartek', label: '../../assets/4.jpg' },
            { value: 'Bartek', label: '../../assets/4.jpg' },
            { value: 'Mateusz', label: '../../assets/3.jpg' },
            { value: 'Bartek', label: '../../assets/4.jpg' },
            { value: 'Bartek', label: '../../assets/4.jpg' },
            { value: 'Bartek', label: '../../assets/4.jpg' },
            { value: 'Bartek', label: '../../assets/4.jpg' },
            { value: 'Bartek', label: '../../assets/4.jpg' },
            { value: 'Bartek', label: '../../assets/4.jpg' },
            { value: 'Mateusz', label: '../../assets/3.jpg' },
            { value: 'Bartek', label: '../../assets/4.jpg' },
            { value: 'Bartek', label: '../../assets/4.jpg' },
            { value: 'Bartek', label: '../../assets/4.jpg' },
            { value: 'Bartek', label: '../../assets/4.jpg' },
            { value: 'Bartek', label: '../../assets/4.jpg' },
            { value: 'Bartek', label: '../../assets/4.jpg' },
          ]
    };
    props.navigation.setOptions({
      headerShown: false,
      headerTransparent: true,
    });
  }

  render(){  
    return (
        <StyledScrollView className="w-82 h-full p-2 m-2">
            {this.state.optionList.map((element: any, index:number)=>{
                return(
                    <StyledView className='flex flex-row w-full h-20' key={index}>
                        <StyledImage className='w-12 h-12 border-r-8 rounded-[31px] mr-4' source={require('../../assets/4.jpg')}/>
                        <StyledText className='text-white text-3xl' onPress={()=>{this.props.navigation.navigate("ChatLayout")}}>{element.value}</StyledText>
                    </StyledView>
                )
            })}  
        </StyledScrollView>  
    );
  }
}
