import React, { Component } from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

import NavBar from './components/NavBar'
//port moviesApi from './components/moviesApi'
import Buscador from './components/Buscador'

import MainPage from './components/MainPage'
import PopularMovies from './components/PopularMovies'
import UpcomingMovies from './components/UpcomingMovies'
import NowPlayingMovies from './components/NowPlayingMovies'
import TopRatedMovies from './components/TopRatedMovies'

//import MovieSite from './components/MovieSite'

class App extends Component {
    render() {
        return <BrowserRouter>
        <div>
        	<NavBar/>
        		<main>
                    <Route path="/main" component={MainPage}/>
             		<Route path="/popular" component={PopularMovies}/>
		            <Route path="/upcoming" component={UpcomingMovies}/>
		            <Route path="/nowPlaying" component={NowPlayingMovies}/>
		            <Route path="/topRated" component={TopRatedMovies}/>
         		</main>
        	<Buscador/>
        </div>
        </BrowserRouter>
    }
}

export default App