import axios from 'axios'

const moviesApi =  {
    apiKey: '424ef6af162f83de9a81ac3e2bf6ab30',

    searchPopularMovies: function () {
        return axios.get('https://api.themoviedb.org/3/movie/popular?api_key=' + this.apiKey + '&language=en-US&page=1')
        .then((resPopularMovies) => {return resPopularMovies.data.results})
    },

    searchUpcomingMovies: function () {
        return axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=' + this.apiKey + '&language=en-US&page=1')
    },

    searchNowPlayingMovies: function () {
        return axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=' + this.apiKey + '&language=en-US&page=1')
    },

    searchRatedMovies: function () {
        return axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=' + this.apiKey + '&language=en-US&page=1')
    },

}

export default moviesApi