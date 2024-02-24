import React from 'react'
import {Text, View} from 'react-native';
import { styled } from 'nativewind';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import EnigmaAPI from '../../api/SignInUpAPI';

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledIcon = styled(FontAwesomeIcon);

interface MessageProps {
  user: boolean| undefined,
  message: string,
  messageId: string,
}

interface MessageInterface {
  message: string,
  messageId: string,
  user: boolean | undefined,
  deleteIcon: boolean,
  historyIsReady: boolean
}

export default class Message extends React.Component<MessageProps, MessageInterface> {
  constructor(props: any) {
    super(props);
    this.state = {
      message: "",
      messageId: "",
      deleteIcon: false,
      user: undefined,
      historyIsReady: false
    };
  }

  private api = new EnigmaAPI();

  componentDidMount() {
   this.setState({messageId: this.props.messageId})
  }


  deleteMessage = () => {
    this.api.deleteMessage(this.state.messageId)
  }

  render(){  
    return (
     <StyledView className='flex flex-row items-center gap-y-2'> 
     <StyledView className={'p-2 w-44 m-2 rounded-lg ' + (this.props.user === true? 'bg-stone-700 rounded-tr-sm left-40 ' : 'bg-slate-800 rounded-tl-sm')}>
        <StyledText className={'w-fit text-sm text-white font-normal m-2 '}
                    onLongPress={()=>this.setState({deleteIcon: true})}
                    onPress={()=>this.setState({deleteIcon: false})}
        >{this.props.message}</StyledText>
     </StyledView>
     {this.state.deleteIcon && this.props.user === true ? <StyledText onPress={this.deleteMessage}  className={'color-red  w-6 h-6 text-center  rounded-3xl ' + (this.props.user === true? 'right-16' : '') }><StyledIcon icon={faTrash as IconProp} /></StyledText> : <></>}
     </StyledView>
    );
  }
}