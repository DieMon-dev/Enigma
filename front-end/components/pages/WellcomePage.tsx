import { StyleSheet, Text, View, Button} from 'react-native';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';


export default function WellcomePage() {
  return (
    <View style={styles.container} >
      <Text>Hi! Welcome to Enigma chat</Text>
      <Button
            title="Sing in"
            color="#4d2afa"
            onPress={() => console.log('Sing in button pressed')}
        />
        <Button
            title="Sing up"
            color="#4d2afa"
            onPress={() => console.log('Sign up button pressed')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    Opacity: '0.1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
