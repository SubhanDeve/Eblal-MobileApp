import 'react-native-gesture-handler';
import React from 'react';
import type {PropsWithChildren} from 'react';
import Privacy from './screens/Privacy';
import Terms from './screens/Terms';
import Ratings from './screens/Rating';
import DepressionAdult from './screens/DepressionAdult';
import {Rating} from 'react-native-ratings';
import Score from './screens/Score';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import AnxietyAdult from './screens/AnxietyAdult';
import GeneralAnxietyAdult from './screens/GeneralAnxietyAdult';
import DepressionChild from './screens/DepressionChild';
import MoodCheckup from './screens/MoodCheckup';
import McqPage from './screens/McqPage';

type RootStackParamList = {
  MoodCheckup: undefined;
  DepressionAdult: undefined;
  AnxietyAdult: undefined;
  GeneralAnxietyAdult: undefined;
  DepressionChild: undefined;
  Score: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MoodCheckup"
        component={MoodCheckup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DepressionAdult"
        component={DepressionAdult}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AnxietyAdult"
        component={AnxietyAdult}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GeneralAnxietyAdult"
        component={GeneralAnxietyAdult}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DepressionChild"
        component={DepressionChild}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Score"
        component={Score}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <View style={{flex: 1, backgroundColor: '#EDEDED'}}>
      <NavigationContainer>
        <McqPage />
      </NavigationContainer>
    </View>
  );
}

export default App;
