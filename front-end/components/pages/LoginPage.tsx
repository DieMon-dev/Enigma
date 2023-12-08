import React from 'react'
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class LoginPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      password: String,
      number: Number,
    };
  }


  handleLogin = (number: string) => {
    let new_number = parseInt(number)
    this.setState({number: new_number})
    console.log(this.state.number)
  }

  handlePassword = (password: string) => {
    this.setState({password: password})
  }

  render(){  
    return (
      <View style={styles.container}>
        <Text>Hi! Welcome to Enigma chat</Text>
        <View>
            <TextInput
              onChangeText={this.handleLogin}
              value={this.state.number}
              placeholder="Enter your login please"
         
            />
            <TextInput
              onChangeText={this.handlePassword}
              value={this.state.password}
              placeholder="Enter your password please"
            />
             <Button
              title="Back on Wellcome Page"
              color="#4d2afa"
              onPress={() => console.log(this.state.number, this.state.password)}
          />
        </View>
      </View>
    );
  }
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
  