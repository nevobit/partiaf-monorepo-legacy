import { Provider } from 'react-redux';
import { store, persistor } from './app/store';
import { ApolloProvider } from '@apollo/client';
import client from './graphql';
import { PersistGate } from 'redux-persist/integration/react';
import Login from './screens/Login';
import { Text, View } from 'react-native';
import Home from './screens/Home';
import List from './screens/List';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <PersistGate loading={null} persistor={persistor} >
            {/* <AppNavigator />     */}
            {/* <List />    */}
            <Login />           
        </PersistGate>
      </ApolloProvider>
    </Provider>

  );
}

