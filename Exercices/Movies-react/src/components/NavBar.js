import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import React,{Component} from 'react'
import '../styles/NavBar.css';

class NavBar extends Component {

   render() {
       return <nav className="navbar-inverse navbar-default">
           <div className="container-fluid">
               <div className="navbar-header">
                   <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                           aria-expanded="false" aria-controls="navbar">
                       <span className="sr-only">Toggle navigation</span>
                       <span className="icon-bar"></span>
                       <span className="icon-bar"></span>
                       <span className="icon-bar"></span>
                   </button>
                   <NavLink to='/main' id="title" className="navbar-brand" >Pau collection</NavLink>
               </div>
               <div id="navbar" className="navbar-collapse collapse">
                   <ul className="nav navbar-nav">
                       <li><NavLink to='/popular' activeClassName='active'>Popular Movies</NavLink></li>
                       <li><NavLink to='/upcoming' activeClassName='active'>Upcoming Movies</NavLink></li>
                       <li><NavLink to='/nowPlaying' activeClassName='active'>Now Playing Movies</NavLink></li>
                       <li><NavLink to='/topRated' activeClassName='active'>Top Rated Movies</NavLink></li>
                   </ul>
               </div>
           </div>
       </nav>
   }
}

export default NavBar


//    render() {
//        return <nav className="navbar-inverse navbar-default">
//            <div className="container-fluid">
//                <div className="navbar-header">
//                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
//                            aria-expanded="false" aria-controls="navbar">
//                        <span className="sr-only">Toggle navigation</span>
//                        <span className="icon-bar"></span>
//                        <span className="icon-bar"></span>
//                        <span className="icon-bar"></span>
//                    </button>
//                    <a id="title" className="navbar-brand" href="#">Movie collection</a>
//                </div>
//                <div id="navbar" className="navbar-collapse collapse">
//                    <ul className="nav navbar-nav">
//                        <li><NavLink to='/popular' activeClassName='active'>Popular Movies</NavLink></li>
//                        <li><NavLink to='/upcoming' activeClassName='active'>Upcoming Movies</NavLink></li>
//                        <li><NavLink to='/nowPlaying' activeClassName='active'>Now Playing Movies</NavLink></li>
//                        <li><NavLink to='/topRated' activeClassName='active'>Top Rated Movies</NavLink></li>
//                    </ul>
//                </div>
//            </div>
//        </nav>
//    }
// }