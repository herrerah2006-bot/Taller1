import { createStackNavigator } from '@react-navigation/stack';
import { Usuario } from '../screens/Usuario';
import { Productos } from '../screens/Productos';

const Stack = createStackNavigator();

export const StackNavigator=()=>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="Usuario" component={Usuario} />
      <Stack.Screen name="Productos" component={Productos} />
    </Stack.Navigator>
  );
}