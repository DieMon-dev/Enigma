import React from 'react'
import {Text, View} from 'react-native';
import { styled } from 'nativewind';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import EnigmaAPI from '../../api/SignInUpAPI';
import remoteUserStore from '../../stores/Remote_User_Store';
import DropdownSelect from '../locallibs/react-native-input-select';
import { observer } from "mobx-react";
import userStore from '../../stores/user_store';
import chatStore from '../../stores/Chat_Store';

const StyledText = styled(Text)
const StyledView = styled(View)
const StyledIcon = styled(FontAwesomeIcon);

interface UserFindSelectProps {
  navigation : any
}

interface UserFindSelectInterface {
    navigation : any
    selectedUser: string,
    optionList: Array<any>[any]
}
@observer
export default class UserFindSelect extends React.Component<UserFindSelectProps, UserFindSelectInterface> {
  constructor(props: any) {
    super(props);
    this.state = {
        selectedUser: "",
        optionList: [],
        navigation: []
    };
  }

  private api = new EnigmaAPI
  private remoteUser = remoteUserStore.getRemoteUser()


  handleChange = (selectedUser: any) => {
    this.setState({selectedUser})
    const user = userStore.getUser();
    this.api.CheckUserChat(user.userId, this.remoteUser.userId).then((response)=>{
      if(response === true){
        this.api.ChatsList(userStore.getUser().userId).then(response =>{
          response.map((element: any)=>{
            if(element.chatId.includes(this.remoteUser.userId)){
              chatStore.setChatId(element.chatId)
              this.props.navigation.navigate("Chat")
            }
          })
        })
      }else{
        this.api.CreateChat(user.userId, this.remoteUser.userId).then((response)=>{
        chatStore.setChatId(response.chatId)
        this.props.navigation.navigate("Chat")})
      }
    }
      );
  };
  render(){  

    const { selectedUser } = this.state;
    return (
        <StyledView className="flex items-center  w-full">
            <StyledView className='w-8 h-0.5 bg-[#383D3D] bottom-8'></StyledView>
            <StyledText className="text-base text-white mb-4">Your chats will appear here</StyledText>
            <DropdownSelect
                placeholder="Find your first friend here..."
                options={this.state.optionList}
                optionLabel={'label'}
                optionValue={'value'}
                selectedValue={selectedUser}
                onValueChange={(user: any) => this.handleChange(user)}
                isSearchable
                primaryColor={'white'}
                dropdownStyle={{
                    backgroundColor: 'rgb(20 26 26)',
                    borderRadius: 22.5,
                    paddingVertical: 5,
                    paddingHorizontal: 5,
                    minHeight: 48,
                    width: 322,
                    marginLeft:19,
                    borderColor: '#000000',
                  }}
                  placeholderStyle={{
                    color: 'white',
                    fontSize: 15,
                    fontWeight: '400',
                    marginLeft:30,
                  }}
                  modalOptionsContainerStyle={{
                    padding: 10,
                    borderTopRightRadius: 40,
                    borderTopLeftRadius: 40,
                    backgroundColor: '#121414',
                  }}
                  checkboxComponentStyles={{
                    checkboxStyle: {
                      display: 'none'
                    },
                    checkboxLabelStyle: { color: 'white', fontSize: 20 },
                  }}
                  searchControls={{
                    textInputStyle: {
                      color: 'black',
                      fontWeight: '500',
                      minHeight: 10,
                      paddingVertical: 10,
                      paddingHorizontal: 5,
                    },
                    textInputContainerStyle: {
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    },
                    textInputProps: {
                      placeholder: 'Write Phone Number of Your Friend',
                      placeholderTextColor: 'black',
                    },
                  }}
                  dropdownIcon={<StyledIcon className="color-white bottom-[10px] bg-black border-spacing-2 rounded-3xl border-slate-50" icon={faSearch as IconProp} />}
          />
        </StyledView>  
    );
  }
}