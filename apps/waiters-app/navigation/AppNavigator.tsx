import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { LoginNavigator } from "./LoginNavigator";
import { useSelector } from 'react-redux';
import { BottomTapNavigator } from './BottomTapNavigator';


const AppNavigator = () => {
     
    const {waiter} = useSelector((state:any) => state.authWaiter )
      return (
        <SafeAreaProvider>
            <NavigationContainer>
                {waiter? <BottomTapNavigator /> : <LoginNavigator />} 
            </NavigationContainer>
        </SafeAreaProvider>
      )
  }
  
  export default AppNavigator;