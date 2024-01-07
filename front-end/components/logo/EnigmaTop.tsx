import React from 'react'
import {Text, View} from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

export default class EnigmaTopLogo extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
  }

    render() {

      return (
    <StyledView className='flex mt-24 items-center justify-center'> 
        <StyledView className="bg-[#05050680] rounded-full w-48 h-48 items-center justify-center">
            <StyledView className="bg-[#050506d1] rounded-full w-36 h-36 opacity-50 items-center justify-center"> 
                <StyledView className="bg-[#050506d1] rounded-full w-26 h-26 items-center opacity-50 justify-center">
                    <StyledView className="bg-black rounded-full w-16 h-16 items-center justify-center">
                    </StyledView>
                </StyledView>
            </StyledView>
        </StyledView>
        <StyledView className="absolute">
            <StyledText className="text-white text-4xl font-thin tracking-widest text-center mt-28">
                <StyledText className="text-white text-4xl font-extrabold tracking-widest">E</StyledText>NIGMA
            </StyledText>
        </StyledView>
    </StyledView> 
      )}      
}