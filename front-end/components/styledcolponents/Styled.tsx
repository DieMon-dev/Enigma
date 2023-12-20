import React from 'react'
import {Text, View, TextInput} from 'react-native';
import { styled } from 'nativewind';
import { LinearGradient } from "expo-linear-gradient";
export default class StyledComponents extends React.Component<any, any>{
    public StyledView = styled(View)
    public StyledText = styled(Text)
    public StyledTextInput = styled(TextInput)
    public StyledLinearGradient = styled(LinearGradient)
}