import FilmDetail from '../components/FilmDetail';
import Search from '../components/Search';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const SearchStackNavigator=createStackNavigator({
    SearchScreen:{
     screen:Search,
     navigationOptions : {
       title: 'Rechercher',
     }
    },
    DetailScreen:{
     screen:FilmDetail,
     navigationOptions:{
       title:'Details du film'
     }
    }
    });

export default createAppContainer(SearchStackNavigator);
