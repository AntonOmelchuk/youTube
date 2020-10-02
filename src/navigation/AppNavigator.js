import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from '../Screens/Search/Search';
import VideoPlayerScreen from '../Screens/VideoPlayer/VideoPlayer';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{header: () => null}}
          name="Search"
          component={SearchScreen}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="VideoPlayer"
          component={VideoPlayerScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
