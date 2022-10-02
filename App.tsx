import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './app/screen/Home';
import PlayGame from './app/screen/PlayGame';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Button, View} from 'react-native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
      />
    </Drawer.Navigator>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home 11" />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="PlayGame" component={PlayGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
