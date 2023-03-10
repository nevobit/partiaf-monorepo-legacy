import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { LoginNavigator } from "./LoginNavigator";


const AppNavigator = () => {
      return (
        <SafeAreaProvider>
            <NavigationContainer>
                <LoginNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
      )
  }
  
  export default AppNavigator;