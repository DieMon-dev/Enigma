import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Layout from './components/layout/Layout';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Layout></Layout>      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 0,
    backgroundColor: '#ecf0f1'
  },
});
