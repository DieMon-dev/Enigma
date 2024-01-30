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
    <StyledView className='flex items-center justify-center'> 
        <StyledView className="bg-[#05050680] rounded-full w-16 h-16 items-center justify-center">
            <StyledView className="bg-[#050506d1] rounded-full w-12 h-12 opacity-40 items-center justify-center"> 
                <StyledView className="bg-[#050506d1] rounded-full w-8 h-8 items-center opacity-100 justify-center">
                    <StyledView className="bg-black rounded-full w-4 h-4 items-center justify-center">
                    </StyledView>
                </StyledView>
            </StyledView>
        </StyledView>
    </StyledView> 
      )}      
}