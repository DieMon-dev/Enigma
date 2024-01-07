import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import EnigmaMainLogo from '../logo/EnigmaMain';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {faCommentDots, faPhoneVolume, faUser, faGear} from '@fortawesome/free-solid-svg-icons'
import UserMainPage from '../pages/UserMainPage';
import { styled } from 'nativewind';
import StarterPage from '../pages/StarterPage';

const StyledIcon = styled(FontAwesomeIcon)
const Tab = createMaterialBottomTabNavigator();

interface UserPageLayoutProps {
    navigation : any
  }
  
  interface UserPageLayoutInterface {
    navigation : any
}

export default class UserPageLayout extends React.Component<UserPageLayoutProps, UserPageLayoutInterface> {
    constructor(props: any) {
        super(props);
        props.navigation.setOptions({
          headerShown: false,
          headerTransparent: true,
        });
    }

    render(){
        return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                 activeColor="#FFFFFF"
                 inactiveColor="#797C7B"
                 barStyle={{ backgroundColor: '#242E2E', paddingBottom: 10}}
            >
                <Tab.Screen
                    name="Chats"
                    component={UserMainPage}
                    options={{
                        tabBarIcon: () => {
                          return (
                            <StyledIcon className="color-white w-96 h-96" icon={faCommentDots as IconProp} />
                          );
                        },
                      }
                    }
                />
                <Tab.Screen
                    name="Contacts"
                    component={StarterPage}
                    options={{
                        tabBarIcon: () => {
                          return (
                            <StyledIcon className="color-white w-96 h-96" icon={faUser as IconProp} />
                          );
                        },
                      }}
                />
                <Tab.Screen 
                    name="Calls" 
                    component={StarterPage} 
                    options={{
                        tabBarIcon: () => {
                          return (
                            <StyledIcon className="color-white w-96 h-96" icon={faPhoneVolume as IconProp} />
                          );
                        },
                      }}
                />
                <Tab.Screen 
                    name="Settings" 
                    component={StarterPage}
                    options={{
                        tabBarIcon: () => {
                          return (
                            <StyledIcon className="color-white w-96 h-96" icon={faGear as IconProp} />
                          );
                        },
                      }} 
                />
            </Tab.Navigator>
        </NavigationContainer>
  );}
};