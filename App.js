import * as React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home/HomeScreen';
import ProfileScreen from './src/screens/profile/ProfileScreen';
import DetailScreen from './src/screens/detail/DetailScreen';
const Stack = createNativeStackNavigator();




const App=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homes" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;