import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import { View } from 'react-native';
import Camera from '../screens/Camera';
import { TapNavigator } from './index';
import { TabBar } from './AppContainer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const BottomStack = createBottomTabNavigator();

export const BottomTapNavigator = () => {
    return (
        <View style={{
          height: '100%',
          width: '100%'
        }}>
            
        <BottomStack.Navigator 
              screenOptions={{  headerShown: false }}
              tabBar={(props: any) => <TabBar {...props} />}
        >
            <BottomStack.Screen name="Home" component={TapNavigator}  />
            <BottomStack.Screen name="Camera" component={Camera}  />
        </BottomStack.Navigator>
        </View>

    )
}