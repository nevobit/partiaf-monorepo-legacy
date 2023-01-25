import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import ApprovedCovers from './screens/ApprovedCovers';
import QrCodeScanner from './screens/QrCodeScanner';

const Stack = createNativeStackNavigator();

export default function App() {
  LogBox.ignoreLogs(["Remote debugger"]);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen name='home' component={HomeScreen} />
          <Stack.Screen name='aproved-covers' component={ApprovedCovers} />
          <Stack.Screen name='qr-code-scanner' component={QrCodeScanner} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}