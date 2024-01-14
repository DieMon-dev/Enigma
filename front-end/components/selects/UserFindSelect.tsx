import React from 'react'
import {Text, View} from 'react-native';
import { styled } from 'nativewind';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import EnigmaAPI from '../../api/SignInUpAPI';
import DropdownSelect from 'react-native-input-select';

const StyledText = styled(Text)
const StyledView = styled(View)
const StyledIcon = styled(FontAwesomeIcon);

interface UserFindSelectProps {
}

interface UserFindSelectInterface {
    selectedUser: any,
    optionList: Array<any>[any]
}

export default class UserFindSelect extends React.Component<UserFindSelectProps, UserFindSelectInterface> {
  constructor(props: any) {
    super(props);
    this.state = {
        selectedUser: null,
        optionList: [
            { value: 'Ola', label: "Ola" },
            { value: 'Kristina', label: 'Kristina' },
            { value: 'Mateusz', label: 'Mateusz' },
            { value: 'Bartek', label: 'Bartek' },
            { value: 'Andrii', label: 'Andrii' },
            { value: 'Olesia', label: 'Olesia' },
            { value: 'Ania', label: 'Ania' },
            { value: 'Petro', label: 'Petro' },
          ]
    };
  }

    handleChange = (selectedUser: any) => {
        this.setState({selectedUser}, () =>
            console.log(`Option selected:`, this.state.selectedUser)
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
                    backgroundColor: '#242E2E',
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
                      placeholder: 'Write Name of Your Friend',
                      placeholderTextColor: 'black',
                    },
                  }}
                  dropdownIcon={<StyledIcon className="color-white bottom-[10px] bg-black border-spacing-2 rounded-3xl border-slate-50" icon={faSearch as IconProp} />}
          />
        </StyledView>  
    );
  }
}
