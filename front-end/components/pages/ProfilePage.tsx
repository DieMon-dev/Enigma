import React from 'react'
import {Text, View, Button, TextInput} from 'react-native';

export default class ProfilePage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      password: String,
      number: Number,
    };
  }

  async componentDidMount() {
    this.setState({text: "GGwp2023"})
    this.setState({number: 4899999999})
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
      <View>
        <Text>Hi! Welcome to Enigma chat</Text>
        <View>
            <TextInput
              onChangeText={this.handleLogin}
              value={this.state.number}
              placeholder="Enter your login please"
         
            />
            <TextInput
              onChangeText={this.handlePassword}
              value={this.state.text}
              placeholder="Enter your password please"
            />
        </View>
          <Button
              title="Back on Wellcome Page"
              color="#4d2afa"
              onPress={() => console.log('Sign up button pressed')}
          />
      </View>
    );
  }
}

  