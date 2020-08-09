import React from 'react';

import HomeRoutes from './home.routes';
import Profile from '../screens/Profile';
import DrawerContent from '../components/DrawerContent';

import { createDrawerNavigator } from '@react-navigation/drawer';

const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
	return (
		<AppDrawer.Navigator
			drawerContent={ ({ navigation }) => <DrawerContent navigation={ navigation } /> }
		>
			<AppDrawer.Screen name="HomeRoutes" component={ HomeRoutes } options={{ title: "Dashboard" }} />
            <AppDrawer.Screen name="Profile" component={ Profile } options={{ title: "Perfil" }} />
		</AppDrawer.Navigator>
	);
}