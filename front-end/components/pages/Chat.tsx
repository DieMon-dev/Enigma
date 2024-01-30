import React from 'react';
import { Text, View, TextInput, FlatList, Alert } from 'react-native';
import { styled } from 'nativewind';
import { LinearGradient } from 'expo-linear-gradient';
import { observer } from 'mobx-react';
import EnigmaAPI from '../../api/SignInUpAPI';
import EnigmaTopLogo from '../logo/EnigmaTop';
import EnigmaButtonLogo from '../logo/EnigmaButtonLogo';
import Message from '../msg/Message';
import chatStore from '../../stores/Chat_Store';
import userStore from '../../stores/user_store';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledLinearGradient = styled(LinearGradient);

interface ChatPageProps {
  navigation: any;
}

interface ChatPageInterface {
  messageToSend: string;
  historyIsReady?: boolean
}

@observer
export default class ChatPage extends React.Component<ChatPageProps, ChatPageInterface> {

  private api = new EnigmaAPI();
  private user = userStore.getUser().userId;
  private chatId = chatStore.getChatId();

  constructor(props: any) {
    super(props);
    this.state = {
      messageToSend: "",
      historyIsReady: false
    };
    props.navigation.setOptions({
      headerShown: false,
      headerTransparent: true,
    });
  }

  componentDidMount() {
    this.api.ChatMessages(this.chatId).
      then((history)=>{chatStore.setMessageHistory(history)}).
      then(()=>{this.setState({historyIsReady:true})})
  }

  handleSendButton = () => {
    this.setState({messageToSend: ""})
    this.api.SendMessage(this.chatId, userStore.getUser().userId, this.state.messageToSend).
      then((response)=>{
        if(response === true){
          this.api.ChatMessages(this.chatId).
          then((history)=>{chatStore.setMessageHistory(history)})
          .then(()=>{this.setState({historyIsReady:true})})
        }else{
          alert("Trouble with sending message")
        }
      })
  }

  handleMessage = (message: string) => {
    this.setState({messageToSend: message})
 }


  render() {
    return (
      <StyledLinearGradient
        className="flex flex-1 w-full h-full items-center justify-center "
        colors={['#20242c', '#6e7d98', '#9ea6b8']}
        start={[0.5, 0.01]}
      >
        <StyledView className="w-full flex flex-col items-center justify-center">
          <StyledText className='relative bottom-16 mb-1'>
            <EnigmaTopLogo> </EnigmaTopLogo>
          </StyledText>
          <StyledView className="w-full h-2/3 bottom-16 mb-3">
          <FlatList
              inverted={true}
              data={this.state.historyIsReady ? chatStore.getMessageHistory() : []}
              renderItem={({ item }) => (
                <Message message={item.messageContent} user={item.messageSenderId === this.user ? true : false} messageId={item.messageId}/>
              )}
              keyExtractor={(item) => item.messageId}
            />
          </StyledView>
          <StyledView className="flex flex-row w-full p-2 gap-x-4 justify-center items-center bottom-16">
            <StyledTextInput
              className=" border-solid rounded-lg h-10 w-56 bg-slate-600 text-white color-white p-2"
              placeholder="Write your message..."
              maxLength={500}
              onChangeText={this.handleMessage}
              value={this.state.messageToSend}
            />
            <StyledText className="text-center" onPress={this.handleSendButton}>
              <EnigmaButtonLogo></EnigmaButtonLogo>
            </StyledText>
          </StyledView>
        </StyledView>
      </StyledLinearGradient>
    );
  }
}
