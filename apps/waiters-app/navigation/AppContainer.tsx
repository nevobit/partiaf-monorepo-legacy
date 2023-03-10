import { StyleSheet,  View, Animated, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TapNavigator } from './index';
import Camera from '../screens/Camera';
import Login from '../screens/Login';
import { createStackNavigator } from '@react-navigation/stack';

const Auth = createStackNavigator();
const Stack = createBottomTabNavigator();

const TabBar = ({ state, navigation }: BottomTabBarProps)  => {
  const insets = useSafeAreaInsets();
  return (
    <View>
      
    </View>
    // <View style={{
    //   flexDirection: 'row',
    //   borderTopColor: 'rgba(0, 0, 0,0.1)',
    //   borderTopWidth: StyleSheet.hairlineWidth,
    //   borderBottomColor: 'rgba(255, 255, 255, 0)',
    //   justifyContent: 'space-around',
    //   paddingTop: 8,
    //   // paddingBottom: insets.bottom + 5,
    //   paddingLeft: insets.left,
    //   paddingRight: insets.right,
    //   position: 'relative',
    //   backgroundColor: '#FFF',
    //   width: '100%'
    // }}>
    //   {state.routes.map((route:any, index:any) => {
    //     const focused = state.index === index;
    //     const isActions = route.name === "Partiaf";
    //     const itemColor = '#333';

    //     let iconName = "";
    //     switch (route.name) {
    //       case "Home":
    //         iconName = focused ? "ios-home" : "ios-home-outline";
    //         break;
    //       case "Bookings":
    //         iconName = focused ? "ios-people" : "ios-people-outline";
    //         break;
    //       case "Camera":
    //         iconName = focused ? "ios-camera" : "ios-camera-outline";
    //         break;
    //       case "Partiaf":
    //         iconName = focused ? "ios-bonfire" : "ios-bonfire-outline";
    //         break;
    //       case "Profile":
    //         iconName = focused ? "#333" : "rgba(0,0,0,0.1)";
    //         break;
    //       default:
    //         break;
    //     }

    //     const onPress = () => {
    //       const event = navigation.emit({
    //         type: "tabPress",
    //         target: route.key,
    //         canPreventDefault: true,
    //       });
    //       if (!focused && !event.defaultPrevented) {
    //         navigation.navigate(route.name);
    //       }
    //     };

    //     return (
    //       <Animated.View key={route.name}>
    //         <TouchableOpacity onPress={onPress}>
    //           {route.name == "Profile"? (
    //             <View  style={{
    //               height: 27,
    //               width: 27,
    //               borderRadius: 50,
    //               overflow: "hidden",
    //               display: "flex",
    //               alignItems: "center",
    //               justifyContent: "center",
    //               borderWidth: 2,
    //               borderColor: iconName
    //             }}>
                  
    //             </View>
              
    //             ): (
                  
    //           <View style={{ alignItems: "center" }}>
    //               <Ionicons name={iconName} size={25} color={itemColor} />                  
    //           </View>
    //             )}
              
    //         </TouchableOpacity>
    //       </Animated.View>
    //     );
    //   })}
    // </View>
  )
  }


export const BottomTapNavigator = () => {
    return (
        <View style={{
          height: '100%',
          width: '100%'
        }}>
            
        <Stack.Navigator 
              screenOptions={{  tabBarHideOnKeyboard: true, headerShown: false }}
              tabBar={(props: any) => <TabBar {...props} />}
        >
            <Stack.Screen name="Home" component={TapNavigator}  />
            <Stack.Screen name="Camera" component={Camera}  />
            <Stack.Screen name="Bookings" component={TapNavigator}  />
        </Stack.Navigator>
        </View>

    )
}

export type AuthStackParamList = {
  Login: undefined;
};

const StackAuth = createStackNavigator();


// export const LoginNavigator = () => {
//    return (
//      <View style={{
//        height: '100%',
//        width: '100%'
//      }}>
      
//      {/* <Auth.Navigator screenOptions={{ headerShown: false }}>
//        <StackAuth.Screen
//          name="Login"
//          component={Login}
//        />
//      </Auth.Navigator> */}
//      </View>
    
//    );
//  };
