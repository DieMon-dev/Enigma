import React from 'react'
import {Text, View} from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

interface MessageProps {
  user: boolean| undefined,
  message: string
}

interface MessageInterface {
  message: string,
  user: boolean | undefined
}

export default class Message extends React.Component<MessageProps, MessageInterface> {
  constructor(props: any) {
    super(props);
    this.state = {
      message: "",
      user: undefined
    };
  }




  render(){  
    return (
     <StyledView className={'p-2 w-44 m-1 rounded-lg ' + (this.props.user === true? 'bg-stone-700 rounded-tr-sm left-40 ' : 'bg-slate-800 rounded-tl-sm')}>
        <StyledText className={'w-fit text-sm text-white font-normal m-2 '}>{this.props.message}</StyledText>
     </StyledView>
    );
  }
}