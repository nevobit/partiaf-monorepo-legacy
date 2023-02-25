import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox, SafeAreaView } from 'react-native';

export default function App() {
  LogBox.ignoreLogs(["Remote debugger"]);

  return (
    <View style={styles.container}>
      <Text>Waiter App Partiaf</Text>
      <StatusBar style="auto" hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
