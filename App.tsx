
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home/HomeScreen';
import OfflineScreen from './src/screens/offline/OfflineScreen';
import StartupScreeen from './src/screens/startup/StartupScreen';
import AlarmScreen from './src/screens/alarm/Alarmscreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Offline" component={OfflineScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Startup" component={StartupScreeen} options={{ headerShown: false }} />
        <Stack.Screen name="Alarm" component={AlarmScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
