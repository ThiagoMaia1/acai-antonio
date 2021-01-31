// import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
// import { Button } from 'react-native';
// import Colors from '../constants/Colors';

// import Colors from '../constants/Colors';
// import useColorScheme from '../hooks/useColorScheme';
import SelecionarTamanho from '../screens/SelecionarTamanho';
import SelecionarRecheios from '../screens/SelecionarRecheios';
import HomeScreen from '../screens/HomeScreen';
import { Component } from '../App';

// import Linking from './LinkingConfiguration';

const Stack = createStackNavigator();

type screen = {
  name: string,
  component: Component,
  header?: string 
}
const screens: screen[] = [
  {name: 'home', component: HomeScreen, header: 'Açaí da XXXX'},
  {name: 'tamanho', component: SelecionarTamanho, header: 'Selecione o Tamanho'},
  {name: 'recheios', component: SelecionarRecheios, header: 'Selecione os Recheios'}
  // {name: , component, header: },
]

export default function StackNavigator() {
  // const colorScheme = useColorScheme();

  return (
    <Stack.Navigator
      initialRouteName={screens[0].name}
      >
      {screens.map(s => (
        <Stack.Screen
          key={s.name}
          name={s.name}
          component={s.component}
          options={s.header ? {headerTitle: s.header} : {}}
        />
      ))}
    </Stack.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
// function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
//   return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
// }