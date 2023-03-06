import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import { useSelector } from "react-redux";
import TabBar from "../components/Layout/TabBar";
import Comments from "../screens/Comments";
import Home from "../screens/Home";
import Main from "../screens/Main";
// import Partiaf from "../screens/Partiaf";
// import Shared from "../screens/Shared";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import {
  SafeAreaProvider,
} from "react-native-safe-area-context";
import ResetPassword from "../screens/ResetPassword";
import ValidationCode from "../screens/ValidationCode";
import ChangePassword from "../screens/ChangePassword";
import Search from "../screens/Search";
import { View } from "../components/Layout/Theme";
import Profile from "../screens/Profile";
import Store from "../screens/Store";
import Covers from "../screens/Covers";
import Payment from "../screens/Covers/Payment";
import Tickets from "../screens/Tickets";
import OtherProfile from "../screens/OtherProfile";
import Wallet from "../screens/Wallet";
import Moments from "../screens/Moments";
import Settings from "../screens/Settings";

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
  Tickets: {
    user: string | undefined;
    remove: boolean | undefined;
  };
  Payment: {
    user: string | undefined;
  };
  Wallet: {
    user: string | undefined;
  };
  Comments: {
    store: string | undefined;
  };
  OtherProfile: {
    user: string | undefined;
  };
  Moments:undefined;
  Settings:undefined;
  
};

export type AuthStackParamList = {
  Main: undefined;
  Signin: undefined;
  Signup: undefined;
  Reset: undefined;
  Validation: undefined;
  Change: undefined;
};
const HomeStackNavigator = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Store" component={Store} />
      <Stack.Screen name="Covers" component={Covers} options={{
          presentation: "card",
          animationTypeForReplace: "push",
        }}/>
      <Stack.Screen name="Tickets" component={Tickets} options={{
          presentation: "card",
          animationTypeForReplace: "push",
        }}  />
      <Stack.Screen name="Payment" component={Payment} options={{
          presentation: "card",
          animationTypeForReplace: "push",
        }} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="Comments" component={Comments} options={{
          presentation: "card",
          animationTypeForReplace: "push",
        }} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="OtherProfile" component={OtherProfile} />
      
    </HomeStackNavigator.Navigator>
  );
};

const TabNavigator = () => {
  
  return (
    <View style={{
      height: '100%',
    }}>
      
    <TabBarNavigator.Navigator
      screenOptions={{  tabBarHideOnKeyboard: true, headerShown: false }}
      tabBar={(props: any) => <TabBar {...props} />}
    >
      <TabBarNavigator.Screen name="Home" component={HomeNavigator} />
      <TabBarNavigator.Screen name="Search" component={Search} />
      {/* <TabBarNavigator.Screen name="Moments" component={Moments} /> */}
      {/* <TabBarNavigator.Screen name="Partiaf" component={HomeNavigator} /> */}
      <TabBarNavigator.Screen name="Profile" component={Profile} />
    </TabBarNavigator.Navigator>
    </View>
  );
};

const LoginNavigator = () => {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          presentation: "card",
          animationTypeForReplace: "push",
        }}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          presentation: "card",
          animationTypeForReplace: "push",
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          presentation: "card",
          animationTypeForReplace: "push",
        }}  
      />
      
      <Stack.Screen
        name="Reset"
        component={ResetPassword}
        options={{
          presentation: "card",
          animationTypeForReplace: "push",
        }}
        /> 
        
        <Stack.Screen
        name="Validation"
        component={ValidationCode}
        options={{
          presentation: "card",
          animationTypeForReplace: "push",
        }}
        /> 
           <Stack.Screen
        name="Change"
        component={ChangePassword}
        options={{
          presentation: "card",
          animationTypeForReplace: "push",
        }}
        /> 
    </Auth.Navigator>
  );
};

const AppNavigator = () => {
  const { user } = useSelector((state: any) => state.auth);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {user ? <TabNavigator /> : <LoginNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
