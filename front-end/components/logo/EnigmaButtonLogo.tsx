import React from 'react'
import {Text, View} from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

export default class EnigmaButtonLogo extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
  }

    render() {

      return (
        <StyledView className='flex mt-24 items-center justify-center'> 
        <StyledView className="bg-[#14171C] rounded-full w-16 h-16 opacity-95 items-center justify-center">
            <StyledView className="bg-[#0B0C0E] rounded-full w-12 h-12 opacity-95 items-center justify-center"> 
                <StyledView className="bg-[#060607] rounded-full w-8 h-8 items-center opacity-95 justify-center">
                    <StyledView className="bg-[#040405] rounded-full w-4 h-4 opacity-95 items-center justify-center">
                    </StyledView>
                </StyledView>
            </StyledView>
        </StyledView>
    </StyledView> 
      )}      
}