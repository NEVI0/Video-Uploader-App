import React from 'react';

import Profile from '../screens/Profile';

import { Foundation } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';

const ProfileStack = createStackNavigator();

export default function ProfileRoutes({ route, navigation }) {

    if (route.state && route.state.index > 0) {
        navigation.setOptions({ swipeEnabled: false });
    } else {
        navigation.setOptions({ swipeEnabled: true });
    }

    return (
        <ProfileStack.Navigator headerMode="screen">
            <ProfileStack.Screen
                name="Profile"
                component={ Profile }
                options={{ headerShown: false }}
            />
        </ProfileStack.Navigator>
    );
}
