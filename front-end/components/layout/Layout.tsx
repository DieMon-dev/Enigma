import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WellcomePage from '../pages/WellcomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import StarterPage from '../pages/StarterPage';

const Stack = createNativeStackNavigator();


export default class Layout extends React.Component {

    render(){
        return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Starter"
                    component={StarterPage}
                    options={{title: ''}}
                />
                <Stack.Screen
                    name="Home"
                    component={WellcomePage}
                    options={{title: ''}}
                />
                <Stack.Screen 
                    name="SingIn" 
                    component={LoginPage} 
                    options={{title: 'Sign In'}}
                />
                <Stack.Screen 
                    name="SingUp" 
                    component={RegisterPage} 
                    options={{title: 'Sign Up'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
  );}
};