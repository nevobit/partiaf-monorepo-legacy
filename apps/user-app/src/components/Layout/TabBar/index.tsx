import { Animated, View, TouchableOpacity, StyleSheet } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Ionic from "react-native-vector-icons/Ionicons";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';


const TabBar = ({ state, navigation }: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{
      flexDirection: 'row',
      borderTopColor: 'rgba(0, 0, 0,0.1)',
      borderTopWidth: 1,
      borderBottomColor: 'rgba(255, 255, 255, 0)',
      justifyContent: 'space-around',
      paddingTop: 8,
      paddingBottom: insets.bottom + 5,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      position: 'relative'
    }}>
      {state.routes.map((route, index) => {
        const focused = state.index === index;
        const isActions = route.name === "Partiaf";
        const itemColor = "#111111";

        let iconName = "";
        switch (route.name) {
          case "Home":
            iconName = focused ? "home" : "ios-home-outline";
            break;
          case "Search":
            iconName = focused ? "ios-search" : "ios-search-outline";
            break;
          case "Shared":
            iconName = focused ? "ios-camera" : "ios-camera-outline";
            break;
          case "Partiaf":
            iconName = focused ? "ios-heart" : "ios-heart-outline";
            break;
          case "Profile":
            iconName = focused ? "ios-person" : "ios-person-outline";
            break;
          default:
            break;
        }

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!focused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Animated.View key={route.name}>
            <TouchableOpacity onPress={onPress}>
              <View style={{ alignItems: "center" }}>
                <Ionic name={iconName} size={25} color={itemColor} />
              </View>
            </TouchableOpacity>
          </Animated.View>
        );
      })}
    </View>
  );
};


const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        height: 50,
        borderTopColor: 'rgba(0, 0, 0,0.1)',
        borderTopWidth: 1,
        justifyContent: 'space-around',
    },
    tabItem: {
        width: 60
    },
    tabBarText: {
        fonstSize: 10,
        fontWeight: '700'
    },
    actionsButton: {
        width: 40,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 21,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default TabBar;