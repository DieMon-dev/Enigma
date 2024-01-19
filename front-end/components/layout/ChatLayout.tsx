import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatPage from '../pages/Chat';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const Stack = createNativeStackNavigator();


export default class ChatLayout extends React.Component {

    render(){
        return (
                <Stack.Navigator>
                    <Stack.Screen
                        name="Chat"
                        component={ChatPage}
                    />
                    <Stack.Screen
                        name="Cr"
                        component={LoginPage}
                    />
                    <Stack.Screen
                        name="C"
                        component={RegisterPage}
                    />
                </Stack.Navigator>
  );}
};