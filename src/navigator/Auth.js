import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { fonts } from '../assets/fonts';
import AppIntro from '../screens/AuthModules/AppIntro/AppIntro';
import LoginOption from '../screens/AuthModules/LoginOption/LoginOption';
import CreateAccount from '../screens/AuthModules/CreateAccount/CreateAccount';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                animation: 'slide_from_right',
                headerBackTitleVisible: false,
                headerShown: false,
                headerShadowVisible: false,
                headerTitleStyle: {
                    fontFamily: fonts.bold
                },
                contentStyle: {
                    backgroundColor: 'white'
                },
            }}>

            <Stack.Screen
                name='AppIntro'
                component={AppIntro}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='LoginOption'
                component={LoginOption}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='CreateAccount'
                component={CreateAccount}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
};

export default AuthStack;
