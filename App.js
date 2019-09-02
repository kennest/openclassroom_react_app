import FilmDetailScreen from './components/FilmDetail';
import SearchScreen from './components/Search';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator=createStackNavigator({
    Search: SearchScreen,
    Details: FilmDetailScreen,
  },
  {
    initialRouteName: 'Search',
  });

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
      render(){
        return (
             <AppContainer/>
            );
      }
}

const styles = StyleSheet.create({
  container: {
  flex:1,
  backgroundColor: '#fff',
 },
});
