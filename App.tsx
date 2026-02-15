import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Usuario } from './pages/Usuario';
export default function App() {
  return (
    <View style={styles.container}>
      <Usuario/>
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
// mil disculpas lo de navegacion me falla y por eso no lo hice no comprendo muy bien