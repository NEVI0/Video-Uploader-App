import React from 'react';

import HomeRoutes from './home.routes';
import ProfileRoutes from './profile.routes';
import DrawerContent from '../components/DrawerContent';

import { createDrawerNavigator } from '@react-navigation/drawer';

const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
	return (
		<AppDrawer.Navigator
			drawerContent={ ({ navigation }) => <DrawerContent navigation={ navigation } /> }
		>
			<AppDrawer.Screen name="HomeRoutes" component={ HomeRoutes } />
            <AppDrawer.Screen name="ProfileRoutes" component={ ProfileRoutes } />
		</AppDrawer.Navigator>
	);
}