import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import List from '../screens/List';
import Approved from '../screens/Approved';


const Tab = createMaterialTopTabNavigator();

export const TapNavigator = () => {
    return (
        <Tab.Navigator 
        screenOptions={{
            tabBarActiveTintColor: '#333',
            tabBarLabelStyle: { fontSize: 14 },
            tabBarStyle: { backgroundColor: '#fff', borderColor: '#FFE243' },
            tabBarIndicatorStyle: { backgroundColor: '#FFE243' },
          }}
        >
            <Tab.Screen name="List" component={List}  options={{ tabBarLabel: 'Lista'}} />
            <Tab.Screen name="Approved"  component={Approved} options={{ tabBarLabel: 'Aprobados'}} />
        </Tab.Navigator>
    )
}