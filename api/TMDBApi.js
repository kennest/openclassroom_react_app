//const fetch = require('fetch');

const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzE1YmRmOTUxZmNiNjYyM2IxMTQxMTdiOGQxZmM4MSIsInN1YiI6IjViZjY5NjJkOTI1MTQxNWNjODBjNWU5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YF0v3I4A7Ph5bVOTD51BT_qKNlmm3Bu2FZN2uoelouU";
const API_KEY = "0315bdf951fcb6623b114117b8d1fc81";

export function getFilmWithSearchedText(text,page) {
    const url = "https://api.themoviedb.org/3/search/movie?api_key="+ API_KEY +"&language=fr&query="+text+"&page="+page;
    console.log(url);
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error));
}

export function getImagefromApi(name){
    return "https://image.tmdb.org/t/p/w300" + name;
}
