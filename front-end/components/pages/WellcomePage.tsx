import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledButton = styled(Button)


interface WellcomePageProps {
  navigation : any
}

interface WellcomePageInterface {
  navigation : any
}

export default class WellcomePage extends React.Component<WellcomePageProps, WellcomePageInterface>{
  constructor(props: any) {
    super(props);
  }

    render() {

      return (
        <StyledView className="flex flex-1 opacity-100 w-full align-top items-center justify-center bg-slate-600">
          <StyledText className="text-xl font-semibold text-white">Hi! Wellcome To The Enigma Chat!</StyledText>
          <StyledView className="grid grid-flow-col gap-8 gap-y-10 m-2 p-10 w-96 h-96">  
            <StyledButton
              className="p-10 bg-sky-800"
              title="Sing in"
              onPress={()=> this.props.navigation.navigate("SingIn")}
            />
            <StyledButton
              className="p-10 m-4 bg-sky-800"
              title="Sing up"
              onPress={()=> this.props.navigation.navigate("SingUp")}
            />
          </StyledView>
        <StyledText className="text-sm font-light text-white">@Creddited by: Stanislau Kmit, Dmitrii Nakutni, Andrii Kytrysh</StyledText>
        </StyledView>
      )}      
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    Opacity: '0.1',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
});
