import {getFilmWithSearchedText} from '../api/TMDBApi'
import FilmItem from './FilmItem'
import React from 'react';
import {ActivityIndicator, Button, FlatList, StyleSheet, TextInput, View} from 'react-native';

class SearchScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            films: [],
            isLoading: false
        };
        this.page=0;
        this.totalPages=0;
        this.searchedText = "";
    }

    _loadFilms() {
        this.setState({isLoading: true});
        this.page=0;
        this.totalPages=0;
        this.setState({films:[]},()=>{
         if (this.searchedText.length > 0) {
             getFilmWithSearchedText(this.searchedText,this.page+1)
                 .then(data => {
                  this.page=data.page;
                  this.totalPages=data.total_pages;
                  this.setState({
                     films: [...this.state.films, ...data.results],
                     isLoading: false
                 });
                }
               );
         }
        })
    }

    _searchInputTextChanged(text) {
        this.searchedText = text;
    }

    _displayDetailsForFilm(idFilm){
      console.log(idFilm);

    }

    render() {
     console.log(this.props);
        if (this.state.isLoading) {
            return (
                <View style={styles.acticity_indicator}>
                    <ActivityIndicator size='large'/>
                </View>
            );
        }
        return (
            <View>
                <TextInput placeholder="Titre du Film..."
                           onSubmitEditing={() => this._loadFilms()}
                           onChangeText={(text) => this._searchInputTextChanged(text)}
                           style={styles.text_input}/>
                <Button title="Rechercher" style={{height: 50}} onPress={() => {
                 this._loadFilms()
                 //this.props.navigation.navigate('Details')
                }}/>
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    onEndReachedThreshold={0.5}
                    onEndReached={()=>{
                     if(this.state.films.length>0 && this.page<this.totalPages){
                      this._loadFilms();
                      console.log("ON REACHED");
                     }
                    }}
                    renderItem={({item}) => <FilmItem
                    navigation={this.props.navigation}
                    film={item}
                     />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text_input: {
        padding: 10,
        borderStyle: "solid",
        borderWidth: 1,
        height: 50,
        borderColor: "#000000",
        marginLeft: 5,
        marginRight: 5
    },
    acticity_indicator: {
        alignItems: 'center',
        justifyContent: 'center',
        position:'absolute',
        top:100,
        left:0,
        right:0,
        bottom:0
    }
});

export default SearchScreen;
