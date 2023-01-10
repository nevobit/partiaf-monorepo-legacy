import {LogBox} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { ApolloProvider } from "@apollo/client";
import client from './src/graphql';

export const App = () => {
  LogBox.ignoreLogs(['Remote debugger']);
  return (
    <ApolloProvider client={client}>
      <AppNavigator />
    </ApolloProvider>
  );
}

export default App;