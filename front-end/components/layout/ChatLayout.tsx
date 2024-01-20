import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ChatPage from '../pages/Chat';
import UserPageLayout from './UserPageLayout';

const Stack = createNativeStackNavigator();


export default class ChatLayout extends React.Component {

    render(){
        return (
            <NavigationContainer independent={true}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="UserPage"
                        component={UserPageLayout}
                    />
                    <Stack.Screen
                        name="Chat"
                        component={ChatPage}
                    />
                </Stack.Navigator>
            </NavigationContainer>
  );}
};