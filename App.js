import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { BasketContext} from './Context';

import StackNavigator from './StackNavigator';

export default function App() {
  return (
    <BasketContext>
      <StackNavigator/>
      <StatusBar style="auto" />
     </BasketContext>
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
