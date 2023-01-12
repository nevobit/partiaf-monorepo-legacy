import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import TabBar from '../components/Layout/TabBar';
import Home from '../screens/Home'
import Partiaf from '../screens/Partiaf';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import Shared from '../screens/Shared';
import Signin from '../screens/Signin'

const TabBarNavigator = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
    return(
        <TabBarNavigator.Navigator screenOptions={{tabBarHideOnKeyboard:true, headerShown:false}} tabBar={(props) => <TabBar {...props} />}>
            <TabBarNavigator.Screen name="Home" component={Home} />
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
    const [user, serUser] = useState({});
    return (
        <NavigationContainer>
            {user?  <TabNavigator /> : <LoginNavigator /> }
        </NavigationContainer>
    )
}

export default AppNavigator;