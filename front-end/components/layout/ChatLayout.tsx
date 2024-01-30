import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ChatPage from '../pages/Chat';
import UserPageLayout from './UserPageLayout';

const Stack = createNativeStackNavigator();

interface ChatLayoutProps {
    navigation : any
  }
  
  interface ChatLayoutInterface {
    navigation : any
}


export default class ChatLayout extends React.Component<ChatLayoutProps, ChatLayoutInterface>{
    constructor(props: any) {
        super(props);
        props.navigation.setOptions({
          headerShown: false,
          headerTransparent: true,
        });
    }

    render(){
        return (

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

  );}
};