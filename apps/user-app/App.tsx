import AppNavigator from './src/navigation/AppNavigator';
import { ApolloProvider } from '@apollo/client';
import client from './src/graphql';
import { Provider } from 'react-redux';
import { store, persistor } from './src/app/store';
import { PersistGate } from 'redux-persist/integration/react';
export const App = () => {
  return (
    <Provider store={store}>
    <ApolloProvider client={client}>
      <PersistGate loading={null} persistor={persistor} >
      <AppNavigator />        
      </PersistGate>
    </ApolloProvider>
    </Provider>

  );
}

export default App;