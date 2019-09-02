import {getImagefromApi} from '../api/TMDBApi'
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity,View} from 'react-native';

class FilmItem extends React.Component {
    render() {
        console.log(this.props);
        const film=this.props.film;

        return (
            <TouchableOpacity
            onPress={() => {
             this.props.navigation.navigate('Details',{'idFilm':film.id})
            }}
            style={styles.main_container}>
                <Image
                    style={styles.image}
                    source={{uri: getImagefromApi(film.poster_path)}}
                />
                <View style={styles.main_content}>
                    <View style={styles.header}>
                        <Text style={styles.title_text}>{film.original_title}</Text>
                        <Text style={styles.vote_text}>{film.vote_average}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text numberOfLines={6}>{film.overview}</Text>
                    </View>
                    <View style={styles.date_container}>
                        <Text style={styles.date_text}>Sorti en {film.release_date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: 'row',
        height: 190,
        padding: 5
    },
    image: {
        height: 180,
        width: 130,
        backgroundColor: 'rgba(0,0,0,0.15)'
    },
    main_content: {
        flex: 1,
        margin: 5
    },
    header: {
        flexDirection: 'row',
        flex: 1
    },
    title_text: {
        flex: 3,
        fontSize: 21
    },
    vote_text: {
        flex: 1,
        fontSize: 25
    },
    description_container: {
        flex: 1,
        alignItems: 'flex-start'
    },
    date_container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    date_text: {}
});

export default FilmItem
