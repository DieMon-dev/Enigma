import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WellcomePage from '../pages/WellcomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import StarterPage from '../pages/StarterPage';
import UserPageLayout from './UserPageLayout';

const Stack = createNativeStackNavigator();


export default class Layout extends React.Component {

    render(){
        return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Starter"
                    component={StarterPage}
                />
                <Stack.Screen
                    name="Home"
                    component={WellcomePage}
                />
                <Stack.Screen 
                    name="SingIn" 
                    component={LoginPage} 
                />
                <Stack.Screen 
                    name="SingUp" 
                    component={RegisterPage} 
                />
                <Stack.Screen 
                    name="UserPageLayout" 
                    component={UserPageLayout} 
                />
            </Stack.Navigator>
        </NavigationContainer>
  );}
};