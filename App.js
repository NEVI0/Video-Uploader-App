import 'react-native-gesture-handler';
import React, { useState } from 'react';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/routes';

const getFonts = () => {
    return Font.loadAsync({
        'sriracha': require('./assets/fonts/Sriracha-Regular.ttf'),
    });
}

export default function App() {

	const [ fontLoaded, setFontLoaded ] = useState(false);

	if (!fontLoaded) {
        return (
            <AppLoading startAsync={ getFonts } onFinish={ () => setFontLoaded(true) } />
        );
    }

  	return (
	    <NavigationContainer>
			<Routes />
		</NavigationContainer>
  	);
}

