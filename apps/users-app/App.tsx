import { SafeAreaView, StyleSheet, Text } from "react-native";
import { View } from "./src/components/Layout/Theme";
import Input from "./src/components/Shared/Input";
import {
  ThemeContext,
  ThemeProvider,
  useTheme,
} from "./src/contexts/ThemeContext";
import { useState, useContext } from "react";
import Button from "./src/components/Shared/Button";
import Signin from "./src/screens/Signin";
import Main from "./src/screens/Main";
import Signup from "./src/screens/Signup";
import Home from "./src/screens/Home";
import AppNavigator from "./src/navigation/AppNavigator";
import { ApolloProvider } from "@apollo/client";
import client from "./src/graphql";
import { Provider } from "react-redux";
import { persistor, store } from "./src/app/store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  const { updateTheme } = useTheme();
  console.log(updateTheme);

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <AppNavigator />
          </ThemeProvider>
        </PersistGate>
      </ApolloProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
