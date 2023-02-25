import {LogBox} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
// import 'react-native-gesture-handler';
import { ApolloProvider } from '@apollo/client';
import client from './src/graphql';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import { StatusBar } from 'expo-status-bar';

export const App = () => {
  LogBox.ignoreLogs(['Remote debugger']);
  return (
    <Provider store={store}>
    <ApolloProvider client={client}>
      <AppNavigator />
    </ApolloProvider>
    </Provider>

  );
}

export default App;