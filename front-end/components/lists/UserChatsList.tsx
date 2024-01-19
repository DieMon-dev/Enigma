import React from 'react'
import {Text, View, Image, ScrollView} from 'react-native';
import { styled } from 'nativewind';
import EnigmaAPI from '../../api/SignInUpAPI';
import ChatLayout from '../layout/ChatLayout';
import userStore from '../../stores/user_store';
import chatStore from '../../stores/Chat_Store';

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
      optionList: []
    };
    props.navigation.setOptions({
      headerShown: false,
      headerTransparent: true,
    });
  }

  private api = new EnigmaAPI()

  componentDidMount() {
    this.api.ChatsList(userStore.getUser().userId).then(response =>{
      this.setState({optionList: response})
    })
  }

  handleChatClick(element: any){
    chatStore.setChatId(element.chatId)
    this.props.navigation.navigate("ChatLayout")
  }

  render(){  
    return (
        <StyledScrollView className="w-82 h-full p-2 m-2">
            {this.state.optionList.map((element: any, index:number)=>{
                return(
                    <StyledView className='flex flex-row w-full h-20' key={index}>
                        <StyledImage className='w-12 h-12 border-r-8 rounded-[31px] mr-4' source={require('../../assets/4.jpg')}/>
                        <StyledView>
                          <StyledText className='text-white text-2xl' onPress={()=>{this.handleChatClick(element)}}>{element.chatTitle}</StyledText>
                          <StyledText className='text-white text-xs mt-2 ml-2'>{element.chatLastMsg}</StyledText>
                        </StyledView>
                    </StyledView>
                )
            })}  
        </StyledScrollView>  
    );
  }
}
