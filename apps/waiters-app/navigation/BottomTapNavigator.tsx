import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export const BottomTapNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}  />
        </Stack.Navigator>
    )
}