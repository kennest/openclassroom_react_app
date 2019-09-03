import {action, observable} from 'mobx';

class FavoriteStore {
    @observable films = [];

    @action.bound
    toggleFavorite(film) {
       const indexFound= this.films.findIndex(item=>item.id === film.id);
        if(indexFound !== -1){
            //suppression
          this.films= this.films.filter((item,index) => index !== indexFound);
          console.log('Favoris :',this.films.length);
          console.log('Favoris data :',this.films);
        }else{
            //ajouter
            this.films.push(film);
            console.log('Favoris :',this.films.length);
            console.log('Favoris data :',this.films);
        }
    }
}

export default new FavoriteStore