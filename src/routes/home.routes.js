import React from 'react';

import Home from '../screens/Home';
import AllVideos from '../screens/AllVideos';

import { Foundation } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

export default function HomeRoutes({ route, navigation }) {

    if (route.state && route.state.index > 0) {
        navigation.setOptions({ swipeEnabled: false });
    } else {
        navigation.setOptions({ swipeEnabled: true });
    }

    return (
        <HomeStack.Navigator headerMode="screen">
            <HomeStack.Screen
                name="Home"
                component={ Home }
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
            	name="AllVideos"
            	component={ AllVideos }
            	options={{ headerShown: false }}
            />
        </HomeStack.Navigator>
    );
}
