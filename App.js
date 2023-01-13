import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Shifoumi from './rockpapercisors'

export default function App() {
  return (
    <View style={styles.container}>
      <Shifoumi />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
