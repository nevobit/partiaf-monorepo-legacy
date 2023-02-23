import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import TabBar from '../components/Layout/TabBar';
import Covers from '../screens/Covers';
import Home from '../screens/Home'
import Partiaf from '../screens/Partiaf';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import Shared from '../screens/Shared';
import Signin from '../screens/Signin'
import Signup from '../screens/Signup';
import Store from '../screens/Store';

const TabBarNavigator = createBottomTabNavigator();
const Stack = createStackNavigator();
const Auth = createStackNavigator();

export type RootStackParamList = {
    HomeScreen: undefined;
    Store: {
        store: string | undefined;
    };
    Covers: {
        store: string | undefined;
    };
}

export type AuthStackParamList = {
    Signin: undefined;
    Signup: undefined;
}
const HomeStackNavigator = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return(
    <HomeStackNavigator.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="Store" component={Store} />
        <Stack.Screen name="Covers" component={Covers} />
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
    <Auth.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Signin" component={Signin} options={{
            presentation: 'modal',
            animationTypeForReplace: 'push'
        }} />
        <Stack.Screen name="Signup" component={Signup} options={{
            presentation: 'modal',
            animationTypeForReplace: 'push'
        }} />
    </Auth.Navigator>
    )
}


const AppNavigator = () => {
    const {user} = useSelector((state:any) => state.auth);
    return (
        <NavigationContainer>
            {user?  <TabNavigator /> : (
                    <LoginNavigator />            
            ) }
        </NavigationContainer>
    )
}

export default AppNavigator;