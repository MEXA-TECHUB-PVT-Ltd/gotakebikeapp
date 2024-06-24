// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/onboarding/Onboarding';
import AuthNav from './AuthNav';
import TabsNav from './TabsNav';
import SearchRide from '../screens/appscreens/tabs/Home/HomeSubscreens/SearchRide';

const Stack = createNativeStackNavigator();

function MainNav() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Onboard" component={OnboardingScreen} />
                <Stack.Screen name="AuthFiles" component={AuthNav} />
                <Stack.Screen name="Tabs" component={TabsNav} />
                <Stack.Screen name="SearchRide" component={SearchRide} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNav;