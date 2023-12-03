import React from 'react';
import { StyleSheet, View} from 'react-native';
import WellcomePage from './components/pages/WellcomePage';

export default function App() {
  return (
    <View style={styles.container}>
      <WellcomePage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    Opacity: '0.1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
