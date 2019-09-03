import FilmDetailScreen from './components/FilmDetail';
import SearchScreen from './components/Search';
import React,{useState} from 'react';
import {StyleSheet, View} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Provider} from 'react-redux'
import Store from './Store/configureStore'

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
            <Provider store={Store}>
                <AppContainer />
            </Provider>
            );
      }
}

const styles = StyleSheet.create({
  container: {
  flex:1,
  backgroundColor: '#fff',
 },
});
