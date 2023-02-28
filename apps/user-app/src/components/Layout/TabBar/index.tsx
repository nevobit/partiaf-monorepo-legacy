import { Animated, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Ionic from "react-native-vector-icons/Ionicons";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { GET_USER_BALANCE } from "../../../graphql/queries/user";


const TabBar = ({ state, navigation }: BottomTabBarProps) => {
  const { user } = useSelector((state: any) => state.auth);
  const { data, loading, error,refetch } = useQuery(GET_USER_BALANCE, {
    variables: { uuid: user.uuid },
  });

  console.log({user})
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
      position: 'relative',
    }}>
      {state.routes.map((route, index) => {
        const focused = state.index === index;
        const isActions = route.name === "Partiaf";
        const itemColor = "#111111";

        let iconName = "";
        switch (route.name) {
          case "Home":
            iconName = focused ? "ios-home" : "ios-home-outline";
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
                  
                    uri: data?.userById?.photo[0]? data?.userById?.photo[0]: "https://i.postimg.cc/0jMMGxbs/default.jpg",
                }}
                
              />
                </View>
              
                ): (
                  
              <View style={{ alignItems: "center" }}>
                <Ionic name={iconName} size={26} color={itemColor} />
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