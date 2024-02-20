import React from 'react'
import {Text, View} from 'react-native';
import { styled } from 'nativewind';
import userStore from '../../stores/user_store';

const StyledView = styled(View)
const StyledText = styled(Text)

export default class EnigmaPageLogo extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
  }

    render() {

      return (
      <StyledView className='flex mt-24 items-center justify-center'> 
        <StyledView className="bg-[#14171C] rounded-full w-48 h-48 opacity-95 items-center justify-center">
            <StyledView className="bg-[#0B0C0E] rounded-full w-36 h-36 opacity-95 items-center justify-center"> 
                <StyledView className="bg-[#060607] rounded-full w-26 h-26 items-center opacity-95 justify-center">
                    <StyledView className="bg-[#040405] rounded-full w-16 h-16 opacity-95 items-center justify-center">
                    </StyledView>
                </StyledView>
            </StyledView>
        </StyledView>
        <StyledView className="absolute">
          <StyledText className="text-white text-4xl font-semibold tracking-widest mb-2 mt-2">Welcome to</StyledText>
            <StyledText className="text-white text-4xl font-thin tracking-widest text-center">
                <StyledText className="text-white text-4xl font-extrabold tracking-widest">E</StyledText>NIGMA
            </StyledText>
            <StyledText className="text-white text-center text-3xl font-semibold tracking-widest mt-1">{userStore.getUser().userName}</StyledText>
        </StyledView>
    </StyledView> 
      )}      
}