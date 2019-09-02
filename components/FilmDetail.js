import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

class FilmDetailScreen extends React.Component{
 render(){
  console.log(this.props);
  const idFilm=this.props.navigation.state.params.idFilm;
  return(
     <View style={styles.main}>
       <Text>Details du Films {idFilm}</Text>
     </View>
  );
 }
}

const styles=StyleSheet.create({
 main:{
  marginTop: 50,
  flex:1
 }
})

export default FilmDetailScreen
