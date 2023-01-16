import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import TabBar from '../components/Layout/TabBar';
import Home from '../screens/Home'
import Partiaf from '../screens/Partiaf';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import Shared from '../screens/Shared';
import Signin from '../screens/Signin'
import Store from '../screens/Store';

const TabBarNavigator = createBottomTabNavigator();
const Stack = createStackNavigator();

export type RootStackParamList = {
    HomeScreen: undefined;
    Store: {
        store: string | undefined;
    };
}
const HomeStackNavigator = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return(
    <HomeStackNavigator.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="Store" component={Store} />
    </HomeStackNavigator.Navigator>
    )
}

const TabNavigator = () => {
    return(
        <TabBarNavigator.Navigator screenOptions={{tabBarHideOnKeyboard:true, headerShown:false}} tabBar={(props) => <TabBar {...props} />}>
            <TabBarNavigator.Screen name="Home" component={HomeNavigator} />
            <TabBarNavigator.Screen name="Search" component={Search} />
            <TabBarNavigator.Screen name="Shared" component={Shared} />
            <TabBarNavigator.Screen name="Partiaf" component={Partiaf} />
            <TabBarNavigator.Screen name="Profile" component={Profile} />
        </TabBarNavigator.Navigator>
    )
}

const LoginNavigator = () => {
    return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
    )
}

const AppNavigator = () => {
    const [user, serUser] = useState(null);
    return (
        <NavigationContainer>
            {user?  <TabNavigator /> : (
                    <LoginNavigator />            
            ) }
        </NavigationContainer>
    )
}

export default AppNavigator;