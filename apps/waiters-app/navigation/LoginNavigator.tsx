import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login/index";

const Auth = createStackNavigator();

export const LoginNavigator = () => {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen
        name="Login"
        component={Login}
        options={{
          presentation: "card",
          animationTypeForReplace: "push",
        }}
      />
    </Auth.Navigator>
  );
};
