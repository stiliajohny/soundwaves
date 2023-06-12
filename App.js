// App.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useKeepAwake} from 'expo-keep-awake';

import AboutScreen from './aboutScreen';
import MainScreen from './mainScreen';

const Stack = createStackNavigator();

const App = () => {
  useKeepAwake();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
