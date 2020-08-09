import React from 'react';

import Home from '../screens/Home';

import { Foundation } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

export default function HomeRoutes() {
    return (
        <HomeStack.Navigator headerMode="screen">
            <HomeStack.Screen
                name="Home"
                component={ Home }
                options={{ headerShown: false }}
            />
        </HomeStack.Navigator>
    );
}
