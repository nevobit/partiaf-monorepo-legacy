import { Animated, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Ionic from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../../graphql/queries/user";
import colors from "../Theme/colors";
import { useTheme } from "../../../contexts/ThemeContext";


const TabBar = ({ state, navigation }: BottomTabBarProps) => {
  
  const {theme} = useTheme();
  
  const { user } = useSelector((state: any) => state.auth);
  const { data, loading, error,refetch } = useQuery(GET_USER, {
    variables: { uuid: user.uuid },
  });

  const insets = useSafeAreaInsets();
  return (
    <View style={{
      flexDirection: 'row',
      borderTopColor: theme== 'dark'? 'rgba(255,255,255,.1)' : 'rgba(0, 0, 0,0.1)',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderBottomColor: 'rgba(255, 255, 255, 0)',
      justifyContent: 'space-around',
      paddingTop: 8,
      // paddingBottom: insets.bottom + 5,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      position: 'relative',
      backgroundColor: colors[theme].background,
    }}>
      {state.routes.map((route, index) => {
        const focused = state.index === index;
        const isActions = route.name === "Partiaf";
        const itemColor = colors[theme].text;

        let iconName = "";
        switch (route.name) {
          case "Home":
            iconName = focused ? "home-variant" : "home-variant-outline";
            break;
          case "Search":
            iconName = focused ? "ios-search" : "ios-search-outline";
            break;
          case "Moments":
            iconName = focused ? "ios-tv" : "ios-tv-outline";
            break;
          case "Partiaf":
            iconName = focused ? "ios-bonfire" : "ios-bonfire-outline";
            break;
          case "Profile":
            iconName = focused ? "#333" : "rgba(0,0,0,0.1)";
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
              {route.name == "Profile"? (
                <View  style={{
                  height: 27,
                  width: 27,
                  borderRadius: 50,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 2,
                  borderColor: iconName
                }}>
                  
                <Image
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 50,
                  resizeMode: "cover",
                }}
                source={{
                  
                    uri: data?.userById?.photo[0]? data?.userById?.photo[data?.userById.photo.length - 1]: "https://i.postimg.cc/0jMMGxbs/default.jpg",
                }}
                
              />
                </View>
              
                ): (
                  
              <View style={{ alignItems: "center" }}>
                {route.name === 'Home'? (
                <Ionic name={iconName} size={25} color={itemColor} />                  
                ): (
                  <Ionicons name={iconName} size={25} color={itemColor} />                  

              )}
              </View>
                )}
              
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