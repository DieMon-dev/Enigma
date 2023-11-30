import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Enigma!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    Opacity: '0.1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
