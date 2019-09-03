import {getFilmDetailsFromApi, getImagefromApi} from "../api/TMDBApi";
import React from "react";
import {ActivityIndicator, Image, ScrollView, StyleSheet, Text, View,Button} from "react-native";
import {observer} from "mobx-react";
import favoriteStore from "../Store/favoriteStore";

@observer
class FilmDetailScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            film: undefined,
            isLoading: true
        };
    }

    componentDidMount() {
        getFilmDetailsFromApi(this.props.navigation.state.params.idFilm).then(data => {
            this.setState({
                film: data,
                isLoading: false
            })
        })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.acticity_indicator}>
                    <ActivityIndicator size="large"/>
                </View>
            );
        }
        console.log(this.props);
        const film = this.state.film;
        const genders=film.genres;
        const items = [];

        for (const [index, value] of genders.entries()) {

            items.push(<Text key={index}>{value.name}/ </Text>)
        }
        return (
            <ScrollView style={styles.main}>
                <Image
                    style={styles.image}
                    source={{uri: getImagefromApi(film.poster_path)}}
                />
                <Text style={styles.title_style}>{film.original_title}</Text>
                <Button title="Ajouter aux favoris"  onPress={() => favoriteStore.toggleFavorite(film)}/>
                <Text style={styles.overview_style} numberOfLine={10}>{film.overview}</Text>
                <Text style={styles.date_style} >Sorti le {film.release_date}</Text>
                <Text style={styles.vote_style} >Note:  {film.vote_average}/10</Text>
                <Text style={styles.vote_style}>Genres: {items}</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    title_style: {
        fontSize: 25,
        marginLeft: 80,
        marginRight: 50,
        marginBottom:20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    overview_style: {
        margin:10
    },
    vote_style: {
        margin:10,
        alignItems:'flex-start'
    },
    date_style: {
        margin:10,
        alignItems:'flex-start'
    },
    acticity_indicator: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    image: {
        height: 300,
        width: 400,
        backgroundColor: 'rgba(0,0,0,0.15)',
        resizeMode: 'cover'
    },
});

export default FilmDetailScreen;
